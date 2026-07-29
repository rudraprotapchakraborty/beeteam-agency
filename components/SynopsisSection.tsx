'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'
import { EASE_OUT_EXPO } from '@/lib/motion'

const t = {
  presents: 'Bee Team Presents',
  title: 'Synopsis',
  blurb: `In a third-world university where student politics is a ruthless gamble, a nameless student rises to power through an unexpected symbol—a horse.`,
  blurb2: `What begins as absurdity quickly becomes influence, status, and political capital. But as ambition grows, friendship collapses.`,
  blurb3: `In a world built on selfishness, every rise demands a sacrifice.`,
}

export default function SynopsisSection() {
  const sectionRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.02])

  return (
    <section ref={sectionRef} className="relative bg-black text-white">
      <div className="h-3 sm:h-5 bg-black relative z-40" />

      <div className="relative min-h-[95vh] overflow-hidden flex items-center">
        <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/synopsis.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
        </motion.div>

        <div className="relative z-10 w-full py-24 md:py-0">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7">
                <Reveal>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#ffd700]">
                      /01
                    </span>
                    <span className="h-px w-10 bg-[#ffd700]/40" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/50">
                      {t.presents}
                    </span>
                  </div>

                  <div className="relative">
                    <span
                      aria-hidden
                      className="font-serif-d absolute -top-16 -left-4 text-[220px] leading-none text-[#ffd700]/10 select-none pointer-events-none"
                    >
                      &ldquo;
                    </span>
                    <h2 className="relative h-display text-[clamp(64px,13vw,180px)] text-[#ffd700] leading-[0.86]">
                      {t.title}
                    </h2>
                  </div>
                </Reveal>

                <Reveal delay={0.12} className="mt-10 max-w-xl space-y-6">
                  <p className="font-serif-d text-2xl md:text-3xl text-white leading-[1.3]">
                    {t.blurb}
                  </p>
                  <p className="text-base md:text-lg text-white/55 leading-relaxed font-light">
                    {t.blurb2}
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-5 lg:pl-6 flex items-end">
                <Reveal delay={0.2}>
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
                    style={{ originY: 0 }}
                    className="border-l-2 border-[#ffd700] pl-6 py-1"
                  >
                    <p className="font-serif-d italic text-2xl md:text-4xl text-[#ffd700] leading-snug">
                      {t.blurb3}
                    </p>
                  </motion.div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-3 sm:h-5 bg-black relative z-40" />
    </section>
  )
}
