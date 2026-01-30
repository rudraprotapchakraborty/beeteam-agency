'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Target, Users, Sparkles, MessageSquare, ShieldCheck } from 'lucide-react'

const features = [
  {
    title: "Artistic Storytelling",
    desc: "Mastering narratives that elevate your brand’s impact to new heights.",
    icon: <Sparkles size={32} />,
    accent: "#E11D48" // Red
  },
  {
    title: "Expert Craftsmanship",
    desc: "Every project reflects unmatched quality from seasoned industry experts.",
    icon: <Users size={32} />,
    accent: "#000000" // Black
  },
  {
    title: "Brand Alignment",
    desc: "Productions that align seamlessly with your identity and goals.",
    icon: <Target size={32} />,
    accent: "#FFC700" // Yellow
  },
  {
    title: "Deep Collaboration",
    desc: "We gain deep insights into your brand essence and audience dynamics.",
    icon: <MessageSquare size={32} />,
    accent: "#E11D48" // Red
  }
]

export default function WhyBeeTeam() {
  return (
    <section className="bg-white py-32 overflow-hidden relative border-t border-black/5">
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-3/5"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-2 bg-red-600" />
              <span className="text-black text-[10px] font-black uppercase tracking-[0.5em]">The Distinction</span>
            </div>
            <h2 className="text-7xl lg:text-9xl font-black tracking-tighter text-black leading-[0.8]">
              WHY <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-zinc-400">BEETEAM?</span>
            </h2>
            <p className="mt-8 text-zinc-500 text-xl leading-relaxed max-w-xl font-medium border-l-4 border-yellow-400 pl-8">
              We transcend traditional cinematography. We engineer <span className="text-black font-bold underline decoration-red-600">visual legacies</span> through high-art storytelling and brand psychology.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            className="lg:w-2/5 bg-yellow-400 p-12 rounded-[3rem] shadow-[0_30px_60px_rgba(255,199,0,0.3)] relative overflow-hidden group"
          >
            <ShieldCheck className="absolute -top-6 -right-6 text-black/10 w-40 h-40 group-hover:rotate-12 transition-transform duration-700" />
            <h3 className="text-3xl font-black mb-6 text-black leading-tight tracking-tighter italic">Tailored <br />Precision.</h3>
            <p className="text-black leading-relaxed font-bold text-lg">
              Every frame is a calculated decision. We don't just "make videos"—we collaborate to solve business challenges with cinematic artistry.
            </p>
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

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative h-[400px] w-full"
    >
      {/* 3D Paper Slab */}
      <div 
        style={{ transform: "translateZ(30px)" }}
        className="absolute inset-0 bg-zinc-50 rounded-[3rem] p-10 border border-black/5 group-hover:bg-white group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col justify-between overflow-hidden"
      >
        <div className="relative z-10">
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3"
            style={{ 
              backgroundColor: 'white', 
              color: item.accent,
              border: `1px solid ${item.accent}20` 
            }}
          >
            {item.icon}
          </div>
          <h4 className="text-2xl font-black text-black mb-4 tracking-tighter">
            {item.title}
          </h4>
          <p className="text-zinc-500 group-hover:text-black transition-colors leading-relaxed font-medium">
            {item.desc}
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300 group-hover:text-red-600 transition-colors">
          <span>Explore Service</span>
          <div className="w-0 group-hover:w-8 h-[2px] bg-red-600 transition-all duration-500" />
        </div>
        
        {/* Subtle Bottom Accent Line */}
        <div 
          className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700" 
          style={{ backgroundColor: item.accent }}
        />
      </div>
    </motion.div>
  )
}