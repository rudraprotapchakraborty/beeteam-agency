'use client'

import { useRef } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Film,
  Play,
} from 'lucide-react'
import { getNewsImage, newsData } from '@/lib/newsData'
import MagneticButton from '@/components/ui/MagneticButton'
import { EASE_OUT_EXPO } from '@/lib/motion'

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
    thumb: getNewsImage(news), // null when image is empty — no auto thumbnail
    kind: 'link' as const,
    featured: Boolean(news.featured),
  })),
].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))

export default function Hero() {
  const containerRef = useRef<HTMLElement | null>(null)
  const scrollerRef = useRef<HTMLDivElement | null>(null)

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const glowX = useSpring(useTransform(mouseX, [0, 1], [20, 80]), { stiffness: 40, damping: 20 })
  const glowY = useSpring(useTransform(mouseY, [0, 1], [20, 70]), { stiffness: 40, damping: 20 })
  const glowBg = useMotionTemplate`radial-gradient(600px circle at ${glowX}% ${glowY}%, rgba(255, 215, 0,0.18), transparent 55%)`

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const heroBgY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const heroBgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])
  const contentBlur = useTransform(scrollYProgress, [0, 0.5], [0, 8])
  const contentFilter = useMotionTemplate`blur(${contentBlur}px)`

  const t = {
      tagline: 'When a team failed',
      title1: 'BEETEAM',
      title2: 'STUDIOS',
      trailer: 'Watch Trailer',
      viewWork: 'View Reel',
      press: 'Press Desk',
      open: 'Open',
      featured: 'Featured',
      link: 'Link',
      prev: 'Previous',
      next: 'Next',
      scrollHint: 'Drag or scroll',
      live: 'Now screening',
      film: 'The University of Chankharpul',
    }

  const scrollByCards = (dir: -1 | 1) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: dir * 300, behavior: 'smooth' })
  }

  return (
    <section
      ref={containerRef}
      className="relative"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set((e.clientX - rect.left) / rect.width)
        mouseY.set((e.clientY - rect.top) / rect.height)
      }}
    >
      <div className="relative min-h-[100svh] w-full overflow-hidden bg-[#030303] flex flex-col hero-cinematic">
        {/* Cinematic background */}
        <motion.div style={{ y: heroBgY, scale: heroBgScale }} className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-[#030303]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(3,3,3,0.85)_100%)]" />
        </motion.div>

        {/* Interactive lighting */}
        <motion.div
          className="absolute inset-0 pointer-events-none mix-blend-screen"
          style={{ background: glowBg }}
        />

        {/* Floating particles (CSS only — performant) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-[#ffd700]/30"
              style={{
                width: 2 + (i % 3),
                height: 2 + (i % 3),
                left: `${8 + i * 7.5}%`,
                top: `${15 + (i * 13) % 60}%`,
                animation: `float-y ${5 + (i % 4)}s ease-in-out ${i * 0.3}s infinite`,
                opacity: 0.25 + (i % 5) * 0.08,
              }}
            />
          ))}
        </div>

        {/* Branding — fills space above news, clears navbar */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity, filter: contentFilter }}
          className="relative z-20 flex-1 min-h-0 flex flex-col items-center justify-center text-white px-6 pt-24 sm:pt-28 pb-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE_OUT_EXPO }}
            className="mb-3 sm:mb-4 flex items-center gap-3"
          >
            <span className="dot-pulse" />
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.4em] text-[#ffd700]/90">
              {t.tagline}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease: EASE_OUT_EXPO }}
            className="h-display text-[clamp(44px,11vw,140px)] text-center leading-[0.82] w-full"
          >
            <span className="block text-white drop-shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
              {t.title1}
            </span>
            <span className="block text-[#ffd700] -mt-[0.06em]">
              {t.title2}
            </span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.45, ease: EASE_OUT_EXPO }}
            style={{ originX: 0.5 }}
            className="mt-4 h-px w-36 bg-gradient-to-r from-transparent via-[#ffd700] to-transparent"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mt-4 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.32em] text-white/45 text-center"
          >
            {t.live} · {t.film}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: EASE_OUT_EXPO }}
            className="flex flex-col sm:flex-row items-center gap-3 mt-6"
          >
            <MagneticButton
              href="https://www.youtube.com/watch?v=ErRnSJQ9nhg"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-3.5 bg-[#ffd700] text-black text-[11px] font-extrabold uppercase tracking-[0.22em] rounded-full flex items-center gap-2.5 shadow-gold sheen overflow-hidden"
            >
              <Play size={14} strokeWidth={3} className="relative z-10 fill-current" />
              <span className="relative z-10">{t.trailer}</span>
            </MagneticButton>

            <MagneticButton
              href="/works"
              className="group flex items-center gap-2.5 text-white text-[11px] font-extrabold uppercase tracking-[0.22em] px-8 py-3.5 rounded-full border border-white/15 hover:border-[#ffd700]/60 hover:text-[#ffd700] transition-colors glass"
            >
              <Film size={14} />
              {t.viewWork}
              <ExternalLink
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Press strip — in flow, not overlaid on CTAs */}
        <div id="press" className="relative z-30 shrink-0 pb-5 sm:pb-7 pt-2">
          <div className="mx-auto max-w-[96rem] px-3 sm:px-5">
            <div className="glass-strong rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-premium border border-white/10">
              <div className="flex items-center gap-2 mb-3 px-1">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ffd700] shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-black font-bold">
                    {t.press}
                  </span>
                </div>
                <span className="flex-1 h-px bg-white/10" />
                <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/35 hidden sm:inline shrink-0">
                  {newsBarItems.length} · {t.scrollHint}
                </span>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    aria-label={t.prev}
                    onClick={() => scrollByCards(-1)}
                    className="h-8 w-8 rounded-full border border-white/12 bg-white/[0.04] text-white hover:border-[#ffd700] hover:text-[#ffd700] flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    aria-label={t.next}
                    onClick={() => scrollByCards(1)}
                    className="h-8 w-8 rounded-full border border-white/12 bg-white/[0.04] text-white hover:border-[#ffd700] hover:text-[#ffd700] flex items-center justify-center transition-colors"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <div
                ref={scrollerRef}
                className="flex gap-3 overflow-x-auto overflow-y-hidden pb-3 news-scrollbar touch-pan-x"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                {newsBarItems.map((item, i) => (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group shrink-0 w-[140px] sm:w-[152px] snap-start"
                  >
                    <div className="relative h-[128px] sm:h-[136px] rounded-xl overflow-hidden border border-white/10 group-hover:border-[#ffd700]/70 bg-[#111] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_16px_40px_-12px_rgba(255, 215, 0,0.25)]">
                      {item.thumb ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={item.thumb}
                          alt={item.outlet}
                          loading={i < 6 ? 'eager' : 'lazy'}
                          className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-[#111] to-[#0a0a0a]">
                          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.18),transparent_55%)]" />
                          <div className="absolute inset-0 flex items-center justify-center px-3">
                            <span className="font-display text-[22px] leading-none text-white/12 text-center uppercase">
                              {item.outlet.slice(0, 16)}
                            </span>
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/30" />
                      <div className="absolute top-2 left-2 z-10">
                        <span
                          className={`font-mono text-[7px] uppercase tracking-[0.18em] px-1.5 py-0.5 rounded ${
                            item.featured
                              ? 'bg-[#ffd700] text-black font-bold'
                              : 'bg-black/55 text-white/65 border border-white/10'
                          }`}
                        >
                          {item.featured ? t.featured : t.link}
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-2.5 z-10">
                        <p className="text-[10px] leading-snug text-white font-semibold line-clamp-2">
                          {item.title}
                        </p>
                        <div className="flex items-center gap-1 mt-1 text-white/45 group-hover:text-[#ffd700] transition-colors">
                          <ExternalLink size={9} />
                          <span className="font-mono text-[7px] uppercase tracking-[0.18em]">
                            {t.open}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex justify-center">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#ffd700]/90 text-black font-mono text-[8px] font-bold uppercase tracking-[0.14em] max-w-full truncate">
                        {item.outlet}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
