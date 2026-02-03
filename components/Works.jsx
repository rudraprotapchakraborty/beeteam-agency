'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, Maximize2, Zap, Film, MonitorPlay, ChevronRight, Activity } from 'lucide-react'

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
    <section id='works' className="py-40 bg-white text-black overflow-hidden relative selection:bg-black selection:text-yellow-400">
      
      {/* BACKGROUND DECOR: Technical Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

      <div className="max-w-[1500px] mx-auto px-8 relative z-10">
        
        {/* HEADER: Surgical Brutalism */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-32 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-2 bg-red-600" />
              <span className="text-black text-[12px] font-black uppercase tracking-[0.8em]">Archive_Showcase</span>
            </div>
            <h2 className="text-[100px] md:text-[140px] font-black uppercase tracking-tighter leading-[0.75] text-black">
              VISUAL <br /> <span className="text-zinc-200">ENGINE.</span>
            </h2>
          </motion.div>

          <div className="p-10 border-l-8 border-yellow-400 bg-zinc-50 rounded-tr-[4rem] max-w-sm shadow-xl shadow-black/5">
              <div className="flex gap-2 mb-6">
                 <Activity size={20} className="text-red-600" />
                 <span className="text-[10px] font-black uppercase tracking-widest">Feed_Active</span>
              </div>
              <p className="text-zinc-500 font-bold text-xs uppercase leading-relaxed tracking-tight">
                Processing high-fidelity optics and industrial-grade narratives. All visual nodes synced to 2026 standards.
              </p>
          </div>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[340px]">
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

      {/* ULTRA LIGHTBOX */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-white/95 backdrop-blur-2xl p-6"
          >
            <motion.button
              onClick={() => setSelectedProject(null)}
              className="absolute top-10 right-10 text-black hover:text-red-600 z-[1010]"
              whileHover={{ scale: 1.2, rotate: 90 }}
            >
              <X size={48} strokeWidth={2} />
            </motion.button>

            <motion.div 
              initial={{ scale: 0.9, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 100 }}
              className="relative w-full max-w-7xl aspect-video rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.2)] border-8 border-black"
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -15 }}
      className={`group relative rounded-[3rem] overflow-hidden bg-zinc-100 border border-black/5 cursor-pointer transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)]
        ${isLarge ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2'}`}
    >
      {/* THE VIEWPORT (Inverted grayscale treatment) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/40 group-hover:bg-transparent z-10 transition-all duration-700" />
        <iframe
          className="w-full h-full scale-[1.6] grayscale group-hover:grayscale-0 group-hover:scale-[1.4] transition-all duration-[1.5s] ease-out pointer-events-none opacity-80 group-hover:opacity-100"
          src={`https://www.youtube.com/embed/${item.id}?controls=0&rel=0&mute=1&playlist=${item.id}&loop=1&autoplay=1`}
        />
      </div>

      {/* CONTENT LAYER */}
      <div className="absolute inset-0 flex flex-col justify-between p-10 z-30">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-black text-black tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">NODE_00{index + 1}</span>
            <div className="px-5 py-2 bg-black text-yellow-400 rounded-none text-[10px] font-black uppercase tracking-widest w-fit group-hover:bg-red-600 group-hover:text-white transition-colors duration-500">
              {item.category}
            </div>
          </div>
          <motion.div 
            whileHover={{ rotate: 90, scale: 1.1 }}
            className="w-14 h-14 rounded-full bg-white flex items-center justify-center border border-black/5 text-black shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
          >
            <Maximize2 size={20} />
          </motion.div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <motion.div 
              className="w-20 h-20 bg-black rounded-3xl flex items-center justify-center text-white group-hover:bg-yellow-400 group-hover:text-black transition-all duration-500"
            >
              <Play fill="currentColor" size={32} className="translate-x-0.5" />
            </motion.div>
            <div className="flex flex-col gap-1">
               {item.tags?.map(tag => (
                <span key={tag} className="text-[9px] font-black uppercase tracking-widest text-zinc-400">{tag}</span>
              ))}
            </div>
          </div>
          
          <div className="flex items-end justify-between">
             <h4 className={`font-black uppercase tracking-tighter text-black leading-[0.85] group-hover:text-red-600 transition-colors ${isLarge ? 'text-6xl md:text-[7rem]' : 'text-3xl'}`}>
               {item.title}
             </h4>
             <ChevronRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" size={32} strokeWidth={3} />
          </div>
        </div>
      </div>

      {/* OVERLAY SCANLINES (Lighter for Light Mode) */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,0,0,0.03)_50%,transparent_50%)] z-20 bg-[length:100%_10px] opacity-30" />
    </motion.div>
  )
}