'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import MegaMenu from './MegaMenu'

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Services', href: '#', hasDropdown: true },
  { name: 'Our Works', href: '#' },
  { name: 'Clients', href: '#' },
  { name: 'Contact Us', href: '#' },
]

export default function Navbar() {
  // Removed the <number | null> type annotation here
  const [hoveredIndex, setHoveredIndex] = useState(null) 
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-[#FFC700]/90 backdrop-blur-md shadow-lg' 
          : 'py-5 bg-[#FFC700]'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8">
        
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center cursor-pointer"
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

        <nav 
          className="relative flex items-center gap-2"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navLinks.map((link, index) => (
            <div
              key={link.name}
              className="relative px-4 py-2"
              onMouseEnter={() => {
                setHoveredIndex(index)
                if (link.hasDropdown) setIsServicesOpen(true)
                else setIsServicesOpen(false)
              }}
            >
              <a
                href={link.href}
                className={`relative z-10 flex items-center gap-1 text-[15px] font-semibold transition-colors duration-300 ${
                  hoveredIndex === index ? 'text-black' : 'text-black/70'
                }`}
              >
                {link.name}
                {link.hasDropdown && (
                  <motion.div
                    animate={{ rotate: isServicesOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ChevronDown size={14} strokeWidth={3} />
                  </motion.div>
                )}
              </a>

              {hoveredIndex === index && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/40 rounded-full -z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              {link.hasDropdown && (
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <div className="shadow-2xl rounded-3xl overflow-hidden border border-white/20">
                        <MegaMenu />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: '#000' }}
          whileTap={{ scale: 0.95 }}
          className="hidden lg:block bg-black text-white px-6 py-2.5 rounded-full font-bold text-sm"
        >
          Get a Quote
        </motion.button>
      </div>
    </header>
  )
}