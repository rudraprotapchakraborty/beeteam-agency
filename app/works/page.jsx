'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, ArrowUpRight } from 'lucide-react'

/* ---------------- DATA ---------------- */

const projects = [
  { id: "VpOd1qnnJHw", title: "Brand Narrative", category: "film" },
  { id: "nvwHhE5el6o", title: "Corporate Vision", category: "tvc" },
  { id: "UqMWgsWH7RU", title: "Dynamic Motion", category: "ovc" },
  { id: "por5d5Nelog", title: "Product Story", category: "ads" },
  { id: "2LJWoKDKiqc", title: "Cinematic Journey", category: "doc" },
  { id: "QTgY29dOPnQ", title: "Music Visual", category: "music" },
]

export default function Works() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [language, setLanguage] = useState("en")
  const containerRef = useRef(null)

  useEffect(() => {
    const savedLang = localStorage.getItem("lang")
    if (savedLang) setLanguage(savedLang)
  }, [])

  const translations = {
    en: {
      title1: "OUR",
      title2: "WORKS",
      subtitle:
        "A curated selection of cinematic narratives and high-impact visual storytelling.",
      categories: {
        film: "Film",
        tvc: "TVC",
        ovc: "OVC",
        ads: "Ads",
        doc: "Documentary",
        music: "Music Video"
      }
    },
    bn: {
      title1: "আমাদের",
      title2: "কাজসমূহ",
      subtitle:
        "সিনেমাটিক গল্প ও উচ্চ-প্রভাবশালী ভিজ্যুয়াল স্টোরিটেলিং-এর নির্বাচিত সংগ্রহ।",
      categories: {
        film: "ফিল্ম",
        tvc: "টিভিসি",
        ovc: "ওভিসি",
        ads: "বিজ্ঞাপন",
        doc: "ডকুমেন্টারি",
        music: "মিউজিক ভিডিও"
      }
    }
  }

  const t = translations[language]

  return (
    <section
      id="works"
      ref={containerRef}
      className="relative py-24 bg-[#fafafa] overflow-hidden"
    >

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[5%] right-[5%] w-[35%] h-[35%] bg-[#FFD700]/10 blur-[140px]" />
      </div>

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-black mb-4">
            {t.title1} <span className="text-[#FFD700]">{t.title2}</span>
          </h2>

          <p className="text-sm text-black/50 max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((item, i) => (
            <ProjectCard
              key={i}
              item={item}
              index={i}
              onClick={() => setSelectedProject(item)}
              categoryLabel={t.categories[item.category]}
            />
          ))}
        </div>

      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-white/95 backdrop-blur-xl p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.button
              whileHover={{ rotate: 90 }}
              className="absolute top-8 right-8 text-black"
            >
              <X size={36} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.92, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 30 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-[0_40px_120px_-30px_rgba(0,0,0,0.25)] bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${selectedProject.id}?autoplay=1&rel=0&modestbranding=1`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}

/* ---------------- CARD ---------------- */

function ProjectCard({ item, index, onClick, categoryLabel }) {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group relative h-[360px] bg-white rounded-2xl overflow-hidden border border-black/5 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_-25px_rgba(0,0,0,0.15)]"
    >

      <div className="absolute inset-0">
        <iframe
          className="w-full h-full scale-[1.6] opacity-80 group-hover:scale-[1.5] transition-transform duration-[2s] ease-out pointer-events-none"
          src={`https://www.youtube.com/embed/${item.id}?controls=0&rel=0&mute=1&playlist=${item.id}&loop=1&autoplay=1&modestbranding=1`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-between p-6 text-white z-10">

        <div className="flex justify-between items-start text-xs text-white/60">
          <span>{categoryLabel}</span>

          <motion.div
            whileHover={{ x: 4 }}
            className="opacity-0 group-hover:opacity-100 transition"
          >
            <ArrowUpRight size={18} />
          </motion.div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:bg-[#FFD700] group-hover:text-black transition-all duration-300">
              <Play size={14} fill="currentColor" />
            </div>
          </div>

          <h4 className="text-2xl font-semibold leading-tight group-hover:text-[#FFD700] transition-colors">
            {item.title}
          </h4>
        </div>

      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-[#FFD700]"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.4 }}
      />

    </motion.div>
  )
}
