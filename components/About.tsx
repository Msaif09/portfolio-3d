"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { techStack } from "@/data/techStack";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const techItemsRef = useRef<HTMLDivElement>(null);
    const socialRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.fromTo(
            cardRef.current,
            { y: 80, opacity: 0, scale: 0.95 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            }
        );

        const techItems = techItemsRef.current?.children;
        if (techItems) {
            gsap.fromTo(
                Array.from(techItems),
                { scale: 0, opacity: 0, y: 30, rotateY: -180 },
                {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    rotateY: 0,
                    duration: 0.8,
                    stagger: 0.06,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: techItemsRef.current,
                        start: "top 85%",
                    },
                }
            );
        }

        const socialItems = socialRef.current?.children;
        if (socialItems) {
            gsap.fromTo(
                Array.from(socialItems),
                { x: -60, opacity: 0, rotateX: -90 },
                {
                    x: 0,
                    opacity: 1,
                    rotateX: 0,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: socialRef.current,
                        start: "top 80%",
                    },
                }
            );
        }
    }, []);

    return (
        <>
            <section
                id="about"
                ref={sectionRef}
                className="min-h-screen py-32 px-6 md:px-12 flex items-center justify-center relative overflow-hidden"
            >
                {/* Animated Background Orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="floating-orb orb-1"></div>
                    <div className="floating-orb orb-2"></div>
                    <div className="floating-orb orb-3"></div>
                </div>

                <div
                    ref={cardRef}
                    className="max-w-7xl w-full main-glass-card"
                >
                    {/* Title with Sparkle Effect */}
                    <div className="relative mb-16">
                        <Sparkles className="absolute -top-8 right-1/4 w-8 h-8 text-[#3DDC84] animate-pulse" />
                        <Sparkles className="absolute -top-4 left-1/3 w-6 h-6 text-[#39FF14] animate-pulse delay-300" />
                        <h2 className="gradient-title">
                            Let's Connect
                        </h2>
                    </div>

                    
                    {/* Social Links with 3D Cards */}
                    <div ref={socialRef} className="flex flex-wrap justify-center gap-8 mb-24">
                        
                        <a
                            href="https://github.com/Msaif09"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-card group">
                            <div className="social-card-inner">
                                <div className="icon-glow github-glow"></div>
                                <Github className="social-icon" />
                                <div className="social-content">
                                    <p className="social-label">GitHub</p>
                                    <p className="social-username">@Msaif09</p>
                                </div>
                            </div>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/mohammad-saif-1500412b4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-card group"
                        >
                            <div className="social-card-inner">
                                <div className="icon-glow linkedin-glow"></div>
                                <Linkedin className="social-icon" />
                                <div className="social-content">
                                    <p className="social-label">LinkedIn</p>
                                    <p className="social-username">Mohammad Saif</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Tech Stack Section */}
                    <div>
                        <h3 className="tech-stack-title">
                            Tech Stack & Tools
                        </h3>
                        <div
                            ref={techItemsRef}
                            className="tech-grid"
                        >
                            {techStack.map((tech, index) => (
                                <div
                                    key={tech.name}
                                    className="tech-card"
                                    style={{
                                        animationDelay: `${index * 0.05}s`
                                    }}
                                >
                                    <div className="tech-card-glow"></div>
                                    <div className="tech-icon-wrapper">
                                        <span className="tech-icon">
                                            {tech.icon}
                                        </span>
                                    </div>
                                    <span className="tech-name">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                /* Floating Background Orbs */
                .floating-orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                    opacity: 0.3;
                    animation: float 20s ease-in-out infinite;
                }

                .orb-1 {
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, rgba(61, 220, 132, 0.4), transparent);
                    top: 10%;
                    left: 10%;
                    animation-delay: 0s;
                }

                .orb-2 {
                    width: 300px;
                    height: 300px;
                    background: radial-gradient(circle, rgba(57, 255, 20, 0.3), transparent);
                    bottom: 20%;
                    right: 15%;
                    animation-delay: 7s;
                }

                .orb-3 {
                    width: 350px;
                    height: 350px;
                    background: radial-gradient(circle, rgba(16, 185, 129, 0.35), transparent);
                    top: 50%;
                    left: 50%;
                    animation-delay: 14s;
                }

                @keyframes float {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 30px) scale(0.9);
                    }
                }

                /* Main Glass Card */
                .main-glass-card {
                    position: relative;
                    background: linear-gradient(
                        135deg,
                        rgba(16, 185, 129, 0.08) 0%,
                        rgba(5, 150, 105, 0.04) 50%,
                        rgba(4, 120, 87, 0.08) 100%
                    );
                    backdrop-filter: blur(24px) saturate(180%);
                    -webkit-backdrop-filter: blur(24px) saturate(180%);
                    border-radius: 32px;
                    border: 2px solid rgba(61, 220, 132, 0.2);
                    padding: 60px 80px;
                    box-shadow: 
                        0 20px 60px rgba(0, 0, 0, 0.3),
                        0 8px 24px rgba(61, 220, 132, 0.15),
                        inset 0 1px 1px rgba(255, 255, 255, 0.1);
                    transition: all 0.4s ease;
                }

                .main-glass-card:hover {
                    border-color: rgba(61, 220, 132, 0.4);
                    box-shadow: 
                        0 24px 80px rgba(0, 0, 0, 0.4),
                        0 12px 32px rgba(61, 220, 132, 0.25),
                        inset 0 1px 1px rgba(255, 255, 255, 0.15);
                }

                /* Gradient Title */
                .gradient-title {
                    font-size: clamp(2.5rem, 6vw, 4.5rem);
                    font-weight: 900;
                    text-align: center;
                    background: linear-gradient(135deg, #3DDC84 0%, #39FF14 60%, #10b981 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    letter-spacing: -0.02em;
                    position: relative;
                    padding-bottom: 8px;
                    animation: shimmer 3s ease-in-out infinite;
                }

                @keyframes shimmer {
                    0%, 100% {
                        filter: brightness(1) drop-shadow(0 0 20px rgba(61, 220, 132, 0.3));
                    }
                    50% {
                        filter: brightness(1.2) drop-shadow(0 0 30px rgba(61, 220, 132, 0.5));
                    }
                }

                /* Social Cards */
                .social-card {
                    position: relative;
                    perspective: 1000px;
                    text-decoration: none;
                }

                .social-card-inner {
                    position: relative;
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    padding: 24px 36px;
                    background: linear-gradient(
                        135deg,
                        rgba(61, 220, 132, 0.08),
                        rgba(16, 185, 129, 0.05)
                    );
                    backdrop-filter: blur(16px);
                    border-radius: 20px;
                    border: 1.5px solid rgba(61, 220, 132, 0.25);
                    box-shadow: 
                        0 8px 24px rgba(0, 0, 0, 0.2),
                        inset 0 1px 1px rgba(255, 255, 255, 0.1);
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    transform-style: preserve-3d;
                }

                .social-card:hover .social-card-inner {
                    transform: translateY(-8px) rotateX(5deg) scale(1.05);
                    border-color: rgba(61, 220, 132, 0.5);
                    box-shadow: 
                        0 16px 40px rgba(0, 0, 0, 0.3),
                        0 8px 24px rgba(61, 220, 132, 0.3),
                        inset 0 1px 1px rgba(255, 255, 255, 0.15);
                }

                /* Icon Glow Effect */
                .icon-glow {
                    position: absolute;
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    filter: blur(30px);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }

                .github-glow {
                    background: radial-gradient(circle, rgba(61, 220, 132, 0.6), transparent);
                    left: -10px;
                }

                .linkedin-glow {
                    background: radial-gradient(circle, rgba(57, 255, 20, 0.6), transparent);
                    left: -10px;
                }

                .social-card:hover .icon-glow {
                    opacity: 1;
                }

                .social-icon {
                    width: 36px;
                    height: 36px;
                    color: #3DDC84;
                    transition: all 0.4s ease;
                    filter: drop-shadow(0 0 8px rgba(61, 220, 132, 0.3));
                    z-index: 1;
                }

                .social-card:hover .social-icon {
                    color: #39FF14;
                    transform: rotateY(360deg) scale(1.2);
                    filter: drop-shadow(0 0 16px rgba(57, 255, 20, 0.6));
                }

                .social-content {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .social-label {
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: rgba(255, 255, 255, 0.5);
                    font-weight: 600;
                }

                .social-username {
                    font-size: 20px;
                    font-weight: 700;
                    color: #fff;
                    transition: all 0.3s ease;
                }

                .social-card:hover .social-username {
                    color: #3DDC84;
                    transform: translateX(4px);
                }

                /* Tech Stack Title */
                .tech-stack-title {
                    font-size: clamp(2rem, 4vw, 3rem);
                    font-weight: 800;
                    text-align: center;
                    color: #fff;
                    margin-bottom: 48px;
                    position: relative;
                    text-shadow: 0 0 30px rgba(61, 220, 132, 0.3);
                    margin-top:20px;
                }

                .tech-stack-title::after {
                    content: '';
                    position: absolute;
                    bottom: -12px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 100px;
                    height: 4px;
                    background: linear-gradient(90deg, transparent, #3DDC84, transparent);
                    border-radius: 2px;
                }

                /* Tech Grid */
                .tech-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                    gap: 24px;
                    perspective: 1000px;
                }

                /* Tech Card */
                .tech-card {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 16px;
                    padding: 28px 20px;
                    background: linear-gradient(
                        135deg,
                        rgba(61, 220, 132, 0.06),
                        rgba(16, 185, 129, 0.03)
                    );
                    backdrop-filter: blur(12px);
                    border-radius: 20px;
                    border: 1px solid rgba(61, 220, 132, 0.15);
                    cursor: default;
                    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    transform-style: preserve-3d;
                    box-shadow: 
                        0 4px 16px rgba(0, 0, 0, 0.15),
                        inset 0 1px 1px rgba(255, 255, 255, 0.08);
                }

                .tech-card:hover {
                    transform: translateY(-12px) rotateY(10deg) rotateX(5deg) scale(1.08);
                    border-color: rgba(61, 220, 132, 0.4);
                    background: linear-gradient(
                        135deg,
                        rgba(61, 220, 132, 0.12),
                        rgba(16, 185, 129, 0.08)
                    );
                    box-shadow: 
                        0 20px 40px rgba(0, 0, 0, 0.3),
                        0 8px 24px rgba(61, 220, 132, 0.25),
                        inset 0 1px 1px rgba(255, 255, 255, 0.12);
                }

                /* Tech Card Glow */
                .tech-card-glow {
                    position: absolute;
                    inset: -2px;
                    background: linear-gradient(
                        135deg,
                        rgba(61, 220, 132, 0.4),
                        rgba(57, 255, 20, 0.2),
                        rgba(16, 185, 129, 0.4)
                    );
                    border-radius: 20px;
                    opacity: 0;
                    filter: blur(12px);
                    transition: opacity 0.4s ease;
                    z-index: -1;
                }

                .tech-card:hover .tech-card-glow {
                    opacity: 1;
                }

                /* Tech Icon Wrapper */
                .tech-icon-wrapper {
                    width: 80px;
                    height: 80px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(
                        135deg,
                        rgba(61, 220, 132, 0.12),
                        rgba(16, 185, 129, 0.08)
                    );
                    backdrop-filter: blur(8px);
                    border-radius: 18px;
                    border: 1px solid rgba(61, 220, 132, 0.2);
                    transition: all 0.4s ease;
                    box-shadow: 
                        0 4px 12px rgba(61, 220, 132, 0.15),
                        inset 0 1px 1px rgba(255, 255, 255, 0.1);
                }

                .tech-card:hover .tech-icon-wrapper {
                    transform: scale(1.15) rotateZ(5deg);
                    border-color: rgba(61, 220, 132, 0.4);
                    box-shadow: 
                        0 8px 24px rgba(61, 220, 132, 0.3),
                        inset 0 1px 1px rgba(255, 255, 255, 0.15);
                }

                .tech-icon {
                    font-size: 48px;
                    transition: all 0.4s ease;
                    filter: drop-shadow(0 4px 8px rgba(61, 220, 132, 0.2));
                }

                .tech-card:hover .tech-icon {
                    transform: scale(1.2) rotateY(180deg);
                    filter: drop-shadow(0 8px 16px rgba(61, 220, 132, 0.4));
                }

                .tech-name {
                    font-size: 16px;
                    font-weight: 700;
                    color: rgba(255, 255, 255, 0.8);
                    transition: all 0.3s ease;
                    text-align: center;
                }

                .tech-card:hover .tech-name {
                    color: #3DDC84;
                    transform: translateY(-4px);
                    text-shadow: 0 0 20px rgba(61, 220, 132, 0.5);
                }

                @media (max-width: 768px) {
                    .main-glass-card {
                        padding: 40px 24px;
                    }

                    .tech-grid {
                        grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
                        gap: 16px;
                    }

                    .tech-card {
                        padding: 20px 16px;
                    }

                    .tech-icon-wrapper {
                        width: 64px;
                        height: 64px;
                    }

                    .tech-icon {
                        font-size: 36px;
                    }

                    .social-card-inner {
                        padding: 20px 28px;
                    }
                }
            `}</style>
        </>
    );
}