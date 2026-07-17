'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { Play, X } from 'lucide-react'
import Reveal, { SectionEyebrow } from '@/components/ui/Reveal'
import { EASE_OUT_EXPO, SPRING_SNAPPY } from '@/lib/motion'

const posters = [
  {
    src: '/poster1.jpg',
    alt: 'The University of Chankharpul — Theatrical Poster 01',
    label: 'Poster 01',
    size: '27 × 40 IN',
  },
  {
    src: '/poster2.jpg',
    alt: 'The University of Chankharpul — Theatrical Poster 02',
    label: 'Poster 02',
    size: '27 × 40 IN',
  },
  {
    src: '/BUFT poster 0001.jpg',
    alt: 'The University of Chankharpul — BUFT Premiere Poster 01',
    label: 'BUFT Poster 01',
    size: 'BUFT · 2026',
  },
  {
    src: '/BUFT poster 0002.jpg',
    alt: 'The University of Chankharpul — BUFT Premiere Poster 02',
    label: 'BUFT Poster 02',
    size: 'BUFT · 2026',
  },
] as const

type Poster = (typeof posters)[number]

const trailers = [
  {
    id: 'ErRnSJQ9nhg',
    title: 'Official Trailer',
    meta: '02:44 · 4K',
  },
  {
    id: '0VWQgPVgRrs',
    title: 'Official Trailer 02',
    meta: 'YouTube · 4K',
  },
] as const

type Trailer = (typeof trailers)[number]

export default function LatestRelease() {
  const containerRef = useRef<HTMLElement | null>(null)
  const [activePoster, setActivePoster] = useState<Poster | null>(null)
  const [activeTrailer, setActiveTrailer] = useState<Trailer | null>(null)

  const t = {
      eyebrow: 'Now Screening · Gallery',
      title1: 'Latest',
      title2: 'Release',
      tagline: 'Production House · Studio 2026',
      caption:
        'A satirical political drama by Monirul Haque Akash. Premiered at the 24th Dhaka International Film Festival.',
      posters: 'Posters',
      postersSub: 'Theatrical & premiere assets',
      trailers: 'Trailers',
      trailersSub: 'Official film trailers',
      openPoster: 'View',
      playTrailer: 'Play',
      close: 'Close',
    }
  const lightboxOpen = Boolean(activePoster || activeTrailer)

  useEffect(() => {
    if (!lightboxOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActivePoster(null)
        setActiveTrailer(null)
      }
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = prev
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
  const trackX = useTransform(scrollYProgress, [0.1, 0.6], [0, -80])

  return (
    <section
      ref={containerRef}
      id="latest-release"
      className="relative bg-page-3 pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb top-1/3 left-0 w-[500px] h-[500px] bg-gold/[0.05]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 mb-16 items-end">
          <Reveal className="lg:col-span-7">
            <SectionEyebrow index="/05" label={t.eyebrow} />
            <h2 className="h-display text-[clamp(48px,9vw,128px)] text-fg leading-[0.86]">
              {t.title1}{' '}
              <span className="text-gold-bright">{t.title2}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9 lg:pl-8 lg:border-l border-line">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-subtle mb-3">
              {t.tagline}
            </div>
            <p className="font-serif-d italic text-lg text-muted leading-snug">
              {t.caption}
            </p>
          </Reveal>
        </div>

        {/* Horizontal poster rail — signature moment */}
        <div className="mb-20">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="h-display text-[clamp(32px,4vw,52px)] text-fg leading-none">
                {t.posters}
              </h3>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-subtle">
                {t.postersSub}
              </p>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-faint">
              {posters.length} assets
            </span>
          </div>

          <motion.div style={{ x: trackX }} className="flex gap-5 md:gap-6 overflow-visible">
            {posters.map((poster, i) => (
              <motion.button
                key={poster.src}
                type="button"
                onClick={() => setActivePoster(poster)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: EASE_OUT_EXPO }}
                whileHover={{ y: -10, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
                className={`group relative shrink-0 w-[42vw] sm:w-[28vw] md:w-[22vw] max-w-[260px] text-left cursor-pointer ${
                  i % 2 === 1 ? 'mt-8 md:mt-14' : ''
                }`}
              >
                <div className="relative aspect-[2/3] rounded-2xl overflow-hidden border border-line bg-black shadow-premium group-hover:border-gold-bright/50 transition-colors duration-500">
                  <Image
                    src={poster.src}
                    alt={poster.alt}
                    fill
                    sizes="260px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    priority={i < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                    <span className="block font-mono text-[9px] uppercase tracking-[0.25em] text-gold-bright">
                      {poster.label}
                    </span>
                    <span className="block font-mono text-[8px] uppercase tracking-[0.2em] text-subtle mt-1">
                      {poster.size}
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Trailers — large immersive cards */}
        <div>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="h-display text-[clamp(32px,4vw,52px)] text-fg leading-none">
                {t.trailers}
              </h3>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-subtle">
                {t.trailersSub}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {trailers.map((trailer, i) => (
              <motion.button
                key={trailer.id}
                type="button"
                onClick={() => setActiveTrailer(trailer)}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: i * 0.1, ease: EASE_OUT_EXPO }}
                whileHover={{ y: -4 }}
                className="group relative w-full text-left cursor-pointer"
              >
                <div className="relative w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden border border-line bg-black shadow-premium group-hover:border-gold-bright/40 transition-all duration-500">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${trailer.id}/maxresdefault.jpg`}
                    alt={trailer.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <span className="flex h-16 w-16 md:h-18 md:w-18 items-center justify-center rounded-full bg-gold-bright text-black shadow-gold group-hover:scale-110 transition-transform duration-400">
                      <Play size={22} className="fill-current ml-0.5" />
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex justify-between items-end">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-bright">
                        {trailer.title}
                      </span>
                      <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-subtle mt-1">
                        {trailer.meta}
                      </span>
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted group-hover:text-gold-bright transition-colors">
                      {t.playTrailer}
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightboxes */}
      <AnimatePresence>
        {activePoster && (
          <motion.div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={SPRING_SNAPPY}
              className="relative max-h-[90vh] flex flex-col items-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeLightbox}
                aria-label={t.close}
                className="absolute -top-2 -right-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-gold-bright text-fg hover:text-black transition-colors"
              >
                <X size={16} strokeWidth={2.5} />
              </button>
              <div className="relative w-[min(100vw-2rem,28rem)] max-h-[80vh] aspect-[2/3] rounded-2xl overflow-hidden border border-line-strong bg-black shadow-premium">
                <Image
                  src={activePoster.src}
                  alt={activePoster.alt}
                  fill
                  sizes="28rem"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="mt-4 text-center">
                <span className="block font-mono text-[11px] uppercase tracking-[0.3em] text-gold-bright">
                  {activePoster.label}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeTrailer && (
          <motion.div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={SPRING_SNAPPY}
              className="relative w-full max-w-5xl flex flex-col items-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeLightbox}
                aria-label={t.close}
                className="absolute -top-2 -right-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-gold-bright text-fg hover:text-black transition-colors"
              >
                <X size={16} strokeWidth={2.5} />
              </button>
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-line-strong bg-black shadow-premium">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${activeTrailer.id}?rel=0&modestbranding=1&autoplay=1`}
                  title={activeTrailer.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
