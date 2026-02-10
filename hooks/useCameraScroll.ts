"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFrame, useThree } from "@react-three/fiber";

gsap.registerPlugin(ScrollTrigger);

// Hook for scroll-based camera animations
export function useCameraScroll() {
    const { camera } = useThree();
    const scrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            scrollY.current = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useFrame(() => {
        const scrollProgress = scrollY.current / (document.body.scrollHeight - window.innerHeight);

        // Camera panning and zooming based on scroll
        camera.position.z = 5 + scrollProgress * 3; // Zoom out
        camera.position.y = -scrollProgress * 2; // Pan down
        camera.rotation.x = scrollProgress * 0.3; // Slight rotation
    });
}
