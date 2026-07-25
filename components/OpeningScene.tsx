'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { EASE_OUT_EXPO } from '@/lib/motion'

type Phase = 'logo' | 'exit' | 'gone'

export default function OpeningScene() {
  const [phase, setPhase] = useState<Phase>('logo')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (sessionStorage.getItem('beeteam_visited')) {
        setPhase('gone')
      } else {
        sessionStorage.setItem('beeteam_visited', 'true')
      }
    }
  }, [])

  // logo → exit → gone
  useEffect(() => {
    if (phase !== 'logo') return

    const toExit = setTimeout(() => setPhase('exit'), 1400)
    const toGone = setTimeout(() => setPhase('gone'), 2300)

    return () => {
      clearTimeout(toExit)
      clearTimeout(toGone)
    }
  }, [phase])

  // Safety: once exit starts, always clear the overlay
  useEffect(() => {
    if (phase !== 'exit') return
    const t = setTimeout(() => setPhase('gone'), 750)
    return () => clearTimeout(t)
  }, [phase])

  return (
    <AnimatePresence>
      {phase !== 'gone' && (
        <motion.div
          key="opening"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
          className="fixed inset-0 z-[99999] overflow-hidden bg-[#030303] flex items-center justify-center opening-scene-overlay"
          aria-hidden
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] rounded-full bg-[#ffd700]/15 blur-[120px] mesh-animate" />
            <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full bg-[#ffd700]/08 blur-[100px]" />
          </div>

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <motion.div
            key="logo"
            initial={{ opacity: 0, y: 24, filter: 'blur(12px)' }}
            animate={
              phase === 'exit'
                ? { opacity: 0, y: -12, filter: 'blur(6px)', scale: 1.03 }
                : { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }
            }
            transition={{ duration: 0.65, ease: EASE_OUT_EXPO }}
            className="relative z-20 flex flex-col items-center px-8"
          >
            <div className="relative drop-shadow-[0_0_80px_rgba(255, 215, 0,0.45)]">
              <Image
                src="/logo-white.png"
                alt="BeeTeam"
                width={380}
                height={120}
                priority
                style={{ width: 'auto', height: 'auto', maxWidth: 'min(80vw, 380px)' }}
              />
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.15 }}
              style={{ originX: 0.5 }}
              className="mt-7 h-px w-40 bg-gradient-to-r from-transparent via-[#ffd700] to-transparent"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-5 font-mono text-[10px] uppercase tracking-[0.42em] text-white/45"
            >
              Studios · Est. 2026
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
