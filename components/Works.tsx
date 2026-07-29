'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Play, X } from 'lucide-react'
import Reveal, { SectionEyebrow } from '@/components/ui/Reveal'
import { EASE_OUT_EXPO, SPRING_SNAPPY } from '@/lib/motion'

type Project = { id: string }

const projects: Project[] = [
  { id: 'VpOd1qnnJHw' },
  { id: 'nvwHhE5el6o' },
  { id: 'UqMWgsWH7RU' },
  { id: 'por5d5Nelog' },
  { id: '2LJWoKDKiqc' },
  { id: 'QTgY29dOPnQ' },
]

const t = {
  eyebrow: 'Reel Index',
  title1: 'Our',
  title2: 'Works',
  subtitle: 'A curated selection of cinematic narratives and high-impact visual storytelling.',
  watch: 'Watch',
  esc: 'ESC · close',
  nowPlaying: 'Now Playing',
}

export default function Works() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    if (!selectedProject) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null)
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [selectedProject])

  return (
    <section id="works" className="relative py-20 md:py-28 bg-page-3 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb top-20 left-1/4 w-[600px] h-[600px] bg-gold/[0.07]" />
        <div className="glow-orb bottom-0 right-0 w-[400px] h-[400px] bg-gold/[0.04]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 mb-16 items-end">
          <Reveal className="lg:col-span-7">
            <SectionEyebrow index="/05" label={t.eyebrow} />
            <h2 className="h-display text-[clamp(48px,9vw,128px)] text-fg leading-[0.86]">
              {t.title1} <span className="text-(--gold-text)">{t.title2}</span>
            </h2>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-4 lg:col-start-9 lg:pl-8 lg:border-l border-line">
            <p className="text-base text-muted leading-relaxed">{t.subtitle}</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((item, i) => (
            <ProjectCard
              key={item.id}
              item={item}
              index={i}
              onClick={() => setSelectedProject(item)}
              watchLabel={t.watch}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-6 md:p-10"
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute top-8 left-8 right-8 flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.3em] text-white/60 z-10">
              <span className="flex items-center gap-2">
                <span className="dot-pulse" />
                {t.nowPlaying}
              </span>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="hover:rotate-90 transition-transform text-white"
                aria-label="Close"
              >
                <X size={28} />
              </button>
            </div>

            <motion.div
              initial={{ scale: 0.92, y: 28 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 16 }}
              transition={SPRING_SNAPPY}
              className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-premium bg-black border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${selectedProject.id}?autoplay=1&rel=0&modestbranding=1`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Project reel"
              />
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

function ProjectCard({
  item,
  index,
  onClick,
  watchLabel,
}: {
  item: Project
  index: number
  onClick: () => void
  watchLabel: string
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.75, ease: EASE_OUT_EXPO }}
      whileHover={{ y: -8 }}
      className={`group relative w-full bg-black rounded-2xl md:rounded-3xl overflow-hidden border border-line cursor-pointer text-left transition-shadow duration-500 hover:shadow-gold hover:border-gold/40 aspect-video ${
        index % 3 === 1 ? 'md:translate-y-6' : ''
      }`}
    >
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`}
          alt=""
          className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />
      </div>

      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
          <ArrowUpRight size={14} />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 z-10 text-white">
        <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/50 mb-3">
          Cinematic · {String(index + 1).padStart(2, '0')}
        </div>
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 border border-white/25 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md group-hover:bg-[#ffd700] group-hover:border-[#ffd700] group-hover:text-black transition-all duration-300">
            <Play size={14} fill="currentColor" className="ml-0.5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/70 group-hover:text-[#ffd700] transition-colors">
            {watchLabel} · YouTube
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-[#ffd700] z-10"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
      />
    </motion.button>
  )
}
