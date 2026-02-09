'use client'

import React from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Target, Users, Sparkles, MessageSquare, Zap, Fingerprint, ChevronRight, Binary, Activity } from 'lucide-react'

const features = [
  {
    title: "Artistic Storytelling",
    desc: "Mastering narratives that elevate your brand’s impact to new heights.",
    icon: <Sparkles size={32} />,
    accent: "#000000" 
  },
  {
    title: "Expert Craftsmanship",
    desc: "Every project reflects unmatched quality from seasoned industry experts.",
    icon: <Users size={32} />,
    accent: "#E11D48" // Red
  },
  {
    title: "Brand Alignment",
    desc: "Productions that align seamlessly with your identity and goals.",
    icon: <Target size={32} />,
    accent: "#000000"
  },
  {
    title: "Deep Collaboration",
    desc: "We gain deep insights into your brand essence and audience dynamics.",
    icon: <MessageSquare size={32} />,
    accent: "#E11D48"
  }
]

export default function WhyBeeTeam() {
  return (
    <section id='about' className="bg-white py-32 overflow-hidden relative selection:bg-black selection:text-white">
      
      {/* Background HUD: Sharp Technical Dot Matrix */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1.5px, transparent 1.5px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-[1600px] mx-auto px-8 relative z-10">
        
        {/* HEADER SECTION: High Contrast Editorial */}
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-3/5 space-y-10"
          >
            <div className="flex items-center gap-4">
              <Activity className="text-red-600" size={20} strokeWidth={3} />
              <span className="text-black text-[11px] font-black uppercase tracking-[0.7em]">Identity_System_2026</span>
            </div>
            
            <h2 className="text-[clamp(4.5rem,11vw,10rem)] font-black tracking-tighter text-black leading-[0.75] uppercase">
              The <br /> <span className="underline decoration-red-600 decoration-[16px] underline-offset-[-5px]">Edge.</span>
            </h2>
            
            <div className="relative p-10 border-l-[12px] border-black bg-white shadow-[20px_20px_0px_rgba(0,0,0,0.05)]">
               <p className="text-black text-3xl leading-tight max-w-xl font-black uppercase tracking-tighter">
                 We transcend traditional cinema. We architect <span className="text-red-600">visual dominance</span> through high-art engineering.
               </p>
            </div>
          </motion.div>

          {/* THE COMMAND BLOCK: High Contrast Warning Palette */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-2/5 bg-[#FFD700] p-14 border-[6px] border-black shadow-[25px_25px_0px_#000] relative overflow-hidden group"
          >
            <Fingerprint className="absolute -top-12 -right-12 text-black/20 w-64 h-64 group-hover:rotate-12 transition-transform duration-1000" strokeWidth={1} />
            
            <div className="relative z-10 space-y-8">
               <div className="flex items-center gap-3">
                  <div className="w-16 h-4 bg-black" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-black">Strategic_Core</span>
               </div>
               <h3 className="text-5xl font-black text-black leading-[0.9] tracking-tighter uppercase">Tailored <br />Precision.</h3>
               <p className="text-black leading-tight font-black text-sm uppercase tracking-tight">
                 Every frame is a tactical decision. We synthesize cinematic artistry to solve global business challenges with extreme prejudice.
               </p>
               
               <div className="pt-4">
                  <div className="inline-flex items-center gap-4 px-6 py-3 bg-black text-white text-[10px] font-black uppercase tracking-widest">
                      System_Calibrated <div className="w-2 h-2 bg-[#00FF00] rounded-full animate-pulse shadow-[0_0_10px_#00FF00]" />
                  </div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* FEATURE GRID: No Grays, High Contrast */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10">
          {features.map((item, i) => (
            <FeatureCard key={i} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

function FeatureCard({ item, index }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative h-[450px] w-full bg-white cursor-crosshair overflow-hidden p-12 flex flex-col justify-between transition-colors duration-300 hover:bg-[#fafafa]"
    >
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        {/* ICON BLOCK: Pure Contrast */}
        <div 
          className="w-16 h-16 border-2 border-black flex items-center justify-center mb-10 transition-all duration-500 group-hover:bg-black group-hover:text-white group-hover:scale-110 shadow-[4px_4px_0px_#000] group-hover:shadow-[0px_0px_0px_#000]"
          style={{ color: item.accent }}
        >
          {item.icon}
        </div>
        
        <h4 className="text-3xl font-black text-black mb-4 tracking-tighter uppercase group-hover:text-red-600 transition-colors leading-none">
          {item.title}
        </h4>
        <p className="text-black font-bold uppercase text-[11px] leading-tight tracking-tight max-w-[200px]">
          {item.desc}
        </p>
      </div>

      <div style={{ transform: "translateZ(30px)" }} className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.3em] text-black">
          <span>Analyze_Node</span>
          <ChevronRight size={14} strokeWidth={3} className="text-red-600 group-hover:translate-x-2 transition-transform" />
        </div>
        <Binary size={16} className="text-black/10 group-hover:text-black/100 transition-colors" />
      </div>

      {/* Decorative Border Logic */}
      <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-2 bg-red-600 transition-all duration-300" />
      <div className="absolute top-0 right-0 w-0 group-hover:w-2 h-full bg-black transition-all duration-300" />
    </motion.div>
  )
}