'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function FilmInfoSection() {
  const { language } = useLanguage()

  const translations = {
    en: {
      presents: "Bee Team Presents",
      title: "Film Info",
      creatorLabel: "Producer, Writer, Director, Editor, Cinematographer:",
      creator: "M Haque",
      production: "Production Company",
      genre: "Genre",
      country: "Country",
      language: "Language",
      picture: "Picture",
      sound: "Sound",
      duration: "Duration",
      format: "Available Format",
      executive: "Executive Production and Distribution Company",
      genreValue: "Political Drama (satire)",
      countryValue: "Bangladesh",
      languageValue: "Bengali",
      pictureValue: "Colour",
      durationValue: "144 min",
      sideTitle: "THE UNIVERSITY OF CHANKHARPUL"
    },
    bn: {
      presents: "বি টিম উপস্থাপিত",
      title: "ফিল্ম তথ্য",
      creatorLabel: "প্রযোজক, চিত্রনাট্যকার, পরিচালক, সম্পাদক, চিত্রগ্রাহক:",
      creator: "এম হক",
      production: "প্রযোজনা প্রতিষ্ঠান",
      genre: "ধরন",
      country: "দেশ",
      language: "ভাষা",
      picture: "চিত্র",
      sound: "শব্দ",
      duration: "সময়কাল",
      format: "প্রাপ্য ফরম্যাট",
      executive: "নির্বাহী প্রযোজনা ও পরিবেশনা প্রতিষ্ঠান",
      genreValue: "রাজনৈতিক নাটক (ব্যঙ্গ)",
      countryValue: "বাংলাদেশ",
      languageValue: "বাংলা",
      pictureValue: "রঙিন",
      durationValue: "১৪৪ মিনিট",
      sideTitle: "দ্য ইউনিভার্সিটি অব চানখারপুল"
    }
  }

  const t = translations[language]

  return (
    <section className="relative bg-[#111111] text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">

        <div className="grid md:grid-cols-2 gap-16 items-stretch">

          {/* LEFT — POSTER */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full h-full min-h-[650px] rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/poster2.jpg"
              alt="Film Poster"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* RIGHT — CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <p className="text-sm text-white/50 mb-6 tracking-wide">
              {t.presents}
            </p>

            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              {t.title}
            </h2>

            <div className="space-y-4 text-lg leading-relaxed">

              <p className="text-[#FFD700] font-medium">
                {t.creatorLabel}
              </p>
              <p className="text-white mb-6">{t.creator}</p>

              <p>
                <span className="text-[#FFD700]">{t.production}:</span> Bee Team Ltd.
              </p>

              <p>
                <span className="text-[#FFD700]">{t.genre}:</span> {t.genreValue}
              </p>

              <p>
                <span className="text-[#FFD700]">{t.country}:</span> {t.countryValue}
              </p>

              <p>
                <span className="text-[#FFD700]">{t.language}:</span> {t.languageValue}
              </p>

              <p>
                <span className="text-[#FFD700]">{t.picture}:</span> {t.pictureValue}
              </p>

              <p>
                <span className="text-[#FFD700]">{t.sound}:</span> 2.0, 5.1
              </p>

              <p>
                <span className="text-[#FFD700]">{t.duration}:</span> {t.durationValue}
              </p>

              <p>
                <span className="text-[#FFD700]">{t.format}:</span> DCP, mp4, MOV
              </p>

              <p>
                <span className="text-[#FFD700]">{t.executive}:</span> HM Production & Multimedia
              </p>

            </div>
          </motion.div>

        </div>

        {/* Vertical Side Text */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 rotate-90 origin-right text-white/20 tracking-[0.4em] text-xs">
          {t.sideTitle}
        </div>

      </div>
    </section>
  )
}
