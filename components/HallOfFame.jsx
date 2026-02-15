'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { X, Maximize2, ShieldCheck, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const awards = [
  {
    url: "https://i.ibb.co/s9X5JxM4/Whats-App-Image-2026-01-26-at-4-32-53-PM.jpg",
    title: "Certificate of Achievement",
    outlet: "FIPRESCI Bangladesh",
    desc: "Recognized during the 24th Dhaka International Film Festival for the film 'The University of Chankharpul'.",
    date: "JAN 10–18, 2026",
    id: "CERT-001"
  },
  {
    url: "https://i.ibb.co/NnNMzSqc/Whats-App-Image-2026-01-26-at-3-15-54-PM.jpg",
    title: "Bangladesh Panorama Winner",
    outlet: "Dhaka International Film Festival",
    desc: "Awarded in the Full Length Section 2026 for cinematic production excellence.",
    date: "JAN 2026",
    id: "WIN-992"
  },
  {
    url: "https://i.ibb.co/B2NzKP5h/Whats-App-Image-2026-01-26-at-3-12-17-PM.jpg",
    title: "National Film Certification",
    outlet: "Government of Bangladesh",
    desc: "Granted unrestricted public exhibition status under the Film Certification Act 2023.",
    date: "JAN 18, 2026",
    id: "GOV-882"
  },
  {
    url: "https://i.ibb.co/m5kNgc8w/Whats-App-Image-2026-01-26-at-3-21-45-PM.jpg",
    title: "International Critics Laurels",
    outlet: "FIPRESCI International",
    desc: "Recognized for cinematic contribution to the 24th DIFF Bangladesh Panorama.",
    date: "JAN 2026",
    id: "INT-441"
  }
]

export default function HallOfFame() {
  const [selectedImage, setSelectedImage] = useState(null)
  const containerRef = useRef(null)
  const { language } = useLanguage()

  const translations = {
    en: {
      title1: "HALL OF",
      title2: "FAME",
      subtitle:
        "Verified cinematic certifications and international recognitions for 2026.",
      registry: "Registry ID",
      exhibition: "Unrestricted Global Exhibition",
      verify: "Verify"
    },
    bn: {
      title1: "গৌরবের",
      title2: "দেয়াল",
      subtitle:
        "২০২৬ সালের জন্য যাচাইকৃত চলচ্চিত্র সার্টিফিকেশন ও আন্তর্জাতিক স্বীকৃতি।",
      registry: "রেজিস্ট্রি আইডি",
      exhibition: "সীমাহীন বৈশ্বিক প্রদর্শনী",
      verify: "যাচাই করুন"
    }
  }

  const t = translations[language] || translations.en

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const ySoft = useTransform(scrollYProgress, [0, 1], [0, -40])

  return (
    <section
      id="certification"
      ref={containerRef}
      className="relative bg-[#fafafa] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          style={{ y: ySoft }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            {t.title1} <span className="text-[#FFD700]">{t.title2}</span>
          </h2>

          <p className="text-sm text-black/50 font-medium max-w-lg mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* 3 COLUMN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* FOOTER */}
        <div className="mt-20 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <div>
            <div className="text-black/40 text-xs">{t.registry}</div>
            <div className="font-semibold text-black">BT-CERT-GLOBAL-26</div>
          </div>

          <div className="flex items-center gap-2 text-black">
            <ShieldCheck size={18} className="text-[#FFD700]" />
            <span className="font-medium">{t.exhibition}</span>
          </div>
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-white/95 backdrop-blur-xl flex items-center justify-center p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 120 }}
              src={selectedImage}
              alt="Award"
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-[0_40px_120px_-30px_rgba(0,0,0,0.25)]"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-black hover:rotate-90 transition"
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

/* ---------------- CARD ---------------- */

function AwardCard({ award, index, onOpen, verifyLabel }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      onClick={onOpen}
      className="group bg-white rounded-xl border border-black/5 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={award.url}
          alt={award.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-6 space-y-3">

        <div className="flex justify-between items-center text-xs text-black/40">
          <span>{award.id}</span>
          <Maximize2 size={15} />
        </div>

        <div className="text-xs font-medium text-[#D97706]">
          {award.outlet}
        </div>

        <h3 className="text-lg font-semibold text-black leading-tight">
          {award.title}
        </h3>

        <p className="text-sm text-black/60 line-clamp-2">
          {award.desc}
        </p>

        <div className="flex justify-between items-center pt-4 border-t border-black/5 text-xs">
          <span className="text-black/40">{award.date}</span>
          <span className="flex items-center gap-1 text-black font-medium">
            {verifyLabel}
            <ChevronRight size={14} className="text-[#FFD700]" />
          </span>
        </div>

      </div>
    </motion.div>
  )
}
