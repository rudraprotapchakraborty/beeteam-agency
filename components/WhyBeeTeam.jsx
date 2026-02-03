'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Target, Users, Sparkles, MessageSquare, Zap, Fingerprint, ChevronRight, Binary } from 'lucide-react'

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
    accent: "#E11D48" // Warning Red
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
    <section id='about' className="bg-white py-40 overflow-hidden relative border-t border-black/5 selection:bg-black selection:text-white">
      
      {/* Background HUD Grid (Smaller, tighter for technical feel) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

      <div className="max-w-[1500px] mx-auto px-10 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row gap-20 items-start mb-48">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-3/5 space-y-12"
          >
            <div className="flex items-center gap-4">
              <Binary className="text-red-600" size={24} />
              <span className="text-black/40 text-[12px] font-black uppercase tracking-[0.8em]">Core_Identity_v2.6</span>
            </div>
            
            <h2 className="text-[90px] lg:text-[150px] font-black tracking-tighter text-black leading-[0.75] uppercase">
              THE <br /> <span className="text-zinc-200">EDGE.</span>
            </h2>
            
            <div className="relative p-12 border-l-8 border-black bg-zinc-50 rounded-tr-[4rem] shadow-xl shadow-black/5">
               <p className="text-zinc-500 text-3xl leading-tight max-w-xl font-black uppercase tracking-tighter">
                We transcend traditional cinematography. We engineer <span className="text-red-600 italic">visual legacies</span> through high-art storytelling.
              </p>
            </div>
          </motion.div>

          {/* THE COMMAND BLOCK: High Contrast Yellow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, rotate: -1 }}
            className="lg:w-2/5 bg-yellow-400 p-16 rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] relative overflow-hidden group border-4 border-black"
          >
            {/* Scanlines */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,0,0,0.05)_50%,transparent_50%)] bg-[length:100%_4px] opacity-30" />
            <Fingerprint className="absolute -top-10 -right-10 text-black/10 w-64 h-64 group-hover:scale-110 transition-transform duration-1000" strokeWidth={1} />
            
            <div className="relative z-10 space-y-10">
               <div className="w-20 h-3 bg-black" />
               <h3 className="text-6xl font-black text-black leading-none tracking-tighter uppercase">TAILORED <br />PRECISION.</h3>
               <p className="text-black leading-relaxed font-bold text-lg uppercase tracking-tight">
                Every frame is a tactical decision. We synthesize cinematic artistry to solve global business challenges.
               </p>
               
               <div className="pt-6">
                  <div className="inline-flex items-center gap-4 px-8 py-4 bg-black text-white text-[11px] font-black uppercase tracking-widest rounded-none shadow-2xl">
                      SYSTEM_OPTIMIZED <div className="w-2 h-2 bg-red-600 rounded-full animate-ping" />
                  </div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* FEATURE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative h-[480px] w-full cursor-crosshair"
    >
      {/* 3D Technical Slab */}
      <div 
        style={{ transform: "translateZ(40px)" }}
        className="absolute inset-0 bg-zinc-50 rounded-[3rem] p-12 border border-black/5 group-hover:border-black group-hover:bg-white transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl shadow-black/0 group-hover:shadow-black/5"
      >
        <div className="relative z-10">
          <div 
            className="w-20 h-20 rounded-2xl flex items-center justify-center mb-10 transition-all duration-700 group-hover:rotate-[360deg] group-hover:bg-black group-hover:text-white shadow-lg bg-white border border-black/5"
            style={{ color: item.accent }}
          >
            {item.icon}
          </div>
          <h4 className="text-3xl font-black text-black mb-6 tracking-tighter uppercase group-hover:text-red-600 transition-colors leading-none">
            {item.title}
          </h4>
          <p className="text-zinc-500 group-hover:text-black transition-colors leading-relaxed font-bold uppercase text-xs tracking-tight">
            {item.desc}
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300 group-hover:text-black transition-all">
          <span>Analyze Node</span>
          <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
        </div>
        
        {/* HUD Corners */}
        <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-black/5 group-hover:border-red-600 transition-colors" />
        <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-black/5 group-hover:border-black transition-colors" />
      </div>
    </motion.div>
  )
}