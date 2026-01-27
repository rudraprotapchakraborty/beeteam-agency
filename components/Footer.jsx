'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Youtube, ArrowUp, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "#" },
    { icon: <Instagram size={18} />, href: "#" },
    { icon: <Linkedin size={18} />, href: "#" },
    { icon: <Youtube size={18} />, href: "#" },
  ]

  return (
    <footer className="relative bg-[#020202] pt-32 pb-12 overflow-hidden border-t border-white/5">
      
      {/* 1. CINEMATIC GRADIENT MASK */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-2/3 h-48 bg-[#FFC700]/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-10 relative z-20">
        
        {/* 2. THE "BIG CALL" SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8">
              LET'S <br /> <span className="text-[#FFC700]">CREATE</span> <br /> HISTORY.
            </h2>
            <p className="text-zinc-500 text-lg max-w-sm font-medium leading-relaxed">
              Based in Dhaka. Operating globally. Redefining the cinematic experience one frame at a time.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group p-1 bg-gradient-to-br from-[#FFC700]/20 to-transparent rounded-[3rem]"
          >
            <div className="bg-[#080808] p-12 rounded-[2.9rem] border border-white/5 flex flex-col gap-8">
              <h3 className="text-white text-3xl font-black tracking-tighter">START A PROJECT</h3>
              <p className="text-zinc-400">Ready to take your brand to the silver screen? Let’s talk about your vision.</p>
              <motion.button 
                whileHover={{ gap: "24px" }}
                className="group flex items-center gap-4 bg-[#FFC700] text-black px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest transition-all shadow-[0_20px_40px_rgba(255,199,0,0.2)]"
              >
                Get In Touch <ArrowRight size={18} strokeWidth={3} />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* 3. NAVIGATION COLUMNS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32 border-b border-white/5 pb-24">
          <div className="space-y-8">
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.4em]">Explore</h4>
            <div className="flex flex-col gap-4">
              {['Home', 'About Us', 'Our Process', 'Services', 'Works'].map((link) => (
                <motion.a key={link} href="#" whileHover={{ x: 10, color: "#FFC700" }} className="text-zinc-500 text-sm font-bold uppercase tracking-widest transition-colors">{link}</motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.4em]">Connect</h4>
            <div className="flex flex-col gap-4">
              {['Instagram', 'Vimeo', 'LinkedIn', 'YouTube', 'Facebook'].map((link) => (
                <motion.a key={link} href="#" whileHover={{ x: 10, color: "#FFC700" }} className="text-zinc-500 text-sm font-bold uppercase tracking-widest transition-colors">{link}</motion.a>
              ))}
            </div>
          </div>

          <div className="col-span-2 space-y-8">
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.4em]">Headquarters</h4>
            <div className="space-y-4">
              <p className="text-zinc-400 text-lg font-medium leading-relaxed">
                Dhaka, Bangladesh <br />
                <span className="text-zinc-600 text-sm">support@beeteam.agency</span>
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.1, backgroundColor: "#FFC700", color: "#000" }}
                    className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white transition-all"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4. THE MASSIVE LOGO (Kinetic Backdrop) */}
        <div className="relative h-20 md:h-40 overflow-hidden select-none pointer-events-none mb-20">
          <motion.h1 
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
            className="text-[20vw] font-black text-white/[0.03] leading-none text-center"
          >
            BEETEAM
          </motion.h1>
        </div>

        {/* 5. FINAL BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-zinc-600 font-black uppercase tracking-[0.3em]">
            Copyright 2026 — Developed for Excellence by <span className="text-zinc-400">Beeteam</span>
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -10, scale: 1.1 }}
            className="group flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:border-[#FFC700] group-hover:text-[#FFC700] transition-colors">
              <ArrowUp size={20} />
            </div>
            <span className="text-[8px] font-black text-zinc-600 uppercase tracking-widest group-hover:text-white transition-colors">Back to top</span>
          </motion.button>
        </div>
      </div>
    </footer >
  );
}