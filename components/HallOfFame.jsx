'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { X, Maximize2, ShieldCheck, ChevronRight } from 'lucide-react'

/* ---------------- DATA ---------------- */

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

/* ---------------- COMPONENT ---------------- */

export default function HallOfFame() {
  const [selectedImage, setSelectedImage] = useState(null)
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const ySoft = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <section
      id="certification"
      ref={containerRef}
      className="relative bg-[#fafafa] py-24 overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[35%] h-[35%] bg-[#FFD700]/10 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div
          style={{ y: ySoft }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-black mb-4">
            HALL OF <span className="text-[#FFD700]">FAME</span>
          </h2>

          <p className="text-xs text-black/50 font-medium tracking-wide max-w-xl mx-auto">
            Verified cinematic certifications and international recognitions for the 2026 cycle.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, i) => (
            <AwardCard
              key={award.id}
              award={award}
              index={i}
              onOpen={() => setSelectedImage(award.url)}
            />
          ))}
        </div>

        {/* FOOTER STRIP */}
        <div className="mt-20 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8 text-sm">
          <div>
            <div className="text-black/40 text-xs">Registry ID</div>
            <div className="font-semibold text-black">BT-CERT-GLOBAL-26</div>
          </div>

          <div className="flex items-center gap-3 text-black">
            <ShieldCheck size={18} className="text-[#FFD700]" />
            <span className="font-medium">Unrestricted Global Exhibition</span>
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
            <motion.button
              whileHover={{ rotate: 90 }}
              className="absolute top-8 right-8 text-black"
            >
              <X size={36} />
            </motion.button>

            <motion.img
              initial={{ scale: 0.92, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 30 }}
              transition={{ type: "spring", stiffness: 120 }}
              src={selectedImage}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-[0_40px_120px_-30px_rgba(0,0,0,0.25)]"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

/* ---------------- CARD ---------------- */

function AwardCard({ award, index, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      onClick={onOpen}
      className="group relative h-[460px] bg-white rounded-2xl border border-black/5 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_-25px_rgba(0,0,0,0.15)]"
    >
      {/* Image */}
      <div className="absolute inset-0">
        <motion.img
          src={award.url}
          className="w-full h-full object-cover opacity-30 group-hover:opacity-90 transition-all duration-[1.6s] ease-out"
          initial={{ scale: 1.08 }}
          whileHover={{ scale: 1.02 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 flex flex-col justify-between h-full">

        <div className="flex justify-between items-center text-xs text-black/40">
          <span>{award.id}</span>
          <Maximize2 size={16} className="opacity-60 group-hover:opacity-100 transition" />
        </div>

        <div className="space-y-3">
          <div className="text-xs font-medium text-[#D97706]">
            {award.outlet}
          </div>

          <h3 className="text-2xl font-semibold text-black leading-tight">
            {award.title}
          </h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="text-sm text-black/60 leading-snug"
          >
            {award.desc}
          </motion.p>
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-black/5 text-xs">
          <span className="text-black/40">{award.date}</span>
          <motion.span
            whileHover={{ x: 4 }}
            className="flex items-center gap-1 text-black font-medium"
          >
            Verify <ChevronRight size={14} className="text-[#FFD700]" />
          </motion.span>
        </div>

      </div>
    </motion.div>
  )
}
