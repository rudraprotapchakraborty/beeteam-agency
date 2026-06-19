'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

/* ---------------------------------------------------------------
   Shared layout + motion primitives for the refined cinematic UI.
   Keeps spacing, eyebrows and reveal motion consistent everywhere.
   --------------------------------------------------------------- */

const EASE = [0.22, 1, 0.36, 1] as const

export function Section({
  id,
  children,
  className = '',
  tone = 'base',
  bordered = true,
}: {
  id?: string
  children: ReactNode
  className?: string
  tone?: 'base' | 'raised'
  bordered?: boolean
}) {
  const bg = tone === 'raised' ? 'bg-ink-2' : 'bg-ink'
  return (
    <section
      id={id}
      className={`relative ${bg} ${bordered ? 'border-t border-white/[0.06]' : ''} ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        {children}
      </div>
    </section>
  )
}

export function Eyebrow({
  index,
  children,
  light = false,
}: {
  index?: string
  children: ReactNode
  light?: boolean
}) {
  return (
    <div className="flex items-center gap-3">
      {index && (
        <span className="label text-gold">{index}</span>
      )}
      <span className="tick" />
      <span className={`label ${light ? 'text-black/45' : 'text-white/45'}`}>{children}</span>
    </div>
  )
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = '',
  once = true,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  once?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* A large editorial section heading with a muted accent word. */
export function Heading({
  children,
  className = '',
  light = false,
}: {
  children: ReactNode
  className?: string
  light?: boolean
}) {
  return (
    <h2
      className={`display text-[clamp(2.75rem,7vw,6rem)] ${light ? 'text-black' : 'text-white'} ${className}`}
    >
      {children}
    </h2>
  )
}
