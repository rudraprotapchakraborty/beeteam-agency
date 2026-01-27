'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, Maximize2, MonitorPlay } from 'lucide-react'

const projects = [
  // { type: 'video', src: "https://beeteam.agency/wp-content/uploads/2025/02/srilanka-airlines.mp4?_=1", title: "SriLankan Airlines", category: "Commercial", id: "srilanka" },
  { type: 'embed', id: "VpOd1qnnJHw", title: "Brand Narrative", category: "Film" },
  { type: 'embed', id: "nvwHhE5el6o", title: "Corporate Vision", category: "TVC" },
  { type: 'embed', id: "UqMWgsWH7RU", title: "Dynamic Motion", category: "OVC" },
  { type: 'embed', id: "por5d5Nelog", title: "Product Story", category: "Ads" },
  { type: 'embed', id: "2LJWoKDKiqc", title: "Cinematic Journey", category: "Documentary" },
  { type: 'embed', id: "QTgY29dOPnQ", title: "Music Visual", category: "Music Video" },
]

export default function Works() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section className="py-32 bg-[#020202] text-white overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 space-y-8 md:space-y-0">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-[1px] bg-[#FFC700]" />
              <span className="text-[#FFC700] text-[10px] font-black uppercase tracking-[0.5em]">Selected Works</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              FEATURED <br /> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-700">GALLERY</span>
            </h2>
          </motion.div>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[280px]">
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

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 md:p-10"
          >
            <motion.button
              onClick={() => setSelectedProject(null)}
              className="absolute top-10 right-10 text-white/50 hover:text-white z-[210]"
              whileHover={{ rotate: 90 }}
            >
              <X size={40} strokeWidth={1} />
            </motion.button>

            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(255,199,0,0.1)] border border-white/10"
            >
              {selectedProject.type === 'video' ? (
                <video src={selectedProject.src} controls autoPlay className="w-full h-full object-contain" />
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedProject.id}?autoplay=1&rel=0&modestbranding=1`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              )}
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
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className={`group relative rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/5 cursor-pointer
        ${isLarge ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2'}`}
    >
      {/* Media Layer */}
      <div className="absolute inset-0 z-0">
        {item.type === 'video' ? (
          <video
            className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-1000"
            src={item.src}
            muted loop playsInline autoPlay={isLarge}
          />
        ) : (
          <div className="w-full h-full pointer-events-none">
            <div className="absolute inset-0 z-10 bg-black/40 group-hover:bg-transparent transition-all duration-700" />
            <iframe
              className="w-full h-full scale-[1.3] grayscale group-hover:grayscale-0 transition-all duration-1000"
              src={`https://www.youtube.com/embed/${item.id}?controls=0&rel=0&mute=1&playlist=${item.id}&loop=1`}
            />
          </div>
        )}
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent opacity-80 z-10" />

      {/* Interaction UI */}
      <div className="absolute inset-0 flex flex-col justify-between p-8 z-30">
        <div className="flex justify-between items-start">
          <div className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
            {item.category}
          </div>
          <Maximize2 size={18} className="text-white/30 group-hover:text-white transition-colors" />
        </div>

        <div className="space-y-3">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 bg-[#FFC700] rounded-full flex items-center justify-center text-black shadow-[0_0_30px_rgba(255,199,0,0.4)]"
          >
            <Play fill="black" size={20} className="translate-x-0.5" />
          </motion.div>
          <h4 className={`font-black uppercase tracking-tighter ${isLarge ? 'text-4xl' : 'text-xl'}`}>
            {item.title}
          </h4>
        </div>
      </div>
    </motion.div>
  )
}