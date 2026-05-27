'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Play } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function LatestRelease() {
  const containerRef = useRef<HTMLElement | null>(null)
  const { language } = useLanguage()

  const translations = {
    en: {
      eyebrow: 'Now Screening · 05',
      title1: 'Latest',
      title2: 'Release',
      tagline: 'Production House · Studio 2026',
      resolution: 'Resolution',
      duration: 'Duration',
      trailer: 'Official Trailer',
      poster: 'Theatrical Poster',
      caption: 'A satirical political drama by Monirul Haque. Premiered at the 24th Dhaka International Film Festival.',
    },
    bn: {
      eyebrow: 'এখন প্রদর্শিত · ০৫',
      title1: 'সর্বশেষ',
      title2: 'প্রকাশনা',
      tagline: 'প্রোডাকশন হাউস · স্টুডিও ২০২৬',
      resolution: 'রেজোলিউশন',
      duration: 'সময়কাল',
      trailer: 'অফিসিয়াল ট্রেলার',
      poster: 'থিয়েটার পোস্টার',
      caption: 'মনিরুল হকের একটি ব্যঙ্গাত্মক রাজনৈতিক নাটক। ২৪তম ঢাকা আন্তর্জাতিক চলচ্চিত্র উৎসবে প্রিমিয়ার।',
    },
  } as const

  const t = translations[language]

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.5 })
  const yParallax = useTransform(smooth, [0, 1], [60, -60])
  const posterY = useTransform(smooth, [0, 1], [40, -40])
  const scaleSoft = useTransform(smooth, [0, 1], [0.97, 1.03])

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
          className="grid lg:grid-cols-12 gap-8 mb-10 items-end"
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">
                /05
              </span>
              <span className="h-px w-12 bg-[#d4af37]/40" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/50">
                {t.eyebrow}
              </span>
            </div>
            <h2 className="h-display text-[clamp(48px,8vw,128px)] text-black leading-[0.86] whitespace-nowrap">
              {t.title1}{' '}
              <span className="text-[#d4af37] relative inline-block">
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

        {/* Trailer + Poster */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* TRAILER */}
          <motion.div
            style={{ scale: scaleSoft }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute -top-4 left-0 right-0 flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.25em] text-black/50 z-10 pointer-events-none">
              <span className="flex items-center gap-2">
                <Play size={10} className="fill-current text-[#FFD700]" />
                {t.trailer}
              </span>
              <span>02:44 · 4K</span>
            </div>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-black/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.2)] bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/ErRnSJQ9nhg?rel=0&modestbranding=1"
                title="Official Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              {/* Inner frame */}
              <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#FFD700] z-10 pointer-events-none" />
              <span className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#FFD700] z-10 pointer-events-none" />
              <span className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#FFD700] z-10 pointer-events-none" />
              <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#FFD700] z-10 pointer-events-none" />
            </div>
          </motion.div>

          {/* POSTER */}
          <motion.div
            style={{ y: posterY }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute -top-4 left-0 right-0 flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.25em] text-black/50 z-10 pointer-events-none">
              <span>{t.poster}</span>
              <span>27 × 40 IN</span>
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden border border-black/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)] bg-black group h-full">
              <div className="relative h-full min-h-[330px] md:min-h-[380px]">
                <Image
                  src="/poster1.jpg"
                  alt="Official Poster"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-[1.04]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
              <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#FFD700] z-10 pointer-events-none" />
              <span className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#FFD700] z-10 pointer-events-none" />
              <span className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#FFD700] z-10 pointer-events-none" />
              <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#FFD700] z-10 pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Spec strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 grid grid-cols-3 gap-px bg-black/10 border border-black/10 rounded-xl overflow-hidden"
        >
          <SpecCell label={t.resolution} value="4K UHD" mono />
          <SpecCell label={t.duration} value="02:14" mono accent />
          <SpecCell label="Format" value="DCP · MP4" mono />
        </motion.div>
      </div>
    </section>
  )
}

function SpecCell({
  label,
  value,
  mono,
  accent,
}: {
  label: string
  value: string
  mono?: boolean
  accent?: boolean
}) {
  return (
    <div className="bg-[#faf8f3] p-5 flex flex-col gap-2">
      <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-black/40">{label}</div>
      <div
        className={`text-base font-semibold ${mono ? 'font-mono-d' : ''} ${accent ? 'text-[#d97706]' : 'text-black'}`}
      >
        {value}
      </div>
    </div>
  )
}
