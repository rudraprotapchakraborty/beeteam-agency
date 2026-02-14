'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Facebook,
  Instagram,
  Youtube,
  ArrowUp,
  ArrowRight,
  Globe
} from 'lucide-react'

export default function CompactFooter() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: <Facebook size={16} />, href: "https://www.facebook.com/beeteam" },
    { icon: <Instagram size={16} />, href: "https://www.instagram.com/beeteam26" },
    { icon: <Youtube size={16} />, href: "https://www.youtube.com/@BeeTeamltd" }
  ]

  return (
    <footer
      id="contact"
      className="relative bg-[#fafafa] pt-24 pb-10 overflow-hidden"
    >

      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] bg-[#FFD700]/10 blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADER BLOCK */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 mb-20">

          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-black"
            >
              CREATE <br />
              <span className="text-[#FFD700]">HISTORY.</span>
            </motion.h2>

            <p className="text-sm text-black/50 max-w-sm">
              Let’s build cinematic narratives that define the next era.
            </p>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group flex items-center gap-3 bg-black text-white px-8 py-4 text-xs font-semibold tracking-wide rounded-lg shadow-md hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] transition-all duration-300"
          >
            Start Project
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.button>

        </div>

        {/* NAV GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-14 border-y border-black/5">

          {/* Navigation */}
          <div className="space-y-5">
            <h4 className="text-xs font-semibold text-black/40 tracking-wide">
              Navigation
            </h4>

            <div className="flex flex-col gap-3 text-sm">
              {['Home', 'Works', 'Process'].map((link) => (
                <motion.a
                  key={link}
                  whileHover={{ x: 4 }}
                  className="text-black/70 hover:text-black transition-colors cursor-pointer"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="space-y-5">
            <h4 className="text-xs font-semibold text-black/40 tracking-wide">
              Social
            </h4>

            <div className="flex flex-col gap-3 text-sm">
              {socialLinks.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  whileHover={{ x: 4 }}
                  className="text-black/70 hover:text-black transition-colors"
                >
                  Platform {i + 1}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="col-span-2 space-y-6">
            <h4 className="text-xs font-semibold text-black/40 tracking-wide">
              Location
            </h4>

            <div className="flex items-center gap-3 text-black text-lg font-semibold">
              <Globe size={18} className="text-[#FFD700]" />
              Dhaka, Bangladesh
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center border border-black/10 rounded-lg bg-white hover:bg-[#FFD700] transition-all duration-300 shadow-sm"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>

          </div>
        </div>

        {/* STATUS BAR */}
        <div className="flex justify-between items-center pt-8 text-sm">

          <div className="text-black/40">
            © 2026 Beeteam Lab. All rights reserved.
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 flex items-center justify-center border border-black/10 rounded-lg bg-white hover:bg-[#FFD700] transition-all duration-300"
          >
            <ArrowUp size={16} />
          </motion.button>

        </div>

      </div>
    </footer>
  )
}
