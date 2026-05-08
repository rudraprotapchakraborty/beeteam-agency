'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function OpeningScene() {
  const [start, setStart] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStart(true), 600)
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
          priority
          style={{ width: 'auto', height: 'auto' }}
          className="drop-shadow-[0_0_40px_rgba(0,0,0,0.3)]"
        />
      </motion.div>

      <motion.div
        initial={{ x: 0 }}
        animate={start ? { x: '-120%' } : { x: 0 }}
        transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0 bg-yellow-500"
        style={{ clipPath: 'polygon(0 0, 70% 0, 50% 100%, 0% 100%)' }}
      />

      <motion.div
        initial={{ x: 0 }}
        animate={start ? { x: '120%' } : { x: 0 }}
        transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0 bg-yellow-300"
        style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 50% 100%)' }}
      />
    </motion.div>
  )
}
