'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
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
    accent: "#FFC700", // Gold
    icon: <Film size={32} />
  },
  {
    title: "Short Film",
    subtitle: "Production",
    tag: "NARRATIVE // 002",
    desc: "Condensed visual impact with deep emotional resonance.",
    accent: "#FF3E3E", // Red
    icon: <Video size={32} />
  },
  {
    title: "Documentary",
    subtitle: "Production",
    tag: "REALITY // 003",
    desc: "Truth captured through a cinematic and raw lens.",
    accent: "#00E5FF", // Cyan
    icon: <Sparkles size={32} />
  },
  {
    title: "Advertisement",
    subtitle: "Production",
    tag: "COMMERCIAL // 004",
    desc: "High-conversion visual assets for global brands.",
    accent: "#A8FF00", // Lime
    icon: <Tv size={32} />
  },
  {
    title: "Promotional",
    subtitle: "& Campaigns",
    tag: "MARKETING // 005",
    desc: "Strategic visual campaigns that dominate the digital space.",
    accent: "#FF00E5", // Magenta
    icon: <Megaphone size={32} />
  },
  {
    title: "Music",
    subtitle: "Production",
    tag: "CONTENT // 006",
    desc: "Versatile, high-fidelity content for modern platforms.",
    accent: "#7000FF", // Purple
    icon: <Music size={32} />
  },
];

export default function Services() {
  return (
    <section className="bg-[#050505] py-32 overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="max-w-[1600px] mx-auto px-10 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 text-[#FFC700]"
            >
              <div className="w-2 h-2 rounded-full bg-[#FFC700] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.6em]">Premium Services // 2026</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-[0.8]"
            >
              OUR <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-800">EXPERTISE.</span>
            </motion.h2>
          </div>
          
          <motion.p className="text-zinc-500 text-xs max-w-[320px] leading-relaxed font-bold uppercase tracking-[0.2em] border-l border-zinc-800 pl-6">
            A spectrum of visual mastery. We blend chromatic energy with technical precision to architect brand legacies.
          </motion.p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      className="group relative h-[500px] bg-zinc-900/20 backdrop-blur-sm rounded-[3rem] p-12 flex flex-col justify-between cursor-pointer overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500"
    >
      {/* Dynamic Aura Glow */}
      <motion.div 
        className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ 
          background: useTransform(
            [mouseX, mouseY],
            (latest) => `radial-gradient(400px circle at ${latest[0]}px ${latest[1]}px, ${service.accent}25, transparent 80%)`
          )
        }}
      />

      {/* Floating Index Number */}
      <div 
        className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-700 select-none font-black text-[12vw]"
        style={{ color: service.accent }}
      >
        {index + 1}
      </div>

      <div className="relative z-10">
        {/* COLORFUL ICON BLOCK */}
        <div 
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
          style={{ 
            backgroundColor: `${service.accent}15`, 
            color: service.accent,
            boxShadow: `0 0 40px -10px ${service.accent}40`
          }}
        >
          {service.icon}
        </div>

        <div className="space-y-2">
          <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: service.accent }}>
            {service.tag}
          </span>
          <h3 className="text-white text-5xl font-black leading-tight tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
            {service.title}
          </h3>
        </div>
      </div>

      <div className="relative z-10">
        <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-[260px] mb-8 group-hover:text-zinc-300 transition-colors">
          {service.desc}
        </p>
        
        <div className="flex items-center gap-4 group/btn">
          <div 
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-transparent"
            style={{ 
              backgroundColor: 'transparent',
              '--hover-bg': service.accent 
            }}
          >
            <motion.div 
              className="absolute w-12 h-12 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"
              style={{ backgroundColor: service.accent }}
            />
            <ArrowUpRight className="relative z-10 text-white group-hover:text-black transition-colors duration-500" size={20} />
          </div>
          <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] group-hover:text-white transition-colors">
            Inquire Project
          </span>
        </div>
      </div>

      {/* Viewfinder Detail */}
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