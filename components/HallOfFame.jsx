'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Fingerprint, X, Maximize2 } from 'lucide-react'

const awards = [
  {
    url: "https://i.ibb.co/s9X5JxM4/Whats-App-Image-2026-01-26-at-4-32-53-PM.jpg",
    title: "Certificate of Achievement",
    outlet: "FIPRESCI Bangladesh",
    desc: "A prestigious recognition for the film 'The University of Chankharpul'. Presented during the 24th Dhaka International Film Festival.",
    tag: "OFFICIAL SELECTION",
    date: "JAN 10-18, 2026"
  },
  {
    url: "https://i.ibb.co/NnNMzSqc/Whats-App-Image-2026-01-26-at-3-15-54-PM.jpg",
    title: "FIPRESCI Bangladesh Award",
    outlet: "Dhaka International Film Festival",
    desc: "Winner of the Bangladesh Panorama: Full Length Section 2026. A testament to Beeteam's production excellence.",
    tag: "PLATINUM WINNER",
    date: "JAN 2026"
  },
  {
    url: "https://i.ibb.co/B2NzKP5h/Whats-App-Image-2026-01-26-at-3-12-17-PM.jpg",
    title: "National Film Certification",
    outlet: "Government of Bangladesh",
    desc: "Officially granted the 'U' rating for unrestricted public exhibition. Registered under the Film Certification Act of 2023.",
    tag: "CERTIFIED BY BOARD",
    date: "JAN 18, 2026"
  },
  {
    url: "https://i.ibb.co/m5kNgc8w/Whats-App-Image-2026-01-26-at-3-21-45-PM.jpg",
    title: "International Critics Laurels",
    outlet: "FIPRESCI International",
    desc: "Recognized in the Bangladesh Panorama: Full Length Section. Awarded for cinematic contribution to the 24th DIFF.",
    tag: "CRITICS CHOICE",
    date: "JAN 2026"
  }
]

export default function HallOfFame() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section className="bg-white py-40 overflow-hidden relative border-t border-black/5">
      {/* Soft Ambient Light (Inverted) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.01)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-10 relative z-10">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-32 gap-12">
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-4 text-red-600">
              <div className="w-16 h-[2px] bg-red-600" />
              <span className="text-[11px] font-black uppercase tracking-[0.6em]">Beeteam // Prestige Records</span>
            </motion.div>
            <h2 className="text-7xl lg:text-[110px] font-black text-black tracking-tighter leading-[0.8] uppercase">
              Hall of <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-zinc-400 to-zinc-200">FAME.</span>
            </h2>
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex flex-col lg:items-end gap-6">
            <Fingerprint className="text-zinc-200" size={64} />
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.4em] max-w-[320px] lg:text-right leading-relaxed border-r-4 border-yellow-400 pr-6">
              Official Certifications for 'The University of Chankharpul'.
            </p>
          </motion.div>
        </div>

        {/* 2X2 RECTANGULAR GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {awards.map((award, i) => (
            <AwardCard key={i} award={award} index={i} onOpen={() => setSelectedImage(award.url)} />
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-32 pt-16 border-t border-black/5 flex flex-wrap justify-between items-center gap-12 text-zinc-400">
          <div className="flex gap-16">
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-widest mb-2">Registry ID</span>
              <span className="text-black text-lg font-bold tracking-tighter underline decoration-red-600 decoration-2">EL F-03/2026</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-widest mb-2">Board Rating</span>
              <span className="bg-yellow-400 text-black px-3 py-1 text-lg font-bold tracking-tighter">Unrestricted (U)</span>
            </div>
          </div>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-white/98 backdrop-blur-2xl flex items-center justify-center p-6 md:p-20 cursor-zoom-out"
          >
            <motion.button
              whileHover={{ rotate: 90 }}
              className="absolute top-10 right-10 text-black/50 hover:text-black"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} strokeWidth={1} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              src={selectedImage}
              alt="Award Full Preview"
              className="max-w-full max-h-full object-contain rounded-xl shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-black/5 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function AwardCard({ award, index, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      onClick={onOpen}
      className="group relative aspect-[16/10] bg-zinc-50 rounded-[2.5rem] border border-black/5 overflow-hidden flex flex-col justify-end p-10 transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] cursor-pointer"
    >
      <div className="absolute inset-0 z-0">
        {/* Soft White Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent z-10 opacity-90 group-hover:opacity-40 transition-opacity duration-700" />
        <motion.img 
          src={award.url} 
          className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-100 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-[1.2s]" 
        />
      </div>

      <div className="relative z-20 flex flex-col gap-6">
        <div className="flex justify-between items-start">
          <span className="text-red-600 text-[9px] font-black uppercase tracking-[0.4em]">{award.tag}</span>
          <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center border border-black/5 opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 size={18} className="text-black" />
          </div>
        </div>
        <div>
          <h3 className="text-black text-4xl font-black leading-none tracking-tighter mb-4 italic group-hover:not-italic transition-all duration-500">
            {award.title.toUpperCase()}
          </h3>
          <p className="text-zinc-500 text-[11px] font-medium max-w-[70%] group-hover:text-black transition-colors leading-relaxed">
            {award.desc}
          </p>
        </div>
      </div>
      
      {/* Viewfinder Detail (Yellow) */}
      <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-yellow-400 scale-0 group-hover:scale-100 transition-transform origin-top-left" />
    </motion.div>
  )
}