'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { X, Maximize2, ShieldCheck, ChevronRight } from 'lucide-react'

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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const ySoft = useTransform(scrollYProgress, [0, 1], [0, -40])

  return (
    <section
      id="certification"
      ref={containerRef}
      className="relative bg-[#fafafa] py-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          style={{ y: ySoft }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            HALL OF <span className="text-[#FFD700]">FAME</span>
          </h2>
          <p className="text-xs text-black/50 font-medium max-w-lg mx-auto">
            Verified cinematic certifications and international recognitions for 2026.
          </p>
        </motion.div>

        {/* COMPACT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {awards.map((award, i) => (
            <AwardCard
              key={award.id}
              award={award}
              index={i}
              onOpen={() => setSelectedImage(award.url)}
            />
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-16 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <div>
            <div className="text-black/40 text-xs">Registry ID</div>
            <div className="font-semibold text-black">BT-CERT-GLOBAL-26</div>
          </div>

          <div className="flex items-center gap-2 text-black">
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
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 120 }}
              src={selectedImage}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-[0_40px_120px_-30px_rgba(0,0,0,0.25)]"
              onClick={(e) => e.stopPropagation()}
            />

            <button className="absolute top-8 right-8 text-black">
              <X size={32} />
            </button>
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      onClick={onOpen}
      className="group bg-white rounded-xl border border-black/5 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={award.url}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* Info */}
      <div className="p-5 space-y-3">

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
            Verify <ChevronRight size={14} className="text-[#FFD700]" />
          </span>
        </div>

      </div>
    </motion.div>
  )
}
