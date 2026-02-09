'use client'

import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { 
  Film, 
  Video, 
  Tv, 
  Megaphone, 
  Music, 
  Sparkles,
  ArrowUpRight,
  Zap,
  Layers,
  ChevronRight,
  Target
} from 'lucide-react'

const services = [
  {
    title: "Full Length",
    tag: "FEATURE // 001",
    desc: "Epic narrative storytelling designed for the silver screen.",
    accent: "#000000",
    icon: <Film size={32} />
  },
  {
    title: "Short Film",
    tag: "NARRATIVE // 002",
    desc: "Condensed visual impact with deep emotional resonance.",
    accent: "#E11D48", 
    icon: <Video size={32} />
  },
  {
    title: "Documentary",
    tag: "REALITY // 003",
    desc: "Truth captured through a cinematic and raw lens.",
    accent: "#D4AF37", // Gold
    icon: <Sparkles size={32} />
  },
  {
    title: "Advertisement",
    tag: "COMMERCIAL // 004",
    desc: "High-conversion visual assets for global brands.",
    accent: "#E11D48",
    icon: <Tv size={32} />
  },
  {
    title: "Promotional",
    tag: "MARKETING // 005",
    desc: "Strategic visual campaigns that dominate the digital space.",
    accent: "#000000",
    icon: <Megaphone size={32} />
  },
  {
    title: "Music",
    tag: "CONTENT // 006",
    desc: "Versatile, high-fidelity content for modern platforms.",
    accent: "#E11D48",
    icon: <Music size={32} />
  },
];

export default function Services() {
  return (
    <section id='services' className="bg-white py-32 overflow-hidden relative selection:bg-black selection:text-white">
      
      {/* Background: Sharp Technical Blueprint */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 2px, transparent 2px)`, backgroundSize: '50px 50px' }} />
      
      <div className="max-w-[1600px] mx-auto px-8 relative z-10">
        
        {/* Header: Editorial High-Contrast */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-12 border-b-4 border-black pb-16">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 text-black"
            >
              <Target size={20} strokeWidth={3} />
              <span className="text-[12px] font-black uppercase tracking-[0.8em]">Capabilities_Manifesto_2026</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[clamp(4rem,10vw,9rem)] font-black text-black tracking-tighter leading-[0.8] uppercase"
            >
              Core <br /> 
              <span className="text-white bg-black px-4 ml-[-0.5rem]">Engine.</span>
            </motion.h2>
          </div>
          
          <motion.div className="bg-white border-2 border-black p-10 shadow-[10px_10px_0px_rgba(0,0,0,1)] max-w-sm">
              <div className="flex gap-2 mb-4 text-black">
                <Zap size={16} fill="currentColor" />
                <span className="text-[10px] font-black uppercase tracking-widest">Power_Grid: Active</span>
              </div>
              <p className="text-black text-xs font-bold uppercase tracking-tight leading-tight">
                Architecting brand legacies through technical dominance. Every frame calibrated for maximum psychological impact.
              </p>
          </motion.div>
        </div>

        {/* Services Grid: Pure White/Black */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 border border-black/10">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onMouseMove={onMouseMove}
      className="group relative h-[600px] bg-white p-14 flex flex-col justify-between cursor-pointer overflow-hidden transition-all duration-500 hover:z-20"
    >
      {/* Subtle Interactive Aura - No Grays */}
      <motion.div 
        className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{ 
          background: useTransform(
            [mouseX, mouseY],
            (latest) => `radial-gradient(400px circle at ${latest[0]}px ${latest[1]}px, ${service.accent}15, transparent 80%)`
          )
        }}
      />

      {/* Decorative ID */}
      <div className="absolute top-10 right-10 text-black/10 font-black text-2xl tracking-tighter group-hover:text-black group-hover:translate-x-[-10px] transition-all duration-500">
        0{index + 1}
      </div>

      <div className="relative z-10">
        {/* ICON BLOCK: High Contrast Black/White */}
        <div className="w-20 h-20 bg-white border-2 border-black flex items-center justify-center mb-12 group-hover:bg-black group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-[6px_6px_0px_rgba(0,0,0,0.1)] group-hover:shadow-[0px_0px_0px_rgba(0,0,0,0)]">
          {service.icon}
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
             <div className="w-8 h-1" style={{ backgroundColor: service.accent }} />
             <span className="text-[11px] font-black tracking-[0.4em] uppercase text-black/40 group-hover:text-black transition-colors">
               {service.tag}
             </span>
          </div>
          <h3 className="text-black text-6xl font-black leading-[0.8] tracking-tighter transition-all duration-500 uppercase group-hover:tracking-normal group-hover:text-red-600">
            {service.title}
          </h3>
        </div>
      </div>

      <div className="relative z-10">
        <p className="text-black font-bold text-sm leading-tight max-w-[240px] mb-12 uppercase tracking-tight">
          {service.desc}
        </p>
        
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-none border-2 border-black flex items-center justify-center transition-all duration-300 relative overflow-hidden group-hover:bg-black group-hover:text-white">
            <ArrowUpRight size={28} strokeWidth={3} />
          </div>
          <div className="flex flex-col">
             <span className="text-[10px] font-black text-red-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
               Inquiry_Ready
             </span>
             <span className="text-sm font-black text-black uppercase tracking-tighter flex items-center gap-1 group-hover:gap-3 transition-all">
               Start Project <ChevronRight size={14} strokeWidth={3} />
             </span>
          </div>
        </div>
      </div>

      {/* Grid Corner Detail */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
    </motion.div>
  );
}