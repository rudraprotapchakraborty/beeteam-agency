'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function FilmInfoSection() {
  const { language } = useLanguage()

  const translations = {
    en: {
      presents: "Bee Team Presents",
      title: "Film Information",
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
      executive: "Executive Production & Distribution",
      genreValue: "Political Drama (Satire)",
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
      executive: "নির্বাহী প্রযোজনা ও পরিবেশনা",
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
    <section className="relative bg-[#F6F6F4] text-[#111] py-20 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">

        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* LEFT — POSTER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative w-full h-[560px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/poster2.jpg"
                alt="Film Poster"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
          </motion.div>

          {/* RIGHT — CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <p className="uppercase tracking-[0.35em] text-xs text-gray-400 mb-4">
              {t.presents}
            </p>

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="mb-8"
>
  <h2 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight leading-[1.05] mb-4">
    {t.title.split(" ")[0]}{" "}
    <span className="text-[#FFD700] relative">
      {t.title.split(" ").slice(1).join(" ")}
      <motion.span
        className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#FFD700]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
        style={{ originX: 0 }}
      />
    </span>
  </h2>
</motion.div>


            {/* Creator Highlight Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">
                {t.creatorLabel}
              </p>
              <p className="text-xl font-medium text-black">
                {t.creator}
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-10">

              <InfoRow label={t.production} value="Bee Team Ltd." />
              <InfoRow label={t.genre} value={t.genreValue} />
              <InfoRow label={t.country} value={t.countryValue} />
              <InfoRow label={t.language} value={t.languageValue} />
              <InfoRow label={t.picture} value={t.pictureValue} />
              <InfoRow label={t.sound} value="2.0, 5.1" />
              <InfoRow label={t.duration} value={t.durationValue} />
              <InfoRow label={t.format} value="DCP, MP4, MOV" />
              <InfoRow label={t.executive} value="HM Production & Multimedia" />

            </div>

          </motion.div>

        </div>

        {/* Vertical Side Text */}
        <div className="hidden xl:block absolute right-[-50px] top-1/2 -translate-y-1/2 rotate-90 origin-right text-gray-300 tracking-[0.5em] text-xs select-none">
          {t.sideTitle}
        </div>

      </div>
    </section>
  )
}


/* Modern Info Row */
function InfoRow({ label, value }) {
  return (
    <div className="flex flex-col border-b border-gray-200 pb-4">
      <span className="text-xs uppercase tracking-wide text-gray-400 mb-1">
        {label}
      </span>
      <span className="font-medium text-black">
        {value}
      </span>
    </div>
  )
}
