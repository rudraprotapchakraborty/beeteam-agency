'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Play, X } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const posters = [
  {
    src: '/poster1.jpg',
    alt: 'The University of Chankharpul — Theatrical Poster 01',
    labelEn: 'Poster 01',
    labelBn: 'পোস্টার ০১',
    size: '27 × 40 IN',
  },
  {
    src: '/poster2.jpg',
    alt: 'The University of Chankharpul — Theatrical Poster 02',
    labelEn: 'Poster 02',
    labelBn: 'পোস্টার ০২',
    size: '27 × 40 IN',
  },
  {
    src: '/BUFT poster 0001.jpg',
    alt: 'The University of Chankharpul — BUFT Premiere Poster 01',
    labelEn: 'BUFT Poster 01',
    labelBn: 'বিইউএফটি পোস্টার ০১',
    size: 'BUFT · 2026',
  },
  {
    src: '/BUFT poster 0002.jpg',
    alt: 'The University of Chankharpul — BUFT Premiere Poster 02',
    labelEn: 'BUFT Poster 02',
    labelBn: 'বিইউএফটি পোস্টার ০২',
    size: 'BUFT · 2026',
  },
] as const

type Poster = (typeof posters)[number]

const trailers = [
  {
    id: 'ErRnSJQ9nhg',
    titleEn: 'Official Trailer',
    titleBn: 'অফিসিয়াল ট্রেলার',
    meta: '02:44 · 4K',
  },
  {
    id: '0VWQgPVgRrs',
    titleEn: 'Official Trailer 02',
    titleBn: 'অফিসিয়াল ট্রেলার ০২',
    meta: 'YouTube · 4K',
  },
] as const

type Trailer = (typeof trailers)[number]

