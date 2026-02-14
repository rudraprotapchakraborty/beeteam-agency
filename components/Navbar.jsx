"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function MaterialExpressiveNavbar() {
  const { scrollY } = useScroll();
  const [hoveredLink, setHoveredLink] = useState(null);
  const [language, setLanguage] = useState("en");

  // Load saved language
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) setLanguage(savedLang);
  }, []);

  // Toggle language
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  // Translations
  const translations = {
    en: {
      home: "Home",
      works: "Works",
      location: "Dhaka, BD",
      imdb: "IMDb",
    },
    bn: {
      home: "হোম",
      works: "কাজসমূহ",
      location: "ঢাকা, বাংলাদেশ",
      imdb: "আইএমডিবি",
    },
  };

  const t = translations[language];

  const navLinks = [
    { name: t.home, href: "/" },
    { name: t.works, href: "/works" },
  ];

  const fluidSpring = {
    type: "spring",
    stiffness: 260,
    damping: 30,
    mass: 0.8,
  };

  const navWidth = useTransform(scrollY, [0, 80], ["100%", "90%"]);
  const navTop = useTransform(scrollY, [0, 80], ["0px", "20px"]);
  const navRadius = useTransform(scrollY, [0, 80], ["0px", "100px"]);

  const navBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.9)"]
  );

  const navShadow = useTransform(
    scrollY,
    [0, 80],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 20px 40px rgba(0,0,0,0.05)"]
  );

  const borderOpacity = useTransform(
    scrollY,
    [0, 80],
    ["rgba(0,0,0,0)", "rgba(0,0,0,0.05)"]
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
      className="fixed left-1/2 -translate-x-1/2 z-[1000] flex items-center justify-between px-8 py-3 backdrop-blur-xl"
    >
      {/* LEFT */}
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

        <motion.div
          style={{ opacity: useTransform(scrollY, [0, 50], [1, 0]) }}
          className="hidden xl:flex items-center gap-2 pl-6 border-l border-black/5"
        >
          <MapPin size={12} className="text-[#FFD700]" />
          <span className="text-[9px] font-black uppercase tracking-widest text-black/40">
            {t.location}
          </span>
        </motion.div>
      </div>

      {/* CENTER NAV */}
      <nav className="hidden md:flex items-center gap-1 bg-black/5 p-1 rounded-full">
        {navLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            onMouseEnter={() => setHoveredLink(link.name)}
            onMouseLeave={() => setHoveredLink(null)}
            className="px-6 py-2 text-[10px] font-black uppercase tracking-widest relative z-10"
          >
            <span
              className={
                hoveredLink === link.name ? "text-white" : "text-black"
              }
            >
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

      {/* RIGHT */}
      <div className="flex items-center gap-6">
        <motion.a
          href="https://www.imdb.com/title/tt39394821"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative flex items-center gap-2 bg-[#FFD700] text-black px-6 py-2.5 rounded-full overflow-hidden shadow-lg shadow-amber-200/50 transition-all"
        >
          <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em]">
            {t.imdb}
          </span>
          <ArrowUpRight
            size={14}
            strokeWidth={3}
            className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
          />
        </motion.a>

        {/* LANGUAGE SWITCHER */}
        <div className="flex items-center text-[10px] font-black uppercase tracking-widest">
          <button
            onClick={() => changeLanguage("en")}
            className={`transition-colors ${
              language === "en" ? "text-black" : "text-black/40"
            }`}
          >
            EN
          </button>

          <span className="mx-2 text-black/30">|</span>

          <button
            onClick={() => changeLanguage("bn")}
            className={`transition-colors ${
              language === "bn" ? "text-black" : "text-black/40"
            }`}
          >
            বাংলা
          </button>
        </div>
      </div>
    </motion.header>
  );
}
