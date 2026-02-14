'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Loader2,
  Globe,
  ChevronRight,
  ChevronLeft,
  ExternalLink
} from 'lucide-react'
import { newsData } from '@/lib/newsData'
import { useLanguage } from '@/context/LanguageContext'

const ITEMS_PER_PAGE = 4

export default function FeaturedNews() {
  const container = useRef(null)
  const [page, setPage] = useState(1)
  const { language } = useLanguage()

  const translations = {
    en: {
      title1: "GLOBAL",
      title2: "PRESS",
      title3: "INTELLIGENCE",
      tagline: "Archived Media Logs · University of Chankarphul",
      read: "Read",
      ref: "REF"
    },
    bn: {
      title1: "গ্লোবাল",
      title2: "প্রেস",
      title3: "ইন্টেলিজেন্স",
      tagline: "সংরক্ষিত মিডিয়া লগ · চঙ্কারফুল বিশ্ববিদ্যালয়",
      read: "পড়ুন",
      ref: "রেফ"
    }
  }

  const t = translations[language]

  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE)
  const start = (page - 1) * ITEMS_PER_PAGE
  const paginatedNews = newsData.slice(start, start + ITEMS_PER_PAGE)

  return (
    <section
      id="news"
      ref={container}
      className="relative bg-[#fafafa] py-24 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[35%] h-[35%] bg-[#FFD700]/5 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight leading-[1.05] mb-4">
            {t.title1}{" "}
            <span className="text-[#FFD700]">{t.title2}</span>{" "}
            {t.title3}
          </h2>

          <p className="text-xs text-black/50 font-medium tracking-wide">
            {t.tagline}
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="wait">
            {paginatedNews.map((news, index) => (
              <PressCard
                key={news.href}
                news={news}
                index={index + start}
                readLabel={t.read}
                refLabel={t.ref}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center items-center gap-6 mt-16 text-sm">

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="opacity-60 hover:opacity-100 transition"
          >
            <ChevronLeft size={20} />
          </motion.button>

          <div className="flex items-center gap-3">
            {[...Array(totalPages)].map((_, i) => (
              <motion.button
                key={i}
                whileHover={{ y: -2 }}
                onClick={() => setPage(i + 1)}
                className={`text-xs font-semibold transition-all ${
                  page === i + 1
                    ? 'text-black'
                    : 'text-black/40 hover:text-black'
                }`}
              >
                {String(i + 1).padStart(2, '0')}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="opacity-60 hover:opacity-100 transition"
          >
            <ChevronRight size={20} />
          </motion.button>

        </div>

      </div>
    </section>
  )
}

/* ---------------- CARD ---------------- */

function PressCard({ news, index, readLabel, refLabel }) {
  const [thumbnail, setThumbnail] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.microlink.io?url=${encodeURIComponent(news.href)}&screenshot=true`)
      .then(res => res.json())
      .then(data =>
        setThumbnail(data?.data?.image?.url || data?.data?.screenshot?.url)
      )
      .finally(() => setLoading(false))
  }, [news.href])

  return (
    <motion.a
      href={news.href}
      target="_blank"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08 }}
      className="group relative h-[480px] bg-white rounded-2xl overflow-hidden border border-black/5 hover:border-[#FFD700]/40 shadow-sm hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] transition-all duration-500 flex flex-col"
    >
      {/* IMAGE */}
      <div className="relative h-56 overflow-hidden">
        {loading ? (
          <div className="w-full h-full flex items-center justify-center bg-black/5">
            <Loader2 className="animate-spin text-[#FFD700]" />
          </div>
        ) : (
          <motion.img
            src={thumbnail}
            className="w-full h-full object-cover"
            initial={{ scale: 1.08 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        )}

        <div className="absolute top-4 left-4 text-[9px] font-semibold uppercase tracking-wide text-black bg-white/80 px-2 py-1 rounded-md backdrop-blur-sm">
          {news.category}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-6 flex flex-col justify-between">

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-black/50 text-[11px]">
            <Globe size={13} className="text-[#FFD700]" />
            {news.outlet}
          </div>

          <h3 className="text-lg font-semibold leading-snug text-black group-hover:text-[#D97706] transition-colors duration-300">
            {news.title}
          </h3>
        </div>

        <div className="flex justify-between items-center pt-5 border-t border-black/5 text-xs text-black/40">
          <span>{refLabel}_{index + 1}</span>

          <motion.span
            whileHover={{ x: 4 }}
            className="flex items-center gap-1 font-medium text-black group-hover:text-[#D97706] transition"
          >
            {readLabel} <ExternalLink size={13} />
          </motion.span>
        </div>

      </div>
    </motion.a>
  )
}
