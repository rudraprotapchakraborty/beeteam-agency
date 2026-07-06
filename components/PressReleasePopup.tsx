'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Phone, Calendar, Download } from 'lucide-react'

type PressReleasePopupProps = {
  isOpen: boolean
  onClose: () => void
}

export default function PressReleasePopup({ isOpen, onClose }: PressReleasePopupProps) {
  if (!isOpen) return null

  const handleDownload = () => {
    // Generate a simple text download of the press release for accessibility
    const textContent = `PRESS RELEASE
For Immediate Release

Acclaimed Bangladeshi Feature Film The University of Chankharpul Opens in Cumilla and Rajshahi

Dhaka | July 3, 2026

Following its successful theatrical release and widespread critical acclaim, the much-talked-about Bangladeshi feature film The University of Chankharpul is expanding its nationwide theatrical run with releases in two new cities.

Beginning Friday, July 3, 2026, the film will be screened at K Screen Cineplex, Cumilla, with daily shows at 2:00 PM and 5:00 PM. It will also open at Grand River View (GRV) Cineplex, Rajshahi, from Saturday, July 4, 2026, with a daily show at 3:30 PM

Written and directed by Akash Haque, The University of Chankharpul presents a compelling portrayal of university life, exploring student politics, residential hall culture, friendship, personal struggles, and the social realities shaping today's youth. Since its theatrical debut, the film has generated significant attention from both audiences and critics for its powerful storytelling, authentic performances, and thought-provoking narrative, earning particular appreciation among young moviegoers.

The film features performances by Devodyuti Aich, Rocky Khan, Bobby Biswas, Akhtaruzzaman Azad, Chayan Mondal, Abu Saeed, Mehedi Hasan Sohan, Jibon along with a talented ensemble of emerging Bangladeshi actors.

Speaking on the occasion, Md. Hafizuddin Munna, Executive Producer and Distributor of the film, said: "The overwhelming love and support from audiences have inspired us to bring The University of Chankharpul to viewers across Bangladesh. We are delighted to introduce the film to audiences in Cumilla and Rajshahi. We firmly believe that its authentic portrayal of university life and its emotionally engaging story will resonate deeply with movie lovers. We warmly invite everyone to experience the film on the big screen with their family and friends."

The production team also confirmed that, in response to audience demand, the film's theatrical release will continue to expand to additional cities across Bangladesh in the coming weeks.

Media Contact:
Md. Hafizuddin Munna
Executive Producer & Distributor
Bee Team Productions
Contact: 01711315557
Email: beeteamltd@gmail.com`

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'press_release_university_of_chankharpul_july_2026.txt')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            aria-hidden
          />

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            className="relative w-full max-w-3xl bg-[#faf8f3] text-black border border-black/15 rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden max-h-[85vh] flex flex-col z-10"
          >
            {/* Top Tape Header */}
            <div className="bg-[#0a0a0a] text-[#f4f1ea] text-[9px] font-mono uppercase tracking-[0.3em] py-2 px-6 flex justify-between items-center border-b border-[#FFD700]/20">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] animate-pulse" />
                Press Relations
              </span>
              <span>For Immediate Release</span>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-8 right-5 z-20 flex items-center justify-center h-8 w-8 rounded-full bg-black/5 hover:bg-black/10 text-black/60 hover:text-black transition-colors"
            >
              <X size={15} strokeWidth={2.5} />
            </button>

            {/* Scrollable Content */}
            <div className="p-6 md:p-10 overflow-y-auto flex-1 font-sans">
              
              {/* Document Header */}
              <div className="border-b border-black/10 pb-6 mb-8 text-center md:text-left">
                <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center md:justify-start items-center text-[10px] font-mono uppercase tracking-widest text-[#B58920] mb-3">
                  <span className="font-bold">PRESS RELEASE</span>
                  <span className="text-black/30 hidden md:inline">·</span>
                  <span className="flex items-center gap-1"><Calendar size={11} /> Dhaka | July 3, 2026</span>
                </div>
                
                <h2 className="font-serif font-black text-2xl md:text-3xl leading-tight text-black tracking-tight mb-2">
                  Acclaimed Bangladeshi Feature Film <span className="italic">The University of Chankharpul</span> Opens in Cumilla and Rajshahi
                </h2>
              </div>

              {/* Document Body */}
              <div className="font-serif text-sm md:text-base leading-relaxed text-black/85 space-y-6">
                
                <p>
                  Following its successful theatrical release and widespread critical acclaim, the much-talked-about Bangladeshi feature film <span className="font-semibold italic">The University of Chankharpul</span> is expanding its nationwide theatrical run with releases in two new cities.
                </p>

                <p className="pl-4 border-l-2 border-[#FFD700]/60 bg-amber-50/30 py-2">
                  Beginning Friday, July 3, 2026, the film will be screened at <strong>K Screen Cineplex, Cumilla</strong>, with daily shows at <strong>2:00 PM and 5:00 PM</strong>. It will also open at <strong>Grand River View (GRV) Cineplex, Rajshahi</strong>, from Saturday, July 4, 2026, with a daily show at <strong>3:30 PM</strong>.
                </p>

                <p>
                  Written and directed by <strong>Akash Haque</strong>, <span className="italic">The University of Chankharpul</span> presents a compelling portrayal of university life, exploring student politics, residential hall culture, friendship, personal struggles, and the social realities shaping today&apos;s youth. Since its theatrical debut, the film has generated significant attention from both audiences and critics for its powerful storytelling, authentic performances, and thought-provoking narrative, earning particular appreciation among young moviegoers.
                </p>

                <p>
                  The film features performances by <strong>Devodyuti Aich, Rocky Khan, Bobby Biswas, Akhtaruzzaman Azad, Chayan Mondal, Abu Saeed, Mehedi Hasan Sohan, Jibon</strong> along with a talented ensemble of emerging Bangladeshi actors.
                </p>

                {/* Styled Blockquote */}
                <div className="relative my-8 pl-6 border-l-2 border-[#B58920] italic bg-black/[0.02] py-4 pr-4 rounded-r-xl">
                  <span className="absolute -left-2 -top-3 font-serif text-[60px] text-[#B58920]/25 select-none leading-none">“</span>
                  <p className="text-black/80 font-serif leading-relaxed mb-2">
                    The overwhelming love and support from audiences have inspired us to bring The University of Chankharpul to viewers across Bangladesh. We are delighted to introduce the film to audiences in Cumilla and Rajshahi. We firmly believe that its authentic portrayal of university life and its emotionally engaging story will resonate deeply with movie lovers. We warmly invite everyone to experience the film on the big screen with their family and friends.
                  </p>
                  <cite className="block font-mono text-[9px] uppercase tracking-wider text-black/50 not-italic mt-3">
                    — Md. Hafizuddin Munna, Executive Producer & Distributor
                  </cite>
                </div>

                <p>
                  The production team also confirmed that, in response to audience demand, the film&apos;s theatrical release will continue to expand to additional cities across Bangladesh in the coming weeks.
                </p>
              </div>

              {/* Media Contact Footer Block */}
              <div className="mt-10 pt-8 border-t border-black/10 grid sm:grid-cols-2 gap-6 bg-black/[0.02] -mx-6 md:-mx-10 p-6 md:p-8">
                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#B58920] mb-3">Media Contact</h4>
                  <div className="font-serif text-sm">
                    <p className="font-bold text-black">Md. Hafizuddin Munna</p>
                    <p className="text-black/60 text-xs">Executive Producer &amp; Distributor</p>
                    <p className="text-black/60 text-xs italic">Bee Team Productions</p>
                  </div>
                </div>
                
                <div className="flex flex-col justify-end gap-2 text-xs font-mono text-black/70">
                  <a href="tel:01711315557" className="flex items-center gap-2 hover:text-[#B58920] transition-colors">
                    <Phone size={12} /> <span>01711315557</span>
                  </a>
                  <a href="mailto:beeteamltd@gmail.com" className="flex items-center gap-2 hover:text-[#B58920] transition-colors">
                    <Mail size={12} /> <span>beeteamltd@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Actions footer */}
            <div className="bg-black/5 py-4 px-6 md:px-10 flex justify-between items-center border-t border-black/10">
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[#B58920] hover:text-black font-semibold transition-colors"
              >
                <Download size={13} />
                Download Release (TXT)
              </button>
              <button
                onClick={onClose}
                className="bg-black text-[#f4f1ea] px-5 py-2 rounded-full text-[10px] font-mono uppercase tracking-wider hover:bg-[#B58920] hover:text-black transition-colors"
              >
                Dismiss
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
