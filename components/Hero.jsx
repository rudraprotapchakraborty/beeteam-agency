'use client'

import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { useRef, useEffect } from 'react'

export default function BeeTeamUltraHero() {
  const containerRef = useRef(null)
  
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
    offset: ["start start", "end end"]
  })

  const springConfig = { stiffness: 100, damping: 30, mass: 1 }
  const smoothMouseX = useSpring(mouseX, springConfig)
  const smoothMouseY = useSpring(mouseY, springConfig)
  const smoothScroll = useSpring(scrollYProgress, springConfig)

  // --- REAL CURTAIN PHYSICS ---
  // We use a slightly different easing (easeIn) for the curtain slide
  const shutterLeftX = useTransform(smoothScroll, [0, 0.25], ["0%", "-105%"])
  const shutterRightX = useTransform(smoothScroll, [0, 0.25], ["0%", "105%"])
  
  // Adding a "squeeze" effect to simulate fabric bunching up
  const curtainScaleX = useTransform(smoothScroll, [0, 0.25], [1, 0.4])
  const shutterOpacity = useTransform(smoothScroll, [0.2, 0.3], [1, 0])
  
  const logoScale = useTransform(smoothScroll, [0, 0.15], [1, 0])
  const logoRotate = useTransform(smoothScroll, [0, 0.15], [0, 90])

  // --- YOUR ORIGINAL TRANSFORM MAPPINGS ---
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-12, 12])
  const mainScale = useTransform(smoothScroll, [0, 0.4], [0.9, 1.1])
  const mainZ = useTransform(smoothScroll, [0, 0.4], [0, 150])
  const bgTextScale = useTransform(smoothScroll, [0, 1], [1, 2.5])
  const bgTextOpacity = useTransform(smoothScroll, [0, 0.5, 0.8], [0.05, 0.1, 0])

  // Fabric Pleats Gradient String
  const pleatGradient = "repeating-linear-gradient(90deg, #000 0%, #111 5%, #000 10%, #1a1a1a 12%, #000 15%)";

  return (
    <section 
      ref={containerRef} 
      className="relative h-[250vh] bg-white overflow-visible mt-24 selection:bg-yellow-400 selection:text-black"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* --- THE REALISTIC THEATRE CURTAINS --- */}
        <motion.div 
          style={{ opacity: shutterOpacity }}
          className="absolute inset-0 z-[500] pointer-events-none flex"
        >
          {/* Left Curtain */}
          <motion.div 
            style={{ 
                x: shutterLeftX, 
                scaleX: curtainScaleX,
                transformOrigin: "left center",
                backgroundImage: pleatGradient
            }}
            className="h-full w-1/2 shadow-[20px_0_50px_rgba(0,0,0,0.9)] flex items-center justify-end relative"
          >
             {/* Velvet Sheen Overlay */}
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-black/40" />
             <div className="w-px h-1/2 bg-yellow-400/20 mr-4" />
          </motion.div>

          {/* Right Curtain */}
          <motion.div 
            style={{ 
                x: shutterRightX, 
                scaleX: curtainScaleX,
                transformOrigin: "right center",
                backgroundImage: pleatGradient
            }}
            className="h-full w-1/2 shadow-[-20px_0_50px_rgba(0,0,0,0.9)] flex items-center justify-start relative"
          >
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-black/40" />
             <div className="w-px h-1/2 bg-yellow-400/20 ml-4" />
          </motion.div>

          {/* BEE LOGO LOCK */}
          <motion.div 
            style={{ scale: logoScale, rotate: logoRotate }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center z-[501] shadow-[0_0_80px_rgba(0,0,0,0.5)] border-4 border-black"
          >
             <img src="/favicon.ico" alt="Bee" className="w-20 h-20" />
          </motion.div>
        </motion.div>

        {/* 1. ARCHITECTURAL BRANDING */}
        <motion.div 
        suppressHydrationWarning
          style={{ 
            scale: bgTextScale, 
            opacity: bgTextOpacity,
            x: useTransform(smoothMouseX, [-0.5, 0.5], [100, -100]) 
          }}
          className="absolute inset-0 flex flex-col items-center justify-center select-none pointer-events-none"
        >
          <h2 className="text-[28vw] font-black text-black leading-none uppercase tracking-tighter italic">
            BEETEAM
          </h2>
        </motion.div>

        {/* 2. KINETIC OVERLAY */}
        <div className="absolute inset-0 pointer-events-none z-[5] opacity-[0.04] mix-blend-multiply">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" /></filter>
            <rect width="100%" height="100%" filter="url(#grain)" />
          </svg>
        </div>

        {/* 3. THE 3D CORE ENGINE */}
        <motion.div
          style={{ 
            rotateX, 
            rotateY, 
            scale: mainScale,
            translateZ: mainZ,
            perspective: "2000px",
            transformStyle: "preserve-3d" 
          }}
          className="relative z-20 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-12"
        >
          <div className="relative mt-12 h-[600px]" style={{ transformStyle: "preserve-3d" }}>
            <div className="absolute inset-0 bg-black/5 blur-[80px] rounded-full scale-90 translate-y-20" />
            <motion.div 
               className="relative z-10 w-4xl h-xl rounded-2xl overflow-hidden border border-black/5 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] bg-zinc-100"
               style={{ translateZ: 60 }}
            >
              <img
                src="https://epaper.thefinancialexpress.com.bd/2026/01/21/images/24_100.jpg" 
                alt="Production HQ"
                className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>

            <motion.div 
              style={{ 
                translateZ: 120, 
                x: useTransform(smoothMouseX, [-0.5, 0.5], [30, -30]),
                y: useTransform(smoothMouseY, [-0.5, 0.5], [30, -30])
              }}
              className="absolute inset-[-40px] border border-black/10 rounded-2xl z-20 pointer-events-none"
            >
              <div className="absolute top-0 right-10 -translate-y-full py-1 text-white text-[9px] font-black bg-black px-4 tracking-[0.4em]">
                BEE_TM_OS_V2.0
              </div>
              <div className="absolute -top-1 -left-1 w-20 h-20 border-t-4 border-l-4 border-yellow-400" />
              <div className="absolute -bottom-1 -right-1 w-20 h-20 border-b-4 border-r-4 border-red-600" />
            </motion.div>

            {/* Floating UI */}
            <motion.div 
              style={{ translateZ: 200, x: useTransform(smoothMouseX, [-0.5, 0.5], [50, -50]) }}
              className="absolute -left-12 bottom-12 z-30 bg-white shadow-2xl border border-black/5 p-6 rounded-xl"
            >
                <div className="text-red-600 font-black text-[10px] mb-3 tracking-widest flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  SYSTEM_LIT
                </div>
                <div className="flex gap-1.5">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-5 h-1 bg-black/10 overflow-hidden relative">
                       <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.15 }} className="absolute inset-0 bg-yellow-400" />
                    </div>
                  ))}
                </div>
            </motion.div>
          </div>

          <motion.div style={{ translateZ: 150 }} className="ml-64 flex flex-col items-start">
            <motion.div className="px-4 py-1 bg-black text-white text-[11px] font-black uppercase tracking-[0.5em] mb-6">Global Studio</motion.div>
            <h1 className="text-7xl xl:text-[8rem] font-black leading-[0.8] tracking-tighter text-black uppercase italic">
              BEE <br />
              <span className="text-yellow-400 drop-shadow-sm">TEAM.</span>
            </h1>
            <div className="h-1 w-32 bg-red-600 my-10" />
            <p className="max-w-md text-xl font-medium text-zinc-500 leading-tight">
             Featured on the <span className="text-black font-black">Financial express.</span>
            </p>
            <motion.button whileHover={{ scale: 1.05, x: 15 }} className="group relative mt-14 overflow-hidden px-14 py-7 bg-black text-white font-black uppercase text-[10px] tracking-[0.6em]">
              <span className="relative z-10 group-hover:text-black transition-colors">Initiate Sequence</span>
              <motion.div className="absolute inset-0 bg-yellow-400 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* 4. TACTICAL HUD */}
        <motion.div
        suppressHydrationWarning
          className="fixed top-0 left-0 w-24 h-24 z-[1000] pointer-events-none flex items-center justify-center"
          style={{ 
            x: useTransform(smoothMouseX, [-0.5, 0.5], [0, typeof window !== 'undefined' ? window.innerWidth : 0]), 
            y: useTransform(smoothMouseY, [-0.5, 0.5], [0, typeof window !== 'undefined' ? window.innerHeight : 0]),
            translateX: "-50%", translateY: "-50%" 
          }}
        >
          <div className="absolute inset-0 border border-black/10 rounded-full scale-125" />
          <div className="w-3 h-3 bg-yellow-400 border-2 border-black rounded-full" />
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[9px] font-black text-black bg-white px-2 py-1 shadow-sm whitespace-nowrap uppercase">
            Coord: 23.81 N / 90.41 E
          </div>
        </motion.div>
      </div>

      <div className="h-screen flex items-end justify-center pb-20">
        <p className="text-black/[0.03] font-black text-[18vw] uppercase select-none tracking-tighter">EST. 2026</p>
      </div>
    </section>
  )
}