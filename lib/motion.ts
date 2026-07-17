export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const
export const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const

export const SPRING_SOFT = { type: 'spring' as const, stiffness: 120, damping: 22, mass: 0.8 }
export const SPRING_SNAPPY = { type: 'spring' as const, stiffness: 280, damping: 28, mass: 0.6 }
export const SPRING_MAGNETIC = { type: 'spring' as const, stiffness: 180, damping: 15, mass: 0.4 }

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE_OUT_EXPO },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

export const staggerFast = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.85, ease: EASE_OUT_EXPO },
  },
}
