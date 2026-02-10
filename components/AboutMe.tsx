"use client";

import { useEffect, useRef, ReactNode } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Award, Code } from "lucide-react";
import profileImg from "@/data/images/profile.png";
import bannerImg from "@/data/images/banner.png";

gsap.registerPlugin(ScrollTrigger);

// --- REUSABLE 3D TILT COMPONENT ---
interface TiltCardProps {
    children: ReactNode;
    className?: string;
}

const TiltCard = ({ children, className = "" }: TiltCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const borderRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'A' || target.closest('a')) return;

        const card = cardRef.current;
        const content = contentRef.current;
        const glow = glowRef.current;

        if (!card || !content || !glow) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (centerY - y) / 25;
        const rotateY = (x - centerX) / 25;

        gsap.to(glow, { x: x, y: y, duration: 0.1, ease: "none" });
        gsap.to(card, {
            rotateX: rotateX,
            rotateY: rotateY,
            duration: 0.4,
            ease: "power2.out",
            transformPerspective: 1000,
            transformStyle: "preserve-3d",
        });
        gsap.to(content, {
            x: (x - centerX) / 40,
            y: (y - centerY) / 40,
            duration: 0.4,
            ease: "power2.out",
        });
    };

    const handleMouseEnter = () => {
        gsap.to(borderRef.current, { opacity: 1, duration: 0.3 });
        gsap.to(cardRef.current, {
            z: 20, // Reduced z-lift for a more subtle effect
            scale: 1.02,
            duration: 0.5,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(cardRef.current, {
            rotateX: 0,
            rotateY: 0,
            z: 0,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
        });
        gsap.to(contentRef.current, { x: 0, y: 0, duration: 0.6, ease: "power3.out" });
        gsap.to(borderRef.current, { opacity: 0, duration: 0.3 });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative w-full h-full ${className}`}
            style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        >
            <div className="tilt-card-container h-full relative">
                <div ref={glowRef} className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(61,220,151,0.4)_0%,rgba(61,220,151,0.2)_25%,transparent_70%)] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 blur-[60px] z-0" />
                <div ref={borderRef} className="absolute inset-0 rounded-[24px] p-[2px] opacity-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(61,220,151,0.6), rgba(52,211,153,0.4), rgba(16,185,129,0.6))", WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude", filter: "drop-shadow(0 0 20px rgba(61,220,151,0.5))" }} />
                <div className="glass-card h-full p-8 md:p-12 relative z-10 overflow-hidden">
                    <div ref={contentRef} className="h-full flex flex-col relative z-20">
                        {children}
                    </div>
                </div>
            </div>
            <style jsx>{`
                .glass-card {
                    background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(5, 150, 105, 0.05) 50%, rgba(4, 120, 87, 0.08) 100%);
                    backdrop-filter: blur(20px) saturate(180%);
                    -webkit-backdrop-filter: blur(20px) saturate(180%);
                    border-radius: 24px;
                    border: 1px solid rgba(61, 220, 151, 0.15);
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(61, 220, 151, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.1);
                    transition: all 0.3s ease;
                    padding-top:20px;
                    padding-bottom:20px;
                }
                .glass-card:hover {
                     box-shadow: 0 12px 48px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(61, 220, 151, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.15);
                }
                     
            `}</style>
        </div>
    );
};

// --- MAIN ABOUT COMPONENT ---
export default function AboutMe() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            });
            tl.fromTo(".animate-up", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="min-h-screen py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 relative w-full">
            <div className="max-w-7xl mx-auto w-full flex flex-col gap-16 md:gap-24">

                {/* 1. Header Section */}
                <div className="text-center animate-up relative">
                    <h2 className="text-5xl md:text-7xl font-black mb-6 relative z-10">
                        <span className="bg-gradient-to-r from-[#3DDC84] to-[#39FF14] bg-clip-text text-transparent">About Me</span>
                    </h2>
                    <p className="text-xl text-gray-400 relative z-10">Crafting exceptional mobile experiences</p>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] opacity-20 blur-3xl -z-10 pointer-events-none">
                        <Image src={bannerImg} alt="banner" fill className="object-cover" />
                    </div>
                </div>

                {/* 2. Main Intro Card with Profile Image */}
                <div className="w-full animate-up">
                    <TiltCard>
                        {/* Increased gap-16 for better spacing */}
                        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                            
                            {/* --- CLEAN PROFILE IMAGE SECTION --- */}
                            <div className="shrink-0 relative">
                                {/* Simple Glow Behind */}
                                <div className="absolute inset-0 rounded-full bg-[#3DDC84] blur-[50px] opacity-20"></div>

                                {/* Image Container */}
                                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden relative z-10 shadow-[0_0_40px_rgba(61,220,132,0.15)] bg-black/20">
                                    <Image
                                        src={profileImg}
                                        alt="Mohammad Saif"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                            {/* -------------------------------------- */}

                            {/* Text Content */}
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Hello, I'm <span className="text-[#3DDC84]">Mohammad Saif</span>
                                </h3>
                                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                    Passionate Android developer with <strong className="text-white">2.5+ years</strong> of experience crafting high-quality mobile applications.
                                    Currently working full-time at <a href="https://sgemplusglobal.com/" target="_blank" rel="noopener noreferrer" className="text-[#39FF14] font-bold hover:text-[#3DDC84] transition-colors hover:underline">SGEmplus Global</a> and part-time at <a href="https://amvikagroup.com/" target="_blank" rel="noopener noreferrer" className="text-[#39FF14] font-bold hover:text-[#3DDC84] transition-colors hover:underline">Amvika Group</a>.
                                </p>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    Delivered <strong className="text-white">15+ projects</strong> and worked on <strong className="text-white">30+ Android apps</strong> through freelancing,
                                    specializing in Kotlin, Jetpack Compose, and modern Android architecture.
                                </p>
                            </div>
                        </div>
                    </TiltCard>
                </div>

                {/* 3. Current Roles */}
                <div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 animate-up tilt-card">
                    <TiltCard>
                        <div className="flex flex-col items-center text-center h-full justify-center">
                            <div className="w-16 h-16 rounded-2xl bg-[#3DDC84]/10 flex items-center justify-center mb-6 border border-[#3DDC84]/20">
                                <Briefcase className="w-8 h-8 text-[#3DDC84]" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Full-time Developer</h3>
                            <a href="https://sgemplusglobal.com/" target="_blank" rel="noopener noreferrer" className="text-[#3DDC84] font-semibold text-lg mb-4 block hover:text-[#39FF14] transition-colors duration-300">SGEmplus Global ↗</a>
                            <p className="text-gray-400">Building scalable enterprise Android applications with modern architecture patterns and clean code.</p>
                        </div>
                    </TiltCard>

                    <TiltCard>
                        <div className="flex flex-col items-center text-center h-full justify-center">
                            <div className="w-16 h-16 rounded-2xl bg-[#39FF14]/10 flex items-center justify-center mb-6 border border-[#39FF14]/20">
                                <Code className="w-8 h-8 text-[#39FF14]" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Part-time Developer</h3>
                            <a href="https://amvikagroup.com/" target="_blank" rel="noopener noreferrer" className="text-[#39FF14] font-semibold text-lg mb-4 block hover:text-[#3DDC84] transition-colors duration-300">Amvika Group ↗</a>
                            <p className="text-gray-400">Developing innovative mobile solutions, contributing to diverse projects, and solving complex problems.</p>
                        </div>
                    </TiltCard>
                </div>

                {/* 4. Experience Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 animate-up">
                    <TiltCard>
                        <div className="flex flex-col items-center justify-center py-4">
                            <Award className="w-10 h-10 text-[#3DDC84] mb-4" />
                            <div className="text-5xl md:text-6xl font-black bg-gradient-to-br from-[#3DDC84] to-[#39FF14] bg-clip-text text-transparent mb-2">2.5+</div>
                            <div className="text-sm uppercase tracking-widest text-gray-400 font-semibold">Years Experience</div>
                        </div>
                    </TiltCard>
                    <TiltCard>
                        <div className="flex flex-col items-center justify-center py-4">
                            <Award className="w-10 h-10 text-[#39FF14] mb-4" />
                            <div className="text-5xl md:text-6xl font-black bg-gradient-to-br from-[#39FF14] to-[#22c55e] bg-clip-text text-transparent mb-2">15+</div>
                            <div className="text-sm uppercase tracking-widest text-gray-400 font-semibold">Projects Delivered</div>
                        </div>
                    </TiltCard>
                    <TiltCard>
                        <div className="flex flex-col items-center justify-center py-4">
                            <Award className="w-10 h-10 text-[#10b981] mb-4" />
                            <div className="text-5xl md:text-6xl font-black bg-gradient-to-br from-[#10b981] to-[#3DDC84] bg-clip-text text-transparent mb-2">30+</div>
                            <div className="text-sm uppercase tracking-widest text-gray-400 font-semibold">Apps Developed</div>
                        </div>
                    </TiltCard>
                </div>
            </div>
        </section>
    );
}