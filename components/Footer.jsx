'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#" },
    { icon: <Instagram size={20} />, href: "#" },
    { icon: <Linkedin size={20} />, href: "#" },
    { icon: <Youtube size={20} />, href: "#" },
  ]

  return (
    <footer className="relative bg-[#0a0a0a] pt-20 pb-10 overflow-hidden">
      {/* Decorative Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#FFC700]/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          {/* Brand Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-sm"
          >
            <Image
              src="/beeteam_logo.png"
              alt="Beeteam"
              width={140}
              height={40}
              className="brightness-0 invert mb-6"
            />
            <p className="text-gray-400 leading-relaxed text-sm">
              We are a premier video production company dedicated to 
              crafting visual stories that resonate globally.
            </p>
          </motion.div>

          {/* Quick Links Column */}
          <div className="grid grid-cols-2 gap-16">
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Explore</h4>
              {['Home', 'About Us', 'Services', 'Works'].map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  whileHover={{ x: 5, color: "#FFC700" }}
                  className="text-gray-500 text-sm transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Connect</h4>
              {['Instagram', 'LinkedIn', 'Vimeo', 'YouTube'].map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  whileHover={{ x: 5, color: "#FFC700" }}
                  className="text-gray-500 text-sm transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact/Newsletter Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 rounded-[2rem] border border-white/10 w-full md:w-auto"
          >
            <h4 className="text-white font-bold mb-4">Start a Project?</h4>
            <p className="text-gray-400 text-sm mb-6">Let’s make something amazing together.</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FFC700] text-black px-8 py-3 rounded-full font-black text-sm w-full"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500 font-medium">
            Copyright 2026 © <span className="text-gray-300">Beeteam</span>. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ y: -5, backgroundColor: "#FFC700", color: "#000" }}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.2, color: "#FFC700" }}
            className="text-gray-500"
          >
            <ArrowUp size={24} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}