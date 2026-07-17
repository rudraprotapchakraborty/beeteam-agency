'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import Reveal, { SectionEyebrow } from '@/components/ui/Reveal'

export default function FilmInfoSection() {
  const ref = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const posterY = useTransform(scrollYProgress, [0, 1], [40, -40])
  const posterRotate = useTransform(scrollYProgress, [0, 1], [-2, 2])

  const t = {
      eyebrow: 'Production File',
      title1: 'Film',
      title2: 'Information',
      creatorLabel: 'Producer · Writer · Director · Editor · Cinematographer',
      creator: 'Monirul Haque Akash',
      production: 'Production Company',
      genre: 'Genre',
      country: 'Country',
      language: 'Language',
      picture: 'Picture',
      sound: 'Sound',
      duration: 'Duration',
      format: 'Available Format',
      executive: 'Executive Production',
      digitalPartner: 'Digital Communications & Media Partner',
      genreValue: 'Political Drama · Satire',
      countryValue: 'Bangladesh',
      languageValue: 'Bengali',
      pictureValue: 'Colour',
      durationValue: '134 min',
    }

  const specs = [
    { label: t.production, value: 'Bee Team Ltd.' },
    { label: t.genre, value: t.genreValue },
    { label: t.country, value: t.countryValue },
    { label: t.language, value: t.languageValue },
    { label: t.picture, value: t.pictureValue },
    { label: t.sound, value: '2.0 · 5.1', mono: true },
    { label: t.duration, value: t.durationValue },
    { label: t.format, value: 'DCP · MP4 · MOV', mono: true },
    { label: t.executive, value: 'HM Production & Multimedia' },
    {
      label: t.digitalPartner,
      value: 'Creative Surf',
      href: 'https://www.creativesurf.agency/',
    },
  ]

  return (
    <section ref={ref} className="relative bg-page text-fg py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb bottom-0 right-1/4 w-[500px] h-[500px] bg-gold/[0.06]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Floating poster — signature */}
          <Reveal className="lg:col-span-5">
            <motion.div style={{ y: posterY, rotate: posterRotate }} className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#ffd700]/20 via-transparent to-transparent blur-2xl" />
              <div className="relative w-full aspect-[2/3] rounded-3xl overflow-hidden shadow-premium border border-line group">
                <Image
                  src="/poster2.jpg"
                  alt="Film Poster"
                  fill
                  sizes="(min-width: 1024px) 420px, 90vw"
                  className="object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-2 sm:-right-6 glass-strong rounded-2xl px-4 py-3 shadow-premium">
                <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-subtle">
                  Runtime
                </div>
                <div className="font-display text-3xl text-fg leading-none mt-0.5">
                  {t.durationValue}
                </div>
              </div>
            </motion.div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <SectionEyebrow index="/06" label={t.eyebrow} />
              <h2 className="h-display text-[clamp(48px,8vw,110px)] text-fg leading-[0.86] mb-8">
                {t.title1}
                <br />
                <span className="text-gold-bright">{t.title2}</span>
              </h2>
            </Reveal>

            {/* Creator highlight */}
            <Reveal delay={0.08}>
              <div className="mb-8 relative rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/10 to-transparent p-6 md:p-8 overflow-hidden">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-subtle mb-2">
                  {t.creatorLabel}
                </p>
                <p className="font-display text-4xl md:text-5xl text-gold-bright">{t.creator}</p>
              </div>
            </Reveal>

            {/* Spec bento */}
            <Reveal delay={0.12}>
              <div className="grid sm:grid-cols-2 gap-px rounded-2xl overflow-hidden border border-line bg-fill-hover">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="bg-page-3 p-5 group hover:bg-card transition-colors"
                  >
                    <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-subtle block mb-1.5">
                      {spec.label}
                    </span>
                    {spec.href ? (
                      <a
                        href={spec.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-medium text-fg group-hover:text-gold-bright transition-colors"
                      >
                        {spec.value}
                      </a>
                    ) : (
                      <span
                        className={`text-base font-medium text-fg ${
                          spec.mono ? 'font-mono-d' : ''
                        } group-hover:text-gold-bright transition-colors`}
                      >
                        {spec.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