export default function LatestRelease() {
  const containerRef = useRef<HTMLElement | null>(null)
  const { language } = useLanguage()
  const [activePoster, setActivePoster] = useState<Poster | null>(null)
  const [activeTrailer, setActiveTrailer] = useState<Trailer | null>(null)

  const translations = {
    en: {
      eyebrow: 'Now Screening · 05',
      title1: 'Latest',
      title2: 'Release',
      tagline: 'Production House · Studio 2026',
      caption:
        'A satirical political drama by Monirul Haque Akash. Premiered at the 24th Dhaka International Film Festival.',
      posters: 'Posters',
      postersSub: 'Theatrical & premiere showcase assets',
      trailers: 'Trailers',
      trailersSub: 'Official film trailers',
      openPoster: 'View',
      playTrailer: 'Play',
      close: 'Close',
    },
    bn: {
      eyebrow: 'এখন প্রদর্শিত · ০৫',
      title1: 'সর্বশেষ',
      title2: 'প্রকাশনা',
      tagline: 'প্রোডাকশন হাউস · স্টুডিও ২০২৬',
      caption:
        'মনিরুল হক আকাশের একটি ব্যঙ্গাত্মক রাজনৈতিক নাটক। ২৪তম ঢাকা আন্তর্জাতিক চলচ্চিত্র উৎসবে প্রিমিয়ার।',
      posters: 'পোস্টার',
      postersSub: 'থিয়েটার ও প্রিমিয়ার শোকেস অ্যাসেট',
      trailers: 'ট্রেলার',
      trailersSub: 'অফিসিয়াল ফিল্ম ট্রেলারসমূহ',
      openPoster: 'দেখুন',
      playTrailer: 'চালান',
      close: 'বন্ধ',
    },
  } as const

  const t = translations[language]
  const lightboxOpen = Boolean(activePoster || activeTrailer)

  useEffect(() => {
    if (!lightboxOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActivePoster(null)
        setActiveTrailer(null)
      }
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [lightboxOpen])

  const closeLightbox = () => {
    setActivePoster(null)
    setActiveTrailer(null)
  }

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.5 })
  const yParallax = useTransform(smooth, [0, 1], [60, -60])

  return (
    <section
      ref={containerRef}
      id="latest-release"
      className="relative paper-tex pt-14 pb-20 overflow-hidden"
    >
      {/* Background flares */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[40%] h-[40%] bg-[#FFD700]/10 blur-[180px]" />
        <div className="absolute bottom-[5%] left-[10%] w-[30%] h-[30%] bg-amber-100/30 blur-[140px]" />
      </div>

      {/* Side ticker — vertical timecode */}
      <div className="hidden xl:block absolute left-6 top-32 [writing-mode:vertical-rl] rotate-180 font-mono text-[10px] uppercase tracking-[0.4em] text-black/30">
        T—00:01:24:08 · A1 · 24fps · DCP
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          style={{ y: yParallax }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-12 gap-8 mb-14 items-end"
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FFD700]">
                /05
              </span>
              <span className="h-px w-12 bg-[#FFD700]/40" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/50">
                {t.eyebrow}
              </span>
            </div>
            <h2 className="h-display text-[clamp(48px,8vw,128px)] text-black leading-[0.86] whitespace-nowrap">
              {t.title1}{' '}
              <span className="text-[#FFD700] relative inline-block">
                {t.title2}
                <motion.span
                  className="absolute left-0 -bottom-2 h-[3px] w-full bg-[#FFD700]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.4 }}
                  style={{ originX: 0 }}
                />
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 lg:pl-8 lg:border-l border-black/10">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/40 mb-3">
              {t.tagline}
            </div>
            <p className="font-serif-d italic text-lg text-black/75 leading-snug">
              {t.caption}
            </p>
          </div>
        </motion.div>

        {/* ========== PART 1: POSTERS ========== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FFD700]">
                  01
                </span>
                <span className="h-px w-8 bg-[#FFD700]/40" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/50">
                  Gallery
                </span>
              </div>
              <h3 className="h-display text-[clamp(32px,4vw,56px)] text-black leading-none">
                {t.posters}
              </h3>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-black/40">
                {t.postersSub}
              </p>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/30">
              {posters.length} assets
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {posters.map((poster, i) => (
              <motion.button
                key={poster.src}
                type="button"
                onClick={() => setActivePoster(poster)}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative block w-full text-left cursor-pointer"
              >
                <div className="relative aspect-[2/3] rounded-2xl overflow-hidden border border-black/10 bg-black shadow-[0_24px_60px_-20px_rgba(0,0,0,0.3)] group-hover:border-[#FFD700]/60 transition-colors">
                  <Image
                    src={poster.src}
                    alt={poster.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    priority={i < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                  {/* Frame brackets */}
                  <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#FFD700] z-10" />
                  <span className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#FFD700] z-10" />
                  <span className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#FFD700] z-10" />
                  <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#FFD700] z-10" />

                  <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <span className="block font-mono text-[9px] uppercase tracking-[0.25em] text-[#FFD700]">
                          {language === 'bn' ? poster.labelBn : poster.labelEn}
                        </span>
                        <span className="block font-mono text-[8px] uppercase tracking-[0.2em] text-white/50 mt-0.5">
                          {poster.size}
                        </span>
                      </div>
                      <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/70 group-hover:text-[#FFD700] transition-colors">
                        {t.openPoster}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* ========== PART 2: TRAILERS ========== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FFD700]">
                  02
                </span>
                <span className="h-px w-8 bg-[#FFD700]/40" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/50">
                  Screening
                </span>
              </div>
              <h3 className="h-display text-[clamp(32px,4vw,56px)] text-black leading-none">
                {t.trailers}
              </h3>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-black/40">
                {t.trailersSub}
              </p>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/30">
              {trailers.length} videos
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {trailers.map((trailer, i) => (
              <motion.button
                key={trailer.id}
                type="button"
                onClick={() => setActiveTrailer(trailer)}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative w-full text-left cursor-pointer"
              >
                <div className="mb-3 flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.25em] text-black/50">
                  <span className="flex items-center gap-2">
                    <Play size={10} className="fill-current text-[#FFD700]" />
                    {language === 'bn' ? trailer.titleBn : trailer.titleEn}
                  </span>
                  <span>{trailer.meta}</span>
                </div>

                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-black/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.2)] bg-black group-hover:border-[#FFD700]/60 transition-colors">
                  {/* YouTube thumbnail preview */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${trailer.id}/maxresdefault.jpg`}
                    alt={language === 'bn' ? trailer.titleBn : trailer.titleEn}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFD700] text-black shadow-[0_12px_40px_-8px_rgba(255,215,0,0.7)] group-hover:scale-110 transition-transform">
                      <Play size={22} className="fill-current ml-0.5" />
                    </span>
                  </div>

                  <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#FFD700] z-10" />
                  <span className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#FFD700] z-10" />
                  <span className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#FFD700] z-10" />
                  <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#FFD700] z-10" />

                  <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/80 group-hover:text-[#FFD700] transition-colors">
                      {t.playTrailer}
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Poster lightbox */}
      <AnimatePresence>
        {activePoster && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={language === 'bn' ? activePoster.labelBn : activePoster.labelEn}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              className="relative max-h-[90vh] flex flex-col items-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeLightbox}
                aria-label={t.close}
                className="absolute -top-2 -right-2 z-20 flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-[#FFD700] text-white hover:text-black transition-colors cursor-pointer"
              >
                <X size={16} strokeWidth={2.5} />
              </button>

              <div className="relative w-[min(100vw-2rem,28rem)] max-h-[80vh] aspect-[2/3] rounded-2xl overflow-hidden border border-white/15 bg-black shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
                <Image
                  src={activePoster.src}
                  alt={activePoster.alt}
                  fill
                  sizes="(min-width: 768px) 28rem, 90vw"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="mt-4 text-center">
                <span className="block font-mono text-[11px] uppercase tracking-[0.3em] text-[#FFD700]">
                  {language === 'bn' ? activePoster.labelBn : activePoster.labelEn}
                </span>
                <span className="block font-mono text-[9px] uppercase tracking-[0.25em] text-white/45 mt-1">
                  {activePoster.size}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trailer lightbox — same style as poster */}
      <AnimatePresence>
        {activeTrailer && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={language === 'bn' ? activeTrailer.titleBn : activeTrailer.titleEn}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              className="relative w-full max-w-5xl flex flex-col items-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeLightbox}
                aria-label={t.close}
                className="absolute -top-2 -right-2 md:-top-3 md:-right-3 z-20 flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-[#FFD700] text-white hover:text-black transition-colors cursor-pointer"
              >
                <X size={16} strokeWidth={2.5} />
              </button>

              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/15 bg-black shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${activeTrailer.id}?rel=0&modestbranding=1&autoplay=1`}
                  title={language === 'bn' ? activeTrailer.titleBn : activeTrailer.titleEn}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="mt-4 text-center">
                <span className="block font-mono text-[11px] uppercase tracking-[0.3em] text-[#FFD700]">
                  {language === 'bn' ? activeTrailer.titleBn : activeTrailer.titleEn}
                </span>
                <span className="block font-mono text-[9px] uppercase tracking-[0.25em] text-white/45 mt-1">
                  {activeTrailer.meta}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
