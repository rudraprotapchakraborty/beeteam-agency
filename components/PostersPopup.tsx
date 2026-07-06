'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight, ChevronLeft, ChevronRight, Download } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

type PostersPopupProps = {
  isOpen: boolean
  onClose: () => void
}

export default function PostersPopup({ isOpen, onClose }: PostersPopupProps) {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState<0 | 1>(0)

  const t = {
    en: {
      eyebrow: 'Exclusive Release',
      title: 'Official Film Posters',
      sub: 'The University of Chankharpul — BUFT Premiere Showcase',
      close: 'Close',
      viewFull: 'Open Original',
      download: 'Download',
      poster1: 'Poster 01',
      poster2: 'Poster 02',
    },
    bn: {
      eyebrow: 'বিশেষ প্রকাশনা',
      title: 'অফিশিয়াল পোস্টারসমূহ',
      sub: 'দ্য ইউনিভার্সিটি অফ চানখারপুল — বিইউএফটি প্রিমিয়ার প্রদর্শনী',
      close: 'বন্ধ করুন',
      viewFull: 'মূল ছবি দেখুন',
      download: 'ডাউনলোড',
      poster1: 'পোস্টার ০১',
      poster2: 'পোস্টার ০২',
    },
  }[language]

  if (!isOpen) return null

  const posters = [
    {
      src: '/BUFT poster 0001.jpg',
      alt: 'The University of Chankharpul - Official Poster 1',
      label: t.poster1,
    },
    {
      src: '/BUFT poster 0002.jpg',
      alt: 'The University of Chankharpul - Official Poster 2',
      label: t.poster2,
    },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            aria-hidden
          />

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            className="relative w-full max-w-5xl bg-[#0d0d0d] border border-white/10 rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden max-h-[95vh] flex flex-col z-10"
          >
            {/* Cinematic top frame border decoration */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />

            {/* Top Bar info spec */}
            <div className="bg-[#121212] text-white/40 text-[9px] font-mono uppercase tracking-[0.3em] py-2 px-6 flex justify-between items-center border-b border-white/[0.05]">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] animate-pulse" />
                {language === 'en' ? 'Special Exhibition' : 'বিশেষ প্রদর্শনী'}
              </span>
              <span>BUFT · 2026</span>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label={t.close}
              className="absolute top-8 right-5 z-20 flex items-center justify-center h-8 w-8 rounded-full bg-white/5 hover:bg-[#FFD700] text-white/60 hover:text-black transition-colors"
            >
              <X size={15} strokeWidth={2.5} />
            </button>

            {/* Content Area */}
            <div className="p-6 md:p-8 flex-1 overflow-y-auto flex flex-col">
              {/* Header */}
              <div className="text-center mb-6">
                <div className="flex justify-center items-center gap-2 mb-2">
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#FFD700]">
                    /{t.eyebrow}
                  </span>
                </div>
                <h2 className="font-display text-[clamp(28px,4.5vw,48px)] text-white tracking-wide uppercase leading-tight">
                  {t.title}
                </h2>
                <p className="font-serif italic text-white/50 text-xs mt-1">
                  {t.sub}
                </p>
              </div>

              {/* Desktop Layout: Side-by-side */}
              <div className="hidden md:grid grid-cols-2 gap-8 max-w-4xl mx-auto w-full my-auto">
                {posters.map((poster, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="relative aspect-[2/3] w-full max-w-[360px] rounded-xl overflow-hidden border border-white/10 bg-black/40 group hover:border-[#FFD700]/50 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                      <Image
                        src={poster.src}
                        alt={poster.alt}
                        fill
                        sizes="360px"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#FFD700] mb-1">
                          {poster.label}
                        </span>
                        <div className="flex gap-3">
                          <a
                            href={poster.src}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] font-bold text-white uppercase flex items-center gap-1 hover:text-[#FFD700]"
                          >
                            {t.viewFull} <ArrowUpRight size={12} />
                          </a>
                          <a
                            href={poster.src}
                            download
                            className="text-[10px] font-bold text-white uppercase flex items-center gap-1 hover:text-[#FFD700]"
                          >
                            {t.download} <Download size={11} />
                          </a>
                        </div>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/60 mt-3">
                      {poster.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mobile Layout: Carousel / Switcher */}
              <div className="md:hidden flex-1 flex flex-col items-center justify-center">
                {/* Poster Container */}
                 <div className="relative aspect-[2/3] w-full max-w-[320px] rounded-xl overflow-hidden border border-white/10 bg-black/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <Image
                    src={posters[activeTab].src}
                    alt={posters[activeTab].alt}
                    fill
                    sizes="320px"
                    className="object-cover"
                    priority
                  />
                  {/* Action buttons overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#FFD700] mb-1">
                      {posters[activeTab].label}
                    </span>
                    <div className="flex gap-4">
                      <a
                        href={posters[activeTab].src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-bold text-white uppercase flex items-center gap-1 hover:text-[#FFD700]"
                      >
                        {t.viewFull} <ArrowUpRight size={12} />
                      </a>
                      <a
                        href={posters[activeTab].src}
                        download
                        className="text-[10px] font-bold text-white uppercase flex items-center gap-1 hover:text-[#FFD700]"
                      >
                        {t.download} <Download size={11} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Switcher Controls */}
                <div className="flex items-center gap-6 mt-5">
                  <button
                    onClick={() => setActiveTab((prev) => (prev === 0 ? 1 : 0))}
                    className="p-2 rounded-full border border-white/10 hover:border-[#FFD700] hover:text-[#FFD700] text-white transition-colors"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <span className="font-mono text-xs text-white/70">
                    {activeTab + 1} / 2
                  </span>
                  <button
                    onClick={() => setActiveTab((prev) => (prev === 0 ? 1 : 0))}
                    className="p-2 rounded-full border border-white/10 hover:border-[#FFD700] hover:text-[#FFD700] text-white transition-colors"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
