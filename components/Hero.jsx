'use client'

import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { useRef, useEffect } from 'react'

export default function UltraVision() {
  const containerRef = useRef(null)
  
  // Mouse tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window
      mouseX.set((e.clientX / innerWidth) - 0.5)
      mouseY.set((e.clientY / innerHeight) - 0.5)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Smoothing
  const springConfig = { stiffness: 100, damping: 30, mass: 1 }
  const smoothMouseX = useSpring(mouseX, springConfig)
  const smoothMouseY = useSpring(mouseY, springConfig)
  const smoothScroll = useSpring(scrollYProgress, springConfig)

  // 3D Transforms
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-12, 12])
  const bgTextX = useTransform(smoothScroll, [0, 1], [-100, 100])

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[150vh] flex items-center justify-center py-40 overflow-hidden bg-white cursor-none"
    >
      {/* 1. KINETIC GRAIN (Inverted for Light) */}
      <div className="absolute inset-0 pointer-events-none z-[100] opacity-[0.04] mix-blend-multiply">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" /></filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* 2. AMBIENT LIGHT (Subtle Red/Yellow Bloom) */}
      <motion.div
        className="fixed inset-0 z-10 pointer-events-none"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(1200px circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(255,199,0,0.06), rgba(225,29,72,0.03), transparent 70%)`
          )
        }}
      />

      {/* 3. MEGA GHOST TEXT (Layered behind) */}
      <motion.div 
        style={{ x: bgTextX }}
        className="absolute inset-0 flex flex-col items-center justify-center opacity-[0.03] select-none pointer-events-none"
      >
        <h2 className="text-[35vw] font-black text-black leading-none uppercase italic tracking-tighter">
          HYPER
        </h2>
      </motion.div>

      {/* 4. MAIN 3D STAGE */}
      <div className="relative z-20 w-full max-w-7xl px-10 perspective-[3000px]">
        <motion.div
          style={{ 
            rotateX, 
            rotateY, 
            transformStyle: "preserve-3d" 
          }}
          className="relative grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          
          {/* THE MULTI-LAYER IMAGE SLAB */}
          <div className="relative group" style={{ transformStyle: "preserve-3d" }}>
            
            {/* LAYER 0: Light Soft Shadow */}
            <div className="absolute inset-0 bg-black/5 blur-[80px] rounded-3xl translate-y-16 scale-90" />

            {/* LAYER 1: The Main Image */}
            <motion.div 
               className="relative z-10 rounded-2xl overflow-hidden border border-black/5 bg-zinc-100 shadow-2xl"
               style={{ translateZ: 50 }}
            >
              <motion.img
                src="https://beeteam.agency/wp-content/uploads/2025/02/6-1-2048x1152.png"
                className="w-full h-[650px] object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.5s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
            </motion.div>

            {/* LAYER 2: Floating Viewfinder (Yellow Accent) */}
            <motion.div 
              style={{ translateZ: 150 }}
              className="absolute inset-[-30px] border-[1.5px] border-yellow-400 rounded-3xl pointer-events-none z-30"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full py-2 text-black text-[9px] tracking-[0.8em] font-black bg-yellow-400 px-4">
                SYSTEM_STABLE_V2
              </div>
              <div className="absolute top-4 left-4 w-10 h-10 border-t-4 border-l-4 border-black" />
              <div className="absolute bottom-4 right-4 w-10 h-10 border-b-4 border-r-4 border-red-600" />
            </motion.div>

            {/* LAYER 3: Data Streams (Red Accent) */}
            <motion.div 
              style={{ translateZ: 250, x: useTransform(smoothMouseX, [-0.5, 0.5], [15, -15]) }}
              className="absolute top-20 -right-10 z-40 bg-white p-6 border border-black/5 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
            >
               <div className="text-red-600 font-black text-xs mb-2 italic">LIVE TELEMETRY</div>
               <div className="h-1 w-32 bg-zinc-100 overflow-hidden">
                 <motion.div 
                   animate={{ x: [-128, 128] }} 
                   transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                   className="h-full w-full bg-red-600" 
                 />
               </div>
               <div className="mt-2 text-[10px] text-black font-mono">FRM_RATE: 120.4 FPS</div>
            </motion.div>
          </div>

          {/* TYPOGRAPHY BLOCK */}
          <motion.div 
            style={{ translateZ: 180 }}
            className="flex flex-col gap-8 text-black"
          >
            <div className="flex items-center gap-4">
               <motion.div 
                animate={{ scale: [1, 1.3, 1] }} 
                transition={{ repeat: Infinity, duration: 2 }}
                className="h-3 w-3 bg-red-600 rounded-full shadow-[0_0_15px_rgba(225,29,72,0.4)]" 
               />
               <span className="uppercase tracking-[0.8em] text-[10px] font-black text-black/40">Visual Interface</span>
            </div>

            <h3 className="text-8xl font-black leading-[0.85] tracking-tighter text-black">
              BEYOND <br /> 
              <span className="bg-yellow-400 px-4">LIMITS.</span> <br />
              <span className="text-zinc-200">PRODUCTION.</span>
            </h3>

            <div className="h-[4px] w-24 bg-red-600" />

            <p className="text-3xl font-light leading-tight text-zinc-600 italic">
              Manipulating the <span className="font-black text-black">Visual Fabric</span> of the modern era.
            </p>

            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-fit mt-10 px-14 py-6 bg-black text-white font-black uppercase tracking-[0.4em] text-[11px] rounded-full hover:bg-red-600 transition-colors shadow-2xl"
            >
              Enter the Void
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* CUSTOM CURSOR CROSSHAIR (Black/Red) */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 z-[1000] pointer-events-none flex items-center justify-center"
        style={{ 
          x: useTransform(smoothMouseX, [-0.5, 0.5], [0, typeof window !== 'undefined' ? window.innerWidth : 0]), 
          y: useTransform(smoothMouseY, [-0.5, 0.5], [0, typeof window !== 'undefined' ? window.innerHeight : 0]),
          translateX: "-50%", translateY: "-50%" 
        }}
      >
        <div className="absolute inset-0 border border-black/10 rounded-full animate-spin-slow" />
        <div className="w-[1.5px] h-6 bg-red-600 absolute" />
        <div className="w-6 h-[1.5px] bg-red-600 absolute" />
        <div className="w-1 h-1 bg-black rounded-full" />
      </motion.div>
    </section>
  )
}