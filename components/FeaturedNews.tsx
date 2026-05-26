'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Globe, Loader2, Newspaper } from 'lucide-react'
import { newsData, type NewsItem } from '@/lib/newsData'
import { useLanguage } from '@/context/LanguageContext'

export default function FeaturedNews() {
  const { language } = useLanguage()

  const translations = {
    en: {
      eyebrow: 'Press Wall · 04',
      title1: 'Global',
      title2: 'Press',
      title3: 'Intelligence',
      tagline: 'Archived Media Logs · The University of Chankharpul',
      read: 'Read',
      ref: 'REF',
      total: 'Total Coverage',
      pinned: 'Featured Outlets',
      archive: 'Live Archive',
      live: 'Live',
    },
    bn: {
      eyebrow: 'প্রেস ওয়াল · ০৪',
      title1: 'গ্লোবাল',
      title2: 'প্রেস',
      title3: 'ইন্টেলিজেন্স',
      tagline: 'সংরক্ষিত মিডিয়া লগ · দ্য ইউনিভার্সিটি অব চানখাঁরপুল',
      read: 'পড়ুন',
      ref: 'রেফ',
      total: 'মোট কভারেজ',
      pinned: 'বিশেষ আউটলেট',
      archive: 'লাইভ আর্কাইভ',
      live: 'লাইভ',
    },
  } as const

  const t = translations[language]

  const pinnedOutlets = [
    'The Daily Star',
    'The Statesman',
    'Prothom Alo',
    'The Financial Express',
  ]

  const pinnedNews = pinnedOutlets
    .map((outlet) => newsData.find((news) => news.outlet === outlet))
    .filter((n): n is NewsItem => Boolean(n))

  const otherNews = newsData.filter((news) => !pinnedOutlets.includes(news.outlet))

  return (
    <section className="relative paper-tex py-14 md:py-20 overflow-hidden">
      {/* Bg flares */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#FFD700]/10 blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-12 gap-8 mb-10 items-end"
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">
                /04
              </span>
              <span className="h-px w-12 bg-[#d4af37]/40" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/50">
                {t.eyebrow}
              </span>
            </div>
            <h2 className="h-display text-[clamp(48px,9vw,140px)] text-black leading-[0.86]">
              {t.title1} <span className="text-[#d4af37]">{t.title2}</span>
              <br />
              {t.title3}
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 lg:pl-8 lg:border-l border-black/10">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/40 mb-3">
              {t.tagline}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="font-display text-4xl text-black">{newsData.length}</div>
                <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-black/40 mt-1">
                  {t.total}
                </div>
              </div>
              <div>
                <div className="font-display text-4xl text-[#d97706]">{pinnedNews.length}</div>
                <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-black/40 mt-1">
                  {t.pinned}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-[3fr_1.1fr] gap-8 items-start">
          {/* Pinned wall */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-black/60">
                <Newspaper size={12} className="text-[#d4af37]" />
                {t.pinned}
              </div>
              <div className="flex-1 mx-4 h-px bg-black/10" />
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/40">
                {pinnedNews.length}/04
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5">
              {pinnedNews.map((news, index) => (
                <NewsCard
                  key={news.href}
                  news={news}
                  index={index}
                  readLabel={t.read}
                  refLabel={t.ref}
                  large
                  isFeatured
                />
              ))}
            </div>
          </div>

          {/* Live archive */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-black/60">
                <span className="dot-pulse" />
                {t.archive}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d97706]">
                {t.live}
              </div>
            </div>

            <div className="relative h-[301px] overflow-y-auto pr-2 rounded-xl border border-black/10 bg-white/40 backdrop-blur-sm">
              <div className="divide-y divide-black/5">
                {otherNews.map((news, index) => (
                  <ArchiveRow
                    key={news.href}
                    news={news}
                    index={index}
                    refLabel={t.ref}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type NewsCardProps = {
  news: NewsItem
  index: number
  readLabel: string
  refLabel: string
  large?: boolean
  isFeatured?: boolean
}

function NewsCard({ news, index, readLabel, refLabel, large, isFeatured }: NewsCardProps) {
  const [thumbnail, setThumbnail] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    fetch(`https://api.microlink.io?url=${encodeURIComponent(news.href)}&screenshot=true`)
      .then((res) => res.json())
      .then((data) => {
        if (!mounted) return
        setThumbnail(data?.data?.image?.url || data?.data?.screenshot?.url || null)
      })
      .catch(() => {})
      .finally(() => {
        if (mounted) setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [news.href])

  return (
    <motion.a
      href={news.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative block bg-white rounded-xl overflow-hidden border border-black/8 hover:border-[#d4af37] shadow-sm hover:shadow-[0_25px_60px_-20px_rgba(0,0,0,0.2)] transition-all duration-500 sheen"
    >
      {isFeatured && (
        <div className="absolute top-3 left-3 z-20 bg-[#FFD700] text-black text-[9px] font-extrabold px-2.5 py-1 rounded-full shadow font-mono uppercase tracking-[0.2em]">
          ★ Featured
        </div>
      )}

      <div className="absolute top-3 right-3 z-20 font-mono text-[9px] uppercase tracking-[0.25em] text-white bg-black/70 backdrop-blur-sm px-2 py-1 rounded">
        {refLabel}_{String(index + 1).padStart(2, '0')}
      </div>

      <div className={`relative overflow-hidden ${large ? 'h-44' : 'h-32'}`}>
        {loading ? (
          <div className="w-full h-full flex items-center justify-center bg-black/5">
            <Loader2 className="animate-spin text-[#FFD700]" />
          </div>
        ) : thumbnail ? (
          <img
            src={thumbnail}
            alt={news.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-black/10 to-black/5 flex items-center justify-center">
            <Globe className="text-black/20" size={32} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="p-4 space-y-2.5">
        <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.25em] text-black/50">
          <Globe size={11} className="text-[#d4af37]" />
          {news.outlet}
        </div>

        <h3
          className={`${large ? 'text-base' : 'text-sm'} font-semibold leading-snug text-black group-hover:text-[#d97706] transition-colors`}
        >
          {news.title}
        </h3>

        <div className="flex justify-end pt-2 border-t border-black/5 font-mono text-[9px] uppercase tracking-[0.25em] text-black/40">
          <span className="flex items-center gap-1 group-hover:text-[#d97706] transition-colors">
            {readLabel} <ExternalLink size={10} />
          </span>
        </div>
      </div>
    </motion.a>
  )
}

function ArchiveRow({
  news,
  index,
  refLabel,
}: {
  news: NewsItem
  index: number
  refLabel: string
}) {
  return (
    <motion.a
      href={news.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ x: 4 }}
      className="group flex items-center justify-between gap-3 px-4 py-3.5 hover:bg-[#FFD700]/10 transition-colors"
    >
      <div className="flex items-center gap-3 min-w-0">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/35 shrink-0">
          {refLabel}_{String(index + 1).padStart(2, '0')}
        </span>
        <span className="text-sm font-medium text-black truncate group-hover:text-[#d97706] transition-colors">
          {news.outlet}
        </span>
      </div>
      <ExternalLink
        size={12}
        className="text-black/30 group-hover:text-[#d97706] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0"
      />
    </motion.a>
  )
}
