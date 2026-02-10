"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Smartphone, Star, ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Smooth 3D Scroll Reveal Animation
    gsap.fromTo(
      card,
      {
        opacity: 0,
        rotateX: 45,
        rotateY: -15,
        z: -200,
        scale: 0.8,
      },
      {
        opacity: 1,
        rotateX: 0,
        rotateY: 0,
        z: 0,
        scale: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 95%",
          end: "top 40%",
          scrub: 1.2,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    const content = contentRef.current;
    const glow = glowRef.current;

    if (!card || !content || !glow) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (clamped for smoothness)
    const rotateX = (centerY - y) / 25;
    const rotateY = (x - centerX) / 25;

    // Move the glow effect to follow cursor
    gsap.to(glow, {
      x: x,
      y: y,
      duration: 0.1,
      ease: "none",
    });

    // Tilt the card
    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1000,
      transformStyle: "preserve-3d",
    });

    // Separate content layers for parallax depth
    gsap.to(content, {
      x: (x - centerX) / 40,
      y: (y - centerY) / 40,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseEnter = () => {
    // Reveal border glow
    gsap.to(borderRef.current, { opacity: 1, duration: 0.3 });

    // Lift card slightly
    gsap.to(cardRef.current, {
      z: 20,
      scale: 1.02,
      duration: 0.4,
      ease: "back.out(1.7)",
    });
  };

  const handleMouseLeave = () => {
    // Reset all animations
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      z: 0,
      scale: 1,
      duration: 0.6,
      ease: "power3.out",
    });

    gsap.to(contentRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    });

    gsap.to(borderRef.current, {
      opacity: 0,
      duration: 0.3,
    });
  };

  return (
    <>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-auto"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Main Card Container with Android Glass Theme */}
        <div className="project-card-container">
          {/* Animated Glow Gradient Follower - Android Green */}
          <div
            ref={glowRef}
            className="glow-orb"
            style={{
              position: "absolute",
              width: "400px",
              height: "400px",
              background:
                "radial-gradient(circle, rgba(61,220,151,0.4) 0%, rgba(61,220,151,0.2) 25%, transparent 70%)",
              borderRadius: "50%",
              pointerEvents: "none",
              transform: "translate(-50%, -50%)",
              filter: "blur(60px)",
              zIndex: 0,
            }}
          />

          {/* Neon Border Highlight - Brighter Android Green */}
          <div
            ref={borderRef}
            className="neon-border"
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "24px",
              padding: "2px",
              background:
                "linear-gradient(135deg, rgba(61,220,151,0.6), rgba(52,211,153,0.4), rgba(16,185,129,0.6))",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              opacity: 0,
              pointerEvents: "none",
              filter: "drop-shadow(0 0 20px rgba(61,220,151,0.5))",
            }}
          />

          {/* Glass Card Body */}
          <div className="glass-card">
            {/* Content Container */}
            <div ref={contentRef} className="card-content">
              {/* Header: Icon & Title */}
              <div className="card-header">
                {/* Icon Box */}
                <div className="icon-container">
                  <div className="icon-wrapper">{project.appIcon}</div>
                </div>

                {/* Featured Star */}
                {project.id === "sada-e-qalam" && (
                  <div className="featured-badge">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="badge-text">Featured</span>
                  </div>
                )}

                {/* Title & Role */}
                <div className="title-section">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-role">{project.role}</p>
                </div>
              </div>

              {/* Description */}
              <p className="project-description">{project.description}</p>

              {/* Footer: Tech & Action */}
              <div className="card-footer">
                {/* Tech Stack Bubbles */}
                <div className="tech-stack">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button - Android Green Gradient */}
                <a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-button group">

                  <Smartphone className="w-4 h-4" />
                  <span>View on Play Store</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .project-card-container {
          position: relative;
          width: 100%;
          min-height: 480px;
          border-radius: 24px;
          overflow: hidden;
        }

        .glass-card {
          position: relative;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(16, 185, 129, 0.08) 0%,
            rgba(5, 150, 105, 0.05) 50%,
            rgba(4, 120, 87, 0.08) 100%
          );
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-radius: 24px;
          border: 1px solid rgba(61, 220, 151, 0.15);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2),
            0 2px 8px rgba(61, 220, 151, 0.1),
            inset 0 1px 1px rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          padding: 32px;
        }

        .glass-card:hover {
          border-color: rgba(61, 220, 151, 0.3);
          box-shadow: 0 12px 48px rgba(0, 0, 0, 0.3),
            0 4px 16px rgba(61, 220, 151, 0.2),
            inset 0 1px 1px rgba(255, 255, 255, 0.15);
        }

        .card-content {
          display: flex;
          flex-direction: column;
          gap: 28px;
          height: 100%;
        }

        .card-header {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .icon-container {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .icon-wrapper {
          width: 72px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            135deg,
            rgba(61, 220, 151, 0.15),
            rgba(16, 185, 129, 0.1)
          );
          backdrop-filter: blur(10px);
          border-radius: 20px;
          border: 1px solid rgba(61, 220, 151, 0.2);
          box-shadow: 0 4px 16px rgba(61, 220, 151, 0.15),
            inset 0 1px 1px rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .icon-wrapper:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 24px rgba(61, 220, 151, 0.25);
        }

        .featured-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: linear-gradient(
            135deg,
            rgba(251, 191, 36, 0.15),
            rgba(245, 158, 11, 0.1)
          );
          backdrop-filter: blur(10px);
          border: 1px solid rgba(251, 191, 36, 0.3);
          border-radius: 12px;
          width: fit-content;
        }

        .badge-text {
          font-size: 14px;
          font-weight: 600;
          color: #fbbf24;
          text-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
        }

        .title-section {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .project-title {
          font-size: 28px;
          font-weight: 700;
          background: linear-gradient(135deg, #3ddc97 0%, #10b981 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.3;
          padding-bottom: 4px;
        }

        .project-role {
          font-size: 15px;
          font-weight: 500;
          color: rgba(61, 220, 151, 0.8);
          padding-left: 2px;
        }

        .project-description {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.85);
          padding: 0 4px;
          margin: 8px 0;
        }

        .card-footer {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-top: auto;
          padding-top: 8px;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          padding: 0 4px;
        }

        .tech-badge {
          display: inline-flex;
          align-items: center;
          padding: 10px 18px;
          font-size: 13px;
          font-weight: 600;
          color: rgba(61, 220, 151, 0.95);
          background: linear-gradient(
            135deg,
            rgba(61, 220, 151, 0.1),
            rgba(16, 185, 129, 0.08)
          );
          backdrop-filter: blur(8px);
          border: 1px solid rgba(61, 220, 151, 0.25);
          border-radius: 10px;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(61, 220, 151, 0.1);
        }

        .tech-badge:hover {
          background: linear-gradient(
            135deg,
            rgba(61, 220, 151, 0.2),
            rgba(16, 185, 129, 0.15)
          );
          border-color: rgba(61, 220, 151, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(61, 220, 151, 0.2);
        }

        .action-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 28px;
          font-size: 15px;
          font-weight: 600;
          color: #000;
          background: linear-gradient(135deg, #3ddc97 0%, #10b981 100%);
          border: none;
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(61, 220, 151, 0.3),
            inset 0 1px 1px rgba(255, 255, 255, 0.3);
          text-decoration: none;
          width: fit-content;
        }

        .action-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(61, 220, 151, 0.4),
            inset 0 1px 1px rgba(255, 255, 255, 0.4);
          background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
        }

        .action-button:active {
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .glass-card {
            padding: 24px;
          }

          .project-title {
            font-size: 24px;
          }

          .project-description {
            font-size: 15px;
          }

          .icon-wrapper {
            width: 64px;
            height: 64px;
          }
        }
      `}</style>
    </>
  );
}