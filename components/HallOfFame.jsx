'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Fingerprint, X, Maximize2, ShieldCheck, Database, ChevronRight, Scale, CheckCircle2, Award } from 'lucide-react'

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
    <section id='certification' className="bg-white py-32 overflow-hidden relative selection:bg-black selection:text-[#D4AF37]">
      
      {/* Editorial Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header: High-Authority Registry */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12 border-b-[6px] border-black pb-16">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              className="flex items-center gap-3"
            >
              <Database className="text-black" size={18} />
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-black/40">Legal_Archive_Sector_04</span>
            </motion.div>
            
            <h2 className="text-[clamp(3.5rem,8vw,8.5rem)] font-black text-black tracking-tighter leading-[0.8] uppercase">
              Hall of <br /> <span className="text-white bg-black px-4 ml-[-0.5rem]">Fame.</span>
            </h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            className="flex flex-col lg:items-end gap-6 bg-zinc-50 border-2 border-black p-8 shadow-[12px_12px_0px_#000]"
          >
            <Fingerprint size={56} strokeWidth={1.5} className="text-black" />
            <div className="text-right space-y-2">
                <div className="flex items-center justify-end gap-2 text-green-600">
                  <CheckCircle2 size={12} />
                  <span className="text-[9px] font-black uppercase tracking-[0.2em]">Authentication: Valid</span>
                </div>
                <p className="text-black text-[11px] font-bold max-w-[220px] leading-tight uppercase tracking-tight">
                  Verified cinematic credentials and legal exhibition permits for the 2026 cycle.
                </p>
            </div>
          </motion.div>
        </div>

        {/* 2X2 Registry Grid - High Contrast */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, i) => (
            <AwardVaultCard key={i} award={award} index={i} onOpen={() => setSelectedImage(award.url)} />
          ))}
        </div>

        {/* Professional Compliance Footer */}
        <div className="mt-32 flex flex-col md:flex-row justify-between items-center gap-12 pt-12 border-t-2 border-black/5">
          <div className="flex items-center gap-20">
            <div className="space-y-1">
              <span className="text-[9px] font-black uppercase text-black/30 tracking-widest">Serial Number</span>
              <p className="text-xl font-black tracking-tighter uppercase text-black">BT-CERT-GLOBAL-26</p>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] font-black uppercase text-red-600 tracking-widest">Compliance</span>
              <div className="flex items-center gap-2 text-black">
                <ShieldCheck size={18} />
                <p className="text-xl font-black tracking-tighter uppercase">Unrestricted</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 max-w-xs opacity-40">
             <Scale size={32} strokeWidth={1} />
             <p className="text-[9px] font-bold uppercase leading-tight tracking-tight">
               Authorized for global exhibition under the Film Certification Act. Beeteam Intellectual Property Reserved.
             </p>
          </div>
        </div>
      </div>

      {/* Lightbox: Clean Gallery Mode */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-white/95 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.button
              whileHover={{ rotate: 90, scale: 1.1 }}
              className="absolute top-8 right-8 text-black"
              onClick={() => setSelectedImage(null)}
            >
              <X size={48} strokeWidth={2} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              src={selectedImage}
              className="max-w-full max-h-[85vh] object-contain shadow-[0_40px_100px_rgba(0,0,0,0.15)] border-[12px] border-black"
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={onOpen}
      className="group relative h-[480px] bg-white border-2 border-black flex flex-col justify-end p-10 cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-[20px_20px_0px_rgba(0,0,0,1)]"
    >
      {/* Background Certificate - Vivid & Clear */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* White fade out to prevent text interference */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/20 z-10" />
        <motion.img 
          src={award.url} 
          className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-[2s] ease-out" 
        />
      </div>

      {/* Floating HUD Elements */}
      <div className="absolute top-8 right-8 z-20">
        <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
          <Maximize2 size={20} />
        </div>
      </div>

      <div className="relative z-20 space-y-6">
        <div className="space-y-3">
            <span className="text-[10px] font-black text-black/30 tracking-[0.4em] uppercase">{award.id}</span>
            <div className="px-5 py-1.5 bg-black text-white text-[9px] font-black uppercase tracking-[0.2em] w-fit group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-300">
                {award.tag}
            </div>
        </div>
        
        <div className="space-y-2">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D4AF37]">{award.outlet}</h4>
          <h3 className="text-4xl lg:text-5xl font-black leading-[0.85] tracking-tighter uppercase text-black">
            {award.title}
          </h3>
          <p className="text-black font-bold text-xs max-w-sm leading-snug uppercase tracking-tight opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            {award.desc}
          </p>
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-black/10">
            <span className="text-[10px] font-black text-black/40 tracking-widest uppercase">{award.date}</span>
            <div className="flex items-center gap-2 text-black font-black text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all">
              Verify Document <ChevronRight size={14} className="text-[#D4AF37]" strokeWidth={3} />
            </div>
        </div>
      </div>
    </motion.div>
  )
}