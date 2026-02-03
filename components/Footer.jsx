'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Youtube, ArrowUp, ArrowRight, Mail, MapPin, Zap, Globe } from 'lucide-react'

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
    <footer id='contact' className="relative bg-white pt-40 pb-12 overflow-hidden border-t-8 border-black selection:bg-black selection:text-white">
      
      {/* KINETIC BACKGROUND: Grid & Light Leaks */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-full h-[600px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1500px] mx-auto px-10 relative z-20">
        
        {/* THE "BIG CALL" SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-48 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="flex items-center gap-6">
               <div className="px-4 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest">Final_Directive</div>
               <div className="h-px flex-1 bg-black/10" />
            </div>
            <h2 className="text-7xl md:text-[110px] font-black text-black tracking-tighter leading-[0.75] uppercase">
              LET'S <br /> <span className="text-red-600 italic">CREATE</span> <br /> HISTORY.
            </h2>
            <div className="relative p-12 bg-zinc-50 border-l-8 border-black shadow-xl shadow-black/5 max-w-md">
               <p className="text-zinc-500 text-xl font-black uppercase tracking-tighter leading-none italic">
                 Based in Dhaka. <br />
                 Operating globally. <br />
                 Redefining the lens.
               </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="bg-black p-16 rounded-[4rem] flex flex-col gap-12 relative z-10 shadow-[0_50px_100px_rgba(0,0,0,0.2)]">
              <div className="space-y-4">
                <h3 className="text-white text-5xl font-black tracking-tighter uppercase leading-none">START A <br /> PROJECT</h3>
                <p className="text-zinc-400 font-bold uppercase text-xs tracking-widest">Our engine is primed for your vision.</p>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-between bg-yellow-400 text-black px-12 py-10 rounded-full font-black uppercase text-sm tracking-[0.2em] transition-all"
              >
                Inquire Node 
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-500">
                   <ArrowRight size={28} strokeWidth={3} />
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* NAVIGATION COLUMNS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 mb-40 border-b-2 border-black/5 pb-32">
          <div className="space-y-10">
            <h4 className="text-red-600 font-black text-[12px] uppercase tracking-[0.5em]">System_Map</h4>
            <div className="flex flex-col gap-6">
              {['Home', 'About Us', 'Our Process', 'Services', 'Works'].map((link) => (
                <motion.a 
                  key={link} 
                  href="#" 
                  whileHover={{ x: 10, color: "#000" }} 
                  className="text-zinc-400 text-[13px] font-black uppercase tracking-[0.2em] transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <h4 className="text-red-600 font-black text-[12px] uppercase tracking-[0.5em]">Digital_Nodes</h4>
            <div className="flex flex-col gap-6">
              {['Instagram', 'Vimeo', 'LinkedIn', 'YouTube', 'Facebook'].map((link) => (
                <motion.a 
                  key={link} 
                  href="#" 
                  whileHover={{ x: 10, color: "#000" }} 
                  className="text-zinc-400 text-[13px] font-black uppercase tracking-[0.2em] transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="col-span-2 space-y-12">
            <h4 className="text-red-600 font-black text-[12px] uppercase tracking-[0.5em]">HQ_Transmission</h4>
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-black">
                   <Globe size={24} className="text-red-600" />
                   <p className="text-2xl font-black tracking-tighter uppercase">Dhaka, Bangladesh</p>
                </div>
                <div className="flex items-center gap-4 text-zinc-500">
                   <Mail size={20} className="text-black" />
                   <span className="text-sm font-black tracking-widest uppercase underline decoration-2 decoration-red-600">support@beeteam.agency</span>
                </div>
              </div>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ y: -5, backgroundColor: "#000", color: "#FFF" }}
                    className="w-14 h-14 flex items-center justify-center rounded-full bg-zinc-100 border border-black/5 text-black transition-all shadow-md"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* THE MASSIVE LOGO (Ghosted Backdrop) */}
        <div className="relative h-24 md:h-64 overflow-hidden select-none pointer-events-none mb-20 flex items-center justify-center">
          <motion.h1 
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[25vw] font-black text-black/[0.04] leading-none tracking-[-0.08em]"
          >
            BEETEAM
          </motion.h1>
        </div>

        {/* FINAL TERMINAL BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-10 border-t-2 border-black/5">
          <div className="flex flex-col md:flex-row items-center gap-8">
             <div className="px-6 py-2 bg-zinc-50 border-2 border-black rounded-none">
                <p className="text-[10px] text-black font-black uppercase tracking-[0.2em]">Node: Active_2026</p>
             </div>
             <p className="text-[11px] text-zinc-400 font-black uppercase tracking-[0.3em]">
               © 2026 — Built by <span className="text-black hover:text-red-600 cursor-pointer transition-colors">Beeteam Lab</span>
            </p>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -10 }}
            className="group flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 rounded-full border-2 border-black/10 flex items-center justify-center text-black group-hover:border-black group-hover:bg-yellow-400 transition-all duration-500 shadow-xl">
              <ArrowUp size={28} strokeWidth={3} />
            </div>
            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.5em] group-hover:text-black transition-colors">UPLINK</span>
          </motion.button>
        </div>
      </div>
    </footer >
  );
}