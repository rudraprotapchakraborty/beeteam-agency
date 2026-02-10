"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ExternalLink } from "lucide-react";

export default function BeeTeamProfessionalHero() {
  const containerRef = useRef(null);
  const [hasOpened, setHasOpened] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 25,
  });

  // Lock curtains open after initial scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest > 0.25) setHasOpened(true);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // --- MOTION MAPPINGS ---
  const leftCurtainX = useTransform(smoothProgress, [0, 0.25], ["0%", "-100%"]);
  const rightCurtainX = useTransform(smoothProgress, [0, 0.25], ["0%", "100%"]);
  const introOpacity = useTransform(smoothProgress, [0.2, 0.3], [1, 0]);

  const bgTextY = useTransform(smoothProgress, [0.2, 1], ["0%", "20%"]);
  const mainStageY = useTransform(smoothProgress, [0.2, 1], ["0%", "-10%"]);
  const imageScale = useTransform(smoothProgress, [0.2, 0.6], [1, 1.05]);

  // Smooth Scroll Handler
  const scrollToContact = () => {
    const footer = document.querySelector("#contact");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-[200vh] bg-white overflow-clip selection:bg-black selection:text-white"
    >
      {/* 1. TECHNICAL HUD GRID */}
      <div
        className="fixed inset-0 pointer-events-none z-[10] opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#000 1.5px, transparent 1.5px), linear-gradient(90deg, #000 1.5px, transparent 1.5px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* 2. OPENING SEQUENCE */}
        <AnimatePresence>
          {!hasOpened && (
            <motion.div
              exit={{
                opacity: 0,
                transition: { duration: 0.8, ease: "easeInOut" },
              }}
              style={{ opacity: introOpacity }}
              className="absolute inset-0 z-[150] pointer-events-none flex"
            >
              <motion.div
                style={{ x: leftCurtainX }}
                className="h-full w-1/2 bg-black border-r border-white/10"
              />
              <motion.div
                style={{ x: rightCurtainX }}
                className="h-full w-1/2 bg-black border-l border-white/10"
              />

              <motion.div
                style={{ opacity: introOpacity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[151] flex flex-col items-center gap-8"
              >
                <div className="relative w-20 h-20 md:w-28 md:h-28">
                  <img
                    src="/favicon.ico"
                    alt="Logo"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-[#FFD700]/20 blur-2xl rounded-full -z-10" />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-[2px] bg-[#FFD700]" />
                  <span className="text-white text-[10px] tracking-[1.2em] font-black uppercase">
                    Initiating
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3. BACKGROUND GHOST TEXT */}
        <motion.div
          style={{ y: bgTextY }}
          className="absolute inset-0 flex items-center justify-center select-none z-0"
        >
          <h2 className="text-[25vw] font-black text-black/[0.06] leading-none uppercase tracking-tighter">
            EST.2026
          </h2>
        </motion.div>

        {/* 4. MAIN CONTENT STAGE */}
        <motion.div
          style={{ y: mainStageY }}
          className="relative z-20 w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-8"
        >
          {/* Visual Asset Container */}
          <div className="lg:col-span-7 relative">
            <motion.div
              style={{ scale: imageScale }}
              className="relative overflow-hidden border-[10px] border-black shadow-[30px_30px_0px_rgba(0,0,0,0.1)]"
            >
              <img
                src="/hero.jpg"
                className="w-full aspect-video object-cover"
                alt="Feature"
              />
            </motion.div>

            {/* Decorative Corners */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-[#FFD700] pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-black pointer-events-none" />
          </div>

          {/* Editorial Copy Block */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                Global_Directive
              </div>
              <div className="h-1 w-12 bg-[#FFD700]" />
            </div>
            <div className="inline-block">
              {/* TOP BLOCK */}
              <div className="bg-[#FFD700] border-4 border-black px-8 py-4">
                <span className="block text-black text-6xl xl:text-[80px] font-black tracking-tight leading-none">
                  BEETEAM
                </span>
              </div>

              {/* STUDIOS WITH TOP + BOTTOM BAR */}
              <div className="mt-2 border-y-4 border-black py-2">
                <span className="block text-black text-5xl xl:text-[80px] font-extrabold tracking-[0.35em] leading-none text-center">
                  STUDIOS
                </span>
              </div>
            </div>

            <p className="text-xl text-black font-bold leading-tight max-w-sm uppercase tracking-tight">
              Engineering cinematic authority for the world’s most{" "}
              <span className="text-[#D97706]">aggressive brands</span>.
            </p>

            {/* UPDATED CTA BUTTON */}
            <motion.button
              onClick={scrollToContact}
              whileHover={{ x: 10, backgroundColor: "#FFD700", color: "#000" }}
              className="group flex items-center gap-6 px-10 py-6 border-4 border-black text-[12px] font-black uppercase tracking-[0.4em] transition-all duration-300 shadow-[8px_8px_0px_#000] hover:shadow-none"
            >
              Contact{" "}
              <ArrowDown
                size={18}
                strokeWidth={4}
                className="group-hover:translate-y-1 transition-transform"
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
