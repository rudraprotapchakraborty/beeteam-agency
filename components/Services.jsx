'use client'

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
  ChevronRight
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
    accent: "#E11D48", // Red
    icon: <Video size={32} />
  },
  {
    title: "Documentary",
    tag: "REALITY // 003",
    desc: "Truth captured through a cinematic and raw lens.",
    accent: "#000000",
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
    <section id='services' className="bg-white py-40 overflow-hidden relative selection:bg-black selection:text-white">
      {/* BACKGROUND: Technical Grid Blueprint */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />
      
      <div className="max-w-[1600px] mx-auto px-10 relative z-10">
        
        {/* HEADER: Surgical Brutalism */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-48 gap-16">
          <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-6 text-black"
            >
              <Layers size={24} strokeWidth={3} />
              <span className="text-[14px] font-black uppercase tracking-[1em]">Capabilities_Manifesto</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-8xl md:text-[140px] font-black text-black tracking-tighter leading-[0.75]"
            >
              CORE <br /> 
              <span className="text-zinc-200 italic">ENGINE.</span>
            </motion.h2>
          </div>
          
          <motion.div className="bg-zinc-50 border-t-8 border-black p-12 shadow-2xl shadow-black/5 max-w-sm rounded-br-[60px]">
              <div className="flex gap-2 mb-6 text-red-600">
                <Zap size={16} fill="currentColor" />
                <Zap size={16} fill="currentColor" />
              </div>
              <p className="text-zinc-500 text-sm font-bold uppercase tracking-tight leading-relaxed">
                Deploying technical precision to architect brand legacies. Our expertise is a fusion of visual dominance and narrative soul.
              </p>
          </motion.div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.8 }}
      onMouseMove={onMouseMove}
      className="group relative h-[620px] bg-zinc-50 rounded-[4rem] p-16 flex flex-col justify-between cursor-pointer overflow-hidden border border-black/5 transition-all duration-700 hover:bg-white hover:shadow-[0_80px_100px_-30px_rgba(0,0,0,0.1)] hover:border-black/20"
    >
      {/* Reveal Aura */}
      <motion.div 
        className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{ 
          background: useTransform(
            [mouseX, mouseY],
            (latest) => `radial-gradient(500px circle at ${latest[0]}px ${latest[1]}px, ${service.accent}08, transparent 80%)`
          )
        }}
      />

      {/* Background Reference Number */}
      <div className="absolute -top-10 -left-10 opacity-[0.04] group-hover:opacity-[0.1] transition-all duration-1000 select-none font-black text-[20vw] pointer-events-none text-black">
        {index + 1}
      </div>

      <div className="relative z-10">
        {/* ICON BLOCK */}
        <div className="w-24 h-24 rounded-3xl flex items-center justify-center mb-14 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 shadow-xl bg-white border border-black/5 text-black group-hover:bg-black group-hover:text-white">
          {service.icon}
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
             <div className="w-12 h-[2px]" style={{ backgroundColor: service.accent }} />
             <span className="text-[12px] font-black tracking-[0.4em] uppercase text-zinc-400 group-hover:text-black transition-colors">
               {service.tag}
             </span>
          </div>
          <h3 className="text-black text-6xl font-black leading-[0.85] tracking-tighter group-hover:text-red-600 transition-all duration-500 uppercase">
            {service.title}
          </h3>
        </div>
      </div>

      <div className="relative z-10">
        <p className="text-zinc-500 text-base font-bold leading-relaxed max-w-[260px] mb-14 group-hover:text-black transition-colors">
          {service.desc}
        </p>
        
        <div className="flex items-center gap-6 group/btn">
          <div className="w-20 h-20 rounded-full border-2 border-black/10 flex items-center justify-center transition-all duration-500 relative overflow-hidden group-hover:border-black group-hover:scale-110 shadow-lg bg-white">
            <motion.div 
              className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-black"
            />
            <ArrowUpRight className="relative z-10 text-black group-hover:text-white transition-colors duration-500" size={32} strokeWidth={3} />
          </div>
          <div className="flex flex-col">
             <span className="text-[11px] font-black text-red-600 uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-500">
               Live_Node
             </span>
             <span className="text-sm font-black text-black uppercase tracking-tight flex items-center gap-2">
               Inquire Project <ChevronRight size={14} />
             </span>
          </div>
        </div>
      </div>

      {/* Surgical Viewfinder Corners */}
      <div className="absolute top-12 right-12 w-8 h-8 border-t-4 border-r-4 border-black/5 group-hover:border-red-600 transition-all duration-700" />
      <div className="absolute bottom-12 left-12 w-8 h-8 border-b-4 border-l-4 border-black/5 group-hover:border-black transition-all duration-700" />
    </motion.div>
  );
}