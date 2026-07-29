'use client'

import type { ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'
import { EASE_OUT_EXPO } from '@/lib/motion'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
  amount?: number
  as?: 'div' | 'span' | 'p' | 'li'
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 36,
  once = true,
  amount = 0.2,
  as = 'div',
}: Props) {
  const Comp = motion[as]

  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.95, ease: EASE_OUT_EXPO, delay }}
      className={className}
    >
      {children}
    </Comp>
  )
}

export function RevealText({
  text,
  className = '',
  delay = 0,
}: {
  text: string
  className?: string
  delay?: number
}) {
  const words = text.split(' ')

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.04, delayChildren: delay },
    },
  }

  const child: Variants = {
    hidden: { opacity: 0, y: '0.6em' },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE_OUT_EXPO },
    },
  }

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="overflow-hidden inline-block mr-[0.28em]">
          <motion.span className="inline-block" variants={child}>
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

export function SectionEyebrow({
  index,
  label,
  light = false,
}: {
  index?: string
  label: string
  light?: boolean
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      {index && (
        <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-(--gold-text)">
          {index}
        </span>
      )}
      <span className="h-px w-10 bg-gold/40" />
      <span
        className={`font-mono text-[10px] uppercase tracking-[0.28em] ${
          light ? 'text-black/50' : 'text-subtle'
        }`}
      >
        {label}
      </span>
    </div>
  )
}
