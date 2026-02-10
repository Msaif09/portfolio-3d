"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Wait for page to be fully loaded
        const handleLoad = () => {
            // Small delay to ensure GSAP animations are initialized
            setTimeout(() => {
                gsap.to(".loading-screen", {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    onComplete: () => {
                        setIsLoading(false);
                    },
                });
            }, 100);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    if (!isLoading) return null;

    return (
        <div className="loading-screen fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a]">
            <div className="flex flex-col items-center gap-4">
                {/* Android Robot Loading Animation */}
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 rounded-full border-4 border-[#3DDC84]/20"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-t-[#3DDC84] animate-spin"></div>
                </div>
                <p className="text-[#3DDC84] font-semibold text-sm tracking-wider">Loading...</p>
            </div>

            <style jsx>{`
                @keyframes spin {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                .animate-spin {
                    animation: spin 1s linear infinite;
                }
            `}</style>
        </div>
    );
}
