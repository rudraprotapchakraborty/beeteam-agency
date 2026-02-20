'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function OpeningScene() {
  const [start, setStart] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      // Play sound when gate opens
      if (audioRef.current) {
        audioRef.current.currentTime = 0
        audioRef.current.volume = 0.6
        audioRef.current.play().catch(() => {})
      }

      setStart(true)
    }, 600)

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={start ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.8 }}
      className="fixed inset-0 z-[99999] overflow-hidden bg-yellow-400 flex items-center justify-center"
      style={{ pointerEvents: start ? 'none' : 'auto' }}
    >

      {/* 🔊 AUDIO ELEMENT */}
      <audio ref={audioRef} src="/sounds/gate.mp3" preload="auto" />

      {/* LOGO */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={start ? { scale: 1.1, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="z-20"
      >
        <Image
          src="/beeteam_full_logo.png"
          alt="BeeTeam"
          width={400}
          height={400}
          className="drop-shadow-[0_0_40px_rgba(0,0,0,0.3)]"
        />
      </motion.div>

      {/* LEFT ANGLED PANEL */}
      <motion.div
        initial={{ x: 0 }}
        animate={start ? { x: "-120%" } : { x: 0 }}
        transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0 bg-yellow-500"
        style={{
          clipPath: "polygon(0 0, 70% 0, 50% 100%, 0% 100%)"
        }}
      />

      {/* RIGHT ANGLED PANEL */}
      <motion.div
        initial={{ x: 0 }}
        animate={start ? { x: "120%" } : { x: 0 }}
        transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0 bg-yellow-300"
        style={{
          clipPath: "polygon(30% 0, 100% 0, 100% 100%, 50% 100%)"
        }}
      />

    </motion.div>
  )
}