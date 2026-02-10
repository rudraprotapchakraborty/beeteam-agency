'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import {
  Loader2,
  Zap,
  Globe,
  ArrowUpRight,
  Award,
  ChevronRight
} from 'lucide-react'

import { newsData } from '@/lib/newsData'

const ITEMS_PER_PAGE = 4

export default function FeaturedNews() {
  const container = useRef(null)
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE)
  const start = (page - 1) * ITEMS_PER_PAGE
  const paginatedNews = newsData.slice(start, start + ITEMS_PER_PAGE)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  })

  const progressWidth = useTransform(springProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      id="news"
      ref={container}
      className="bg-white py-24 overflow-hidden relative selection:bg-black selection:text-[#D4AF37]"
    >
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[6px] bg-black/5 z-[100]">
        <motion.div style={{ width: progressWidth }} className="h-full bg-black" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-10">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <Award size={18} />
              <span className="text-xs font-black uppercase tracking-[0.4em]">
                Media Verification Portal
              </span>
            </div>

            <h2 className="text-[clamp(3rem,7vw,8rem)] font-black tracking-tight leading-[0.9] uppercase">
              Global <span className="text-[#D4AF37]">Press</span><br />
              Intelligence.
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t-2 border-l-2 border-black">
          {paginatedNews.map((news, index) => (
            <PressCard key={news.href} news={news} index={index + start} />
          ))}
        </div>

{/* Pagination */}
<div className="flex justify-center mt-16">
  <div className="flex items-center gap-6 text-sm font-black uppercase tracking-widest">

    {/* Prev */}
    <button
      onClick={() => setPage(p => Math.max(1, p - 1))}
      disabled={page === 1}
      className={`transition-colors ${
        page === 1
          ? 'text-black/30 cursor-not-allowed'
          : 'text-black hover:text-black/50'
      }`}
    >
      Prev
    </button>

    {/* Page Numbers */}
    {[...Array(totalPages)].map((_, i) => (
      <button
        key={i}
        onClick={() => setPage(i + 1)}
        className={`transition-colors ${
          page === i + 1
            ? 'text-[#D4AF37]'
            : 'text-black hover:text-black/50'
        }`}
      >
        {i + 1}
      </button>
    ))}

    {/* Next */}
    <button
      onClick={() => setPage(p => Math.min(totalPages, p + 1))}
      disabled={page === totalPages}
      className={`flex items-center gap-1 transition-colors ${
        page === totalPages
          ? 'text-black/30 cursor-not-allowed'
          : 'text-black hover:text-black/50'
      }`}
    >
      Next <ChevronRight size={14} />
    </button>

  </div>
</div>



        {/* Footer CTA */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-black p-12 lg:p-20">
          <div className="space-y-6">
            <h3 className="text-white text-5xl font-black uppercase leading-none">
              The <span className="text-[#D4AF37]">Beeteam</span><br />
              Sizzle Reel.
            </h3>
            <p className="text-white/60 text-lg font-medium">
              Witness the visual storytelling that sparked international headlines.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <motion.a
              href="https://web.facebook.com/share/v/18EPxb7XbD/"
              target="_blank"
              whileHover={{ scale: 1.05, backgroundColor: '#D4AF37' }}
              className="bg-white text-black px-12 py-6 text-sm font-black uppercase tracking-[0.3em] flex items-center gap-4"
            >
              Watch Now <Zap size={18} />
            </motion.a>
          </div>
        </div>

      </div>
    </section>
  )
}

/* ---------------- CARD ---------------- */

function PressCard({ news, index }) {
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
      className="group relative h-[500px] bg-white border-r-2 border-b-2 border-black flex flex-col hover:bg-[#FFFDF5]"
    >
      <div className="relative h-56 overflow-hidden">
        {loading ? (
          <div className="w-full h-full flex items-center justify-center border-b-2 border-black">
            <Loader2 className="animate-spin" />
          </div>
        ) : (
          <motion.img
            src={thumbnail}
            className="w-full h-full object-cover border-b-2 border-black"
            initial={{ scale: 1.1 }}
            whileHover={{ scale: 1 }}
          />
        )}
        <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-[9px] font-black uppercase tracking-widest">
          {news.category}
        </span>
      </div>

      <div className="flex-1 p-8 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-black/50 mb-4">
            <Globe size={14} />
            <p className="text-[11px] font-black uppercase tracking-widest">
              {news.outlet}
            </p>
          </div>

          <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight group-hover:text-[#D4AF37]">
            {news.title}
          </h3>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1 h-4 bg-black" />
            ))}
          </div>

          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform">
            View Article <ArrowUpRight size={14} />
          </div>
        </div>
      </div>

      <div className="absolute top-4 right-4 text-[10px] font-black text-black/20 uppercase">
        Log_0{index + 1}
      </div>
    </motion.a>
  )
}
