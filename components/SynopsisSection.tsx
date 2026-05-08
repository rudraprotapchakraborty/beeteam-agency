'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import { Award } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function SynopsisSection() {
  const { language } = useLanguage()
  const sectionRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1])

  const translations = {
    en: {
      eyebrow: 'Synopsis · 05',
      presents: 'Bee Team Presents',
      title: 'Synopsis',
      sideTitle: 'THE UNIVERSITY OF CHANKHARPUL',
      blurb: `In a third-world university where student politics is a ruthless gamble, a nameless student rises to power through an unexpected symbol—a horse.`,
      blurb2: `What begins as absurdity quickly becomes influence, status, and political capital. But as ambition grows, friendship collapses.`,
      blurb3: `In a world built on selfishness, every rise demands a sacrifice.`,
      achievementTitle: 'Achievement Unlocked',
      achievement: `The University of Chankharpul set a record by becoming the first film in the history of Bangladeshi cinema to achieve both Best Film awards at the Dhaka International Film Festival 2026 and Amar Vasha Cholochitro Utshob 2026, competing alongside the best films ever produced in Bangladesh.`,
      ticker: 'BEST FILM · DIFF 2026 · BEST FILM · AMAR VASHA 2026 · BEST FILM · NATIONAL HONOR · BEE TEAM',
    },
    bn: {
      eyebrow: 'সিনোপসিস · ০৫',
      presents: 'বি টিম উপস্থাপন করছে',
      title: 'সিনোপসিস',
      sideTitle: 'দ্য ইউনিভার্সিটি অব চানখারপুল',
      blurb: `তৃতীয় বিশ্বের একটি বিশ্ববিদ্যালয়ে, যেখানে ছাত্ররাজনীতি এক নির্মম জুয়ার মতো, এক নামহীন শিক্ষার্থী অপ্রত্যাশিত এক প্রতীক—একটি ঘোড়া—এর মাধ্যমে ক্ষমতার শিখরে উঠতে শুরু করে।`,
      blurb2: `যা শুরু হয় অযৌক্তিকতা দিয়ে, তা দ্রুতই প্রভাব, মর্যাদা এবং রাজনৈতিক পুঁজিতে রূপ নেয়। কিন্তু উচ্চাকাঙ্ক্ষা বাড়ার সাথে সাথে বন্ধুত্ব ভেঙে পড়ে।`,
      blurb3: `এক স্বার্থপর পৃথিবীতে, প্রতিটি উত্থানের জন্যই লাগে একটি ত্যাগ।`,
      achievementTitle: 'বি টিমের অর্জন',
      achievement: `দ্য ইউনিভার্সিটি অব চানখারপুল বাংলাদেশি সিনেমার ইতিহাসে প্রথম চলচ্চিত্র হিসেবে একসাথে ধাকা ইন্টারন্যাশনাল ফিল্ম ফেস্টিভ্যাল ২০২৬ এবং আমার ভাষা চলচ্চিত্র উৎসব ২০২৬-এ সেরা চলচ্চিত্র পুরস্কার অর্জন করে একটি রেকর্ড স্থাপন করেছে।`,
      ticker: 'সেরা চলচ্চিত্র · ডিআইএফএফ ২০২৬ · সেরা চলচ্চিত্র · আমার ভাষা ২০২৬ · জাতীয় সম্মান · বি টিম',
    },
  } as const

  const t = translations[language]

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section
      ref={sectionRef}
      className="relative bg-black overflow-hidden grain"
    >
      {/* Top marquee ticker */}
      <div className="relative bg-[#FFD700] text-black overflow-hidden border-y border-black/20">
        <div className="marquee-track flex items-center py-3 whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="font-display text-2xl tracking-[0.18em] uppercase px-8 flex items-center gap-8"
            >
              <Award size={16} strokeWidth={2.5} />
              {t.ticker}
              <span className="text-black/50">★</span>
            </span>
          ))}
        </div>
      </div>

      {/* Cinematic bg */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0"
      >
        <img
          src="/synopsis.jpg"
          alt="Synopsis Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      </motion.div>

      <div className="relative z-10 py-24 md:py-32">
        {/* Letterbox top/bottom */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-black z-[1]" />
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-black z-[1]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative max-w-7xl mx-auto px-6 z-10"
        >
          {/* Header */}
          <motion.div
            variants={fadeUp}
            className="grid lg:grid-cols-12 gap-8 mb-12 items-end"
          >
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FFD700]">
                  /05
                </span>
                <span className="h-px w-12 bg-[#FFD700]/50" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
                  {t.presents}
                </span>
              </div>
              <h2 className="h-display text-[clamp(72px,12vw,200px)] text-[#FFD700] leading-[0.86]">
                {t.title}
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                The University of
              </div>
              <div className="font-display text-3xl text-white tracking-wide mt-2">
                Chankharpul
              </div>
            </div>
          </motion.div>

          {/* Body — quote-like layout */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <motion.div
              variants={fadeUp}
              className="lg:col-span-7 space-y-8"
            >
              <p className="font-serif-d text-2xl md:text-3xl text-white leading-[1.3]">
                <span className="text-[#FFD700] font-bold mr-2">"</span>
                {t.blurb}
              </p>
              <p className="text-lg text-white/70 leading-relaxed font-light">
                {t.blurb2}
              </p>
              <p className="font-serif-d italic text-2xl md:text-3xl text-[#FFD700] leading-snug border-l-2 border-[#FFD700] pl-6">
                {t.blurb3}
              </p>
            </motion.div>

            {/* Achievement card */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-5 relative"
            >
              <div className="relative bg-[#0a0a0a] border border-[#FFD700]/30 rounded-2xl p-8 backdrop-blur-sm overflow-hidden">
                {/* Diagonal stripes accent */}
                <div className="absolute top-0 right-0 w-32 h-2 stripes-gold opacity-60" />

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center">
                    <Award size={20} className="text-black" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40">
                      Milestone
                    </div>
                    <div className="font-display text-2xl text-[#FFD700]">
                      {t.achievementTitle}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-white/75 leading-relaxed">
                  {t.achievement}
                </p>

                {/* Bottom stat row */}
                <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/10">
                  <div>
                    <div className="font-display text-3xl text-[#FFD700]">02×</div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/40 mt-1">
                      Best Film Awards
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-3xl text-[#FFD700]">01ˢᵗ</div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/40 mt-1">
                      In BD History
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Side rotating title */}
        <div className="hidden xl:block absolute right-6 top-1/2 -translate-y-1/2 rotate-90 origin-right font-mono tracking-[0.5em] text-xs text-[#FFD700]/60 select-none uppercase z-10">
          {t.sideTitle}
        </div>
      </div>
    </section>
  )
}
