"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Sparkles, Code2, Smartphone } from "lucide-react";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const floatingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.fromTo(
            titleRef.current,
            { y: 120, opacity: 0, scale: 0.9, rotateX: -30 },
            { y: 0, opacity: 1, scale: 1, rotateX: 0, duration: 1.4 }
        )
            .fromTo(
                subtitleRef.current,
                { y: 60, opacity: 0, scale: 0.95 },
                { y: 0, opacity: 1, scale: 1, duration: 1 },
                "-=0.8"
            )
            .fromTo(
                buttonRef.current,
                { y: 40, opacity: 0, scale: 0.8, rotateY: -20 },
                { y: 0, opacity: 1, scale: 1, rotateY: 0, duration: 0.9 },
                "-=0.5"
            );

        // Simplified floating animations for decorative elements
        if (floatingRef.current) {
            const floatingElements = floatingRef.current.children;
            Array.from(floatingElements).forEach((el, i) => {
                gsap.to(el, {
                    y: i % 2 === 0 ? -20 : 20,
                    x: i % 2 === 0 ? -10 : 10,
                    duration: 4,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: i * 0.5,
                });
            });
        }
    }, []);

    return (
        <>
            <section
                ref={containerRef}
                className="hero-section"
            >
                {/* Animated Background Orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="hero-orb orb-1"></div>
                    <div className="hero-orb orb-2"></div>
                </div>

                {/* Floating Decorative Elements */}
                <div ref={floatingRef} className="floating-elements">
                    <div className="floating-icon icon-1">
                        <Code2 className="w-12 h-12 text-[#3DDC84]" />
                    </div>
                    <div className="floating-icon icon-2">
                        <Smartphone className="w-10 h-10 text-[#39FF14]" />
                    </div>
                    <div className="floating-icon icon-3">
                        <Sparkles className="w-8 h-8 text-[#10b981]" />
                    </div>
                </div>

                <div className="hero-content">
                    {/* Main Title */}
                    <h1 ref={titleRef} className="hero-title">
                        <span className="title-line title-white">
                            Building the
                        </span>
                        <span className="title-line title-gradient">
                            Future of Android
                        </span>
                    </h1>

                    {/* Subtitle with Glass Effect */}
                    <div className="subtitle-container">
                        <p ref={subtitleRef} className="hero-subtitle">
                            <Sparkles className="subtitle-icon sparkle-left" />
                            <span className="subtitle-text">Full Stack Mobile Developer</span>
                            <Sparkles className="subtitle-icon sparkle-right" />
                        </p>
                    </div>

                    {/* CTA Button with 3D Effect */}
                    <div ref={buttonRef} className="button-container">
                        <a href="#projects" className="cta-button group">
                            {/* Button Glow Effect */}
                            <div className="button-glow"></div>

                            {/* Button Content */}
                            <span className="button-text">Explore My Work</span>
                            <ArrowRight className="button-arrow" />

                            {/* Hover Shine Effect */}
                            <div className="button-shine"></div>

                            {/* Animated Border */}
                            <div className="button-border"></div>
                        </a>

                        {/* Secondary Info */}
                        <div className="scroll-hint">
                            <div className="scroll-dot"></div>
                            <p className="scroll-text"></p>
                        </div>
                    </div>
                </div>

                {/* Grid Pattern Overlay */}
                <div className="grid-overlay"></div>
            </section>

            <style jsx>{`
                .hero-section {
                    position: relative;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 24px;
                    overflow: hidden;
                    perspective: 1000px;
                    padding-top: 60px;
                }

                /* Animated Background Orbs */
                .hero-orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(60px);
                    opacity: 0.3;
                    animation: float-orb 20s ease-in-out infinite;
                    will-change: transform;
                }

                .orb-1 {
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, rgba(61, 220, 132, 0.4), transparent);
                    top: -10%;
                    left: -10%;
                    animation-delay: 0s;
                }

                .orb-2 {
                    width: 350px;
                    height: 350px;
                    background: radial-gradient(circle, rgba(57, 255, 20, 0.3), transparent);
                    bottom: -5%;
                    right: -5%;
                    animation-delay: 10s;
                }

                @keyframes float-orb {
                    0%, 100% {
                        transform: translate(0, 0);
                    }
                    50% {
                        transform: translate(30px, -40px);
                    }
                }

                /* Floating Decorative Icons */
                .floating-elements {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                }

                .floating-icon {
                    position: absolute;
                    padding: 16px;
                    background: rgba(61, 220, 132, 0.08);
                    border-radius: 16px;
                    border: 1px solid rgba(61, 220, 132, 0.2);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                    will-change: transform;
                }

                .icon-1 {
                    top: 15%;
                    left: 10%;
                }

                .icon-2 {
                    top: 60%;
                    right: 12%;
                }

                .icon-3 {
                    bottom: 20%;
                    left: 15%;
                }

                /* Grid Overlay */
                .grid-overlay {
                    position: absolute;
                    inset: 0;
                    background-image: 
                        linear-gradient(rgba(61, 220, 132, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(61, 220, 132, 0.03) 1px, transparent 1px);
                    background-size: 50px 50px;
                    pointer-events: none;
                    opacity: 0.5;
                }

                /* Hero Content */
                .hero-content {
                    max-width: 1400px;
                    margin: 0 auto;
                    text-align: center;
                    position: relative;
                    z-index: 10;
                }

                /* Hero Content */
                .hero-content {
                    max-width: 1400px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 10;
                    width: 100%;
                }

                /* Hero Grid Layout */
                .hero-grid {
                    display: grid;
                    grid-template-columns: 350px 1fr;
                    gap: 60px;
                    align-items: center;
                }

                /* Profile Card */
                .profile-card {
                    position: relative;
                }

                .profile-image-wrapper {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 1;
                    border-radius: 24px;
                    overflow: hidden;
                    background: linear-gradient(
                        135deg,
                        rgba(61, 220, 132, 0.1),
                        rgba(16, 185, 129, 0.05)
                    );
                    backdrop-filter: blur(16px);
                    border: 3px solid rgba(61, 220, 132, 0.3);
                    box-shadow: 
                        0 20px 60px rgba(0, 0, 0, 0.4),
                        0 8px 32px rgba(61, 220, 132, 0.3),
                        inset 0 1px 1px rgba(255, 255, 255, 0.1);
                    transition: all 0.5s ease;
                }

                .profile-image-wrapper:hover {
                    transform: translateY(-8px) scale(1.02);
                    border-color: rgba(61, 220, 132, 0.6);
                    box-shadow: 
                        0 30px 80px rgba(0, 0, 0, 0.5),
                        0 12px 48px rgba(61, 220, 132, 0.5);
                }

                .profile-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }

                .profile-glow {
                    position: absolute;
                    inset: -4px;
                    background: linear-gradient(135deg, #3DDC84, #39FF14);
                    border-radius: 24px;
                    opacity: 0;
                    filter: blur(20px);
                    transition: opacity 0.5s ease;
                    z-index: -1;
                }

                .profile-image-wrapper:hover .profile-glow {
                    opacity: 0.6;
                }

                /* Main Content */
                .hero-main-content {
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                    text-align: left;
                }

                /* Introduction Card */
                .intro-card {
                    padding: 28px;
                    background: linear-gradient(
                        135deg,
                        rgba(61, 220, 132, 0.08),
                        rgba(16, 185, 129, 0.04)
                    );
                    backdrop-filter: blur(12px);
                    border-radius: 20px;
                    border: 1px solid rgba(61, 220, 132, 0.2);
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
                }

                .intro-text {
                    font-size: 18px;
                    line-height: 1.8;
                    color: rgba(255, 255, 255, 0.9);
                    margin-bottom: 16px;
                }

                .intro-text:last-child {
                    margin-bottom: 0;
                }

                .company-highlight {
                    color: #3DDC84;
                    font-weight: 800;
                    text-shadow: 0 0 10px rgba(61, 220, 132, 0.3);
                }

                .stat-highlight {
                    color: #39FF14;
                    font-weight: 800;
                    text-shadow: 0 0 10px rgba(57, 255, 20, 0.3);
                }

                /* Stats Grid */
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                }

                .stat-item {
                    padding: 24px;
                    background: rgba(61, 220, 132, 0.05);
                    border-radius: 16px;
                    border: 1px solid rgba(61, 220, 132, 0.15);
                    text-align: center;
                    transition: all 0.3s ease;
                }

                .stat-item:hover {
                    background: rgba(61, 220, 132, 0.1);
                    border-color: rgba(61, 220, 132, 0.3);
                    transform: translateY(-4px);
                    box-shadow: 0 8px 24px rgba(61, 220, 132, 0.2);
                }

                .stat-number {
                    font-size: 36px;
                    font-weight: 900;
                    background: linear-gradient(135deg, #3DDC84, #39FF14);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    margin-bottom: 8px;
                }

                .stat-label {
                    font-size: 14px;
                    color: rgba(255, 255, 255, 0.7);
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                /* Hero Title */
                .hero-title {
                    font-size: clamp(2.5rem, 6vw, 4.5rem);
                    font-weight: 900;
                    margin-bottom: 32px;
                    line-height: 1.1;
                    letter-spacing: -0.03em;
                    text-align: center;
                }

                .title-line {
                    display: block;
                    margin-bottom: 12px;
                    animation: title-reveal 1s ease-out;
                }

                @keyframes title-reveal {
                    from {
                        opacity: 0;
                        transform: translateY(50px) rotateX(-20deg);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) rotateX(0);
                    }
                }

                .title-white {
                    color: #fff;
                    text-shadow: 
                        0 0 40px rgba(255, 255, 255, 0.1),
                        0 4px 8px rgba(0, 0, 0, 0.3);
                }

                .title-gradient {
                    background: linear-gradient(135deg, #3DDC84 0%, #39FF14 60%, #10b981 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    position: relative;
                    animation: gradient-shift 3s ease-in-out infinite;
                    filter: drop-shadow(0 0 30px rgba(61, 220, 132, 0.4));
                }

                @keyframes gradient-shift {
                    0%, 100% {
                        filter: drop-shadow(0 0 30px rgba(61, 220, 132, 0.4)) brightness(1);
                    }
                    50% {
                        filter: drop-shadow(0 0 50px rgba(57, 255, 20, 0.6)) brightness(1.2);
                    }
                }

                /* Subtitle Container */
                .subtitle-container {
                    margin-bottom: 64px;
                    perspective: 800px;
                }

                .hero-subtitle {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 20px;
                    padding: 20px 48px;
                    font-size: clamp(1.25rem, 3vw, 2.25rem);
                    font-weight: 700;
                    background: linear-gradient(
                        135deg,
                        rgba(61, 220, 132, 0.12),
                        rgba(16, 185, 129, 0.08)
                    );
                    backdrop-filter: blur(20px);
                    border-radius: 24px;
                    border: 2px solid rgba(61, 220, 132, 0.25);
                    box-shadow: 
                        0 12px 40px rgba(0, 0, 0, 0.3),
                        0 4px 16px rgba(61, 220, 132, 0.2),
                        inset 0 1px 1px rgba(255, 255, 255, 0.1);
                    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    transform-style: preserve-3d;
                }

                .hero-subtitle:hover {
                    transform: translateY(-8px) rotateX(5deg) scale(1.05);
                    border-color: rgba(61, 220, 132, 0.5);
                    box-shadow: 
                        0 20px 60px rgba(0, 0, 0, 0.4),
                        0 8px 32px rgba(61, 220, 132, 0.4),
                        inset 0 1px 1px rgba(255, 255, 255, 0.15);
                }

                .subtitle-icon {
                    width: clamp(32px, 5vw, 40px);
                    height: clamp(32px, 5vw, 40px);
                    transition: all 0.4s ease;
                }

                .sparkle-left {
                    color: #3DDC84;
                    animation: sparkle-pulse 2s ease-in-out infinite;
                }

                .sparkle-right {
                    color: #39FF14;
                    animation: sparkle-pulse 2s ease-in-out infinite 1s;
                }

                @keyframes sparkle-pulse {
                    0%, 100% {
                        transform: scale(1) rotate(0deg);
                        filter: drop-shadow(0 0 8px currentColor);
                    }
                    50% {
                        transform: scale(1.3) rotate(180deg);
                        filter: drop-shadow(0 0 20px currentColor);
                    }
                }

                .subtitle-text {
                    color: rgba(255, 255, 255, 0.95);
                    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
                }

                /* Button Container */
                .button-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 32px;
                    padding-bottom: 48px;
                }

                /* CTA Button */
                .cta-button {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    gap: 16px;
                    padding: 24px 48px;
                    font-size: clamp(1.125rem, 2vw, 1.5rem);
                    font-weight: 800;
                    color: #000;
                    background: linear-gradient(135deg, #3DDC84 0%, #39FF14 100%);
                    border-radius: 20px;
                    border: none;
                    text-decoration: none;
                    overflow: hidden;
                    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    box-shadow: 
                        0 12px 40px rgba(61, 220, 132, 0.4),
                        0 4px 16px rgba(0, 0, 0, 0.2),
                        inset 0 2px 2px rgba(255, 255, 255, 0.4);
                    perspective: 1000px;
                    transform-style: preserve-3d;
                }

                .cta-button:hover {
                    transform: translateY(-8px) scale(1.08) rotateX(5deg);
                    box-shadow: 
                        0 24px 60px rgba(61, 220, 132, 0.6),
                        0 8px 32px rgba(0, 0, 0, 0.3),
                        inset 0 2px 2px rgba(255, 255, 255, 0.5);
                }

                .cta-button:active {
                    transform: translateY(-4px) scale(1.05);
                }

                /* Button Glow */
                .button-glow {
                    position: absolute;
                    inset: -4px;
                    background: linear-gradient(135deg, #3DDC84, #39FF14);
                    border-radius: 20px;
                    opacity: 0;
                    filter: blur(20px);
                    transition: opacity 0.4s ease;
                    z-index: -1;
                }

                .cta-button:hover .button-glow {
                    opacity: 0.8;
                }

                /* Button Text & Arrow */
                .button-text {
                    position: relative;
                    z-index: 10;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                .button-arrow {
                    position: relative;
                    z-index: 10;
                    width: 24px;
                    height: 24px;
                    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }

                .cta-button:hover .button-arrow {
                    transform: translateX(8px) scale(1.2);
                }

                /* Button Shine Effect */
                .button-shine {
                    position: absolute;
                    top: -50%;
                    left: -100%;
                    width: 50%;
                    height: 200%;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(255, 255, 255, 0.3),
                        transparent
                    );
                    transform: skewX(-20deg);
                    transition: left 0.6s ease;
                }

                .cta-button:hover .button-shine {
                    left: 150%;
                }

                /* Animated Border */
                .button-border {
                    position: absolute;
                    inset: -2px;
                    background: linear-gradient(
                        135deg,
                        #3DDC84,
                        #39FF14,
                        #10b981,
                        #3DDC84
                    );
                    background-size: 300% 300%;
                    border-radius: 20px;
                    opacity: 0;
                    animation: gradient-rotate 3s ease infinite;
                    z-index: -1;
                }

                .cta-button:hover .button-border {
                    opacity: 0.5;
                }

                @keyframes gradient-rotate {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }

                /* Scroll Hint */
                .scroll-hint {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                    opacity: 0.7;
                    animation: fade-in-up 1s ease-out 2s both;
                }

                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 0.7;
                        transform: translateY(0);
                    }
                }

                .scroll-dot {
                    width: 8px;
                    height: 8px;
                    background: #3DDC84;
                    border-radius: 50%;
                    box-shadow: 0 0 20px rgba(61, 220, 132, 0.6);
                    animation: scroll-bounce 2s ease-in-out infinite;
                }

                @keyframes scroll-bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(16px);
                    }
                }

                .scroll-text {
                    font-size: 14px;
                    color: rgba(255, 255, 255, 0.6);
                    font-weight: 600;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                }

                /* Responsive Styles */
                @media (max-width: 1024px) {
                    .hero-grid {
                        grid-template-columns: 280px 1fr;
                        gap: 40px;
                    }

                    .intro-text {
                        font-size: 16px;
                    }

                    .stat-number {
                        font-size: 32px;
                    }
                }

                @media (max-width: 768px) {
                    .hero-section {
                        padding: 0 16px;
                    }

                    .hero-grid {
                        grid-template-columns: 1fr;
                        gap: 40px;
                        text-align: center;
                    }

                    .profile-image-wrapper {
                        max-width: 300px;
                        margin: 0 auto;
                    }

                    .hero-main-content {
                        text-align: center;
                    }

                    .hero-title {
                        text-align: center;
                        margin-bottom: 24px;
                    }

                    .intro-card {
                        padding: 24px;
                    }

                    .intro-text {
                        font-size: 16px;
                        line-height: 1.7;
                    }

                    .stats-grid {
                        grid-template-columns: repeat(3, 1fr);
                        gap: 12px;
                    }

                    .stat-item {
                        padding: 16px;
                    }

                    .stat-number {
                        font-size: 28px;
                    }

                    .stat-label {
                        font-size: 12px;
                    }

                    .cta-button {
                        padding: 20px 36px;
                        gap: 12px;
                    }

                    .floating-icon {
                        display: none;
                    }
                }

                @media (max-width: 480px) {
                    .hero-grid {
                        gap: 32px;
                    }

                    .profile-image-wrapper {
                        max-width: 250px;
                    }

                    .hero-title {
                        font-size: clamp(2rem, 8vw, 3rem);
                    }

                    .intro-card {
                        padding: 20px;
                    }

                    .intro-text {
                        font-size: 15px;
                    }

                    .stats-grid {
                        grid-template-columns: 1fr;
                        gap: 16px;
                    }

                    .stat-item {
                        padding: 20px;
                    }

                    .cta-button {
                        padding: 18px 32px;
                        font-size: 16px;
                    }
                }
            `}</style>
        </>
    );
}