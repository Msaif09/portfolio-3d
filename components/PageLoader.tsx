"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function PageLoader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => setLoading(false),
        });

        tl.to(".loader-progress", {
            width: "100%",
            duration: 2,
            ease: "power2.inOut",
        })
        .to(".loader-container", {
            y: "-100%",
            duration: 0.8,
            ease: "power4.inOut",
        }, "+=0.3");

    }, []);

    if (!loading) return null;

    return (
        <>
            <div className="loader-container">
                <div className="loader-content">
                    <div className="loader-logo">
                        <h1 className="loader-text">MS</h1>
                    </div>
                    <div className="loader-bar">
                        <div className="loader-progress"></div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .loader-container {
                    position: fixed;
                    inset: 0;
                    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                }

                .loader-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 40px;
                }

                .loader-logo {
                    width: 120px;
                    height: 120px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, rgba(61, 220, 132, 0.1), rgba(16, 185, 129, 0.1));
                    border: 2px solid rgba(61, 220, 132, 0.3);
                    border-radius: 50%;
                    box-shadow: 0 0 60px rgba(61, 220, 132, 0.3);
                    animation: pulse-logo 2s ease-in-out infinite;
                }

                @keyframes pulse-logo {
                    0%, 100% {
                        transform: scale(1);
                        box-shadow: 0 0 60px rgba(61, 220, 132, 0.3);
                    }
                    50% {
                        transform: scale(1.05);
                        box-shadow: 0 0 80px rgba(61, 220, 132, 0.5);
                    }
                }

                .loader-text {
                    font-size: 48px;
                    font-weight: 900;
                    background: linear-gradient(135deg, #3DDC84 0%, #39FF14 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .loader-bar {
                    width: 300px;
                    height: 4px;
                    background: rgba(61, 220, 132, 0.1);
                    border-radius: 2px;
                    overflow: hidden;
                }

                .loader-progress {
                    width: 0%;
                    height: 100%;
                    background: linear-gradient(90deg, #3DDC84, #39FF14);
                    box-shadow: 0 0 20px rgba(61, 220, 132, 0.5);
                }
            `}</style>
        </>
    );
}