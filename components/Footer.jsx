'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Youtube, ArrowUp, ArrowRight, Mail, Globe, Activity, Terminal } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Unified Social Links Configuration
  const socialLinks = [
    { 
      icon: <Facebook size={18} />, 
      href: "https://www.facebook.com/beeteam", 
      label: "Facebook" 
    },
    { 
      icon: <Instagram size={18} />, 
      href: "https://www.instagram.com/beeteam26", 
      label: "Instagram" 
    },
    { 
      icon: <Youtube size={18} />, 
      href: "https://www.youtube.com/@BeeTeamltd", 
      label: "YouTube" 
    },
  ]

  return (
    <footer id='contact' className="relative bg-white pt-32 pb-12 overflow-hidden border-t-[12px] border-black selection:bg-black selection:text-white">
      
      {/* Background: Sharp Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#000 1.5px, transparent 1.5px), linear-gradient(90deg, #000 1.5px, transparent 1.5px)`, backgroundSize: '50px 50px' }} />
      
      {/* Subtle Color Spill */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-full h-[500px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto px-8 relative z-20">
        
        {/* THE "BIG CALL" SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-40 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="flex items-center gap-4">
               <div className="px-5 py-1.5 bg-black text-white text-[10px] font-black uppercase tracking-[0.3em]">Final_Directive_04</div>
               <div className="h-1 flex-1 bg-black" />
            </div>
            <h2 className="text-[clamp(4rem,9vw,9rem)] font-black text-black tracking-tighter leading-[0.8] uppercase">
              Let's <br /> <span className="text-red-600 underline decoration-[12px] underline-offset-[-8px]">Create</span> <br /> History.
            </h2>
            <div className="relative p-10 border-l-[12px] border-black bg-white shadow-[20px_20px_0px_rgba(0,0,0,0.05)] max-w-sm">
               <p className="text-black text-2xl font-black uppercase tracking-tighter leading-none">
                 Based in Dhaka. <br />
                 Global Standards. <br />
                 Visual Authority.
               </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group lg:mt-20"
          >
            <div className="bg-black p-14 border-[6px] border-black flex flex-col gap-10 relative z-10 shadow-[30px_30px_0px_rgba(0,0,0,0.1)]">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-red-600">
                  <Terminal size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Transmission_Ready</span>
                </div>
                <h3 className="text-white text-6xl font-black tracking-tighter uppercase leading-[0.9]">Start A <br /> Project</h3>
                <p className="text-white/40 font-bold uppercase text-[11px] tracking-widest">Our production engine is primed for your narrative.</p>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-between bg-[#FFD700] text-black px-10 py-8 font-black uppercase text-sm tracking-[0.3em] shadow-[8px_8px_0px_#E11D48] hover:shadow-none transition-all"
              >
                Inquire Node 
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                   <ArrowRight size={24} strokeWidth={3} />
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* NAVIGATION COLUMNS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32 border-b-4 border-black pb-24">
          <div className="space-y-8">
            <h4 className="text-black font-black text-[12px] uppercase tracking-[0.4em]">System_Map</h4>
            <div className="flex flex-col gap-4">
              {['Home', 'About Us', 'Process', 'Services', 'Works'].map((link) => (
                <motion.a 
                  key={link} 
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                  whileHover={{ x: 8, color: "#E11D48" }} 
                  className="text-black/60 text-[14px] font-black uppercase tracking-tight transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-black font-black text-[12px] uppercase tracking-[0.4em]">Digital_Nodes</h4>
            <div className="flex flex-col gap-4">
              {socialLinks.map((social) => (
                <motion.a 
                  key={social.label} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 8, color: "#E11D48" }} 
                  className="text-black/60 text-[14px] font-black uppercase tracking-tight transition-colors"
                >
                  {social.label}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="col-span-2 space-y-10">
            <h4 className="text-black font-black text-[12px] uppercase tracking-[0.4em]">HQ_Transmission</h4>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-black">
                   <Globe size={24} strokeWidth={3} className="text-red-600" />
                   <p className="text-3xl font-black tracking-tighter uppercase">Dhaka, Bangladesh</p>
                </div>
                <div className="flex items-center gap-4 text-black">
                   <Mail size={20} strokeWidth={3} />
                   <a href="mailto:hello@beeteam.agency" className="text-sm font-black tracking-widest uppercase underline decoration-4 decoration-[#FFD700] hover:decoration-red-600 cursor-pointer transition-all">
                    hello@beeteam.agency
                   </a>
                </div>
              </div>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#FFF" }}
                    className="w-14 h-14 flex items-center justify-center bg-white border-2 border-black text-black transition-all shadow-[4px_4px_0px_#000]"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* LOGO BACKDROP */}
        <div className="relative h-24 md:h-56 overflow-hidden select-none pointer-events-none mb-16 flex items-center justify-center">
          <motion.h1 
            initial={{ y: 150 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="text-[24vw] font-black text-black/[0.05] leading-none tracking-tighter"
          >
            BEETEAM
          </motion.h1>
        </div>

        {/* FINAL TERMINAL BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-10 border-t-4 border-black">
          <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex items-center gap-3 px-6 py-2 bg-black text-white">
                 <Activity size={14} className="text-green-500" />
                 <p className="text-[10px] font-black uppercase tracking-[0.2em]">Status: Mission_Active_2026</p>
              </div>
              <p className="text-[11px] text-black font-black uppercase tracking-[0.2em]">
                © 2026 — <span className="text-red-600">Beeteam Lab</span> // All Rights Reserved.
            </p>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="group flex flex-col items-center gap-3"
          >
            <div className="w-14 h-14 bg-white border-4 border-black flex items-center justify-center text-black group-hover:bg-[#FFD700] transition-all shadow-[6px_6px_0px_#000]">
              <ArrowUp size={24} strokeWidth={4} />
            </div>
            <span className="text-[9px] font-black text-black uppercase tracking-[0.5em]">Uplink</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}