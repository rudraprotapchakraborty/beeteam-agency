'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Fingerprint, X, Maximize2, ShieldCheck, Award, Gavel, Sparkles, Database, ChevronRight } from 'lucide-react'

const awards = [
  {
    url: "https://i.ibb.co/s9X5JxM4/Whats-App-Image-2026-01-26-at-4-32-53-PM.jpg",
    title: "Certificate of Achievement",
    outlet: "FIPRESCI Bangladesh",
    desc: "A prestigious recognition for the film 'The University of Chankharpul'. Presented during the 24th Dhaka International Film Festival.",
    tag: "OFFICIAL SELECTION",
    date: "JAN 10-18, 2026",
    id: "CERT-001"
  },
  {
    url: "https://i.ibb.co/NnNMzSqc/Whats-App-Image-2026-01-26-at-3-15-54-PM.jpg",
    title: "FIPRESCI Bangladesh Award",
    outlet: "Dhaka International Film Festival",
    desc: "Winner of the Bangladesh Panorama: Full Length Section 2026. A testament to Beeteam's production excellence.",
    tag: "PLATINUM WINNER",
    date: "JAN 2026",
    id: "WIN-992"
  },
  {
    url: "https://i.ibb.co/B2NzKP5h/Whats-App-Image-2026-01-26-at-3-12-17-PM.jpg",
    title: "National Film Certification",
    outlet: "Government of Bangladesh",
    desc: "Officially granted the 'U' rating for unrestricted public exhibition. Registered under the Film Certification Act of 2023.",
    tag: "CERTIFIED BY BOARD",
    date: "JAN 18, 2026",
    id: "GOV-882"
  },
  {
    url: "https://i.ibb.co/m5kNgc8w/Whats-App-Image-2026-01-26-at-3-21-45-PM.jpg",
    title: "International Critics Laurels",
    outlet: "FIPRESCI International",
    desc: "Recognized in the Bangladesh Panorama: Full Length Section. Awarded for cinematic contribution to the 24th DIFF.",
    tag: "CRITICS CHOICE",
    date: "JAN 2026",
    id: "INT-441"
  }
]

