"use client";

import { useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { ArrowUpRight, MapPin, Globe } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Works", href: "/works" },
];

export default function MaterialExpressiveNavbar() {
  const { scrollY } = useScroll();
  const [hoveredLink, setHoveredLink] = useState(null);

  // Physics Config for fluid motion
  const fluidSpring = {
    type: "spring",
    stiffness: 260,
    damping: 30,
    mass: 0.8,
  };

  // 1. Structural Morphing: Transitions to a floating pill on scroll
  const navWidth = useTransform(scrollY, [0, 80], ["100%", "90%"]);
  const navTop = useTransform(scrollY, [0, 80], ["0px", "20px"]);
  const navRadius = useTransform(scrollY, [0, 80], ["0px", "100px"]); // Full pill radius

  // 2. Soft UI Palette
  const navBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.9)"]
  );

  const navShadow = useTransform(
    scrollY,
    [0, 80],
    [
      "0px 0px 0px rgba(0,0,0,0)",
      "0px 20px 40px rgba(0,0,0,0.05)" // Soft shadow instead of hard brutalist
    ]
  );

  const borderOpacity = useTransform(
    scrollY,
    [0, 80],
    ["rgba(0,0,0,0)", "rgba(0,0,0,0.05)"] // Subtle border
  );

  return (
    <motion.header
      style={{
        width: useSpring(navWidth, fluidSpring),
        top: useSpring(navTop, fluidSpring),
        borderRadius: useSpring(navRadius, fluidSpring),
        backgroundColor: navBg,
        boxShadow: navShadow,
        borderWidth: "1px",
        borderColor: borderOpacity,
      }}
      className="fixed left-1/2 -translate-x-1/2 z-[1000] flex items-center justify-between px-8 py-3 backdrop-blur-xl selection:bg-[#FFD700] selection:text-black"
    >
      {/* LEFT: BRAND & LOCATION */}
      <div className="flex items-center gap-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative h-8 w-24 cursor-pointer"
        >
          <Image
            src="/beeteam_full_logo.png"
            alt="Beeteam Logo"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Subtle Location Pill */}
        <motion.div 
          style={{ opacity: useTransform(scrollY, [0, 50], [1, 0]) }}
          className="hidden xl:flex items-center gap-2 pl-6 border-l border-black/5"
        >
          <MapPin size={12} className="text-[#FFD700]" />
          <span className="text-[9px] font-black uppercase tracking-widest text-black/40">
            Dhaka, BD
          </span>
        </motion.div>
      </div>

      {/* CENTER: NAV LINKS - Pill Hover */}
      <nav className="hidden md:flex items-center gap-1 bg-black/5 p-1 rounded-full">
        {navLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            onMouseEnter={() => setHoveredLink(link.name)}
            onMouseLeave={() => setHoveredLink(null)}
            className="px-6 py-2 text-[10px] font-black uppercase tracking-widest text-black relative z-10 transition-colors"
          >
            <span className={hoveredLink === link.name ? "text-white" : "text-black"}>
              {link.name}
            </span>
            <AnimatePresence>
              {hoveredLink === link.name && (
                <motion.span
                  layoutId="nav-pill-bg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-black rounded-full -z-10"
                />
              )}
            </AnimatePresence>
          </motion.a>
        ))}
      </nav>

      {/* RIGHT: ACTION CTA - Yellow Theme */}
      <div className="flex items-center gap-4">
        <motion.a
          href="https://www.imdb.com/title/tt39394821"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative flex items-center gap-2 bg-[#FFD700] text-black px-6 py-2.5 rounded-full overflow-hidden shadow-lg shadow-amber-200/50 transition-all cursor-pointer"
        >
          <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em]">
            IMDb
          </span>
          <ArrowUpRight
            size={14}
            strokeWidth={3}
            className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
          />
        </motion.a>
        
        {/* Globe Icon Micro-interaction */}
        <div className="p-2 bg-black/5 rounded-full hover:bg-[#FFD700]/20 transition-colors cursor-pointer">
          <Globe size={16} className="text-black/60" />
        </div>
      </div>
    </motion.header>
  );
}