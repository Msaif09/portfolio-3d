"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

export default function AndroidGeometry() {
    const groupRef = useRef<THREE.Group>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Mouse parallax effect
    useFrame(() => {
        if (groupRef.current) {
            // Slow rotation
            groupRef.current.rotation.y += 0.001;

            // Mouse parallax - subtle rotation based on mouse position
            groupRef.current.rotation.x = THREE.MathUtils.lerp(
                groupRef.current.rotation.x,
                mousePosition.y * 0.1,
                0.05
            );
            groupRef.current.rotation.z = THREE.MathUtils.lerp(
                groupRef.current.rotation.z,
                mousePosition.x * 0.1,
                0.05
            );
        }
    });

    // Track mouse position
    if (typeof window !== "undefined") {
        window.addEventListener("mousemove", (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1,
            });
        });
    }

    return (
        <group ref={groupRef}>
            {/* Central large sphere */}
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial
                        color="#3DDC84"
                        emissive="#3DDC84"
                        emissiveIntensity={0.5}
                        roughness={0.3}
                        metalness={0.8}
                    />
                </mesh>
            </Float>

            {/* Orbiting cubes */}
            <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
                <mesh position={[2.5, 1, 0]}>
                    <boxGeometry args={[0.5, 0.5, 0.5]} />
                    <meshStandardMaterial
                        color="#39FF14"
                        emissive="#39FF14"
                        emissiveIntensity={0.6}
                        roughness={0.2}
                        metalness={0.9}
                    />
                </mesh>
            </Float>

            <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.2}>
                <mesh position={[-2.5, -1, 0]}>
                    <boxGeometry args={[0.6, 0.6, 0.6]} />
                    <meshStandardMaterial
                        color="#3DDC84"
                        emissive="#3DDC84"
                        emissiveIntensity={0.4}
                        roughness={0.3}
                        metalness={0.7}
                    />
                </mesh>
            </Float>

            {/* Torus rings */}
            <Float speed={1.2} rotationIntensity={1.2} floatIntensity={0.8}>
                <mesh position={[0, 2, -1]} rotation={[Math.PI / 4, 0, Math.PI / 4]}>
                    <torusGeometry args={[1.2, 0.15, 16, 100]} />
                    <meshStandardMaterial
                        color="#39FF14"
                        emissive="#39FF14"
                        emissiveIntensity={0.7}
                        roughness={0.1}
                        metalness={1}
                        wireframe
                    />
                </mesh>
            </Float>

            <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1}>
                <mesh position={[0, -2, 1]} rotation={[-Math.PI / 4, Math.PI / 2, 0]}>
                    <torusGeometry args={[1, 0.12, 16, 100]} />
                    <meshStandardMaterial
                        color="#3DDC84"
                        emissive="#3DDC84"
                        emissiveIntensity={0.5}
                        roughness={0.2}
                        metalness={0.9}
                    />
                </mesh>
            </Float>

            {/* Small accent spheres */}
            <Float speed={2.5} rotationIntensity={0.3} floatIntensity={2}>
                <mesh position={[1.5, -1.5, 1]}>
                    <sphereGeometry args={[0.25, 16, 16]} />
                    <meshStandardMaterial
                        color="#39FF14"
                        emissive="#39FF14"
                        emissiveIntensity={0.8}
                        roughness={0.1}
                        metalness={1}
                    />
                </mesh>
            </Float>

            <Float speed={2.2} rotationIntensity={0.4} floatIntensity={1.8}>
                <mesh position={[-1.5, 1.5, -1]}>
                    <sphereGeometry args={[0.3, 16, 16]} />
                    <meshStandardMaterial
                        color="#3DDC84"
                        emissive="#3DDC84"
                        emissiveIntensity={0.6}
                        roughness={0.2}
                        metalness={0.8}
                    />
                </mesh>
            </Float>
        </group>
    );
}
