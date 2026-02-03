'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { ExternalLink, Newspaper, PlayCircle, Loader2, Target, Radio, Sparkles, Zap, ShieldCheck, ChevronRight } from 'lucide-react'

// DATA REMAINS UNCHANGED
const pressCoverage = [
  {
    outlet: "The Daily Star",
    title: "DIFF Closing Ceremony: University of Chankarphul noted among winners",
    href: "https://www.thedailystar.net/entertainment/tv-film/news/diff-closing-ceremony-university-chankarphul-kurak-among-noted-winners-4084126",
    category: "AWARDS",
    type: "Digital News"
  },
  {
    outlet: "Prothom Alo",
    title: "Dhallywood Spotlight: Artistic vision and new narratives",
    href: "https://www.prothomalo.com/entertainment/dhallywood/uorx7yq03m?utm_source=facebook&utm_medium=social&utm_campaign&utm_content=ap_cnefmyw80p",
    category: "FEATURE",
    type: "Industry News"
  },
  {
    outlet: "Jamuna TV",
    title: "Beeteam's production excellence highlighted on broadcast",
    href: "https://jamuna.tv/entertainment/649967",
    category: "BROADCAST",
    type: "Video Report"
  },
  {
    outlet: "Channel i Online",
    title: "Akash Hoque talks about the Chankharpul journey",
    href: "https://www.channelionline.com/akash-hoque-talks-about-chankharpul/?fbclid=IwY2xjawPkjyhleHRuA2FlbQIxMABicmlkETFrV2s5NHlBWU1MbUR1Mmdsc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHu12HO6nAvAxlzp1wwQI_-P5KGtdhG8bS9Nk6MdDE2GhByjZVNcur_IT3XDM_aem_HyUdvFtJhl4rvaDeIjfYtQ",
    category: "INTERVIEW",
    type: "Digital Press"
  },
  {
    outlet: "Financial Express",
    title: "Economic impact of cinematic production in Bangladesh",
    href: "https://epaper.thefinancialexpress.com.bd/popUp.php?img_name=2026%2F01%2F21%2Fimages%2F24_100.jpg&fbclid=IwdGRjcAPcucdjbGNrA9y5wmV4dG4DYWVtAjExAHNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAABHm2KVvdsYjPQzkG3SwyXIHQ7kC3Fr8o-p41uTqFoEmbKxHX271V-5JoPad8H_aem_Ms1ICT_FoEc3GebXPgfSyw",
    category: "BUSINESS",
    type: "e-Paper"
  },
  {
    outlet: "Samakal",
    title: "University of Chankharpul: Best Cinema recognition",
    href: "https://samakal.com/entertainment/article/334364/%E0%A6%B8%E0%A7%87%E0%A6%B0%E0%A6%BA-%E0%A6%B8%E0%A6%BF%E0%A6%A8%E0%A7%87%E0%A6%BE-%E2%80%98%E0%A6%87%E0%A6%89%E0%A6%A8%E0%A6%BF%E0%A6%AD%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%BF%E0%A6%9F%E0%A6%BF-%E0%A6%85%E0%A6%AC-%E0%A6%9A%E0%A6%BE%E0%A6%A8%E0%A6%96%E0%A6%BE%E0%A6%81%E0%A6%B0%E0%A6%AA%E0%A7%81%E0%A6%B2%E2%80%99",
    category: "PRESS",
    type: "News Print"
  }
]

