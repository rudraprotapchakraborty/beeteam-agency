'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'
import { EASE_OUT_EXPO } from '@/lib/motion'

const t = {
  presents: 'Bee Team Presents',
  title: 'The University of Chankharpul',
  synopsisLabel: 'Synopsis',
  lead: `Unlike universities in most parts of the world, a third-world institution like The University of Chankharpul becomes a gambling arena where ambitious students sacrifice their youth, careers, and principles for a single dream: a political post in a government-backed student wing. A post that promises shortcuts to influence, corruption, and future power.`,
  body: [
    `The film follows a group of friends who enter university as brothers, eating together, marching together, fighting together. But slowly, ambition rips them apart. They begin to compete silently, desperately, to rise in the political hierarchy. Friendship here becomes nothing more than a temporary alliance built only to be broken.`,
    `Our protagonist has no name; also no other character does. They are known only as “vai”, “mama”, etc, here, identities shaped by position. Our protagonist dreams of rising in politics but lacks the key tool of networking: a Motorbike. Without family support or income, he sinks into depression, trying every humiliating way to earn one.`,
    `Then one day, he returns to campus riding a Horse. Absurdity becomes power. The horse instantly transforms him into a symbol: stylish, rebellious, and influential. The University President of the student wing notices him, elevates him, praises him, uses him. With the horse comes money, protection, respect. The protagonist’s world flips overnight.`,
    `Soon he forgets who he started with. Friends turn into shadows behind him. He becomes the selfish figure he once despised.`,
  ],
  pullQuote: `Day by day it becomes clear that, In this world, nobody climbs without stepping on someone else.`,
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
                    <h2 className="relative h-display text-[clamp(40px,7vw,88px)] text-[#ffd700] leading-[0.9]">
                      {t.title}
                    </h2>
                  </div>
                </Reveal>

                <Reveal delay={0.12} className="mt-10 max-w-2xl space-y-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/50">
                    {t.synopsisLabel}
                  </p>
                  <p className="font-serif-d text-xl md:text-2xl text-white leading-[1.35]">
                    {t.lead}
                  </p>
                  <div className="space-y-4">
                    {t.body.map((para) => (
                      <p
                        key={para}
                        className="text-sm md:text-base text-white/55 leading-relaxed font-light"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-5 lg:pl-6 flex items-start lg:items-end">
                <Reveal delay={0.2}>
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
                    style={{ originY: 0 }}
                    className="border-l-2 border-[#ffd700] pl-6 py-1"
                  >
                    <p className="font-serif-d italic text-xl md:text-3xl text-[#ffd700] leading-snug">
                      {t.pullQuote}
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