export default function HallOfFame() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section className="bg-white py-40 overflow-hidden relative border-t border-black/5 selection:bg-black selection:text-[#FFC700]">
      
      {/* Background Decorative Grid (Industrial Style) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />

      <div className="max-w-7xl mx-auto px-10 relative z-10">
        
        {/* HEADER: Registry Style */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-40 gap-16">
          <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              className="flex items-center gap-6"
            >
              <Database className="text-red-600" size={24} />
              <span className="text-[12px] font-black uppercase tracking-[0.8em] text-black/40">Beeteam // Legal_Registry</span>
            </motion.div>
            
            <h2 className="text-8xl lg:text-[140px] font-black text-black tracking-[-0.04em] leading-[0.75] uppercase">
              HALL OF <br /> <span className="text-zinc-200 italic">PROWESS.</span>
            </h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="flex flex-col lg:items-end gap-10 bg-zinc-50 p-12 border-t-8 border-black rounded-br-[100px] shadow-2xl shadow-black/5"
          >
            <Fingerprint className="text-black opacity-100" size={80} strokeWidth={1.5} />
            <div className="space-y-4 text-right">
                <div className="inline-block px-4 py-1 bg-red-600 text-white text-[9px] font-black uppercase tracking-widest">Registry Verified</div>
                <p className="text-zinc-500 text-sm font-bold max-w-[300px] leading-relaxed italic">
                    "Official documentation and validated cinematic credentials for the 2026 global production cycle."
                </p>
            </div>
          </motion.div>
        </div>

        {/* 2X2 DRAMATIC GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {awards.map((award, i) => (
            <AwardVaultCard key={i} award={award} index={i} onOpen={() => setSelectedImage(award.url)} />
          ))}
        </div>

        {/* FOOTER: System Status */}
        <div className="mt-40 pt-20 border-t-2 border-black flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="flex flex-wrap gap-20">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Registry Reference</span>
              <span className="text-black text-4xl font-black tracking-tighter">BT/F-2026/04</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-red-600">Compliance Status</span>
              <div className="flex items-center gap-4">
                  <ShieldCheck className="text-black" size={24} />
                  <span className="text-black text-4xl font-black tracking-tighter uppercase border-b-4 border-yellow-400">UNRESTRICTED</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 text-zinc-300">
             <Gavel size={50} strokeWidth={1} />
             <p className="text-[10px] font-bold text-zinc-500 uppercase max-w-[180px] leading-tight tracking-tighter">
               Authorized for global exhibition under the Film Certification Act of 2023.
             </p>
          </div>
        </div>
      </div>

      {/* ULTRA LIGHTBOX (Inverted to White) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-white/98 backdrop-blur-2xl flex items-center justify-center p-8"
          >
            <motion.button
              whileHover={{ rotate: 90, scale: 1.1 }}
              className="absolute top-10 right-10 text-black hover:text-red-600"
              onClick={() => setSelectedImage(null)}
            >
              <X size={60} strokeWidth={1} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              src={selectedImage}
              className="max-w-full max-h-[85vh] object-contain rounded-3xl shadow-[0_80px_150px_-30px_rgba(0,0,0,0.3)] border-8 border-black"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function AwardVaultCard({ award, index, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      onClick={onOpen}
      className="group relative aspect-[16/11] bg-zinc-50 rounded-[4rem] border border-black/5 overflow-hidden flex flex-col justify-between p-14 transition-all duration-700 hover:bg-white hover:shadow-[0_60px_120px_-20px_rgba(0,0,0,0.12)] cursor-pointer"
    >
      {/* SCANLINE EFFECT (Subtle for Light Mode) */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,0,0,0.02)_50%,transparent_50%)] z-20 bg-[length:100%_12px] opacity-20" />

      {/* BACKGROUND IMAGE PREVIEW (Grayscale to Color) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-zinc-50/20 to-transparent z-10" />
        <motion.img 
          src={award.url} 
          className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-100 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-[2.5s] ease-out" 
        />
      </div>

      {/* TOP META HUD */}
      <div className="relative z-30 flex justify-between items-start">
        <div className="space-y-4">
            <p className="text-[10px] font-black text-black tracking-[0.5em] uppercase opacity-40">{award.id}</p>
            <div className="px-6 py-2 bg-black text-[#FFC700] text-[10px] font-black uppercase tracking-widest inline-block group-hover:bg-red-600 group-hover:text-white transition-colors duration-500 shadow-xl">
                {award.tag}
            </div>
        </div>
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border border-black/5 text-black opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 shadow-2xl">
          <Maximize2 size={24} />
        </div>
      </div>

      {/* BOTTOM CONTENT */}
      <div className="relative z-30 space-y-8">
        <div className="h-2 w-24 bg-yellow-400 group-hover:w-full transition-all duration-1000" />
        <div className="space-y-4">
          <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-zinc-400 group-hover:text-black transition-colors">{award.outlet}</h4>
          <h3 className="text-4xl lg:text-5xl font-black leading-[0.85] tracking-tighter uppercase text-black">
            {award.title}
          </h3>
          <p className="mt-8 text-zinc-500 text-sm font-bold max-w-[90%] leading-relaxed group-hover:text-black transition-colors">
            {award.desc}
          </p>
        </div>
        <div className="flex justify-between items-center pt-4">
            <span className="text-[10px] font-black text-zinc-400 tracking-[0.2em] uppercase">{award.date}</span>
            <div className="flex items-center gap-2 text-black font-black text-[10px] tracking-widest uppercase group-hover:text-red-600 transition-all">
              Inspect Certificate <ChevronRight size={14} />
            </div>
        </div>
      </div>
    </motion.div>
  )
}