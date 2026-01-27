'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Sparkles, Zap } from 'lucide-react'
import MegaMenu from './MegaMenu'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '#', hasDropdown: true },
  { name: 'Our Works', href: '/portfolio' },
  { name: 'Clients', href: '/clients' },
  { name: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  // FIXED: Removed the <number | null> type annotation for standard JS
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  
  const { scrollY } = useScroll()

  // --- Cinematic Morphing Logic ---
  // These values transition as you scroll from 0px to 100px
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 199, 0, 1)', 'rgba(255, 255, 255, 0.75)']
  )
  const navWidth = useTransform(scrollY, [0, 100], ['100%', '94%'])
  const navTop = useTransform(scrollY, [0, 100], ['0px', '24px'])
  const navPadding = useTransform(scrollY, [0, 100], ['26px', '14px'])
  const borderRadius = useTransform(scrollY, [0, 100], ['0px', '100px'])
  const navShadow = useTransform(
    scrollY,
    [0, 100],
    ['0px 0px 0px rgba(0,0,0,0)', '0px 20px 60px -10px rgba(0,0,0,0.15)']
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
      className="fixed left-1/2 -translate-x-1/2 z-[100] backdrop-blur-2xl border border-white/10 transition-shadow duration-500"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10">
        
        {/* LOGO: Cinematic Scale & Glow */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative cursor-pointer shrink-0"
        >
          <Image
            src="/beeteam_logo.png"
            alt="Beeteam"
            width={130}
            height={36}
            className="object-contain"
            priority
          />
        </motion.div>

        {/* NAVIGATION: Kinetic "Floating Island" Pills */}
        <nav 
          className="hidden lg:flex items-center gap-1 bg-black/5 p-1 rounded-full border border-black/5 relative"
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
              <a
                href={link.href}
                className={`relative z-10 px-6 py-2.5 flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-wider transition-colors duration-500 ${
                  hoveredIndex === index ? 'text-black' : 'text-black/60'
                }`}
              >
                {link.name}
                {link.hasDropdown && (
                  <motion.div
                    animate={{ rotate: isServicesOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <ChevronDown size={14} strokeWidth={3} />
                  </motion.div>
                )}
              </a>

              {/* THE LIQUID PILL: Slides and stretches between items */}
              {hoveredIndex === index && (
                <motion.div
                  layoutId="nav-pill-bg"
                  className="absolute inset-0 bg-white rounded-full shadow-sm"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}

              {/* MEGA MENU: Ultra-Depth Reveal */}
              {link.hasDropdown && (
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 30, scale: 0.92, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: 20, scale: 0.92, filter: 'blur(10px)' }}
                      transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                      className="absolute top-[160%] left-1/2 -translate-x-1/2 w-[850px]"
                    >
                      <div className="bg-white/95 backdrop-blur-3xl rounded-[40px] shadow-[0_50px_100px_rgba(0,0,0,0.2)] border border-white/40 overflow-hidden">
                        <MegaMenu />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* CTA: High-Energy Button with Reflection */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="group relative hidden lg:flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-black text-[11px] uppercase tracking-[0.2em] overflow-hidden shadow-2xl"
        >
          <span className="relative z-10 flex items-center gap-2">
            Get a Quote <Sparkles size={14} className="text-yellow-400" />
          </span>
          
          {/* Internal gloss reflection sweep */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" 
          />
        </motion.button>
      </div>
    </motion.header>
  )
}