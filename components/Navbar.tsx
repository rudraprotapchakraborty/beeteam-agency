'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Navbar() {
  const { scrollY, scrollYProgress } = useScroll()
  const { language, changeLanguage } = useLanguage()
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const translations = {
    en: {
      home: 'Home',
      works: 'Works',
      location: 'Dhaka · BD',
      imdb: 'IMDb',
      rate: 'Rate Chankharpul',
      reel: 'Now Reeling',
    },
    bn: {
      home: 'হোম',
      works: 'কাজসমূহ',
      location: 'ঢাকা · বাংলাদেশ',
      imdb: 'আইএমডিবি',
      rate: 'চানখারপুল রেট করুন',
      reel: 'এখন চলছে',
    },
  } as const

  const t = translations[language]

  const navLinks = [
    { name: t.home, href: '/' },
    { name: t.works, href: '/works' },
  ]

  const fluidSpring = { stiffness: 260, damping: 30, mass: 0.8 }

  const navWidth = useTransform(scrollY, [0, 80], ['100%', '92%'])
  const navTop = useTransform(scrollY, [0, 80], ['0px', '14px'])
  const navRadius = useTransform(scrollY, [0, 80], ['0px', '999px'])
  const navBg = useTransform(
    scrollY,
    [0, 80],
    ['rgba(250, 248, 243, 0.7)', 'rgba(250, 248, 243, 0.95)'],
  )
  const navShadow = useTransform(
    scrollY,
    [0, 80],
    ['0px 0px 0px rgba(0,0,0,0)', '0px 18px 50px -12px rgba(0,0,0,0.12)'],
  )
  const borderOpacity = useTransform(
    scrollY,
    [0, 80],
    ['rgba(0,0,0,0)', 'rgba(10,10,10,0.06)'],
  )
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <>
      {/* Top tape: timecode + reel ticker */}
      <div className="fixed top-0 left-0 right-0 z-[1001] bg-[#0a0a0a] text-[#f4f1ea] text-[9px] font-mono uppercase tracking-[0.3em] py-1 px-6 flex justify-between items-center border-b border-[#FFD700]/20 pointer-events-none">
        <div className="flex items-center gap-3">
          <span className="dot-pulse" />
          <span className="opacity-80">{t.reel}</span>
          <span className="opacity-30">·</span>
          <span className="opacity-60">The University of Chankharpul</span>
        </div>
        <div className="hidden md:flex items-center gap-3 opacity-60">
          <span>24fps</span>
          <span className="opacity-30">·</span>
          <span>2.39:1</span>
          <span className="opacity-30">·</span>
          <span>DCP</span>
        </div>
      </div>

      <motion.header
        style={{
          width: useSpring(navWidth, fluidSpring),
          top: useSpring(navTop, fluidSpring),
          borderRadius: useSpring(navRadius, fluidSpring),
          backgroundColor: navBg,
          boxShadow: navShadow,
          borderWidth: '1px',
          borderColor: borderOpacity,
        }}
        className="fixed left-1/2 -translate-x-1/2 z-[1000] flex items-center justify-between px-6 lg:px-8 py-3 backdrop-blur-2xl mt-6"
      >
        {/* Scroll progress */}
        <motion.div
          style={{ width: progressWidth }}
          className="absolute bottom-0 left-0 h-px bg-[#FFD700]"
        />

        {/* LEFT */}
        <div className="flex items-center gap-5">
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative h-9 w-28 cursor-pointer group"
          >
            <Image
              src="/beeteam_full_logo.png"
              alt="Beeteam Logo"
              fill
              sizes="112px"
              className="object-contain transition-transform duration-500 group-hover:rotate-[-2deg]"
              priority
            />
          </motion.a>

        </div>

        {/* CENTER NAV */}
        <nav className="hidden md:flex items-center gap-1 bg-black/[0.04] p-1 rounded-full border border-black/[0.04]">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
              className="px-6 py-2 text-[10px] font-bold uppercase tracking-[0.22em] relative z-10"
            >
              <span
                className={`relative z-10 transition-colors ${hoveredLink === link.name ? 'text-[#FFD700]' : 'text-black'}`}
              >
                {link.name}
              </span>

              <AnimatePresence>
                {hoveredLink === link.name && (
                  <motion.span
                    layoutId="nav-pill-bg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="absolute inset-0 bg-[#0a0a0a] rounded-full"
                  />
                )}
              </AnimatePresence>
            </motion.a>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-5">
          <motion.a
            href="https://www.imdb.com/title/tt39394821"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-black/60 hover:text-black transition-colors"
          >
            <span className="opacity-40">·</span>
            <span className="px-3">{t.rate}</span>
            <span className="opacity-40">·</span>
          </motion.a>

          <motion.a
            href="https://www.imdb.com/title/tt39394821"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex items-center gap-2 bg-[#FFD700] text-black px-5 py-2.5 rounded-full overflow-hidden shadow-[0_8px_24px_-8px_rgba(212,175,55,0.5)] sheen"
          >
            <span className="relative z-10 text-[10px] font-extrabold uppercase tracking-[0.22em]">
              {t.imdb}
            </span>
            <ArrowUpRight
              size={14}
              strokeWidth={3}
              className="relative z-10 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
            />
          </motion.a>

          <div className="flex items-center font-mono text-[10px] font-bold uppercase tracking-[0.18em]">
            <button
              onClick={() => changeLanguage('en')}
              className={`transition-colors ${language === 'en' ? 'text-black' : 'text-black/35 hover:text-black/60'}`}
            >
              EN
            </button>

            <span className="mx-2 text-black/25">/</span>

            <button
              onClick={() => changeLanguage('bn')}
              className={`transition-colors ${language === 'bn' ? 'text-black' : 'text-black/35 hover:text-black/60'}`}
            >
              বাং
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
            className="md:hidden flex items-center justify-center w-9 h-9 -mr-1 rounded-full text-black hover:bg-black/[0.06] transition-colors"
          >
            {mobileOpen ? <X size={18} strokeWidth={2.5} /> : <Menu size={18} strokeWidth={2.5} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden fixed top-[78px] left-3 right-3 z-[1000] bg-[rgba(250,248,243,0.97)] backdrop-blur-2xl border border-black/10 rounded-2xl shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)] p-3 flex flex-col"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 rounded-xl text-[11px] font-bold uppercase tracking-[0.22em] text-black hover:bg-black/[0.05] hover:text-[#caa400] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://www.imdb.com/title/tt39394821"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-1 px-4 py-3 rounded-xl text-[11px] font-bold uppercase tracking-[0.22em] text-black/60 hover:bg-black/[0.05] transition-colors flex items-center gap-2"
          >
            {t.rate}
            <ArrowUpRight size={13} strokeWidth={2.5} />
          </a>
        </motion.nav>
      )}
    </>
  )
}
