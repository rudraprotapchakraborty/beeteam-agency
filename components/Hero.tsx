'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ExternalLink, Film, Sparkles } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { language } = useLanguage()
  const containerRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const heroBgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroBgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18])
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-40%'])

  const translations = {
    en: {
      title1: 'BEETEAM',
      title2: 'STUDIOS',
      subtitle: 'Engineering cinematic authority for high-performance global brands.',
      contact: 'Begin a film',
      viewWork: 'View Reel',
      presents: 'Bee Team Presents',
      directorTitle: "Director's Vision",
      directorSub: 'A Note from Monirul Haque · 2026',
      p1: `This film is not about student politics alone; it is about the marketplace of ambition in a third-world society. In a world where young people are asked to dream, they are also forced to gamble those dreams in exchange for influence and power. Our characters have no names because identity here is conditional, one is known by his position only. The horse becomes a satire of status. It symbolizes a shortcut, an absurd object that suddenly grants social legitimacy. Students laugh at it as a joke, then worship it as power.`,
      p2: `To preserve the raw pulse of this world, the film is shot in real locations using a guerrilla documentary style. The camera behaves like a silent witness: observing, not staging. There is no artificial lighting, no beautification, no makeup to shield the characters from truth. Their tired eyes, dusty shirts, and restless movements belong not to actors but to the reality that millions of students live every day.`,
      p3: `This approach allows the viewer to feel the humidity of student hostels, the chaos of campus rallies, the politics hidden in tea stalls. The film observes its characters without judgment. It doesn't ask who is innocent or guilty, it asks what ambition does to innocence in the first place. It explores how deeply young people crave recognition, how cheaply it can be traded, and how tragedy becomes just another stepping stone to power.`,
      endingLine: 'The film ends not with closure, but with a question:',
      finalQuestion: 'How much of ourselves are we willing to sacrifice to feel important?',
      scrollHint: 'Scroll to enter',
      featureBadge: 'Feature Film · 2026',
      runtime: 'Runtime · 134 min',
      shot: 'Shot on RED · 4K UHD',
    },
    bn: {
      title1: 'বিটিম',
      title2: 'স্টুডিওস',
      subtitle: 'উচ্চ-ক্ষমতাসম্পন্ন বৈশ্বিক ব্র্যান্ডের জন্য সিনেমাটিক কর্তৃত্ব নির্মাণ।',
      contact: 'একটি ফিল্ম শুরু করুন',
      viewWork: 'রিল দেখুন',
      presents: 'বি টিম উপস্থাপন করছে',
      directorTitle: 'পরিচালকের দৃষ্টিভঙ্গি',
      directorSub: 'মনিরুল হকের একটি নোট · ২০২৬',
      p1: `এই চলচ্চিত্র শুধু ছাত্র রাজনীতি নিয়ে নয়; এটি তৃতীয় বিশ্বের সমাজে উচ্চাকাঙ্ক্ষার বাজার সম্পর্কে। এমন এক পৃথিবীতে যেখানে তরুণদের স্বপ্ন দেখতে বলা হয়, সেখানে সেই স্বপ্নগুলোই প্রভাব ও ক্ষমতার বিনিময়ে বাজি রাখতে বাধ্য করা হয়। আমাদের চরিত্রগুলোর কোনো নাম নেই, কারণ এখানে পরিচয় শর্তসাপেক্ষ—মানুষকে চেনা হয় তার অবস্থান দিয়ে। ঘোড়াটি হয়ে ওঠে মর্যাদার এক ব্যঙ্গচিত্র। এটি এক ধরনের শর্টকাটের প্রতীক—একটি অদ্ভুত বস্তু, যা হঠাৎ করেই সামাজিক বৈধতা এনে দেয়। ছাত্ররা প্রথমে এটিকে কৌতুক হিসেবে দেখে, তারপর ক্ষমতার প্রতীক হিসেবে পূজা করতে শুরু করে।`,
      p2: `এই জগতের কাঁচা স্পন্দন অক্ষুণ্ণ রাখতে চলচ্চিত্রটি বাস্তব লোকেশনে গেরিলা ডকুমেন্টারি শৈলীতে ধারণ করা হয়েছে। ক্যামেরা এখানে নীরব সাক্ষীর মতো আচরণ করে—মঞ্চায়ন নয়, পর্যবেক্ষণ করে। কোনো কৃত্রিম আলো নেই, নেই সৌন্দর্যায়নের আয়োজন, নেই চরিত্রদের সত্য থেকে আড়াল করার জন্য মেকআপ। তাদের ক্লান্ত চোখ, ধুলোমাখা শার্ট, অস্থির চলাফেরা—এসব অভিনয়ের নয়; বরং সেই বাস্তবতার প্রতিচ্ছবি, যেখানে প্রতিদিন লক্ষ লক্ষ ছাত্র বেঁচে থাকে।`,
      p3: `এই পদ্ধতি দর্শককে ছাত্রাবাসের আর্দ্রতা, ক্যাম্পাস মিছিলে বিশৃঙ্খলা, আর চায়ের দোকানের আড়ালে লুকিয়ে থাকা রাজনীতি অনুভব করতে দেয়। চলচ্চিত্রটি তার চরিত্রদের বিচার করে না। এটি জিজ্ঞেস করে না কে নির্দোষ, কে দোষী; বরং প্রশ্ন তোলে—উচ্চাকাঙ্ক্ষা প্রথমেই নিষ্পাপতাকে কীভাবে রূপান্তরিত করে। এটি অনুসন্ধান করে তরুণরা স্বীকৃতির জন্য কতটা গভীর আকাঙ্ক্ষা পোষণ করে, কত সহজে সেই আকাঙ্ক্ষা বিনিময় হয়ে যায়, এবং কীভাবে ট্র্যাজেডি কেবল ক্ষমতার পথে আরেকটি সোপান হয়ে ওঠে।`,
      endingLine: 'চলচ্চিত্রটি সমাপ্তি নয়, বরং একটি প্রশ্ন দিয়ে শেষ হয়:',
      finalQuestion: 'গুরুত্বপূর্ণ অনুভব করতে আমরা নিজেদের কতটুকু ত্যাগ করতে প্রস্তুত?',
      scrollHint: 'প্রবেশ করতে স্ক্রল করুন',
      featureBadge: 'ফিচার ফিল্ম · ২০২৬',
      runtime: 'সময়কাল · ১৪৪ মিনিট',
      shot: 'RED-এ ধারণকৃত · 4K UHD',
    },
  } as const

  const t = translations[language]

  return (
    <section
      ref={containerRef}
      className="relative font-sans"
    >
      {/* === REEL: full-bleed hero === */}
      <div className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-[#0a0a0a] grain">
        {/* Backdrop */}
        <motion.div
          style={{ y: heroBgY, scale: heroBgScale }}
          className="absolute inset-0"
        >
          <img
            src="/hero.jpg"
            alt="Beeteam Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/15" />
        </motion.div>

        {/* Letterbox bars */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-[#0a0a0a] z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#0a0a0a] z-10" />

        {/* Frame markers */}
        <div className="absolute top-12 left-0 right-0 px-8 lg:px-12 mt-4 flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.3em] text-[#FFD700]/70 z-20">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#FFD700] blink" />
            REEL 01 · {t.featureBadge}
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>{t.runtime}</span>
            <span className="opacity-40">·</span>
            <span>{t.shot}</span>
          </div>
        </div>

        {/* Vertical side timecode */}
        <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 font-mono text-[10px] uppercase tracking-[0.4em] text-white/50 z-20">
          T—00:00:08:24 · A1 · 24fps
        </div>
        <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] font-mono text-[10px] uppercase tracking-[0.4em] text-white/50 z-20">
          DIRECTOR · MONIRUL HAQUE · 2026
        </div>

        {/* Center content */}
        <motion.div
          style={{ y: titleY }}
          className="relative z-20 h-full flex flex-col items-center justify-center text-white px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm"
          >
            <Sparkles size={12} className="text-[#FFD700]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/80">
              {t.presents}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-display text-[clamp(64px,14vw,210px)] text-white text-center"
          >
            <span className="block">{t.title1}</span>
            <span className="block text-[#FFD700] -mt-[0.12em]">{t.title2}</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
            style={{ originX: 0.5 }}
            className="mt-2 h-px w-32 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-base md:text-lg text-white/75 max-w-2xl text-center mt-6 font-light tracking-wide"
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-7 py-3.5 bg-[#FFD700] text-black text-[11px] font-extrabold uppercase tracking-[0.22em] rounded-full flex items-center gap-2.5 shadow-[0_12px_40px_-12px_rgba(255,215,0,0.6)] sheen overflow-hidden"
            >
              <span className="relative z-10">{t.contact}</span>
              <ArrowDown size={14} strokeWidth={3} className="relative z-10 group-hover:translate-y-0.5 transition-transform" />
            </motion.a>

            <motion.a
              href="/works"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              className="group flex items-center gap-2.5 text-white text-[11px] font-extrabold uppercase tracking-[0.22em] px-7 py-3.5 rounded-full border border-white/20 hover:border-[#FFD700] hover:text-[#FFD700] transition-colors backdrop-blur-sm"
            >
              <Film size={14} />
              {t.viewWork}
              <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll hint bottom */}
        <div className="absolute bottom-12 left-0 right-0 flex flex-col items-center gap-3 z-20 pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/50"
          >
            {t.scrollHint}
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-[#FFD700] to-transparent"
          />
        </div>

        {/* Corner brackets */}
        <span className="absolute top-16 left-6 w-8 h-8 border-t border-l border-[#FFD700]/40 z-20" />
        <span className="absolute top-16 right-6 w-8 h-8 border-t border-r border-[#FFD700]/40 z-20" />
        <span className="absolute bottom-16 left-6 w-8 h-8 border-b border-l border-[#FFD700]/40 z-20" />
        <span className="absolute bottom-16 right-6 w-8 h-8 border-b border-r border-[#FFD700]/40 z-20" />
      </div>

      {/* === DIRECTOR'S VISION === */}
      <div className="relative bg-[#0a0a0a] text-white pt-14 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-50">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#FFD700]/10 rounded-full blur-[200px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-12 gap-8 mb-10 items-end"
          >
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FFD700]">
                  /02
                </span>
                <span className="h-px w-12 bg-[#FFD700]/40" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                  {t.directorSub}
                </span>
              </div>
              <h2 className="h-display text-[clamp(48px,8vw,120px)] leading-[0.86] text-white">
                {t.directorTitle.split(' ')[0]}
                <br />
                <span className="text-[#FFD700]">{t.directorTitle.split(' ').slice(1).join(' ')}</span>
              </h2>
            </div>

            <div className="lg:col-span-5 lg:pl-8 lg:border-l border-white/10">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mb-3">
                Note from the Director
              </div>
              <p className="font-serif-d italic text-xl md:text-2xl text-[#FFD700] leading-snug">
                "Identity is conditional. Power is performance. The horse, then, is everything."
              </p>
              <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                — MONIRUL HAQUE
              </div>
            </div>
          </motion.div>

          {/* Body paragraphs - alternating columns */}
          <div className="grid lg:grid-cols-12 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-4"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FFD700] mb-3">
                ¶ 01 — Ambition
              </div>
              <p className="text-base text-white/85 leading-relaxed font-light">
                {t.p1}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-4"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FFD700] mb-3">
                ¶ 02 — Method
              </div>
              <p className="text-base text-white/85 leading-relaxed font-light">
                {t.p2}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-4"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FFD700] mb-3">
                ¶ 03 — Truth
              </div>
              <p className="text-base text-white/85 leading-relaxed font-light">
                {t.p3}
              </p>
            </motion.div>
          </div>

          {/* Final question — pull quote */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mt-14 pt-10 border-t border-white/10 grid lg:grid-cols-12 gap-8"
          >
            <div className="lg:col-span-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
              Closing
              <br />
              Frame
            </div>
            <div className="lg:col-span-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#FFD700] mb-6">
                ⟶ {t.endingLine}
              </p>
              <p className="font-serif-d italic text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight">
                "{t.finalQuestion}"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
