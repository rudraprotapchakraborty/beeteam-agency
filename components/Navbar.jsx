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
  // { name: 'Clients', href: '/clients' },
  { name: 'Contact Us', href: '#contact' },
]

export default function UltimateNavbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  // const [isServicesOpen, setIsServicesOpen] = useState(false)
  
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

        {/* NAVIGATION: The "Liquid Island" */}
        <nav 
          className="hidden lg:flex items-center gap-1 bg-black/[0.03] p-1.5 rounded-full border border-black/[0.03] relative shadow-inner"
          onMouseLeave={() => {
            setHoveredIndex(null)
            setIsServicesOpen(false)
          }}
        >
          {navLinks.map((link, index) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => {
                setHoveredIndex(index)
                if (link.hasDropdown) setIsServicesOpen(true)
                else setIsServicesOpen(false)
              }}
            >
              <motion.a
                href={link.href}
                className={`relative z-10 px-6 py-2.5 flex items-center gap-2 text-[12px] font-black uppercase tracking-[0.15em] transition-colors duration-300 ${
                  hoveredIndex === index ? 'text-black' : 'text-black/50'
                }`}
              >
                {link.name}
                {link.hasDropdown && (
                  <motion.div
                    animate={{ rotate: isServicesOpen ? 180 : 0, y: isServicesOpen ? -1 : 0 }}
                  >
                    <ChevronDown size={14} strokeWidth={3} className={isServicesOpen ? 'text-red-600' : ''} />
                  </motion.div>
                )}
              </motion.a>

              {hoveredIndex === index && (
                <motion.div
                  layoutId="ultimate-pill"
                  className="absolute inset-0 bg-white rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.06)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              {link.hasDropdown && (
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, rotateX: -15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, rotateX: 5, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                      style={{ perspective: "1000px" }}
                      className="absolute top-[140%] left-1/2 -translate-x-1/2 w-[900px]"
                    >
                      <div className="bg-white/90 backdrop-blur-3xl rounded-[32px] shadow-[0_40px_100px_rgba(0,0,0,0.25)] border border-white/50 overflow-hidden ring-1 ring-black/5">
                         <div className="p-1">
                            <MegaMenu />
                         </div>
                         {/* Bottom Bar for MegaMenu */}
                         <div className="bg-zinc-50/50 p-4 border-t border-black/5 flex justify-between items-center">
                            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-black/40">
                               <Activity size={12} /> Global Capabilities v4.0
                            </div>
                            <span className="text-[10px] font-black text-red-600">Browse All Services →</span>
                         </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

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