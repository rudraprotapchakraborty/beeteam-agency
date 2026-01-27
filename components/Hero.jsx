'use client'

import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { useRef, useEffect } from 'react'

export default function Vision() {
  const containerRef = useRef(null)
  
  // Mouse Tracking for Spotlight & Lens Flare
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      mouseX.set(clientX)
      mouseY.set(clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  // Scroll Tracking for 3D Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 })
  
  // High-End Perspective Transforms
  const rotateX = useTransform(smoothProgress, [0, 1], [25, -25])
  const rotateY = useTransform(smoothProgress, [0, 1], [-20, 20])
  const imageZ = useTransform(smoothProgress, [0, 0.5, 1], [0, 100, 0])
  const bgTextX = useTransform(smoothProgress, [0, 1], [-150, 150])

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center py-40 overflow-hidden bg-[#020202] cursor-none"
    >
      {/* 1. KINETIC FILM GRAIN (The "Secret Sauce") */}
      <div className="absolute inset-0 pointer-events-none z-[60] opacity-[0.04]">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* 2. DYNAMIC CURSOR SPOTLIGHT */}
      <motion.div
        className="fixed inset-0 z-50 pointer-events-none"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(700px circle at ${x}px ${y}px, rgba(255,199,0,0.12), transparent 70%)`
          )
        }}
      />
      
      {/* Lens Flare Ring Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-[#FFC700]/30 rounded-full z-[100] pointer-events-none backdrop-blur-[2px]"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <div className="absolute inset-0 m-auto w-1 h-1 bg-[#FFC700] rounded-full shadow-[0_0_15px_#FFC700]" />
      </motion.div>

      {/* 3. PARALLAX BACKGROUND LAYER */}
      <motion.div 
        style={{ x: bgTextX }}
        className="absolute inset-0 flex items-center justify-center opacity-[0.07] select-none -z-10"
      >
        <h2 className="text-[30vw] font-black text-white italic tracking-tighter whitespace-nowrap">
          PRODUCTION
        </h2>
      </motion.div>

      {/* 4. MAIN STAGE */}
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-20">
        
        {/* THE 3D SLAB */}
        <div className="perspective-[2500px]">
          <motion.div
            style={{ rotateX, rotateY, z: imageZ }}
            className="relative rounded-[30px] overflow-hidden group shadow-[0_80px_150px_-20px_rgba(0,0,0,0.8)] border border-white/5 bg-zinc-900"
          >
            {/* Chromatic Aberration Hover Effect */}
            <motion.div 
              className="absolute inset-0 z-20 opacity-0 group-hover:opacity-40 pointer-events-none transition-opacity duration-700 bg-[url('https://beeteam.agency/wp-content/uploads/2025/02/6-1-2048x1152.png')] bg-cover mix-blend-screen scale-105 translate-x-1"
            />
            
            <motion.img
              src="https://beeteam.agency/wp-content/uploads/2025/02/6-1-2048x1152.png"
              alt="Cinematic Vision"
              className="relative z-10 w-full h-[650px] object-cover contrast-[1.1] brightness-[0.8] group-hover:brightness-[1.1] transition-all duration-1000 ease-out"
            />

            {/* Viewfinder Corner Accents */}
            <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-white/20 z-30" />
            <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-white/20 z-30" />
          </motion.div>
        </div>

        {/* TYPOGRAPHY BLOCK */}
        <div className="flex flex-col gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="h-[1px] w-16 bg-[#FFC700]" />
              <span className="text-[#FFC700] uppercase tracking-[0.8em] text-[10px] font-black">
                Visual Blueprint
              </span>
            </div>
            
            <h3 className="text-7xl lg:text-9xl font-black text-white leading-[0.8] tracking-tighter">
              BEYOND <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-white/20">IMAGINE.</span> <br />
              <span className="italic text-[#FFC700] drop-shadow-[0_0_30px_rgba(255,199,0,0.3)]">BEETEAM.</span>
            </h3>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-8 pl-4"
          >
            <p className="text-2xl text-zinc-300 font-light leading-snug max-w-lg">
              We define the <span className="font-bold text-white">gravitational pull</span> of your brand’s narrative. 
            </p>
            <p className="text-zinc-500 text-lg max-w-md leading-relaxed">
              Every pixel is polished. Every transition is a heartbeat. We don't just produce content; we curate experiences that linger long after the screen goes black.
            </p>
          </motion.div>

          {/* THE CINEMATIC ACTION */}
          <motion.div className="pt-4 pl-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-14 py-6 bg-transparent border border-white/10 rounded-[18px] text-white text-[11px] font-black uppercase tracking-[0.4em] overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Initiate Sequence
              </span>
              <div className="absolute inset-0 bg-[#FFC700] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* 5. ANAMORPHIC VIGNETTE & LETTERBOXING */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_300px_rgba(0,0,0,1)] z-40" />
      <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-black via-black/80 to-transparent z-40" />
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black via-black/80 to-transparent z-40" />
    </section>
  )
}