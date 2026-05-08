'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function FilmInfoSection() {
  const { language } = useLanguage()

  const translations = {
    en: {
      presents: 'Bee Team Presents',
      eyebrow: 'Production File · 04',
      title: 'Film Information',
      creatorLabel: 'Producer · Writer · Director · Editor · Cinematographer',
      creator: 'M Haque',
      production: 'Production Company',
      genre: 'Genre',
      country: 'Country',
      language: 'Language',
      picture: 'Picture',
      sound: 'Sound',
      duration: 'Duration',
      format: 'Available Format',
      executive: 'Executive Production',
      genreValue: 'Political Drama · Satire',
      countryValue: 'Bangladesh',
      languageValue: 'Bengali',
      pictureValue: 'Colour',
      durationValue: '144 min',
      sideTitle: 'THE UNIVERSITY OF CHANKHARPUL',
      stamp: 'CERTIFIED',
      stampSub: 'GOV/BD · 2026',
    },
    bn: {
      presents: 'বি টিম উপস্থাপিত',
      eyebrow: 'প্রোডাকশন ফাইল · ০৪',
      title: 'ফিল্ম তথ্য',
      creatorLabel: 'প্রযোজক · চিত্রনাট্যকার · পরিচালক · সম্পাদক · চিত্রগ্রাহক',
      creator: 'এম হক',
      production: 'প্রযোজনা প্রতিষ্ঠান',
      genre: 'ধরন',
      country: 'দেশ',
      language: 'ভাষা',
      picture: 'চিত্র',
      sound: 'শব্দ',
      duration: 'সময়কাল',
      format: 'প্রাপ্য ফরম্যাট',
      executive: 'নির্বাহী প্রযোজনা',
      genreValue: 'রাজনৈতিক নাটক · ব্যঙ্গ',
      countryValue: 'বাংলাদেশ',
      languageValue: 'বাংলা',
      pictureValue: 'রঙিন',
      durationValue: '১৪৪ মিনিট',
      sideTitle: 'দ্য ইউনিভার্সিটি অব চানখারপুল',
      stamp: 'প্রত্যয়িত',
      stampSub: 'সরকার/বিডি · ২০২৬',
    },
  } as const

  const t = translations[language]

  return (
    <section className="relative bg-[#0a0a0a] text-white py-24 md:py-32 overflow-hidden grain">
      {/* Subtle background flares */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 bg-[#FFD700]/8 blur-[200px]" />
      </div>

      {/* Side rotating title */}
      <div className="hidden xl:block absolute right-[-50px] top-1/2 -translate-y-1/2 rotate-90 origin-right font-mono text-white/15 tracking-[0.5em] text-xs select-none uppercase">
        {t.sideTitle}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT — POSTER + STAMP */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full h-[640px] rounded-2xl overflow-hidden shadow-[0_50px_100px_-30px_rgba(0,0,0,0.6)] border border-white/10 group">
              <Image
                src="/poster2.jpg"
                alt="Film Poster"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                priority
              />
              {/* Frame brackets */}
              <span className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#FFD700] z-10" />
              <span className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#FFD700] z-10" />
              <span className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#FFD700] z-10" />
              <span className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#FFD700] z-10" />

              {/* Top tape */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/70 backdrop-blur-sm font-mono text-[9px] uppercase tracking-[0.3em] text-[#FFD700] z-10">
                ASSET · POSTER 02
              </div>
            </div>

            {/* Certification stamp */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, type: 'spring' }}
              className="absolute -bottom-6 -right-4 w-32 h-32 rounded-full border-[3px] border-[#FFD700] flex flex-col items-center justify-center bg-[#0a0a0a] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)]"
            >
              <span className="font-display text-2xl text-[#FFD700] leading-none">{t.stamp}</span>
              <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/60 mt-2">
                {t.stampSub}
              </span>
              <span className="absolute inset-2 rounded-full border border-[#FFD700]/30" />
            </motion.div>
          </motion.div>

          {/* RIGHT — CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FFD700]">
                /04
              </span>
              <span className="h-px w-12 bg-[#FFD700]/40" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                {t.eyebrow}
              </span>
            </div>

            <h2 className="h-display text-[clamp(48px,8vw,120px)] text-white leading-[0.86] mb-10">
              {t.title.split(' ')[0]}
              <br />
              <span className="text-[#FFD700]">{t.title.split(' ').slice(1).join(' ')}</span>
            </h2>

            {/* Creator card — clapperboard inspired */}
            <div className="mb-10 relative bg-gradient-to-br from-white/[0.04] to-white/[0.02] border border-white/10 rounded-xl overflow-hidden">
              {/* Stripe header */}
              <div className="stripes-gold h-2 w-full opacity-90" />
              <div className="p-6 md:p-8 grid grid-cols-1 sm:grid-cols-[1fr_auto] items-center gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mb-2">
                    {t.creatorLabel}
                  </p>
                  <p className="font-display text-4xl md:text-5xl text-[#FFD700]">{t.creator}</p>
                </div>
                <div className="font-mono text-right">
                  <div className="text-[9px] uppercase tracking-[0.3em] text-white/40">SCN</div>
                  <div className="text-3xl text-white">01</div>
                  <div className="text-[9px] uppercase tracking-[0.3em] text-white/40 mt-1">TK 01</div>
                </div>
              </div>
            </div>

            {/* Spec grid */}
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-2 border-t border-white/10 pt-6">
              <InfoRow label={t.production} value="Bee Team Ltd." />
              <InfoRow label={t.genre} value={t.genreValue} />
              <InfoRow label={t.country} value={t.countryValue} />
              <InfoRow label={t.language} value={t.languageValue} />
              <InfoRow label={t.picture} value={t.pictureValue} />
              <InfoRow label={t.sound} value="2.0 · 5.1" mono />
              <InfoRow label={t.duration} value={t.durationValue} accent />
              <InfoRow label={t.format} value="DCP · MP4 · MOV" mono />
              <InfoRow label={t.executive} value="HM Production & Multimedia" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function InfoRow({
  label,
  value,
  mono,
  accent,
}: {
  label: string
  value: string
  mono?: boolean
  accent?: boolean
}) {
  return (
    <div className="flex flex-col py-4 border-b border-white/10 group">
      <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40 mb-1.5">
        {label}
      </span>
      <span
        className={`text-base font-medium ${mono ? 'font-mono-d' : ''} ${accent ? 'text-[#FFD700]' : 'text-white'} group-hover:text-[#FFD700] transition-colors`}
      >
        {value}
      </span>
    </div>
  )
}
