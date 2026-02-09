'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, Maximize2, Zap, ChevronRight, Activity, Sparkles, ArrowUpRight } from 'lucide-react'

const projects = [
  { type: 'embed', id: "VpOd1qnnJHw", title: "Brand Narrative", category: "Film", tags: ["4K", "Cinematic"] },
  { type: 'embed', id: "nvwHhE5el6o", title: "Corporate Vision", category: "TVC", tags: ["Commercial"] },
  { type: 'embed', id: "UqMWgsWH7RU", title: "Dynamic Motion", category: "OVC", tags: ["Graphics"] },
  { type: 'embed', id: "por5d5Nelog", title: "Product Story", category: "Ads", tags: ["Macro"] },
  { type: 'embed', id: "2LJWoKDKiqc", title: "Cinematic Journey", category: "Documentary", tags: ["Original"] },
  { type: 'embed', id: "QTgY29dOPnQ", title: "Music Visual", category: "Music Video", tags: ["Art"] },
]

export default function Works() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id='works' className="py-24 bg-white text-black overflow-hidden relative selection:bg-black selection:text-white">
      
      {/* Background: Clean Technical Canvas */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#000 1.2px, transparent 1.2px), linear-gradient(90deg, #000 1.2px, transparent 1.2px)`, backgroundSize: '80px 80px' }} />

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        
        {/* Header: High-Definition Editorial */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles size={20} className="text-black" fill="black" />
              <span className="text-[11px] font-black uppercase tracking-[0.6em] text-black">Precision_Optics_2026</span>
            </div>
            <h2 className="text-[clamp(3.5rem,9vw,8.5rem)] font-black uppercase tracking-tighter leading-[0.8] text-black">
              Visual <br /> <span className="underline decoration-4 underline-offset-8 decoration-black">Portfolio.</span>
            </h2>
          </motion.div>

          <div className="p-8 border-l-4 border-black bg-black text-white max-w-sm">
              <div className="flex items-center gap-2 mb-3">
                 <Activity size={16} className="text-[#00FF00]" />
                 <span className="text-[9px] font-black uppercase tracking-widest">Feed: Full Spectrum</span>
              </div>
              <p className="text-[11px] font-bold uppercase leading-tight tracking-tight opacity-80">
                Showcasing ultra-high-definition narrative assets. All color matrices calibrated to rec.709 industry standards.
              </p>
          </div>
        </div>

        {/* Bento Grid: Sharp Definition */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {projects.map((item, i) => (
            <ProjectCard 
              key={i} 
              item={item} 
              index={i} 
              onClick={() => setSelectedProject(item)} 
            />
          ))}
        </div>
      </div>

      {/* Lightbox: Cinema Mode */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-white/95 backdrop-blur-md p-4"
          >
            <motion.button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-black hover:scale-110 transition-transform z-[1010]"
            >
              <X size={44} strokeWidth={2.5} />
            </motion.button>

            <motion.div 
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video overflow-hidden border-[16px] border-black shadow-2xl bg-black"
            >
              <iframe
                src={`https://www.youtube.com/embed/${selectedProject.id}?autoplay=1&rel=0&modestbranding=1&color=white`}
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

function ProjectCard({ item, index, onClick }) {
  const isLarge = index === 0

  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`group relative bg-black overflow-hidden cursor-pointer border-2 border-black/5 transition-all duration-500 hover:border-black
        ${isLarge ? 'md:col-span-4 md:row-span-2 h-[640px]' : 'md:col-span-2 h-[310px]'}`}
    >
      {/* Video Viewport - Sharp & High Contrast */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          className="w-full h-full scale-[1.8] group-hover:scale-[1.5] transition-transform duration-[2s] ease-out pointer-events-none"
          src={`https://www.youtube.com/embed/${item.id}?controls=0&rel=0&mute=1&playlist=${item.id}&loop=1&autoplay=1&modestbranding=1`}
        />
        {/* Subtle Vignette Overlay - No Grayscale */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-10 group-hover:from-black/40 transition-all duration-500" />
      </div>

      {/* Content Layer: Professional Minimalist */}
      <div className="absolute inset-0 flex flex-col justify-between p-8 z-20 text-white pointer-events-none">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/60">
              PRJ_VOD_0{index + 1}
            </span>
            <div className="px-3 py-1 bg-white text-black text-[9px] font-black uppercase tracking-widest w-fit">
              {item.category}
            </div>
          </div>
          
          <div className="w-10 h-10 bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <ArrowUpRight size={20} strokeWidth={3} />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
              <Play fill="currentColor" size={18} className="translate-x-0.5" />
            </div>
            <div className="flex flex-col">
               {item.tags?.map(tag => (
                <span key={tag} className="text-[9px] font-bold uppercase tracking-widest text-white/50">{tag}</span>
              ))}
            </div>
          </div>
          
          <h4 className={`font-black uppercase tracking-tighter leading-[0.85] transition-all duration-500
            ${isLarge ? 'text-5xl md:text-8xl' : 'text-3xl'}`}>
            {item.title}
          </h4>
        </div>
      </div>
      
      {/* Hover Line Detail */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-white z-30"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  )
}