export default function UltimatePressLogs() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  })

  const tickerX = useTransform(scrollYProgress, [0, 1], [300, -800])
  const voltageWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section ref={container} className="bg-white py-40 overflow-hidden relative selection:bg-black selection:text-[#FFC700]">
      
      {/* VOLTAGE LINE (Inverted to Black/Yellow) */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-black/5 z-50">
         <motion.div style={{ width: voltageWidth }} className="h-full bg-black shadow-[0_0_20px_rgba(0,0,0,0.1)]" />
      </div>

      {/* BACKGROUND KINETIC TEXT */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div 
          style={{ x: tickerX }} 
          className="absolute top-40 whitespace-nowrap text-[25vw] font-black italic text-black/[0.03] uppercase tracking-tighter"
        >
          BEETEAM // PRESS ARCHIVE // DATA_VALIDATED // 2026
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-10 relative z-10">
        
        {/* HEADER (Light Mode) */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-40 gap-16">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 text-black mb-10"
            >
              <div className="flex gap-1">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-1.5 h-6 bg-red-600" />
                ))}
              </div>
              <span className="text-[12px] font-black uppercase tracking-[0.8em]">Media_Terminal</span>
            </motion.div>
            
            <h2 className="text-[120px] md:text-[160px] font-black text-black tracking-[-0.04em] leading-[0.7] flex flex-col">
              <span>PRESS</span>
              <span className="text-zinc-200 italic ml-12 md:ml-24">BUREAU.</span>
            </h2>
          </div>
          
          <div className="bg-zinc-50 border-l-4 border-yellow-400 p-12 rounded-tr-[80px] max-w-sm relative shadow-2xl shadow-black/5">
             <p className="text-[13px] font-bold text-zinc-500 leading-relaxed font-mono uppercase tracking-tight">
               <span className="text-black font-black underline decoration-red-600">STATUS:</span> Global media validation stream is operational. All logs verified.
             </p>
             <div className="mt-8 flex items-center gap-4">
                <div className="px-3 py-1 bg-black text-[#FFC700] text-[9px] font-black tracking-widest uppercase">
                  Access_Lvl: Open
                </div>
                <Radio size={16} className="text-red-600 animate-pulse" />
             </div>
          </div>
        </div>

        {/* GRID (Light Mode Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {pressCoverage.map((news, i) => (
            <DramaticNewsCard key={news.href} news={news} index={i} />
          ))}
        </div>

        {/* FOOTER CALLOUT (Inverted) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-40 relative h-[450px] rounded-[4rem] overflow-hidden flex items-center justify-center border-2 border-black/5"
        >
            <div className="absolute inset-0 bg-zinc-50" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FFC70022_0%,transparent_70%)] opacity-50" />
            
            <div className="relative z-10 text-center space-y-10 px-10">
              <h3 className="text-black text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none">
                Experience <br /> the <span className="text-red-600">Legacy.</span>
              </h3>
              <motion.a 
                href="https://web.facebook.com/share/v/18EPxb7XbD/"
                target="_blank"
                whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#FFC700" }}
                className="inline-flex items-center gap-8 bg-black text-white px-20 py-10 rounded-full text-[14px] font-black uppercase tracking-[0.5em] transition-all duration-500 shadow-3xl"
              >
                Launch Reel <Zap size={22} fill="currentColor" />
              </motion.a>
            </div>
        </motion.div>
      </div>
    </section>
  )
}

function DramaticNewsCard({ news, index }) {
  const [thumbnail, setThumbnail] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.microlink.io?url=${encodeURIComponent(news.href)}&screenshot=true&meta=true`)
      .then(res => res.json())
      .then(data => setThumbnail(data.data.image?.url || data.data.screenshot?.url))
      .catch(e => console.error(e))
      .finally(() => setLoading(false))
  }, [news.href])

  return (
    <motion.a
      href={news.href}
      target="_blank"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -15 }}
      className="group relative h-[650px] bg-zinc-50 border border-black/5 rounded-[3.5rem] p-12 overflow-hidden flex flex-col justify-between transition-all duration-700 hover:bg-white hover:shadow-[0_60px_100px_-20px_rgba(0,0,0,0.08)]"
    >
      {/* SCANLINE EFFECT */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,0,0,0.02)_50%,transparent_50%)] z-30 bg-[length:100%_8px] opacity-10" />

      {/* THUMBNAIL AREA */}
      <div className="absolute inset-x-0 top-0 h-[60%] overflow-hidden z-0 border-b border-black/5">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-zinc-50 z-10" />
        {loading ? (
          <div className="w-full h-full flex items-center justify-center bg-zinc-100"><Loader2 className="animate-spin text-red-600" /></div>
        ) : (
          <motion.img 
            whileHover={{ scale: 1.15 }}
            src={thumbnail || '/fallback.jpg'} 
            className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000" 
          />
        )}
      </div>

      {/* TOP META */}
      <div className="relative z-20 flex justify-between items-start">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
             <div className="w-8 h-[2px] bg-red-600" />
             <span className="text-[10px] font-black text-black tracking-[0.4em] uppercase">Ref_{index + 1}</span>
          </div>
          <div className="px-6 py-2 bg-black text-[#FFC700] text-[10px] font-black uppercase tracking-widest inline-block group-hover:bg-red-600 group-hover:text-white transition-colors duration-500">
            {news.category}
          </div>
        </div>
        <div className="w-14 h-14 rounded-2xl bg-white border border-black/5 flex items-center justify-center group-hover:border-yellow-400 group-hover:rotate-12 transition-all duration-500">
          <Target size={28} strokeWidth={1.5} className="text-black" />
        </div>
      </div>

      {/* BOTTOM CONTENT */}
      <div className="relative z-20 space-y-8">
        <div className="h-[1px] w-full bg-black/10 group-hover:bg-yellow-400 transition-colors duration-500" />
        <div className="space-y-4">
          <h4 className="text-[11px] font-black uppercase tracking-[0.6em] text-zinc-400">{news.outlet}</h4>
          <h3 className="text-[34px] font-black leading-[0.9] tracking-tighter uppercase text-black group-hover:text-red-600 transition-all duration-500">
            {news.title}
          </h3>
        </div>
        <div className="flex justify-between items-center pt-2">
           <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <p className="text-[10px] font-bold text-zinc-400 tracking-widest uppercase">Validated</p>
           </div>
           <div className="flex items-center gap-2 text-black font-black text-[10px] tracking-widest uppercase group-hover:text-red-600 transition-colors">
              Read File <ChevronRight size={14} />
           </div>
        </div>
      </div>
    </motion.a>
  )
}