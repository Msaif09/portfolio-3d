"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        // Epic title animation with 3D entrance
        gsap.fromTo(
            titleRef.current,
            {
                rotateX: -90,
                y: 100,
                opacity: 0,
                scale: 0.5,
            },
            {
                rotateX: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.5,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="min-h-screen py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 relative perspective-1500"
        >
            <div className="max-w-7xl mx-auto">
                <h2
                    ref={titleRef}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-12 sm:mb-16 md:mb-20 lg:mb-24 text-center tracking-tight preserve-3d"
                    style={{
                        background: "linear-gradient(135deg, #3DDC84 0%, #39FF14 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        transformStyle: "preserve-3d",
                        paddingBottom: "25px"
                    }}
                >
                    Featured Projects
                </h2>

                {/* Grid with responsive spacing and equal heights */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 preserve-3d ">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
            <style jsx>
                {`
                .project-card{
                
                }
                `}
            </style>
        </section>
    );
}
