"use client";

import Scene from "@/components/Scene";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import AboutMe from "@/components/AboutMe";
import ParallaxWrapper from "@/components/ParallaxWrapper";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="relative overflow-hidden">
        {/* Enhanced 3D Background Scene */}
        <Scene />

        {/* Content Sections with Parallax */}
        <div className="relative z-10">
          <Hero />

          <div className="section-spacer"></div>

          <ParallaxWrapper speed={0.3}>
            <AboutMe />
          </ParallaxWrapper>

          <div className="section-spacer"></div>

          <ParallaxWrapper speed={0.5}>
            <Projects />
          </ParallaxWrapper>

          <div className="section-spacer"></div>

          <ParallaxWrapper speed={0.3}>
            <About />
          </ParallaxWrapper>
        </div>

        {/* Footer */}
        <footer className="relative z-10 py-8 text-center text-gray-400 text-sm footer">
          <p>© 2026 Mohammad Saif.</p>
        </footer>
      </main>

      <style jsx>{`
        .section-spacer {
          height: 100px;
        }
        .footer{
        margin-bottom:20px;
        }
      `}</style>
    </>
  );
}