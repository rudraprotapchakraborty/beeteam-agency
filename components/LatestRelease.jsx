'use client'

import { motion } from 'framer-motion'
import { Play, Maximize, Share2, Layers } from 'lucide-react'

export default function LatestRelease() {
  return (
    <section
      id="latest-release"
      className="bg-[#F9F9F9] py-32 relative overflow-hidden selection:bg-black selection:text-[#FFD700]"
    >
      {/* 1. DECORATIVE BACKGROUND ACCENT */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
      <div className="absolute -right-20 top-40 opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[30vw] font-black leading-none">BEE</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* 2. HEADER BLOCK: THE "STUNNING" TYPOGRAPHY */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#FFD700]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">
                Production House // Studio 2026
              </span>
            </div>
            
            <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-black">
              Latest <br />
              <span className="text-[#FFD700]">Release.</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-8 md:mt-0 md:text-right"
          >
            <p className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest leading-loose">
              Project: Narrative_04<br />
              Client: Financial_Express<br />
              Status: Live_Public
            </p>
          </motion.div>
        </div>

        {/* 3. THE "FLOATING GLASS" PLAYER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-black rounded-t-xl border-x border-t border-black">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
              <span className="text-white font-mono text-[9px] uppercase tracking-[0.2em]">bt_player_v2.0</span>
            </div>
            <div className="flex gap-4">
              <Layers size={14} className="text-zinc-500" />
              <Share2 size={14} className="text-zinc-500" />
            </div>
          </div>

          {/* Main Video Container */}
          <div className="relative w-full aspect-video bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group overflow-hidden border-x border-b border-zinc-200">
            <iframe
              className="absolute inset-0 w-full h-full z-10"
              src="https://www.youtube.com/embed/ErRnSJQ9nhg?rel=0&modestbranding=1"
              title="Official Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            
            {/* Subtle Overlay Pattern */}
            <div className="absolute inset-0 pointer-events-none z-20 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
          </div>

          {/* Floating Action Button (Lower Right) */}
          <div className="absolute -bottom-8 -right-8 hidden lg:block z-30">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-24 h-24 bg-[#FFD700] rounded-full flex items-center justify-center shadow-xl cursor-pointer"
            >
              <Play fill="black" size={32} className="ml-1 text-black" />
            </motion.div>
          </div>
        </motion.div>

        {/* 4. TECHNICAL FOOTNOTES */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-zinc-200 pt-8">
          {[
            { label: 'Director', value: 'BEE_TEAM_CORE' },
            { label: 'Duration', value: '02:44' },
            { label: 'Resolution', value: '4K_UHD' },
            { label: 'Bitrate', value: '50_MBPS' }
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-[10px] text-zinc-400 uppercase font-black tracking-widest mb-1">{stat.label}</p>
              <p className="text-sm text-black font-bold font-mono">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}