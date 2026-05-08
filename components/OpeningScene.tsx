'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

type Phase = 'count' | 'logo' | 'wipe' | 'gone'

export default function OpeningScene() {
  const [phase, setPhase] = useState<Phase>('count')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('logo'), 1100)
    const t2 = setTimeout(() => setPhase('wipe'), 2400)
    const t3 = setTimeout(() => setPhase('gone'), 3300)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  const wiping = phase === 'wipe' || phase === 'gone'

  return (
    <AnimatePresence>
      {phase !== 'gone' && (
        <motion.div
          key="opening"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[99999] overflow-hidden bg-[#0a0a0a] flex items-center justify-center"
        >
          {/* Film strip top + bottom */}
          <div className="absolute top-0 left-0 right-0 h-8 film-strip opacity-90" />
          <div className="absolute bottom-0 left-0 right-0 h-8 film-strip opacity-90" />

          {/* Crosshair frame */}
          <div className="absolute inset-12 border border-white/10 pointer-events-none">
            <span className="absolute -top-px -left-px w-6 h-6 border-t-2 border-l-2 border-[#FFD700]" />
            <span className="absolute -top-px -right-px w-6 h-6 border-t-2 border-r-2 border-[#FFD700]" />
            <span className="absolute -bottom-px -left-px w-6 h-6 border-b-2 border-l-2 border-[#FFD700]" />
            <span className="absolute -bottom-px -right-px w-6 h-6 border-b-2 border-r-2 border-[#FFD700]" />
          </div>

          {/* Top corner specs */}
          <div className="absolute top-12 left-12 right-12 flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 z-10">
            <div className="flex items-center gap-3">
              <span className="dot-pulse" />
              <span>REC · 24fps · 35mm</span>
            </div>
            <div>SCN 01 · TK 01</div>
          </div>

          {/* Bottom corner specs */}
          <div className="absolute bottom-12 left-12 right-12 flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 z-10">
            <div>BEE TEAM · STUDIO 2026</div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 border border-[#FFD700]" />
              <span>A1 · 1.85:1</span>
            </div>
          </div>

          {/* Countdown numbers */}
          <AnimatePresence mode="wait">
            {phase === 'count' && (
              <motion.div
                key="count"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.4 }}
                transition={{ duration: 0.5 }}
                className="relative z-20"
              >
                <div className="relative w-[300px] h-[300px] flex items-center justify-center">
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.1, ease: 'linear' }}
                    className="absolute inset-0 rounded-full border border-[#FFD700]/40"
                    style={{
                      background:
                        'conic-gradient(from 0deg, rgba(255,215,0,0.6), transparent 70%)',
                    }}
                  />
                  <span className="absolute inset-8 rounded-full border border-white/20" />
                  <span className="absolute inset-0 rounded-full border-t border-[#FFD700]" />
                  <span className="absolute left-1/2 top-0 w-px h-1/2 bg-[#FFD700]/50 -translate-x-1/2" />
                  <span className="absolute left-0 top-1/2 w-1/2 h-px bg-[#FFD700]/50 -translate-y-1/2" />
                  <motion.span
                    key="num-3"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: [1, 1, 0] }}
                    transition={{ duration: 1.0, times: [0, 0.7, 1] }}
                    className="font-display text-[180px] text-[#FFD700] leading-none select-none"
                  >
                    3
                  </motion.span>
                </div>
              </motion.div>
            )}

            {phase === 'logo' && (
              <motion.div
                key="logo"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-20 flex flex-col items-center"
              >
                <div className="relative isolate drop-shadow-[0_0_60px_rgba(255,215,0,0.4)]">
                  <Image
                    src="/beeteam_full_logo.png"
                    alt="BeeTeam"
                    width={360}
                    height={120}
                    priority
                    style={{ width: 'auto', height: 'auto' }}
                  />
                  <Image
                    src="/beeteam_full_logo.png"
                    alt=""
                    aria-hidden
                    width={360}
                    height={120}
                    style={{
                      width: 'auto',
                      height: 'auto',
                      position: 'absolute',
                      inset: 0,
                      mixBlendMode: 'lighten',
                    }}
                    className="invert brightness-200 hue-rotate-180"
                  />
                </div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
                  style={{ originX: 0 }}
                  className="mt-6 h-px w-48 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"
                />
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.4em] text-white/50">
                  Studios — Est. 2026
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Wipe transitions out */}
          <motion.div
            initial={{ x: 0 }}
            animate={wiping ? { x: '-110%' } : { x: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 bg-[#0a0a0a]"
            style={{ clipPath: 'polygon(0 0, 70% 0, 50% 100%, 0% 100%)' }}
          />
          <motion.div
            initial={{ x: 0 }}
            animate={wiping ? { x: '110%' } : { x: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 bg-[#0a0a0a]"
            style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 50% 100%)' }}
          />

          {/* Vignette */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)',
          }} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
