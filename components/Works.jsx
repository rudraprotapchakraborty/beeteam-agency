'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const projects = [
  { type: 'video', src: "https://beeteam.agency/wp-content/uploads/2025/02/srilanka-airlines.mp4?_=1" },
  { type: 'embed', id: "VpOd1qnnJHw" },
  { type: 'embed', id: "nvwHhE5el6o" },
  { type: 'embed', id: "UqMWgsWH7RU" },
  { type: 'embed', id: "por5d5Nelog" },
  { type: 'embed', id: "2LJWoKDKiqc" },
  { type: 'embed', id: "QTgY29dOPnQ" },
]

export default function Works() {
  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Animated Header */}
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black uppercase tracking-tighter">
              Featured <span className="text-[#FFC700]">Works</span>
            </h2>
            <div className="h-1.5 w-24 bg-[#FFC700] mt-2" />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden md:block text-gray-400 max-w-xs text-right text-sm"
          >
            A collection of visual excellence and storytelling through the lens of Beeteam.
          </motion.p>
        </div>

        {/* Bento-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900 aspect-video shadow-2xl border border-white/5"
            >
              {item.type === 'video' ? (
                <video
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  src={item.src}
                  muted
                  loop
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                />
              ) : (
                <div className="relative w-full h-full">
                  {/* Overlay to prevent accidental iframe clicks and style it */}
                  <div className="absolute inset-0 z-10 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  <iframe
                    className="w-full h-full scale-105 group-hover:scale-110 transition-transform duration-700"
                    src={`https://www.youtube.com/embed/${item.id}?controls=0&rel=0`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              )}

              {/* Hover UI Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <motion.div 
                  initial={{ scale: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-[#FFC700] p-4 rounded-full text-black shadow-xl"
                >
                  <Play fill="currentColor" size={24} />
                </motion.div>
              </div>

              {/* Bottom Label Reveal */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black to-transparent">
                <p className="text-[#FFC700] text-xs font-bold tracking-widest uppercase">Project {i + 1}</p>
                <h4 className="text-lg font-bold">Visual Storytelling</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}