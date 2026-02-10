"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
    const containerRef = useRef<HTMLDivElement>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const particlesRef = useRef<THREE.Points | null>(null);
    const meshesRef = useRef<THREE.Mesh[]>([]);

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // Camera setup
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;
        cameraRef.current = camera;

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: "high-performance",
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Create particle system
        const particleCount = 2000;
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 20;
            positions[i + 1] = (Math.random() - 0.5) * 20;
            positions[i + 2] = (Math.random() - 0.5) * 20;

            // Android green color variations
            const greenShade = Math.random();
            colors[i] = 0.24 + greenShade * 0.2; // R
            colors[i + 1] = 0.86 + greenShade * 0.1; // G
            colors[i + 2] = 0.52 + greenShade * 0.1; // B
        }

        const particleGeometry = new THREE.BufferGeometry();
        particleGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3)
        );
        particleGeometry.setAttribute(
            "color",
            new THREE.BufferAttribute(colors, 3)
        );

        const particleMaterial = new THREE.PointsMaterial({
            size: 0.05,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
        });

        const particles = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particles);
        particlesRef.current = particles;

        // Create floating 3D shapes
        const geometries = [
            new THREE.TorusGeometry(0.5, 0.2, 16, 100),
            new THREE.OctahedronGeometry(0.4),
            new THREE.IcosahedronGeometry(0.4),
            new THREE.TetrahedronGeometry(0.5),
        ];

        const material = new THREE.MeshPhongMaterial({
            color: 0x3ddc84,
            emissive: 0x39ff14,
            emissiveIntensity: 0.2,
            transparent: true,
            opacity: 0.3,
            wireframe: true,
        });

        for (let i = 0; i < 6; i++) {
            const geometry = geometries[Math.floor(Math.random() * geometries.length)];
            const mesh = new THREE.Mesh(geometry, material.clone());
            
            mesh.position.x = (Math.random() - 0.5) * 10;
            mesh.position.y = (Math.random() - 0.5) * 10;
            mesh.position.z = (Math.random() - 0.5) * 5;
            
            mesh.rotation.x = Math.random() * Math.PI;
            mesh.rotation.y = Math.random() * Math.PI;

            scene.add(mesh);
            meshesRef.current.push(mesh);

            // GSAP animation for each mesh
            gsap.to(mesh.rotation, {
                x: mesh.rotation.x + Math.PI * 2,
                y: mesh.rotation.y + Math.PI * 2,
                duration: 20 + Math.random() * 10,
                repeat: -1,
                ease: "none",
            });

            gsap.to(mesh.position, {
                y: mesh.position.y + (Math.random() - 0.5) * 3,
                duration: 8 + Math.random() * 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const pointLight1 = new THREE.PointLight(0x3ddc84, 1, 100);
        pointLight1.position.set(5, 5, 5);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0x39ff14, 0.8, 100);
        pointLight2.position.set(-5, -5, 5);
        scene.add(pointLight2);

        // Mouse movement effect
        const mouse = { x: 0, y: 0 };
        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            gsap.to(camera.position, {
                x: mouse.x * 0.5,
                y: mouse.y * 0.5,
                duration: 2,
                ease: "power2.out",
            });

            gsap.to(camera.rotation, {
                y: mouse.x * 0.05,
                x: mouse.y * 0.05,
                duration: 2,
                ease: "power2.out",
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Scroll-based animations
        ScrollTrigger.create({
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                
                // Rotate particles based on scroll
                if (particles) {
                    particles.rotation.y = progress * Math.PI * 2;
                    particles.rotation.x = progress * Math.PI;
                }

                // Move camera on scroll
                camera.position.z = 5 + progress * 3;

                // Animate meshes based on scroll
                meshesRef.current.forEach((mesh, i) => {
                    mesh.position.z = Math.sin(progress * Math.PI * 2 + i) * 2;
                    (mesh.material as THREE.MeshPhongMaterial).opacity = 0.2 + Math.sin(progress * Math.PI * 4) * 0.2;
                });
            },
        });

        // Animation loop
        let animationId: number;
        const animate = () => {
            animationId = requestAnimationFrame(animate);

            // Rotate particles slowly
            if (particles) {
                particles.rotation.y += 0.0005;
            }

            // Pulse effect on point lights
            const time = Date.now() * 0.001;
            pointLight1.intensity = 1 + Math.sin(time) * 0.3;
            pointLight2.intensity = 0.8 + Math.cos(time * 1.5) * 0.3;

            renderer.render(scene, camera);
        };

        animate();

        // Handle resize
        const handleResize = () => {
            if (!camera || !renderer) return;
            
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        };

        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationId);
            
            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }
            
            renderer.dispose();
            particleGeometry.dispose();
            particleMaterial.dispose();
            geometries.forEach(g => g.dispose());
            material.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                pointerEvents: "none",
            }}
        />
    );
}