"use client";

import { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxWrapperProps {
    children: ReactNode;
    speed?: number;
    id?: string;
}

export default function ParallaxWrapper({ children, speed = 1, id }: ParallaxWrapperProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = wrapperRef.current;
        if (!element) return;

        gsap.to(element, {
            yPercent: -50 * speed,
            ease: "none",
            scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
            },
        });
    }, [speed]);

    return (
        <div ref={wrapperRef} id={id} style={{ willChange: "transform" }}>
            {children}
        </div>
    );
}