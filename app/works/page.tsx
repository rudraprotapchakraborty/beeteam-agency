'use client'

import { useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Film, Play, X } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

type Project = {
  id: string
  title: string
  category: string
}

const projects: Project[] = [
  { id: 'VpOd1qnnJHw', title: '', category: '' },
  { id: 'nvwHhE5el6o', title: '', category: '' },
  { id: 'UqMWgsWH7RU', title: '', category: '' },
  { id: 'por5d5Nelog', title: '', category: '' },
  { id: '2LJWoKDKiqc', title: '', category: '' },
  { id: 'QTgY29dOPnQ', title: '', category: '' },
]

type Categories = {
  film: string
  tvc: string
  ovc: string
  ads: string
  doc: string
  music: string
}

export default function Works() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const containerRef = useRef<HTMLElement | null>(null)
  const { language } = useLanguage()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })
  const headerY = useTransform(scrollYProgress, [0, 0.3], ['0%', '-20%'])

  const translations = {
    en: {
      eyebrow: 'Reel Index · 01',
      title1: 'Our',
      title2: 'Works',
      subtitle: 'A curated selection of cinematic narratives and high-impact visual storytelling.',
      total: 'Reels',
      year: '2026',
      categories: {
        film: 'Film',
        tvc: 'TVC',
        ovc: 'OVC',
        ads: 'Ads',
        doc: 'Documentary',
        music: 'Music Video',
      },
      filterAll: 'All',
      reel: 'Reel',
      esc: 'ESC · close',
    },
    bn: {
      eyebrow: 'রিল ইনডেক্স · ০১',
      title1: 'আমাদের',
      title2: 'কাজ',
      subtitle: 'সিনেমাটিক গল্প ও উচ্চ-প্রভাবশালী ভিজ্যুয়াল স্টোরিটেলিং-এর নির্বাচিত সংগ্রহ।',
      total: 'রিল',
      year: '২০২৬',
      categories: {
        film: 'ফিল্ম',
        tvc: 'টিভিসি',
        ovc: 'ওভিসি',
        ads: 'বিজ্ঞাপন',
        doc: 'ডকুমেন্টারি',
        music: 'মিউজিক ভিডিও',
      },
      filterAll: 'সব',
      reel: 'রিল',
      esc: 'ESC · বন্ধ',
    },
  } as const

  const t = translations[language]

  return (
    <section
      id="works"
      ref={containerRef}
      className="relative pt-40 pb-32 paper-tex overflow-hidden min-h-screen"
    >
      {/* Bg flares */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[40%] h-[40%] bg-[#FFD700]/10 blur-[180px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[35%] h-[35%] bg-amber-100/30 blur-[140px]" />
      </div>

      {/* Side timecode */}
      <div className="hidden xl:block absolute left-6 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 font-mono text-[10px] uppercase tracking-[0.4em] text-black/30">
        T—00:00:00:00 · INDEX · 24fps
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <motion.div
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="grid lg:grid-cols-12 gap-8 mb-20 items-end"
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">
                /01
              </span>
              <span className="h-px w-12 bg-[#d4af37]/40" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/50">
                {t.eyebrow}
              </span>
            </div>
            <h1 className="h-display text-[clamp(72px,13vw,220px)] text-black leading-[0.86]">
              {t.title1}
              <br />
              <span className="text-[#d4af37] relative inline-block">
                {t.title2}
                <motion.span
                  className="absolute left-0 -bottom-2 h-[3px] w-full bg-[#FFD700]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, delay: 0.4 }}
                  style={{ originX: 0 }}
                />
              </span>
            </h1>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 lg:pl-8 lg:border-l border-black/10 space-y-5">
            <p className="text-base text-black/65 leading-relaxed">{t.subtitle}</p>
            <div className="flex gap-6 pt-2">
              <div>
                <div className="font-display text-4xl text-black flex items-center gap-2">
                  <Film size={20} className="text-[#FFD700]" strokeWidth={2} />
                  {String(projects.length).padStart(2, '0')}
                </div>
                <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-black/40 mt-1">
                  {t.total}
                </div>
              </div>
              <div>
                <div className="font-display text-4xl text-[#d97706]">{t.year}</div>
                <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-black/40 mt-1">
                  Index Year
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* PROJECTS GRID — uniform */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item, i) => (
            <ProjectCard
              key={item.id}
              item={item}
              index={i}
              onClick={() => setSelectedProject(item)}
              categoryLabel={t.categories[item.category as keyof Categories] ?? ''}
              reelLabel={t.reel}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-8"
            onClick={() => setSelectedProject(null)}
          >
            {/* Top bar */}
            <div className="absolute top-8 left-8 right-8 flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.3em] text-white/60 z-10">
              <span className="flex items-center gap-2">
                <span className="dot-pulse" />
                Now Playing
              </span>
              <button
                onClick={() => setSelectedProject(null)}
                className="hover:rotate-90 transition-transform text-white"
              >
                <X size={32} />
              </button>
            </div>

            <motion.div
              initial={{ scale: 0.92, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 30 }}
              transition={{ type: 'spring', stiffness: 120 }}
              className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-[0_60px_140px_-30px_rgba(0,0,0,0.6)] bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${selectedProject.id}?autoplay=1&rel=0&modestbranding=1`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
              <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#FFD700] z-10 pointer-events-none" />
              <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#FFD700] z-10 pointer-events-none" />
              <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#FFD700] z-10 pointer-events-none" />
              <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#FFD700] z-10 pointer-events-none" />
            </motion.div>

            <div className="absolute bottom-8 left-8 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
              {t.esc}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

type ProjectCardProps = {
  item: Project
  index: number
  onClick: () => void
  categoryLabel: string
  reelLabel: string
}

function ProjectCard({ item, index, onClick, categoryLabel, reelLabel }: ProjectCardProps) {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.7, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group relative bg-black rounded-2xl overflow-hidden border border-black/10 cursor-pointer transition-all duration-500 hover:shadow-[0_40px_100px_-25px_rgba(0,0,0,0.4)] hover:border-[#FFD700]/40 aspect-video"
    >
      <div className="absolute inset-0">
        <iframe
          className="w-full h-full scale-[1.8] opacity-80 group-hover:scale-[1.6] transition-transform duration-[2s] ease-out pointer-events-none"
          src={`https://www.youtube.com/embed/${item.id}?controls=0&rel=0&mute=1&playlist=${item.id}&loop=1&autoplay=1&modestbranding=1`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      </div>

      {/* Top tape */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
        <span className="px-2.5 py-1 bg-[#FFD700] text-black font-mono text-[9px] uppercase tracking-[0.25em] rounded font-bold">
          {reelLabel} · {String(index + 1).padStart(2, '0')}
        </span>
        <motion.div
          whileHover={{ x: 4, y: -4 }}
          className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ArrowUpRight size={14} />
        </motion.div>
      </div>

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 p-6 z-10 text-white">
        <div className="flex items-end justify-between gap-3">
          <div className="space-y-3">
            <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/60">
              {categoryLabel || 'Cinematic'}
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md group-hover:bg-[#FFD700] group-hover:border-[#FFD700] group-hover:text-black transition-all duration-300">
                <Play size={14} fill="currentColor" />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/70 group-hover:text-[#FFD700] transition-colors">
                Watch · YouTube
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frame brackets */}
      <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#FFD700]/0 group-hover:border-[#FFD700] transition-colors duration-500 z-10" />
      <span className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#FFD700]/0 group-hover:border-[#FFD700] transition-colors duration-500 z-10" />
      <span className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#FFD700]/0 group-hover:border-[#FFD700] transition-colors duration-500 z-10" />
      <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#FFD700]/0 group-hover:border-[#FFD700] transition-colors duration-500 z-10" />

      {/* Underline progress */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-[#FFD700] z-10"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  )
}
