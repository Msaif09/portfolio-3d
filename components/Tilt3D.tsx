"use client";

import { useEffect, useRef, ReactNode } from "react";
import VanillaTilt from "vanilla-tilt";

interface Tilt3DProps {
    children: ReactNode;
    options?: any; // 👈 Change this from VanillaTilt.TiltOptions to any
    className?: string;
}

export default function Tilt3D({ children, options, className }: Tilt3DProps) {
    const tiltRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!tiltRef.current) return;

        VanillaTilt.init(tiltRef.current, {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.3,
            scale: 1.05,
            gyroscope: true,
            ...options,
        });

        return () => {
            if (tiltRef.current && (tiltRef.current as any).vanillaTilt) {
                (tiltRef.current as any).vanillaTilt.destroy();
            }
        };
    }, [options]);

    return (
        <div ref={tiltRef} className={className} style={{ transformStyle: "preserve-3d" }}>
            {children}
        </div>
    );
}