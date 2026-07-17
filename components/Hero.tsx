'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, Film, Play } from 'lucide-react'
import { newsData } from '@/lib/newsData'
import { useLanguage } from '@/context/LanguageContext'

const pressCaptures = [
  {
    id: 'news-06',
    outlet: 'The Daily Star',
    title: "'The University of Chankharpul' to hit theatres this Friday",
    href: '/press/news-06.pdf',
    thumb: '/press/news-06.jpg',
    kind: 'pdf' as const,
    featured: true,
  },
  {
    id: 'news-05',
    outlet: 'Prothom Alo',
    title: "গণরুমের তিক্ত অভিজ্ঞতা থেকে সিনেমা, আজ থেকে হলে 'ইউনিভার্সিটি অব চানখারপুল'",
    href: '/press/news-05.pdf',
    thumb: '/press/news-05.jpg',
    kind: 'pdf' as const,
    featured: true,
  },
  {
    id: 'news-27',
    outlet: 'BDNews24',
    title: "ছাত্র রাজনীতির গল্প 'দ্য ইউনিভার্সিটি অব চানখাঁরপুল', অবশেষে হলে",
    href: '/press/news-27.pdf',
    thumb: '/press/news-27.jpg',
    kind: 'pdf' as const,
    featured: true,
  },
  {
    id: 'news-11',
    outlet: 'Protidiner Bangladesh',
    title: "প্রথম দিনেই দর্শকদের প্রশংসায় ভাসছে 'দ্য ইউনিভার্সিটি অব চানখারপুল'",
    href: '/press/news-11.pdf',
    thumb: '/press/news-11.jpg',
    kind: 'pdf' as const,
    featured: true,
  },
  {
    id: 'news-23',
    outlet: 'Samakal',
    title: 'ঈদের পর প্রেক্ষাগৃহে মুক্তি পেলো নতুন সিনেমা',
    href: '/press/news-23.pdf',
    thumb: '/press/news-23.jpg',
    kind: 'pdf' as const,
    featured: true,
  },
  {
    id: 'news-28',
    outlet: 'Channel i',
    title: "'সত্যিই, সিনেমা বানানোর চেয়ে মুক্তি দেয়া বেশি কঠিন'",
    href: '/press/news-28.pdf',
    thumb: '/press/news-28.jpg',
    kind: 'pdf' as const,
    featured: true,
  },
  {
    id: 'news-07',
    outlet: 'Jagonews24',
    title: "'ইউনিভার্সিটি অব চানখারপুল' কি বিশ্ববিদ্যালয়টিকে বিদ্রুপ করছে?",
    href: '/press/news-07.pdf',
    thumb: '/press/news-07.jpg',
    kind: 'pdf' as const,
    featured: true,
  },
]

type NewsBarItem = {
  id: string
  outlet: string
  title: string
  href: string
  thumb: string | null
  kind: 'pdf' | 'link'
  featured?: boolean
}

const newsBarItems: NewsBarItem[] = [
  ...pressCaptures,
  ...newsData.map((news, i) => ({
    id: `link-${i}-${news.outlet}`,
    outlet: news.outlet,
    title: news.title,
    href: news.href,
    thumb: null,
    kind: 'link' as const,
    featured: Boolean(news.featured),
  })),
].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))

