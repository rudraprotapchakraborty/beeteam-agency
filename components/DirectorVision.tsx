'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { SectionEyebrow } from '@/components/ui/Reveal'
import { EASE_OUT_EXPO } from '@/lib/motion'

export default function DirectorVision() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [active, setActive] = useState(0)

  const t = {
      directorTitle: "Director's Vision",
      directorSub: 'A Note from Monirul Haque Akash · 2026',
      pullQuote:
        'Identity is conditional. Power is performance. The horse, then, is everything.',
      p1: `This film is not about student politics alone; it is about the marketplace of ambition in a third-world society. In a world where young people are asked to dream, they are also forced to gamble those dreams in exchange for influence and power. Our characters have no names because identity here is conditional, one is known by his position only. The horse becomes a satire of status. It symbolizes a shortcut, an absurd object that suddenly grants social legitimacy. Students laugh at it as a joke, then worship it as power.`,
      p2: `To preserve the raw pulse of this world, the film is shot in real locations using a guerrilla documentary style. The camera behaves like a silent witness: observing, not staging. There is no artificial lighting, no beautification, no makeup to shield the characters from truth. Their tired eyes, dusty shirts, and restless movements belong not to actors but to the reality that millions of students live every day.`,
      p3: `This approach allows the viewer to feel the humidity of student hostels, the chaos of campus rallies, the politics hidden in tea stalls. The film observes its characters without judgment. It doesn't ask who is innocent or guilty, it asks what ambition does to innocence in the first place. It explores how deeply young people crave recognition, how cheaply it can be traded, and how tragedy becomes just another stepping stone to power.`,
      endingLine: 'The film ends not with closure, but with a question:',
      finalQuestion: 'How much of ourselves are we willing to sacrifice to feel important?',
    }
  const titleParts = t.directorTitle.split(' ')

  const slides = [
    { kind: 'intro' as const },
    { kind: 'chapter' as const, id: '01', title: 'Ambition', text: t.p1 },
    { kind: 'chapter' as const, id: '02', title: 'Method', text: t.p2 },
    { kind: 'chapter' as const, id: '03', title: 'Truth', text: t.p3 },
    { kind: 'final' as const },
  ]
  const count = slides.length

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${(count - 1) * 100}%`])

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActive(Math.min(count - 1, Math.max(0, Math.round(v * (count - 1)))))
  })

  return (
    <section
      ref={sectionRef}
      className="relative bg-page-3 text-fg"
      style={{ height: `${count * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-60">
          <div className="glow-orb top-1/4 left-1/3 w-[600px] h-[600px] bg-gold/[0.08]" />
        </div>

        <motion.div style={{ x }} className="relative z-10 flex h-full w-full">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="flex h-full w-screen shrink-0 items-center justify-center px-6 md:px-12"
            >
              {slide.kind === 'intro' && (
                <div className="max-w-4xl mx-auto text-center">
                  <div className="flex justify-center">
                    <SectionEyebrow index="/02" label={t.directorSub} />
                  </div>
                  <h2 className="h-display text-[clamp(40px,9vw,110px)] leading-[0.86] text-fg mt-4">
                    {titleParts[0]}
                    <br />
                    <span className="text-(--gold-text)">{titleParts.slice(1).join(' ')}</span>
                  </h2>
                  <p className="mt-8 font-serif-d italic text-xl md:text-2xl text-(--gold-text) leading-snug max-w-2xl mx-auto">
                    &ldquo;{t.pullQuote}&rdquo;
                  </p>
                  <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-subtle">
                    — MONIRUL HAQUE AKASH
                  </div>
                </div>
              )}

              {slide.kind === 'chapter' && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: active === i ? 1 : 0.3, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
                  className="max-w-3xl mx-auto"
                >
                  <div className="font-display text-6xl md:text-8xl text-faint leading-none">
                    {slide.id}
                  </div>
                  <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-(--gold-text) mt-3 mb-6">
                    {slide.title}
                  </div>
                  <p className="text-lg md:text-xl text-muted leading-[1.8] font-light">
                    {slide.text}
                  </p>
                </motion.div>
              )}

              {slide.kind === 'final' && (
                <div className="max-w-4xl mx-auto text-center">
                  <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-(--gold-text) mb-6">
                    ⟶ {t.endingLine}
                  </p>
                  <p className="font-serif-d italic text-3xl md:text-5xl lg:text-6xl text-fg leading-[1.15] tracking-tight">
                    &ldquo;{t.finalQuestion}&rdquo;
                  </p>
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Progress dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                active === i ? 'w-8 bg-gold-bright' : 'w-1.5 bg-line'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
