'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal, { SectionEyebrow } from '@/components/ui/Reveal'
import { EASE_OUT_EXPO } from '@/lib/motion'

export default function DirectorVision() {
  const sectionRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const lineHeight = useTransform(scrollYProgress, [0.15, 0.75], ['0%', '100%'])
  const questionScale = useTransform(scrollYProgress, [0.55, 0.9], [0.92, 1])
  const questionOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0.3, 1])

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
      chapters: [
        { id: '01', title: 'Ambition' },
        { id: '02', title: 'Method' },
        { id: '03', title: 'Truth' },
      ],
    }
  const paragraphs = [t.p1, t.p2, t.p3]
  const titleParts = t.directorTitle.split(' ')

  return (
    <section
      ref={sectionRef}
      className="relative bg-page-3 text-fg py-20 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="glow-orb top-1/4 left-1/3 w-[600px] h-[600px] bg-gold/[0.08]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 items-end">
          <Reveal className="lg:col-span-7">
            <SectionEyebrow index="/02" label={t.directorSub} />
            <h2 className="h-display text-[clamp(48px,9vw,120px)] leading-[0.86] text-fg">
              {titleParts[0]}
              <br />
              <span className="text-gold-bright">{titleParts.slice(1).join(' ')}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-5 lg:pl-8 lg:border-l border-line">
            <p className="font-serif-d italic text-xl md:text-2xl text-gold-bright leading-snug">
              &ldquo;{t.pullQuote}&rdquo;
            </p>
            <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-subtle">
              — MONIRUL HAQUE AKASH
            </div>
          </Reveal>
        </div>

        {/* Sticky scroll storytelling */}
        <div className="relative grid lg:grid-cols-12 gap-10">
          {/* Progress spine */}
          <div className="hidden lg:block lg:col-span-1 relative">
            <div className="sticky top-32 h-[50vh] w-px bg-line mx-auto">
              <motion.div
                style={{ height: lineHeight }}
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-gold-bright to-gold/40 origin-top"
              />
            </div>
          </div>

          <div className="lg:col-span-11 space-y-16 md:space-y-24">
            {paragraphs.map((text, i) => (
              <motion.div
                key={t.chapters[i].id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
                className="grid md:grid-cols-12 gap-6 items-start"
              >
                <div className="md:col-span-3">
                  <div className="font-display text-5xl md:text-6xl text-faint leading-none">
                    {t.chapters[i].id}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mt-2">
                    {t.chapters[i].title}
                  </div>
                </div>
                <p className="md:col-span-9 text-base md:text-lg text-muted leading-[1.8] font-light max-w-2xl">
                  {text}
                </p>
              </motion.div>
            ))}

            {/* Final question — signature moment */}
            <motion.div
              style={{ scale: questionScale, opacity: questionOpacity }}
              className="pt-12 md:pt-16 border-t border-line"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold mb-6">
                ⟶ {t.endingLine}
              </p>
              <p className="font-serif-d italic text-3xl md:text-5xl lg:text-6xl text-fg leading-[1.15] tracking-tight max-w-4xl">
                &ldquo;{t.finalQuestion}&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
