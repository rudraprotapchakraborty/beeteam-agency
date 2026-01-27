'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Film, Tv, Megaphone, Video, Music, ChevronRight, Play } from 'lucide-react'

const menuData = [
  { title: "Films", icon: <Film size={16} />, links: ["Full Length", "Short", "Docu"] },
  { title: "Ads", icon: <Tv size={16} />, links: ["TVC", "OVC"] },
  { title: "Promo", icon: <Megaphone size={16} />, links: ["Corporate", "Strategic", "Marketing"] },
  { title: "Video", icon: <Video size={16} />, links: ["Concept", "Script", "Drone", "Explainer"] },
  { title: "Music", icon: <Music size={16} />, links: ["Music Video", "Anthem", "Jingle"] }
]

export default function MegaMenu() {
  return (
    <div className="flex w-[850px] bg-white rounded-[24px] overflow-hidden shadow-2xl border border-black/5">
      {/* Visual Sidebar */}
      <div className="w-[240px] bg-[#0A0A0A] p-8 flex flex-col justify-between">
        <div>
          <div className="w-10 h-10 bg-[#FFC700] rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-yellow-500/20">
            <Play size={20} fill="black" />
          </div>
          <h3 className="text-white text-xl font-black tracking-tighter leading-none">
            BEETEAM <br /> <span className="text-[#FFC700]">STUDIOS.</span>
          </h3>
        </div>
        <div className="text-[10px] text-white/40 font-bold uppercase tracking-[0.2em] border-l border-yellow-500 pl-3">
          Est. 2024 / HQ
        </div>
      </div>

      {/* Compact Grid */}
      <div className="flex-1 p-8 bg-gray-50/50">
        <div className="grid grid-cols-3 gap-x-8 gap-y-8">
          {menuData.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <div className="flex items-center gap-2 text-black/80">
                <span className="text-[#FFC700]">{section.icon}</span>
                <h4 className="font-black text-[10px] uppercase tracking-widest">{section.title}</h4>
              </div>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <motion.li 
                    key={link}
                    whileHover={{ x: 4 }}
                    className="group flex items-center text-[13px] text-gray-500 hover:text-black cursor-pointer transition-colors"
                  >
                    {link}
                    <ChevronRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 text-[#FFC700] transition-all" />
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Action Bar */}
        <div className="mt-8 pt-6 border-t border-black/5 flex justify-between items-center">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest italic">Experience the vision.</span>
          <button className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-black transition-colors">
            All Work
          </button>
        </div>
      </div>
    </div>
  )
}