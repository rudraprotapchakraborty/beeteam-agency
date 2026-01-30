'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { 
  Film, 
  Video, 
  Tv, 
  Megaphone, 
  Music, 
  Sparkles,
  ArrowUpRight 
} from 'lucide-react'

const services = [
  {
    title: "Full Length",
    subtitle: "Film Production",
    tag: "FEATURE // 001",
    desc: "Epic narrative storytelling designed for the silver screen.",
    accent: "#FFC700", // Yellow
    icon: <Film size={32} />
  },
  {
    title: "Short Film",
    subtitle: "Production",
    tag: "NARRATIVE // 002",
    desc: "Condensed visual impact with deep emotional resonance.",
    accent: "#E11D48", // Red
    icon: <Video size={32} />
  },
  {
    title: "Documentary",
    subtitle: "Production",
    tag: "REALITY // 003",
    desc: "Truth captured through a cinematic and raw lens.",
    accent: "#FFC700", // Yellow
    icon: <Sparkles size={32} />
  },
  {
    title: "Advertisement",
    subtitle: "Production",
    tag: "COMMERCIAL // 004",
    desc: "High-conversion visual assets for global brands.",
    accent: "#E11D48", // Red
    icon: <Tv size={32} />
  },
  {
    title: "Promotional",
    subtitle: "& Campaigns",
    tag: "MARKETING // 005",
    desc: "Strategic visual campaigns that dominate the digital space.",
    accent: "#FFC700", // Yellow
    icon: <Megaphone size={32} />
  },
  {
    title: "Music",
    subtitle: "Production",
    tag: "CONTENT // 006",
    desc: "Versatile, high-fidelity content for modern platforms.",
    accent: "#E11D48", // Red
    icon: <Music size={32} />
  },
];

export default function Services() {
  return (
    <section className="bg-white py-32 overflow-hidden relative">
      {/* Subtle Grainy Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />
      
      <div className="max-w-[1600px] mx-auto px-10 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 text-red-600"
            >
              <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.6em]">Premium Services // 2026</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-7xl md:text-9xl font-black text-black tracking-tighter leading-[0.8]"
            >
              OUR <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-zinc-500 to-zinc-300">EXPERTISE.</span>
            </motion.h2>
          </div>
          
          <motion.p className="text-zinc-400 text-xs max-w-[320px] leading-relaxed font-bold uppercase tracking-[0.2em] border-l-2 border-yellow-400 pl-6">
            Technical precision meets visual dominance. We architect brand legacies through high-fidelity cinema.
          </motion.p>
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={onMouseMove}
      className="group relative h-[500px] bg-zinc-50 rounded-[2.5rem] p-12 flex flex-col justify-between cursor-pointer overflow-hidden border border-black/[0.03] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500"
    >
      {/* Light Aura Glow */}
      <motion.div 
        className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ 
          background: useTransform(
            [mouseX, mouseY],
            (latest) => `radial-gradient(400px circle at ${latest[0]}px ${latest[1]}px, ${service.accent}15, transparent 80%)`
          )
        }}
      />

      {/* Floating Index Number */}
      <div 
        className="absolute top-0 right-0 p-10 opacity-[0.05] group-hover:opacity-[0.15] transition-all duration-700 select-none font-black text-[12vw]"
        style={{ color: service.accent }}
      >
        0{index + 1}
      </div>

      <div className="relative z-10">
        {/* ICON BLOCK */}
        <div 
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3"
          style={{ 
            backgroundColor: 'white', 
            color: 'black',
            boxShadow: `0 10px 20px -5px ${service.accent}30`,
            border: `1px solid ${service.accent}40`
          }}
        >
          {service.icon}
        </div>

        <div className="space-y-2">
          <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: service.accent === '#FFC700' ? '#B88E00' : service.accent }}>
            {service.tag}
          </span>
          <h3 className="text-black text-5xl font-black leading-tight tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
            {service.title}
          </h3>
        </div>
      </div>

      <div className="relative z-10">
        <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-[260px] mb-8">
          {service.desc}
        </p>
        
        <div className="flex items-center gap-4 group/btn">
          <div 
            className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center transition-all duration-500 relative overflow-hidden"
          >
            <motion.div 
              className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-500"
              style={{ backgroundColor: 'black' }}
            />
            <ArrowUpRight className="relative z-10 text-black group-hover:text-white transition-colors duration-500" size={20} />
          </div>
          <span className="text-[10px] font-black text-black/30 uppercase tracking-[0.3em] group-hover:text-black transition-colors">
            Inquire Project
          </span>
        </div>
      </div>

      {/* Camera Viewfinder Detail (Yellow or Red) */}
      <div 
        className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{ borderColor: service.accent }}
      />
      <div 
        className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{ borderColor: service.accent }}
      />
    </motion.div>
  );
}