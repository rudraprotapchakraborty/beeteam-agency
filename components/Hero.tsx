'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ExternalLink, Film, Sparkles } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { language } = useLanguage()
  const containerRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const heroBgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroBgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18])
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-40%'])

  const translations = {
    en: {
      title1: 'BEETEAM',
      title2: 'STUDIOS',
      subtitle: 'Engineering cinematic authority for high-performance global brands.',
      contact: 'Begin a film',
      viewWork: 'View Reel',
      presents: 'Bee Team Presents',
      scrollHint: 'Scroll to enter',
      featureBadge: 'Feature Film · 2026',
      runtime: 'Runtime · 134 min',
      shot: 'Shot on RED · 4K UHD',
    },
    bn: {
      title1: 'বিটিম',
      title2: 'স্টুডিওস',
      subtitle: 'উচ্চ-ক্ষমতাসম্পন্ন বৈশ্বিক ব্র্যান্ডের জন্য সিনেমাটিক কর্তৃত্ব নির্মাণ।',
      contact: 'একটি ফিল্ম শুরু করুন',
      viewWork: 'রিল দেখুন',
      presents: 'বি টিম উপস্থাপন করছে',
      scrollHint: 'প্রবেশ করতে স্ক্রল করুন',
      featureBadge: 'ফিচার ফিল্ম · ২০২৬',
      runtime: 'সময়কাল · ১৪৪ মিনিট',
      shot: 'RED-এ ধারণকৃত · 4K UHD',
    },
  } as const

  const t = translations[language]

  return (
    <section
      ref={containerRef}
      className="relative font-sans"
    >
      {/* === REEL: full-bleed hero === */}
      <div className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-[#0a0a0a] grain">
        {/* Backdrop */}
        <motion.div
          style={{ y: heroBgY, scale: heroBgScale }}
          className="absolute inset-0"
        >
          <img
            src="/hero.jpg"
            alt="Beeteam Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/15" />
        </motion.div>

        {/* Letterbox bars */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-[#0a0a0a] z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#0a0a0a] z-10" />

        {/* Frame markers */}
        <div className="absolute top-12 left-0 right-0 px-8 lg:px-12 mt-4 flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.3em] text-[#FFD700]/70 z-20">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#FFD700] blink" />
            REEL 01 · {t.featureBadge}
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>{t.runtime}</span>
            <span className="opacity-40">·</span>
            <span>{t.shot}</span>
          </div>
        </div>

        {/* Vertical side timecode */}
        <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 font-mono text-[10px] uppercase tracking-[0.4em] text-white/50 z-20">
          T—00:00:08:24 · A1 · 24fps
        </div>
        <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] font-mono text-[10px] uppercase tracking-[0.4em] text-white/50 z-20">
          DIRECTOR · MONIRUL HAQUE AKASH · 2026
        </div>

        {/* Center content: left branding + right news */}
        <motion.div
          style={{ y: titleY }}
          className="relative z-20 h-full grid lg:grid-cols-2 gap-0"
        >
          {/* LEFT: Beeteam Studios branding */}
          <div className="flex flex-col items-center justify-center text-white px-8 lg:px-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-display text-[clamp(80px,13vw,260px)] text-white text-center leading-[0.85] w-full"
            >
              <span className="block">{t.title1}</span>
              <span className="block text-[#FFD700] -mt-[0.08em]">{t.title2}</span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
              style={{ originX: 0.5 }}
              className="mt-4 h-px w-40 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-base text-white/70 max-w-xs text-center mt-5 font-light tracking-wide"
            >
              {t.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row items-center gap-4 mt-8"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group relative px-7 py-3.5 bg-[#FFD700] text-black text-[11px] font-extrabold uppercase tracking-[0.22em] rounded-full flex items-center gap-2.5 shadow-[0_12px_40px_-12px_rgba(255,215,0,0.6)] sheen overflow-hidden"
              >
                <span className="relative z-10">{t.contact}</span>
                <ArrowDown size={14} strokeWidth={3} className="relative z-10 group-hover:translate-y-0.5 transition-transform" />
              </motion.a>

              <motion.a
                href="/works"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                className="group flex items-center gap-2.5 text-white text-[11px] font-extrabold uppercase tracking-[0.22em] px-7 py-3.5 rounded-full border border-white/20 hover:border-[#FFD700] hover:text-[#FFD700] transition-colors backdrop-blur-sm"
              >
                <Film size={14} />
                {t.viewWork}
                <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT: Featured news cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="hidden lg:flex flex-col gap-3 border-l border-white/10 h-full px-8 py-14 justify-center"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFD700] shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-black font-bold">Featured Coverage</span>
              </div>
              <span className="flex-1 h-px bg-white/10" />
              <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/25">Press · 2026</span>
            </div>

            {/* Three tall poster cards side by side */}
            <div className="flex gap-3">
              {[
                {
                  outlet: 'Daily Sun',
                  headline: 'Political Satire Film "The University of Chankharpul" Unveils Trailer',
                  href: 'https://www.daily-sun.com/entertainment/877071/political-satire-film-the-university-of-chankharpul-unveils-trailer',
                  accent: '#e87c1e',
                  thumb: '/news1.png',
                },
                {
                  outlet: 'Dhaka Tribune',
                  headline: 'Trailer of "The University of Chankharpul"',
                  href: 'https://www.dhakatribune.com/showtime/411199/trailer-of-%E2%80%9Cthe-university-of-chankharpul%E2%80%9D',
                  accent: '#1a6fa8',
                  thumb: '/news2.png',
                },
                {
                  outlet: 'The Daily Star',
                  headline: '"Good Cinema Will Always Find Its Place" — Akash Haque',
                  href: 'https://www.thedailystar.net/culture/tv-film/news/good-cinema-will-always-find-its-place-akash-haque-4184886',
                  accent: '#1d7c4d',
                  thumb: '/news3.png',
                },
              ].map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + i * 0.12 }}
                  className="group relative flex-1 h-[460px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500"
                  style={{
                    border: `1.5px solid ${item.accent}60`,
                    boxShadow: `0 0 0 0px ${item.accent}00, 0 8px 40px -8px rgba(0,0,0,0.8)`,
                  }}
                  whileHover={{
                    scale: 1.03,
                    y: -6,
                    boxShadow: `0 0 24px 4px ${item.accent}55, 0 24px 60px -12px rgba(0,0,0,0.9)`,
                    borderColor: item.accent,
                  }}
                >
                  {/* Full poster image */}
                  <img
                    src={item.thumb}
                    alt={item.outlet}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />

                  {/* Accent glow strip at top */}
                  <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }} />

                  {/* FEATURED ribbon */}
                  <div className="absolute top-[18px] -right-[22px] z-20 rotate-45 bg-[#FFD700] px-8 py-[3px]">
                    <span className="font-mono text-[7px] uppercase tracking-[0.25em] font-black text-black">Featured</span>
                  </div>

                  {/* Outlet badge — top */}
                  <div className="absolute top-4 left-3 right-3 flex items-center justify-between z-10">
                    <div
                      className="px-2.5 py-1 rounded-md font-mono text-[8px] uppercase tracking-[0.3em] font-bold text-white shadow-lg"
                      style={{ background: item.accent }}
                    >
                      {item.outlet}
                    </div>
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center font-mono text-[9px] font-bold text-white"
                      style={{ background: `${item.accent}40`, border: `1px solid ${item.accent}80` }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  {/* Headline + link — bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                    <div className="w-6 h-[2px] mb-2 rounded-full" style={{ background: item.accent }} />
                    <p className="text-[12px] text-white font-semibold leading-snug line-clamp-3 mb-2.5">
                      {item.headline}
                    </p>
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/50 group-hover:text-white transition-colors">{item.outlet}</span>
                      <ExternalLink size={8} className="text-white/40 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile news strip — horizontal scroll pinned above letterbox */}
        <div className="lg:hidden absolute bottom-14 left-0 right-0 z-20 px-4">
          <div className="flex items-center gap-2 mb-2 px-1">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFD700]">
              <span className="w-1 h-1 rounded-full bg-black" />
              <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-black font-bold">Featured Coverage</span>
            </div>
            <span className="flex-1 h-px bg-white/10" />
            <span className="font-mono text-[8px] text-white/25 uppercase tracking-widest">Press · 2026</span>
          </div>
          <div className="flex gap-2.5 overflow-x-auto pb-1 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
            {[
              { outlet: 'Daily Sun', headline: 'Political Satire Film "The University of Chankharpul" Unveils Trailer', href: 'https://www.daily-sun.com/entertainment/877071/political-satire-film-the-university-of-chankharpul-unveils-trailer', accent: '#e87c1e', thumb: '/news1.png' },
              { outlet: 'Dhaka Tribune', headline: 'Trailer of "The University of Chankharpul"', href: 'https://www.dhakatribune.com/showtime/411199/trailer-of-%E2%80%9Cthe-university-of-chankharpul%E2%80%9D', accent: '#1a6fa8', thumb: '/news2.png' },
              { outlet: 'The Daily Star', headline: '"Good Cinema Will Always Find Its Place" — Akash Haque', href: 'https://www.thedailystar.net/culture/tv-film/news/good-cinema-will-always-find-its-place-akash-haque-4184886', accent: '#1d7c4d', thumb: '/news3.png' },
            ].map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative shrink-0 w-[130px] h-[155px] rounded-xl overflow-hidden snap-start"
                style={{ border: `1.5px solid ${item.accent}60` }}
              >
                <img src={item.thumb} alt={item.outlet} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }} />
                <div className="absolute top-[14px] -right-[18px] rotate-45 bg-[#FFD700] px-6 py-[2px]">
                  <span className="font-mono text-[6px] uppercase tracking-[0.2em] font-black text-black">Featured</span>
                </div>
                <div className="absolute top-2 left-2">
                  <div className="px-1.5 py-0.5 rounded font-mono text-[7px] uppercase tracking-[0.2em] font-bold text-white" style={{ background: item.accent }}>
                    {item.outlet.split(' ')[0]}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2.5">
                  <p className="text-[10px] text-white font-semibold leading-snug line-clamp-2">{item.headline}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Corner brackets */}
        <span className="absolute top-16 left-6 w-8 h-8 border-t border-l border-[#FFD700]/40 z-20" />
        <span className="absolute top-16 right-6 w-8 h-8 border-t border-r border-[#FFD700]/40 z-20" />
        <span className="absolute bottom-16 left-6 w-8 h-8 border-b border-l border-[#FFD700]/40 z-20" />
        <span className="absolute bottom-16 right-6 w-8 h-8 border-b border-r border-[#FFD700]/40 z-20" />
      </div>
    </section>
  )
}
