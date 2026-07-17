'use client'

import { useRef, type ReactNode, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { SPRING_MAGNETIC } from '@/lib/motion'

type Props = {
  children: ReactNode
  className?: string
  href?: string
  onClick?: (e: MouseEvent) => void
  target?: string
  rel?: string
  type?: 'button' | 'submit'
  ariaLabel?: string
  strength?: number
}

export default function MagneticButton({
  children,
  className = '',
  href,
  onClick,
  target,
  rel,
  type = 'button',
  ariaLabel,
  strength = 0.35,
}: Props) {
  const ref = useRef<HTMLElement | null>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, SPRING_MAGNETIC)
  const springY = useSpring(y, SPRING_MAGNETIC)

  const handleMove = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    x.set(dx * strength)
    y.set(dy * strength)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  const shared = {
    ref: ref as never,
    style: { x: springX, y: springY },
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    whileTap: { scale: 0.97 },
    className,
    'aria-label': ariaLabel,
  }

  if (href) {
    return (
      <motion.a
        {...shared}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button {...shared} type={type} onClick={onClick}>
      {children}
    </motion.button>
  )
}