export default function Hero() {
  const { language } = useLanguage()
  const containerRef = useRef<HTMLElement | null>(null)
  const scrollerRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const heroBgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroBgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18])
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-40%'])

  const translations = {
    en: {
      tagline: 'When a team failed',
      title1: 'BEETEAM',
      title2: 'STUDIOS',
      trailer: 'Watch Trailer',
      viewWork: 'View Reel',
      featureBadge: 'Feature Film · 2026',
      runtime: 'Runtime · 134 min',
      shot: 'Shot on RED · 4K UHD',
      press: 'Press Coverage',
      open: 'Open',
      featured: '★ Featured',
      link: 'Link',
      prev: 'Previous',
      next: 'Next',
      scrollHint: 'Use arrows or scroll',
    },
    bn: {
      tagline: 'When a team failed',
      title1: 'বিটিম',
      title2: 'স্টুডিওস',
      trailer: 'ট্রেলার দেখুন',
      viewWork: 'রিল দেখুন',
      featureBadge: 'ফিচার ফিল্ম · ২০২৬',
      runtime: 'সময়কাল · ১৪৪ মিনিট',
      shot: 'RED-এ ধারণকৃত · 4K UHD',
      press: 'প্রেস কভারেজ',
      open: 'খুলুন',
      featured: '★ ফিচার্ড',
      link: 'লিংক',
      prev: 'আগে',
      next: 'পরে',
      scrollHint: 'অ্যারো বা স্ক্রল ব্যবহার করুন',
    },
  } as const

  const t = translations[language]

  const scrollByCards = (dir: -1 | 1) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: dir * 320, behavior: 'smooth' })
  }

  const openNewsItem = (item: NewsBarItem, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    window.open(item.href, '_blank', 'noopener,noreferrer')
  }

  return (
    <section ref={containerRef} className="relative font-sans">
      <div className="relative h-[100svh] min-h-[760px] w-full overflow-hidden bg-[#0a0a0a] grain">
        <motion.div style={{ y: heroBgY, scale: heroBgScale }} className="absolute inset-0">
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
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#0a0a0a] z-10" />

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

        <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 font-mono text-[10px] uppercase tracking-[0.4em] text-white/50 z-20">
          T—00:00:08:24 · A1 · 24fps
        </div>
        <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] font-mono text-[10px] uppercase tracking-[0.4em] text-white/50 z-20">
          DIRECTOR · MONIRUL HAQUE AKASH · 2026
        </div>

        {/* Branding only (parallax) — news bar is NOT inside this transform */}
        <motion.div
          style={{ y: titleY }}
          className="relative z-20 h-full flex flex-col items-center justify-center text-white px-8 lg:px-10 pb-44"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mb-4 font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.35em] text-[#FFD700]/90 text-center"
          >
            {t.tagline}
          </motion.p>

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-5"
          >
            <motion.a
              href="https://www.youtube.com/watch?v=ErRnSJQ9nhg"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-7 py-3.5 bg-[#FFD700] text-black text-[11px] font-extrabold uppercase tracking-[0.22em] rounded-full flex items-center gap-2.5 shadow-[0_12px_40px_-12px_rgba(255,215,0,0.6)] sheen overflow-hidden"
            >
              <Play size={14} strokeWidth={3} className="relative z-10 fill-current" />
              <span className="relative z-10">{t.trailer}</span>
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
              <ExternalLink
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* News scroll bar — fixed to hero bottom, outside parallax transform */}
        <div
          id="press"
          className="absolute left-0 right-0 bottom-10 z-30 px-3 sm:px-5"
        >
          <div className="flex items-center gap-2 mb-2 px-1">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFD700] shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-black font-bold">
                {t.press}
              </span>
            </div>
            <span className="flex-1 h-px bg-white/15" />
            <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/40 shrink-0">
              {newsBarItems.length} items · {t.scrollHint}
            </span>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                aria-label={t.prev}
                onClick={() => scrollByCards(-1)}
                className="h-8 w-8 rounded-full border border-white/20 bg-black/50 text-white hover:border-[#FFD700] hover:text-[#FFD700] flex items-center justify-center transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                aria-label={t.next}
                onClick={() => scrollByCards(1)}
                className="h-8 w-8 rounded-full border border-white/20 bg-black/50 text-white hover:border-[#FFD700] hover:text-[#FFD700] flex items-center justify-center transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div
            ref={scrollerRef}
            className="flex gap-3 overflow-x-auto overflow-y-hidden pb-2 touch-pan-x"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(255,215,0,0.55) rgba(255,255,255,0.08)',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {newsBarItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => openNewsItem(item, e)}
                className="group shrink-0 w-[148px] snap-start cursor-pointer"
              >
                <div className="relative h-[142px] rounded-xl overflow-hidden border border-white/15 group-hover:border-[#FFD700] bg-[#111] shadow-[0_12px_34px_-12px_rgba(0,0,0,0.85)] transition-colors">
                  {item.thumb ? (
                    <img
                      src={item.thumb}
                      alt={item.outlet}
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(145deg, ${item.featured ? '#2a2208' : '#1a1a1a'} 0%, #0a0a0a 100%)`,
                      }}
                    >
                      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.25),transparent_55%)]" />
                      <div className="absolute inset-0 flex items-center justify-center px-3">
                        <span className="font-display text-[26px] leading-none text-white/15 text-center uppercase">
                          {item.outlet.slice(0, 18)}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-black/35" />

                  <div className="absolute top-2 left-2 z-10">
                    {item.featured ? (
                      <span className="font-mono text-[7px] uppercase tracking-[0.2em] px-1.5 py-0.5 rounded bg-[#FFD700] text-black font-bold border border-[#FFD700]">
                        {t.featured}
                      </span>
                    ) : (
                      <span className="font-mono text-[7px] uppercase tracking-[0.2em] px-1.5 py-0.5 rounded bg-black/60 text-white/70 border border-white/10">
                        {t.link}
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-2.5 z-10">
                    <p className="text-[10px] leading-snug text-white font-semibold line-clamp-2">
                      {item.title}
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-white/55 group-hover:text-[#FFD700] transition-colors">
                      <ExternalLink size={9} />
                      <span className="font-mono text-[7px] uppercase tracking-[0.2em]">
                        {t.open}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex justify-center">
                  <span className="px-2.5 py-0.5 rounded bg-[#FFD700] text-black font-mono text-[8px] font-bold uppercase tracking-[0.18em] shadow max-w-full truncate">
                    {item.outlet}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Corner brackets */}
        <span className="absolute top-16 left-6 w-8 h-8 border-t border-l border-[#FFD700]/40 z-20" />
        <span className="absolute top-16 right-6 w-8 h-8 border-t border-r border-[#FFD700]/40 z-20" />
        <span className="absolute bottom-[15.5rem] left-6 w-8 h-8 border-b border-l border-[#FFD700]/40 z-20" />
        <span className="absolute bottom-[15.5rem] right-6 w-8 h-8 border-b border-r border-[#FFD700]/40 z-20" />
      </div>
    </section>
  )
}
