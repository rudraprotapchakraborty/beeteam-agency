"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function BeeTeamYellowStackedHero() {
  const containerRef = useRef(null);
  const { language } = useLanguage();

  const translations = {
    en: {
      title1: "BEETEAM",
      title2: "STUDIOS",
      subtitle:
        "Engineering cinematic authority for high-performance global brands.",
      contact: "Contact",
      viewWork: "View Work",
    },
    bn: {
      title1: "বিটিম",
      title2: "স্টুডিওস",
      subtitle:
        "উচ্চ-ক্ষমতাসম্পন্ন বৈশ্বিক ব্র্যান্ডের জন্য সিনেমাটিক কর্তৃত্ব নির্মাণ।",
      contact: "যোগাযোগ",
      viewWork: "কাজ দেখুন",
    },
  };

  const t = translations[language];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.4,
  });

  const yParallax = useTransform(smoothProgress, [0, 1], [0, -80]);
  const heroScale = useTransform(smoothProgress, [0, 0.6], [1, 1.04]);
  const heroRotate = useTransform(smoothProgress, [0, 1], [0, -1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[120vh] bg-[#fafafa] overflow-hidden font-sans pb-24"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[15%] w-[40%] h-[40%] bg-[#FFD700]/10 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[35%] h-[35%] bg-yellow-200/20 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center pt-20 px-6">

        {/* HEADER */}
        <motion.div
          style={{ y: yParallax }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mb-14"
        >
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight leading-[1.05] mb-4">
            {t.title1}{" "}
            <span className="text-[#FFD700] relative">
              {t.title2}
              <motion.span
                layoutId="underline"
                className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#FFD700]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{ originX: 0 }}
              />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-black/60 font-medium max-w-xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">

            <motion.button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="px-6 py-3 bg-[#FFD700] text-black text-xs font-bold tracking-widest rounded-lg shadow-md hover:shadow-[0_8px_30px_-8px_rgba(255,215,0,0.6)] transition-all duration-300 flex items-center gap-2"
            >
              {t.contact}
              <motion.span
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              >
                <ArrowDown size={14} strokeWidth={3} />
              </motion.span>
            </motion.button>

            <a href="/works" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ opacity: 0.7 }}
                className="flex items-center gap-2 text-black text-xs font-semibold tracking-wide transition-all duration-300"
              >
                {t.viewWork}
                <ExternalLink size={14} />
              </motion.button>
            </a>

          </div>
        </motion.div>
{/* HERO IMAGE */}
<div className="relative w-full max-w-6xl mx-auto">
  <motion.div
    style={{
      scale: heroScale,
      rotate: heroRotate,
    }}
    className="relative w-full rounded-3xl overflow-hidden border border-black/5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)]"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 120 }}
  >
    {/* Background Image */}
    <motion.img
      src="/hero.jpg"
      alt="Beeteam Featured Visual"
      className="absolute inset-0 w-full h-full object-cover"
      initial={{ scale: 1.05 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    />

    {/* CONTENT — FULL WIDTH */}
    <div className="relative z-10 px-8 md:px-20 py-16 md:py-24 text-white w-full">

      <p className="text-xs uppercase tracking-[0.25em] text-yellow-400 mb-5">
        Bee Team Presents
      </p>

      <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
        Director’s Vision
      </h2>

      <div className="space-y-6 text-sm md:text-base leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">

        <p>
          This film is not about student politics alone; it is about the marketplace of ambition in a third-world society. In a world where young people are asked to dream, they are also forced to gamble those dreams in exchange for influence and power. Our characters have no names because identity here is conditional, one is known by his position only. The horse becomes a satire of status. It symbolizes a shortcut, an absurd object that suddenly grants social legitimacy. Students laugh at it as a joke, then worship it as power.
        </p>

        <p>
          To preserve the raw pulse of this world, the film is shot in real locations using a guerrilla documentary style. The camera behaves like a silent witness: observing, not staging. There is no artificial lighting, no beautification, no makeup to shield the characters from truth. Their tired eyes, dusty shirts, and restless movements belong not to actors but to the reality that millions of students live every day.
        </p>

        <p>
          This approach allows the viewer to feel the humidity of student hostels, the chaos of campus rallies, the politics hidden in tea stalls. The film observes its characters without judgment. It doesn’t ask who is innocent or guilty, it asks what ambition does to innocence in the first place. It explores how deeply young people crave recognition, how cheaply it can be traded, and how tragedy becomes just another stepping stone to power.
        </p>

        <p className="text-yellow-400 font-semibold pt-4">
          The film ends not with closure, but with a question:
        </p>

        <p className="text-yellow-400 font-semibold text-lg">
          How much of ourselves are we willing to sacrifice to feel important?
        </p>

      </div>

    </div>
  </motion.div>
</div>

      </div>
    </section>
  );
}
