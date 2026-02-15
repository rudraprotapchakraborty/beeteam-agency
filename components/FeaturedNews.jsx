'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Loader2, Globe, ExternalLink } from 'lucide-react'
import { newsData } from '@/lib/newsData'
import { useLanguage } from '@/context/LanguageContext'

export default function FeaturedNews() {
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
      tagline: "সংরক্ষিত মিডিয়া লগ · দ্য ইউনিভার্সিটি অব চানখাঁরপুল",
      read: "পড়ুন",
      ref: "রেফ"
    }
  }

  const t = translations[language]

  const pinnedNews = newsData.slice(0, 3)
  const otherNews = newsData.slice(3)

  return (
    <section className="bg-[#fafafa] py-24">
      <div className="max-w-7xl mx-auto px-6">

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

        {/* MAIN LAYOUT */}
        <div className="grid lg:grid-cols-[3fr_1.2fr] gap-12 items-start">

          {/* LEFT — 3 PINNED SIDE BY SIDE */}
          <div className="grid md:grid-cols-3 gap-8">
            {pinnedNews.map((news, index) => (
              <NewsCard
                key={news.href}
                news={news}
                index={index}
                readLabel={t.read}
                refLabel={t.ref}
                large
              />
            ))}
          </div>

          {/* RIGHT — SCROLLABLE COLUMN */}
          <div className="h-[350px] overflow-y-auto pr-3 pl-6 border-l border-black/10 space-y-6">
            {otherNews.map((news, index) => (
              <NewsCard
                key={news.href}
                news={news}
                index={index + 3}
                readLabel={t.read}
                refLabel={t.ref}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

/* ================= UNIVERSAL CARD ================= */

function NewsCard({ news, index, readLabel, refLabel, large }) {
  const [thumbnail, setThumbnail] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    fetch(`https://api.microlink.io?url=${encodeURIComponent(news.href)}&screenshot=true`)
      .then(res => res.json())
      .then(data => {
        if (!mounted) return
        setThumbnail(
          data?.data?.image?.url ||
          data?.data?.screenshot?.url ||
          null
        )
      })
      .catch(() => {})
      .finally(() => {
        if (mounted) setLoading(false)
      })

    return () => { mounted = false }
  }, [news.href])

  return (
    <motion.a
      href={news.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group block bg-white rounded-2xl overflow-hidden border border-black/5 hover:border-[#FFD700]/40 shadow-sm hover:shadow-xl transition-all duration-500"
    >
      {/* IMAGE */}
      <div className={`relative overflow-hidden ${large ? "h-56" : "h-36"}`}>
        {loading ? (
          <div className="w-full h-full flex items-center justify-center bg-black/5">
            <Loader2 className="animate-spin text-[#FFD700]" />
          </div>
        ) : thumbnail ? (
          <img
            src={thumbnail}
            alt={news.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-black/10" />
        )}
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-2 text-xs text-black/50">
          <Globe size={14} className="text-[#FFD700]" />
          {news.outlet}
        </div>

        <h3 className={`${large ? "text-lg" : "text-sm"} font-semibold leading-snug group-hover:text-[#D97706] transition`}>
          {news.title}
        </h3>

        <div className="flex justify-between text-xs text-black/40 pt-3 border-t border-black/5">
          <span>{refLabel}_{index + 1}</span>
          <span className="flex items-center gap-1 font-medium">
            {readLabel} <ExternalLink size={12} />
          </span>
        </div>
      </div>
    </motion.a>
  )
}
