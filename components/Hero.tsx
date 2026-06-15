'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ExternalLink, Film } from 'lucide-react'
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
      press: 'Press Coverage',
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
      press: 'প্রেস কভারেজ',
    },
  } as const

  const t = translations[language]

  const pressCaptures = [
    {
      id: 'news-06',
      outlet: 'The Daily Star',
      title: "'The University of Chankharpul' to hit theatres this Friday",
      pdf: '/press/news-06.pdf',
      thumb: '/press/news-06.jpg',
    },
    {
      id: 'news-05',
      outlet: 'Prothom Alo',
      title: "গণরুমের তিক্ত অভিজ্ঞতা থেকে সিনেমা, আজ থেকে হলে 'ইউনিভার্সিটি অব চানখারপুল'",
      pdf: '/press/news-05.pdf',
      thumb: '/press/news-05.jpg',
    },
    {
      id: 'news-27',
      outlet: 'BDNews24',
      title: "ছাত্র রাজনীতির গল্প 'দ্য ইউনিভার্সিটি অব চানখাঁরপুল', অবশেষে হলে",
      pdf: '/press/news-27.pdf',
      thumb: '/press/news-27.jpg',
    },
    {
      id: 'news-11',
      outlet: 'Protidiner Bangladesh',
      title: "প্রথম দিনেই দর্শকদের প্রশংসায় ভাসছে 'দ্য ইউনিভার্সিটি অব চানখারপুল'",
      pdf: '/press/news-11.pdf',
      thumb: '/press/news-11.jpg',
    },
    {
      id: 'news-23',
      outlet: 'Samakal',
      title: 'ঈদের পর প্রেক্ষাগৃহে মুক্তি পেলো নতুন সিনেমা',
      pdf: '/press/news-23.pdf',
      thumb: '/press/news-23.jpg',
    },
    {
      id: 'news-28',
      outlet: 'Channel i',
      title: "'সত্যিই, সিনেমা বানানোর চেয়ে মুক্তি দেয়া বেশি কঠিন'",
      pdf: '/press/news-28.pdf',
      thumb: '/press/news-28.jpg',
    },
    {
      id: 'news-07',
      outlet: 'Jagonews24',
      title: "'ইউনিভার্সিটি অব চানখারপুল' কি বিশ্ববিদ্যালয়টিকে বিদ্রুপ করছে?",
      pdf: '/press/news-07.pdf',
      thumb: '/press/news-07.jpg',
    },
  ]

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

        {/* Center content: Beeteam Studios branding + press strip */}
        <motion.div
          style={{ y: titleY }}
          className="relative z-20 h-full flex flex-col"
        >
          {/* Beeteam Studios branding */}
          <div className="flex-1 flex flex-col items-center justify-center text-white px-8 lg:px-10 pt-16 pb-2">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-display text-[clamp(48px,7vw,148px)] text-white text-center leading-[0.85] w-full"
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
              className="text-base text-white/70 max-w-xs text-center mt-3 font-light tracking-wide"
            >
              {t.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row items-center gap-4 mt-5"
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

          {/* Press coverage strip — PDF captures */}
          <div className="shrink-0 px-4 pb-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-3 mb-2.5 px-1">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFD700] shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-black" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-black font-bold">
                    {t.press}
                  </span>
                </div>
                <span className="flex-1 h-px bg-white/15" />
                <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/30">
                  PDF · 2026
                </span>
              </div>

              <div
                className="flex gap-3 overflow-x-auto pb-2 snap-x xl:justify-center"
                style={{ scrollbarWidth: 'none' }}
              >
                {pressCaptures.map((item, i) => (
                  <motion.a
                    key={item.id}
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + i * 0.08 }}
                    whileHover={{ y: -6, scale: 1.03 }}
                    className="group shrink-0 w-[140px] snap-start"
                  >
                    <div className="relative h-[150px] rounded-xl overflow-hidden border border-white/15 group-hover:border-[#FFD700] bg-[#111] shadow-[0_12px_34px_-12px_rgba(0,0,0,0.85)] transition-colors">
                      <img
                        src={item.thumb}
                        alt={item.outlet}
                        className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/40" />

                      {/* Headline + open */}
                      <div className="absolute bottom-0 left-0 right-0 p-2.5">
                        <p className="text-[10px] leading-snug text-white font-semibold line-clamp-2">
                          {item.title}
                        </p>
                        <div className="flex items-center gap-1 mt-1 text-white/55 group-hover:text-[#FFD700] transition-colors">
                          <ExternalLink size={9} />
                          <span className="font-mono text-[7px] uppercase tracking-[0.2em]">Open</span>
                        </div>
                      </div>
                    </div>

                    {/* Outlet name below the card */}
                    <div className="mt-2 flex justify-center">
                      <span className="px-2.5 py-0.5 rounded bg-[#FFD700] text-black font-mono text-[8px] font-bold uppercase tracking-[0.18em] shadow">
                        {item.outlet}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Corner brackets */}
        <span className="absolute top-16 left-6 w-8 h-8 border-t border-l border-[#FFD700]/40 z-20" />
        <span className="absolute top-16 right-6 w-8 h-8 border-t border-r border-[#FFD700]/40 z-20" />
        <span className="absolute bottom-16 left-6 w-8 h-8 border-b border-l border-[#FFD700]/40 z-20" />
        <span className="absolute bottom-16 right-6 w-8 h-8 border-b border-r border-[#FFD700]/40 z-20" />
      </div>
    </section>
  )
}
