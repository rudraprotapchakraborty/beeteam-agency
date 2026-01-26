'use client'

import { motion } from 'framer-motion'
import { 
  Film, 
  Tv, 
  Megaphone, 
  Video, 
  Music, 
  ChevronRight 
} from 'lucide-react'

const menuData = [
  {
    title: "Film Production",
    icon: <Film size={18} />,
    links: ["Full Length Film", "Short Film", "Documentary"]
  },
  {
    title: "Advertisement",
    icon: <Tv size={18} />,
    links: ["TVC", "OVC"]
  },
  {
    title: "Promotional Events",
    icon: <Megaphone size={18} />,
    links: ["Corporate AV", "Strategic Planning", "Promo Video", "Video Marketing"]
  },
  {
    title: "Video Production",
    icon: <Video size={18} />,
    links: ["Concept Development", "Script", "Storyboard", "Event Video", "Drone Video", "Explainer"]
  },
  {
    title: "Music Production",
    icon: <Music size={18} />,
    links: ["Music Video", "Theme Song", "Brand Anthem", "Jingle", "Lyrics"]
  }
]

export default function MegaMenu() {
  return (
    <div className="w-[1000px] bg-white rounded-[2rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/20">
      <div className="grid grid-cols-5 gap-8">
        {menuData.map((section, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            {/* Column Header */}
            <div className="flex items-center gap-2 mb-5 text-black">
              <span className="p-2 bg-[#FFC700]/10 rounded-lg text-[#FFC700]">
                {section.icon}
              </span>
              <h4 className="font-bold text-[14px] uppercase tracking-wider italic">
                {section.title}
              </h4>
            </div>

            {/* Links */}
            <ul className="space-y-3">
              {section.links.map((link) => (
                <motion.li 
                  key={link}
                  className="group flex items-center gap-1 cursor-pointer"
                  whileHover={{ x: 4 }}
                >
                  <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#FFC700]">
                    <ChevronRight size={14} />
                  </span>
                  <span className="text-gray-500 text-[14px] group-hover:text-black group-hover:font-medium transition-colors duration-300">
                    {link}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Modern Bottom Feature Bar */}
      <div className="mt-10 pt-8 border-t border-gray-100 flex justify-between items-center">
        <div className="text-gray-400 text-xs flex gap-6">
          <span>• 24/7 Support</span>
          <span>• Global Delivery</span>
          <span>• Award Winning Agency</span>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="text-xs font-bold underline decoration-[#FFC700] decoration-2 underline-offset-4"
        >
          View All Services
        </motion.button>
      </div>
    </div>
  )
}