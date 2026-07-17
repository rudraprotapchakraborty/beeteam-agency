'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'

export default function SynopsisSection() {
  const sectionRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.12, 1])
  const titleX = useTransform(scrollYProgress, [0.1, 0.5], ['8%', '0%'])

  const t = {
      presents: 'Bee Team Presents',
      title: 'Synopsis',
      blurb: `In a third-world university where student politics is a ruthless gamble, a nameless student rises to power through an unexpected symbol—a horse.`,
      blurb2: `What begins as absurdity quickly becomes influence, status, and political capital. But as ambition grows, friendship collapses.`,
      blurb3: `In a world built on selfishness, every rise demands a sacrifice.`,
    }

  return (
    <section ref={sectionRef} className="relative min-h-[90vh] bg-black overflow-hidden text-white">
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/synopsis.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/25" />
      </motion.div>

      <div className="relative z-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div style={{ x: titleX }}>
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#ffd700]">
                  /07
                </span>
                <span className="h-px w-10 bg-[#ffd700]/40" />
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/50">
                  {t.presents}
                </span>
              </div>
              <h2 className="h-display text-[clamp(72px,14vw,200px)] text-[#ffd700] leading-[0.86] mb-4">
                {t.title}
              </h2>
            </Reveal>
          </motion.div>

          <Reveal delay={0.1} className="mt-10 max-w-3xl space-y-6">
            <p className="font-serif-d text-2xl md:text-3xl lg:text-4xl text-white leading-[1.25]">
              <span className="text-[#ffd700] font-bold mr-1">&ldquo;</span>
              {t.blurb}
            </p>
            <p className="text-lg text-white/60 leading-relaxed font-light max-w-xl">
              {t.blurb2}
            </p>
            <p className="font-serif-d italic text-2xl md:text-3xl text-[#ffd700] leading-snug border-l-2 border-[#ffd700] pl-6 max-w-lg">
              {t.blurb3}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
