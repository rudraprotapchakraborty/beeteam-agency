'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Maximize2, X } from 'lucide-react'
import Reveal, { SectionEyebrow } from '@/components/ui/Reveal'
import { EASE_OUT_EXPO, SPRING_SNAPPY } from '@/lib/motion'

type Award = {
  url: string
  title: string
  outlet: string
  desc: string
  date: string
  id: string
}

const awards: Award[] = [
  {
    url: '/awards/award-1.jpg',
    title: 'Certificate of Achievement',
    outlet: 'FIPRESCI Bangladesh',
    desc: "Recognized during the 24th Dhaka International Film Festival for the film 'The University of Chankharpul'.",
    date: 'JAN 10–18, 2026',
    id: 'CERT-001',
  },
  {
    url: '/awards/award-2.jpg',
    title: 'National Film Certification',
    outlet: 'Government of Bangladesh',
    desc: 'Granted unrestricted public exhibition status under the Film Certification Act 2023.',
    date: 'JAN 18, 2026',
    id: 'GOV-882',
  },
  {
    url: '/awards/award-3.jpg',
    title: 'Bangladesh Panorama Winner',
    outlet: 'Dhaka International Film Festival',
    desc: 'Awarded in the Full Length Section 2026 for cinematic production excellence.',
    date: 'JAN 2026',
    id: 'WIN-992',
  },
  {
    url: '/awards/award-4.jpg',
    title: 'Hiralal Sen Padak',
    outlet: 'Dhaka University Film Society',
    desc: 'Awarded by Dhaka University Film Society in recognition of outstanding contribution to cinema.',
    date: '2026',
    id: 'DUFS-001',
  },
  {
    url: '/awards/award-5.jpg',
    title: 'International Critics Laurels',
    outlet: 'FIPRESCI International',
    desc: 'Recognized for cinematic contribution to the 24th DIFF Bangladesh Panorama.',
    date: 'JAN 2026',
    id: 'INT-441',
  },
]

export default function HallOfFame() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const t = {
      eyebrow: 'Hall of Fame',
      title1: 'Hall of',
      title2: 'Fame',
      subtitle: 'Verified cinematic certifications and international recognitions for 2026.',
      verify: 'Verify',
      close: 'Close',
    }

  useEffect(() => {
    if (!selectedImage) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null)
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [selectedImage])

  return (
    <section id="certification" className="relative bg-page-3 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb top-0 right-0 w-[500px] h-[500px] bg-gold/[0.05]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 mb-14 items-end">
          <Reveal className="lg:col-span-7">
            <SectionEyebrow index="/08" label={t.eyebrow} />
            <h2 className="h-display text-[clamp(48px,9vw,120px)] text-fg leading-[0.86]">
              {t.title1} <span className="text-gold-bright">{t.title2}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9 lg:pl-8 lg:border-l border-line">
            <p className="text-sm text-muted leading-relaxed">{t.subtitle}</p>
          </Reveal>
        </div>

        {/* Asymmetric masonry-like grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
          {awards.map((award, i) => (
            <motion.button
              key={award.id}
              type="button"
              onClick={() => setSelectedImage(award.url)}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.75, ease: EASE_OUT_EXPO }}
              whileHover={{ y: -8 }}
              className={`group relative flex flex-col text-left rounded-3xl border border-line bg-card overflow-hidden cursor-pointer transition-shadow duration-500 hover:shadow-gold hover:border-gold/35 sheen ${
                i === 0 ? 'sm:col-span-2 lg:col-span-1 lg:row-span-1' : ''
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={award.url}
                  alt={award.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-gold-bright text-black opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center scale-90 group-hover:scale-100">
                  <Maximize2 size={14} strokeWidth={2.5} />
                </div>
              </div>
              <div className="flex flex-col flex-1 p-5 space-y-2.5">
                <div className="font-mono text-[9px] uppercase tracking-[0.28em] text-gold">
                  {award.outlet}
                </div>
                <h3 className="text-base font-semibold text-fg leading-tight group-hover:text-gold-bright transition-colors">
                  {award.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed line-clamp-2 flex-1">
                  {award.desc}
                </p>
                <div className="flex justify-between items-center pt-3 border-t border-line">
                  <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-faint">
                    {award.date}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted group-hover:text-gold-bright transition-colors font-bold">
                    {t.verify} →
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 12 }}
              transition={SPRING_SNAPPY}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedImage}
                alt="Award"
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-premium"
              />
            </motion.div>
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label={t.close}
              className="absolute top-8 right-8 text-fg hover:rotate-90 transition-transform"
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
