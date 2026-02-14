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
import { ArrowUpRight, Activity, MapPin } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Works", href: "/works" },
];

export default function MaterialExpressiveNavbar() {
  const { scrollY } = useScroll();
  const [hoveredLink, setHoveredLink] = useState(null);

  // Physics Config for smooth morphing
  const fluidSpring = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 0.8,
  };
  const hoverSpring = { type: "spring", stiffness: 500, damping: 30 };

  // 1. Structural Morphing
  const navWidth = useTransform(scrollY, [0, 80], ["100%", "94%"]);
  const navTop = useTransform(scrollY, [0, 80], ["0px", "24px"]);
  const navRadius = useTransform(scrollY, [0, 80], ["0px", "12px"]);

  // 2. High Contrast Palette
  const navBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)"],
  );

  const navShadow = useTransform(
    scrollY,
    [0, 80],
    ["0px 0px 0px rgba(0,0,0,0)", "20px 20px 0px rgba(0,0,0,1)"],
  );

  const borderOpacity = useTransform(
    scrollY,
    [0, 80],
    ["rgba(0,0,0,1)", "rgba(0,0,0,1)"],
  );

  return (
    <motion.header
      style={{
        width: useSpring(navWidth, fluidSpring),
        top: useSpring(navTop, fluidSpring),
        borderRadius: useSpring(navRadius, fluidSpring),
        backgroundColor: navBg,
        boxShadow: navShadow,
        borderWidth: "2px",
        borderColor: borderOpacity,
      }}
      className="fixed left-1/2 -translate-x-1/2 z-[1000] flex items-center justify-between px-6 py-4 md:px-12 overflow-hidden border-black selection:bg-black selection:text-white"
    >
      {/* LEFT: BRAND & STATUS */}
      <div className="flex items-center gap-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative h-10 w-28 cursor-pointer"
        >
          <Image
            src="/beeteam_full_logo.png"
            alt="Beeteam Logo"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>

      {/* CENTER: NAV LINKS - Solid Typography */}
      <nav className="hidden md:flex items-center gap-2 relative">
        {navLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            onMouseEnter={() => setHoveredLink(link.name)}
            onMouseLeave={() => setHoveredLink(null)}
            className="px-6 py-2 text-[11px] font-black uppercase tracking-widest text-black relative z-10 transition-colors"
          >
            {link.name}
            <AnimatePresence>
              {hoveredLink === link.name && (
                <motion.span
                  layoutId="nav-hover-bg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-black rounded-none -z-10"
                />
              )}
            </AnimatePresence>
            <motion.span
              className="absolute inset-0 text-white flex items-center justify-center -z-0 opacity-0 group-hover:opacity-100"
              animate={{ opacity: hoveredLink === link.name ? 1 : 0 }}
            >
              {link.name}
            </motion.span>
          </motion.a>
        ))}
      </nav>

      {/* RIGHT: ACTION CTA */}
      <div className="flex items-center gap-6">
        <motion.div
          style={{ opacity: useTransform(scrollY, [0, 50], [1, 0]) }}
          className="hidden xl:flex items-center gap-3 pr-6 border-r-2 border-black"
        >
          <MapPin size={16} strokeWidth={3} className="text-red-600" />
          <div className="text-left">
            <p className="text-[10px] font-black text-black uppercase leading-none">
              Shop no -24, 480, Sarker, R E F Tower, Gawair, dakshinkhan
            </p>
            <p className="text-[12px] font-black text-black uppercase tracking-tighter">
              Dhaka, Bangladesh
            </p>
          </div>
        </motion.div>

        {/* UPDATED BUTTON */}
        <motion.a
          href="https://www.imdb.com/title/tt39394821"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 5, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className="group relative flex items-center gap-3 bg-[#FFD700] text-black border-2 border-black px-8 py-3 rounded-none overflow-hidden shadow-[4px_4px_0px_#000] hover:shadow-none transition-all cursor-pointer"
        >
          <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.2em]">
            IMDb
          </span>
          <ArrowUpRight
            size={18}
            strokeWidth={3}
            className="relative z-10 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
          />
        </motion.a>
      </div>
    </motion.header>
  );
}
