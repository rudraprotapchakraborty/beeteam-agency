'use client'

import { useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight, Maximize2, Trophy, X } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

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
    url: 'https://i.ibb.co/s9X5JxM4/Whats-App-Image-2026-01-26-at-4-32-53-PM.jpg',
    title: 'Certificate of Achievement',
    outlet: 'FIPRESCI Bangladesh',
    desc: "Recognized during the 24th Dhaka International Film Festival for the film 'The University of Chankharpul'.",
    date: 'JAN 10–18, 2026',
    id: 'CERT-001',
  },
  {
    url: 'https://i.ibb.co/B2NzKP5h/Whats-App-Image-2026-01-26-at-3-12-17-PM.jpg',
    title: 'National Film Certification',
    outlet: 'Government of Bangladesh',
    desc: 'Granted unrestricted public exhibition status under the Film Certification Act 2023.',
    date: 'JAN 18, 2026',
    id: 'GOV-882',
  },
  {
    url: 'https://i.ibb.co/NnNMzSqc/Whats-App-Image-2026-01-26-at-3-15-54-PM.jpg',
    title: 'Bangladesh Panorama Winner',
    outlet: 'Dhaka International Film Festival',
    desc: 'Awarded in the Full Length Section 2026 for cinematic production excellence.',
    date: 'JAN 2026',
    id: 'WIN-992',
  },
  {
    url: 'https://i.ibb.co/rR9gQW33/IMG-0134-1-2.jpg',
    title: 'Hiralal Sen Padak',
    outlet: 'Dhaka University Film Society',
    desc: 'Awarded by Dhaka University Film Society in recognition of outstanding contribution to cinema.',
    date: '2026',
    id: 'DUFS-001',
  },
  {
    url: 'https://i.ibb.co/m5kNgc8w/Whats-App-Image-2026-01-26-at-3-21-45-PM.jpg',
    title: 'International Critics Laurels',
    outlet: 'FIPRESCI International',
    desc: 'Recognized for cinematic contribution to the 24th DIFF Bangladesh Panorama.',
    date: 'JAN 2026',
    id: 'INT-441',
  },
]

export default function HallOfFame() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const containerRef = useRef<HTMLElement | null>(null)
  const { language } = useLanguage()

  const translations = {
    en: {
      eyebrow: 'Hall of Fame · 07',
      title1: 'Hall of',
      title2: 'Fame',
      subtitle: 'Verified cinematic certifications and international recognitions for 2026.',
      registry: 'Registry ID',
      exhibition: 'Unrestricted Global Exhibition',
      verify: 'Verify',
      total: 'Honors',
      year: 'Year',
    },
    bn: {
      eyebrow: 'গৌরবের দেয়াল · ০৭',
      title1: 'গৌরবের',
      title2: 'দেয়াল',
      subtitle: '২০২৬ সালের জন্য যাচাইকৃত চলচ্চিত্র সার্টিফিকেশন ও আন্তর্জাতিক স্বীকৃতি।',
      registry: 'রেজিস্ট্রি আইডি',
      exhibition: 'সীমাহীন বৈশ্বিক প্রদর্শনী',
      verify: 'যাচাই করুন',
      total: 'সম্মাননা',
      year: 'বছর',
    },
  } as const

  const t = translations[language]

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const ySoft = useTransform(scrollYProgress, [0, 1], [0, -40])

  return (
    <section id="certification" ref={containerRef} className="relative paper-tex py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#FFD700]/10 blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <motion.div
          style={{ y: ySoft }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-12 gap-8 mb-16 items-end"
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">
                /07
              </span>
              <span className="h-px w-12 bg-[#d4af37]/40" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/50">
                {t.eyebrow}
              </span>
            </div>
            <h2 className="h-display text-[clamp(56px,10vw,160px)] text-black leading-[0.86]">
              {t.title1}
              <br />
              <span className="text-[#d4af37]">{t.title2}</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 lg:pl-8 lg:border-l border-black/10 space-y-4">
            <p className="text-sm text-black/65 leading-relaxed">{t.subtitle}</p>
            <div className="flex gap-6 pt-2">
              <div>
                <div className="font-display text-4xl text-black flex items-center gap-2">
                  <Trophy size={20} className="text-[#FFD700] fill-[#FFD700]" />
                  {awards.length}
                </div>
                <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-black/40 mt-1">
                  {t.total}
                </div>
              </div>
              <div>
                <div className="font-display text-4xl text-[#d97706]">26</div>
                <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-black/40 mt-1">
                  {t.year} · 2026
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AWARDS GRID — uniform */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, i) => (
            <AwardCard
              key={award.id}
              award={award}
              index={i}
              onOpen={() => setSelectedImage(award.url)}
              verifyLabel={t.verify}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-xl flex items-center justify-center p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 30 }}
              transition={{ type: 'spring', stiffness: 120 }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Award"
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-[0_60px_140px_-30px_rgba(0,0,0,0.6)]"
              />
              <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#FFD700] z-10" />
              <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#FFD700] z-10" />
              <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#FFD700] z-10" />
              <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#FFD700] z-10" />
            </motion.div>

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white hover:rotate-90 transition-transform"
            >
              <X size={32} />
            </button>

            <div className="absolute bottom-8 left-8 font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
              ESC · close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

type AwardCardProps = {
  award: Award
  index: number
  onOpen: () => void
  verifyLabel: string
}

function AwardCard({ award, index, onOpen, verifyLabel }: AwardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      onClick={onOpen}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col bg-white rounded-2xl border border-black/8 overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.2)] hover:border-[#FFD700] sheen"
    >
      {/* Top tape */}
      <div className="absolute top-3 left-3 right-3 z-10 flex justify-between items-center">
        <span className="px-2.5 py-1 bg-[#FFD700] text-black font-mono text-[9px] uppercase tracking-[0.25em] rounded font-bold">
          {award.id}
        </span>
      </div>

      <div className="relative aspect-[4/3] overflow-hidden bg-black">
        <motion.img
          src={award.url}
          alt={award.title}
          className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Hover icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-[#FFD700] text-black opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
        >
          <Maximize2 size={14} strokeWidth={2.5} />
        </motion.div>
      </div>

      <div className="flex flex-col flex-1 p-5 space-y-3">
        <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#d97706]">
          {award.outlet}
        </div>

        <h3 className="text-base font-semibold text-black leading-tight group-hover:text-[#d97706] transition-colors">
          {award.title}
        </h3>

        <p className="text-sm text-black/60 leading-relaxed line-clamp-3 flex-1">
          {award.desc}
        </p>

        <div className="flex justify-between items-center pt-3 border-t border-black/5">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-black/40">
            {award.date}
          </span>
          <span className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.25em] text-black font-bold group-hover:text-[#d97706] transition-colors">
            {verifyLabel}
            <ChevronRight size={12} className="text-[#FFD700] group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </motion.div>
  )
}
