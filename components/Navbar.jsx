'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion'
import { ChevronDown, Sparkles, Zap, Activity } from 'lucide-react'
import MegaMenu from './MegaMenu'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services'},
  { name: 'Our Works', href: '#works' },
  { name: 'Contact Us', href: '#contact' },
]

export default function UltimateNavbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  
  const { scrollY } = useScroll()

  // --- ULTIMATE MORPHING LOGIC ---
  // The navbar transforms from a full-width header into a floating "Command Center"
  const springConfig = { stiffness: 100, damping: 30, mass: 1 }
  
  const rawBackgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 199, 0, 1)', 'rgba(255, 255, 255, 0.8)']
  )
  const backgroundColor = useSpring(rawBackgroundColor, springConfig)

  const navWidth = useTransform(scrollY, [0, 100], ['100%', '92%'])
  const navTop = useTransform(scrollY, [0, 100], ['0px', '20px'])
  const navPadding = useTransform(scrollY, [0, 100], ['28px', '12px'])
  const borderRadius = useTransform(scrollY, [0, 100], ['0px', '40px'])
  
  // High-end glass shadow
  const navShadow = useTransform(
    scrollY,
    [0, 100],
    ['0px 0px 0px rgba(0,0,0,0)', '0px 40px 80px -20px rgba(0,0,0,0.15)']
  )

  return (
    <motion.header
      style={{
        backgroundColor,
        width: navWidth,
        top: navTop,
        paddingTop: navPadding,
        paddingBottom: navPadding,
        borderRadius,
        boxShadow: navShadow,
      }}
      className="fixed left-1/2 -translate-x-1/2 z-[1000] backdrop-blur-3xl border border-white/20 transition-all duration-700 ease-out flex items-center justify-center"
    >
      <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between px-8">
        
        {/* LOGO: Reactive Depth */}
        <motion.div 
          whileHover={{ scale: 1.05, rotate: [-1, 1, 0] }}
          className="relative cursor-pointer shrink-0 flex items-center gap-3"
        >
          <div className="relative h-10 w-32">
             <Image
                src="/beeteam_logo.png"
                alt="Beeteam"
                fill
                className="object-contain"
                priority
              />
          </div>
          {/* Status Indicator for "Ultimate" feel */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 bg-black/5 rounded-full border border-black/5">
            <motion.div 
               animate={{ opacity: [1, 0.4, 1] }} 
               transition={{ repeat: Infinity, duration: 2 }}
               className="w-1.5 h-1.5 bg-red-600 rounded-full" 
            />
            <span className="text-[8px] font-black uppercase tracking-widest opacity-40">System_Live</span>
          </div>
        </motion.div>

        {/* CTA: Kinetic Energy Button */}
        <div className="flex items-center gap-4">
            <motion.div 
               className="hidden xl:block text-right pr-4 border-r border-black/10"
               style={{ opacity: useTransform(scrollY, [0, 50], [1, 0]) }}
            >
                <p className="text-[10px] font-black uppercase tracking-tighter leading-none">Inquiry_Ready</p>
                <p className="text-[9px] font-medium text-black/40">Avg. Response: 2h</p>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-black text-[11px] uppercase tracking-[0.25em] overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get a Quote <Sparkles size={14} className="text-yellow-400 group-hover:rotate-12 transition-transform" />
              </span>
              
              {/* Ultra Glow Sweep */}
              <motion.div 
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" 
              />
              
              {/* Hover Background Color Shift */}
              <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </motion.button>
        </div>
      </div>
    </motion.header>
  )
}