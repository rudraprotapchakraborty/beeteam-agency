'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ExternalLink, Loader2, Zap, ChevronRight, Globe, ArrowUpRight, Award, Newspaper } from 'lucide-react'

const pressCoverage = [
  {
    outlet: "The Daily Star",
    title: "DIFF Closing Ceremony: University of Chankarphul noted among winners",
    href: "https://www.thedailystar.net/entertainment/tv-film/news/diff-closing-ceremony-university-chankarphul-kurak-among-noted-winners-4084126",
    category: "AWARDS",
    accent: "#E63946" // Crimson
  },
  {
    outlet: "Prothom Alo",
    title: "Dhallywood Spotlight: Artistic vision and new narratives",
    href: "https://www.prothomalo.com/entertainment/dhallywood/uorx7yq03m?utm_source=facebook&utm_medium=social&utm_campaign&utm_content=ap_cnefmyw80p",
    category: "FEATURE",
    accent: "#D4AF37" // Gold
  },
  {
    outlet: "Jamuna TV",
    title: "Beeteam's production excellence highlighted on broadcast",
    href: "https://jamuna.tv/entertainment/649967",
    category: "BROADCAST",
    accent: "#0056b3" // Royal Blue
  },
  {
    outlet: "Channel i Online",
    title: "Akash Hoque talks about the Chankharpul journey",
    href: "https://www.channelionline.com/akash-hoque-talks-about-chankharpul/",
    category: "INTERVIEW",
    accent: "#008080" // Teal
  },
  {
    outlet: "Financial Express",
    title: "Economic impact of cinematic production in Bangladesh",
    href: "https://epaper.thefinancialexpress.com.bd/popUp.php?img_name=2026%2F01%2F21%2Fimages%2F24_100.jpg",
    category: "BUSINESS",
    accent: "#D4AF37" // Gold
  },
  {
    outlet: "Samakal",
    title: "University of Chankharpul: Best Cinema recognition",
    href: "https://samakal.com/entertainment/article/334364/",
    category: "PRESS",
    accent: "#E63946" // Crimson
  }
]

export default function UltimatePressLogs() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  })

  const springProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const progressWidth = useTransform(springProgress, [0, 1], ["0%", "100%"])

  return (
    <section ref={container} className="bg-white py-24 overflow-hidden relative selection:bg-black selection:text-[#D4AF37]">
      
      {/* Editorial Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[6px] bg-black/5 z-[100]">
        <motion.div style={{ width: progressWidth }} className="h-full bg-black" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-10">
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-4"
            >
              <Award size={18} className="text-black" />
              <span className="text-xs font-black uppercase tracking-[0.4em] text-black">Media Verification Portal</span>
            </motion.div>
            
            <h2 className="text-[clamp(3rem,7vw,8rem)] font-black text-black tracking-tight leading-[0.9] uppercase">
              Global <span className="text-[#D4AF37]">Press</span><br />
              Intelligence.
            </h2>
          </div>
          
          <div className="lg:max-w-xs border-l-4 border-black pl-8 py-2">
            <p className="text-sm font-bold text-black leading-relaxed uppercase italic">
              "The validation of cinematic excellence through the lens of global journalism."
            </p>
            <div className="flex items-center gap-3 mt-4 text-[10px] font-black tracking-widest uppercase text-black/40">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
              Real-time Feed Operational
            </div>
          </div>
        </div>

        {/* The Grid: Professional Border-Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t-2 border-l-2 border-black">
          {pressCoverage.map((news, i) => (
            <PressCard key={news.href} news={news} index={i} />
          ))}
        </div>

        {/* Professional Footer Callout */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-black p-12 lg:p-20">
          <div className="space-y-6">
            <h3 className="text-white text-5xl font-black uppercase tracking-tighter leading-none">
              The <span className="text-[#D4AF37]">Beeteam</span> <br />Sizzle Reel.
            </h3>
            <p className="text-white/60 font-medium text-lg">
              Witness the visual storytelling that sparked international headlines.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <motion.a 
              href="https://web.facebook.com/share/v/18EPxb7XbD/"
              target="_blank"
              whileHover={{ scale: 1.05, backgroundColor: '#D4AF37' }}
              className="bg-white text-black px-12 py-6 text-sm font-black uppercase tracking-[0.3em] flex items-center gap-4 group transition-colors"
            >
              Watch Now <Zap size={18} className="fill-black group-hover:animate-bounce" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}

function PressCard({ news, index }) {
  const [thumbnail, setThumbnail] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.microlink.io?url=${encodeURIComponent(news.href)}&screenshot=true&meta=true`)
      .then(res => res.json())
      .then(data => setThumbnail(data.data.image?.url || data.data.screenshot?.url))
      .catch(() => setThumbnail(null))
      .finally(() => setLoading(false))
  }, [news.href])

  return (
    <motion.a
      href={news.href}
      target="_blank"
      className="group relative h-[500px] bg-white border-r-2 border-b-2 border-black flex flex-col transition-all duration-300 hover:bg-[#FFFDF5]"
    >
      {/* Sharp Image Container */}
      <div className="relative h-56 overflow-hidden">
        {loading ? (
          <div className="w-full h-full flex items-center justify-center bg-white border-b-2 border-black">
            <Loader2 className="animate-spin text-black" size={24} />
          </div>
        ) : (
          <motion.img 
            initial={{ scale: 1.1 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={thumbnail || 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1000'} 
            className="w-full h-full object-cover border-b-2 border-black" 
          />
        )}
        <div className="absolute top-4 left-4">
          <span className="bg-black text-white px-3 py-1 text-[9px] font-black uppercase tracking-widest">
            {news.category}
          </span>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex-1 p-8 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Globe size={14} className="text-black" />
            <p className="text-[11px] font-black uppercase tracking-widest text-black/50">
              {news.outlet}
            </p>
          </div>
          
          <h3 className="text-2xl font-black leading-tight text-black tracking-tighter uppercase group-hover:text-[#D4AF37] transition-colors">
            {news.title}
          </h3>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1 h-4 bg-black" />
            ))}
          </div>
          
          <div className="flex items-center gap-2 text-black font-black text-[10px] uppercase tracking-widest group-hover:translate-x-2 transition-transform">
            View Article <ArrowUpRight size={14} strokeWidth={3} />
          </div>
        </div>
      </div>
      
      {/* Decorative Index */}
      <div className="absolute top-4 right-4 text-[10px] font-black text-black/20 uppercase">
        Log_0{index + 1}
      </div>
    </motion.a>
  )
}