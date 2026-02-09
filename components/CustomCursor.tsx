'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false)
  
  // Use Motion Values for performance (avoids React re-renders on every pixel moved)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Smooth out the movement with springs
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    // Check if the user is hovering over a button or link to change cursor state
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a')
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY])

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 bg-[#FFD700] border-2 border-black pointer-events-none z-[9999] flex items-center justify-center"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
        // Matching your brutalist aesthetic
        boxShadow: isHovered ? '0px 0px 0px rgba(0,0,0,1)' : '4px 4px 0px rgba(0,0,0,1)',
        scale: isHovered ? 2.5 : 1,
      }}
      animate={{
        rotate: isHovered ? 45 : 0,
      }}
    >
        {/* Optional: Add a tiny dot or icon inside when hovering */}
        {isHovered && <div className="w-1 h-1 bg-black rounded-full" />}
    </motion.div>
  )
}