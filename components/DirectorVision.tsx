'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function DirectorVision() {
  const { language } = useLanguage()

  const translations = {
    en: {
      directorTitle: "Director's Vision",
      directorSub: 'A Note from Monirul Haque · 2026',
      p1: `This film is not about student politics alone; it is about the marketplace of ambition in a third-world society. In a world where young people are asked to dream, they are also forced to gamble those dreams in exchange for influence and power. Our characters have no names because identity here is conditional, one is known by his position only. The horse becomes a satire of status. It symbolizes a shortcut, an absurd object that suddenly grants social legitimacy. Students laugh at it as a joke, then worship it as power.`,
      p2: `To preserve the raw pulse of this world, the film is shot in real locations using a guerrilla documentary style. The camera behaves like a silent witness: observing, not staging. There is no artificial lighting, no beautification, no makeup to shield the characters from truth. Their tired eyes, dusty shirts, and restless movements belong not to actors but to the reality that millions of students live every day.`,
      p3: `This approach allows the viewer to feel the humidity of student hostels, the chaos of campus rallies, the politics hidden in tea stalls. The film observes its characters without judgment. It doesn't ask who is innocent or guilty, it asks what ambition does to innocence in the first place. It explores how deeply young people crave recognition, how cheaply it can be traded, and how tragedy becomes just another stepping stone to power.`,
      endingLine: 'The film ends not with closure, but with a question:',
      finalQuestion: 'How much of ourselves are we willing to sacrifice to feel important?',
    },
    bn: {
      directorTitle: 'পরিচালকের দৃষ্টিভঙ্গি',
      directorSub: 'মনিরুল হকের একটি নোট · ২০২৬',
      p1: `এই চলচ্চিত্র শুধু ছাত্র রাজনীতি নিয়ে নয়; এটি তৃতীয় বিশ্বের সমাজে উচ্চাকাঙ্ক্ষার বাজার সম্পর্কে। এমন এক পৃথিবীতে যেখানে তরুণদের স্বপ্ন দেখতে বলা হয়, সেখানে সেই স্বপ্নগুলোই প্রভাব ও ক্ষমতার বিনিময়ে বাজি রাখতে বাধ্য করা হয়। আমাদের চরিত্রগুলোর কোনো নাম নেই, কারণ এখানে পরিচয় শর্তসাপেক্ষ—মানুষকে চেনা হয় তার অবস্থান দিয়ে। ঘোড়াটি হয়ে ওঠে মর্যাদার এক ব্যঙ্গচিত্র। এটি এক ধরনের শর্টকাটের প্রতীক—একটি অদ্ভুত বস্তু, যা হঠাৎ করেই সামাজিক বৈধতা এনে দেয়। ছাত্ররা প্রথমে এটিকে কৌতুক হিসেবে দেখে, তারপর ক্ষমতার প্রতীক হিসেবে পূজা করতে শুরু করে।`,
      p2: `এই জগতের কাঁচা স্পন্দন অক্ষুণ্ণ রাখতে চলচ্চিত্রটি বাস্তব লোকেশনে গেরিলা ডকুমেন্টারি শৈলীতে ধারণ করা হয়েছে। ক্যামেরা এখানে নীরব সাক্ষীর মতো আচরণ করে—মঞ্চায়ন নয়, পর্যবেক্ষণ করে। কোনো কৃত্রিম আলো নেই, নেই সৌন্দর্যায়নের আয়োজন, নেই চরিত্রদের সত্য থেকে আড়াল করার জন্য মেকআপ। তাদের ক্লান্ত চোখ, ধুলোমাখা শার্ট, অস্থির চলাফেরা—এসব অভিনয়ের নয়; বরং সেই বাস্তবতার প্রতিচ্ছবি, যেখানে প্রতিদিন লক্ষ লক্ষ ছাত্র বেঁচে থাকে।`,
      p3: `এই পদ্ধতি দর্শককে ছাত্রাবাসের আর্দ্রতা, ক্যাম্পাস মিছিলে বিশৃঙ্খলা, আর চায়ের দোকানের আড়ালে লুকিয়ে থাকা রাজনীতি অনুভব করতে দেয়। চলচ্চিত্রটি তার চরিত্রদের বিচার করে না। এটি জিজ্ঞেস করে না কে নির্দোষ, কে দোষী; বরং প্রশ্ন তোলে—উচ্চাকাঙ্ক্ষা প্রথমেই নিষ্পাপতাকে কীভাবে রূপান্তরিত করে। এটি অনুসন্ধান করে তরুণরা স্বীকৃতির জন্য কতটা গভীর আকাঙ্ক্ষা পোষণ করে, কত সহজে সেই আকাঙ্ক্ষা বিনিময় হয়ে যায়, এবং কীভাবে ট্র্যাজেডি কেবল ক্ষমতার পথে আরেকটি সোপান হয়ে ওঠে।`,
      endingLine: 'চলচ্চিত্রটি সমাপ্তি নয়, বরং একটি প্রশ্ন দিয়ে শেষ হয়:',
      finalQuestion: 'গুরুত্বপূর্ণ অনুভব করতে আমরা নিজেদের কতটুকু ত্যাগ করতে প্রস্তুত?',
    },
  } as const

  const t = translations[language]

  return (
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

        {/* Body paragraphs */}
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

        {/* Final question */}
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
  )
}
