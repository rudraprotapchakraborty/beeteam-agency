'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Newspaper, Globe, PlayCircle, Loader2 } from 'lucide-react'

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
    href: "https://samakal.com/entertainment/article/334364/%E0%A6%B8%E0%A7%87%E0%A6%B0%E0%A6%BA-%E0%A6%B8%E0%A6%BF%E0%A6%A8%E0%A7%87%E0%A6%AE%E0%A6%BE-%E2%80%98%E0%A6%87%E0%A6%89%E0%A6%A8%E0%A6%BF%E0%A6%AD%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%BF%E0%A6%9F%E0%A6%BF-%E0%A6%85%E0%A6%AC-%E0%A6%9A%E0%A6%BE%E0%A6%A8%E0%A6%96%E0%A6%BE%E0%A6%81%E0%A6%B0%E0%A6%AA%E0%A7%81%E0%A6%B2%E2%80%99",
    category: "PRESS",
    type: "News Print"
  }
]

export default function FeaturedNews() {
  return (
    <section className="bg-[#020202] py-32 overflow-hidden border-t border-white/5 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,199,0,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-10 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-[#FFC700]"
            >
              <div className="w-2 h-2 rounded-full bg-[#FFC700] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em]">Beeteam // Press Logs</span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85]">
              FEATURED <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-transparent">NEWS.</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-4 text-zinc-600">
            <Newspaper size={20} strokeWidth={1.5} />
            <p className="text-[10px] font-black uppercase tracking-widest max-w-[200px] leading-relaxed">
              Global media validation for cinematic narratives.
            </p>
          </div>
        </div>

        {/* NEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressCoverage.map((news, i) => (
            <NewsCard key={news.href} news={news} index={i} />
          ))}
        </div>

        {/* FOOTER */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 pt-10 border-t border-white/5 flex flex-wrap justify-between items-center gap-6"
        >
          <div className="flex items-center gap-8">
            <span className="text-[9px] font-black text-zinc-700 uppercase tracking-[0.4em]">Broadcast Integrity: 100%</span>
            <span className="text-[9px] font-black text-zinc-700 uppercase tracking-[0.4em]">Region: Global</span>
          </div>
          <motion.a 
            href="https://web.facebook.com/share/v/18EPxb7XbD/"
            target="_blank"
            whileHover={{ x: 10, color: "#FFC700" }}
            className="flex items-center gap-3 text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all"
          >
            Watch Full Reel on Facebook <PlayCircle size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

function NewsCard({ news, index }) {
  const [thumbnail, setThumbnail] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Cinematic Auto-Thumbnail Fetching via Microlink
    const fetchMetadata = async () => {
      try {
        const response = await fetch(`https://api.microlink.io?url=${encodeURIComponent(news.href)}&screenshot=true&meta=true`)
        const data = await response.json()
        
        // Prioritize OG Image, then Screenshot, then Fallback
        setThumbnail(data.data.image?.url || data.data.screenshot?.url || null)
      } catch (error) {
        console.error("Metadata fetch error:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchMetadata()
  }, [news.href])

  return (
    <motion.a
      href={news.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -15, scale: 1.02 }}
      className="group relative h-[480px] bg-white/[0.02] backdrop-blur-3xl rounded-[2.5rem] border border-white/5 overflow-hidden flex flex-col justify-between p-10 transition-all duration-500 hover:border-[#FFC700]/30 hover:bg-white/[0.04]"
    >
      {/* PHOTO STAGE (Automated) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/60 to-transparent z-10" />
        
        {loading ? (
          <div className="w-full h-full flex items-center justify-center bg-zinc-900/50">
            <Loader2 className="text-[#FFC700] animate-spin opacity-20" size={32} />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: thumbnail ? 0.4 : 0.1 }}
            className="w-full h-full"
          >
            {thumbnail ? (
              <img 
                src={thumbnail} 
                alt="" 
                className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-1000" 
              />
            ) : (
              <div className="w-full h-full bg-zinc-900" />
            )}
          </motion.div>
        )}
      </div>

      {/* METADATA */}
      <div className="relative z-20 flex justify-between items-start">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#FFC700]" />
            <span className="text-[#FFC700] text-[9px] font-black uppercase tracking-[0.4em]">
              {news.category}
            </span>
          </div>
          <h4 className="text-white font-black text-xs uppercase tracking-tight italic opacity-60">
            {news.outlet}
          </h4>
        </div>
        <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/20 group-hover:text-[#FFC700] group-hover:border-[#FFC700] transition-all group-hover:rotate-12">
          <ExternalLink size={16} />
        </div>
      </div>

      {/* TITLES */}
      <div className="relative z-20">
        <div className="flex items-center gap-3 mb-5 opacity-40 group-hover:opacity-100 transition-opacity">
          <span className="text-[8px] font-mono text-zinc-500">{news.type}</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>
        <h3 className="text-white text-2xl font-black leading-tight tracking-tighter group-hover:text-[#FFC700] transition-all duration-300">
          {news.title}
        </h3>
      </div>

      {/* VIEW-FINDER */}
      <div className="absolute inset-6 border border-white/[0.02] group-hover:border-white/[0.1] transition-colors pointer-events-none" />
      <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-[#FFC700]/0 group-hover:border-[#FFC700]/40 transition-all" />
    </motion.a>
  )
}