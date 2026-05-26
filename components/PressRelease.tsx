'use client'

import { motion } from 'framer-motion'
import { Download, FileText, Quote, Users } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function PressRelease() {
  const { language } = useLanguage()

  const translations = {
    en: {
      eyebrow: 'Press Release · 06',
      kicker: 'For Immediate Release',
      title1: 'Official',
      title2: 'Press Release',
      tagline: 'Trailer Launch · Bee Team Studios',
      dateline: 'Dhaka, Bangladesh',
      headline:
        'Bangladesh’s first student political satire film “The University of Chankharpul” unveils its official trailer.',
      p1: 'The official trailer of the highly anticipated film "The University of Chankharpul" — a sharp, satirical look at university-based student politics, hall culture, the "big brother" hierarchy, and the abuse of power in Bangladesh — has been released. Its theatrical run has already sparked wide conversation among young audiences and cinephiles.',
      quoteLead: 'Executive Producer · Hafizuddin Munna',
      quote:
        'This is the country’s first full-length student political satire film, where the unspoken harsh realities of university life, political allegiance, gestroom culture, and the politics of power have been presented with courage.',
      p2: 'The film centers on a few second-year university friends entangled in campus politics, power struggles, and the collision of personal dreams. Blending humour, satire and stark realism, the story has already become a focal point of interest for the younger generation.',
      p3: 'Directed by Akash Haque (Monirul Haque Akash), the 134-minute feature has won praise at multiple national and international festivals — including the FIPRESCI Award for Best Full-Length Feature Film in the Bangladesh Panorama section of the 24th Dhaka International Film Festival (DIFF), plus the Hiralal Sen Award and Best Screenplay Award at Dhaka University Film Society’s "Amar Bhashar Cholochitro 1432".',
      p4: 'The world premiere was held at the National Museum during DIFF, where audience turnout was so large that reports describe viewers watching from the aisles. The film’s theme song "Sohomot Bhai" has gone viral across social media as a symbolic anthem of campus culture.',
      castLabel: 'Cast',
      cast: 'Debdyuti Aich · Roki Khan · Babi Biswas · Abu Sayeed · Choyon · Jibon · Sohan · Ifad — and a fresh ensemble of new faces. In a special role: writer and poet Anwaruzzaman Azad.',
      productionLabel: 'Production',
      production: 'Bee Team Limited',
      distLabel: 'Distribution',
      dist: 'HM Production & Multimedia',
      directorQuoteLead: 'Director · Akash Haque',
      directorQuote:
        'This film is not just entertainment — it is a brave cinematic attempt to rethink the realities of Bangladesh’s university politics and youth society. It also reflects the mismanagement and inconsistencies of our higher education.',
      release: 'Releasing soon in theatres nationwide. The filmmakers warmly invite audiences to experience it on the big screen.',
      download: 'Download Full Release (PDF)',
      pages: '03 Pages · PDF',
      doc: 'DOC-PR-001 · 2026',
      facts: 'Press Facts',
      runtime: 'Runtime',
      runtimeValue: '134 min',
      festivals: 'Festival Honours',
      festivalsValue: '03+',
      premiere: 'World Premiere',
      premiereValue: 'DIFF · 2026',
    },
    bn: {
      eyebrow: 'প্রেস রিলিজ · ০৬',
      kicker: 'অবিলম্বে প্রকাশের জন্য',
      title1: 'অফিসিয়াল',
      title2: 'প্রেস রিলিজ',
      tagline: 'ট্রেলার প্রকাশ · বি টিম স্টুডিও',
      dateline: 'ঢাকা, বাংলাদেশ',
      headline:
        'বাংলাদেশের প্রথম স্টুডেন্ট পলিটিক্যাল স্যাটায়ার চলচ্চিত্র "দ্য ইউনিভার্সিটি অফ চানখাঁরপুল"-এর অফিসিয়াল ট্রেলার প্রকাশ।',
      p1: 'বাংলাদেশের বিশ্ববিদ্যালয়ভিত্তিক ছাত্ররাজনীতি, হল কালচার, বড় ভাই সংস্কৃতি এবং ক্ষমতার অপব্যবহারের বাস্তবতাকে ব্যঙ্গাত্মক অথচ তীক্ষ্ণ ভাষায় তুলে ধরা বহুল প্রতীক্ষিত চলচ্চিত্র "দ্য ইউনিভার্সিটি অফ চানখাঁরপুল"-এর অফিসিয়াল ট্রেলার প্রকাশিত হয়েছে। একইসাথে সম্প্রতি চলচ্চিত্রটি প্রেক্ষাগৃহে মুক্তির আভাস দেয়ার মাধ্যমে তরুণ দর্শক ও চলচ্চিত্রপ্রেমীদের মাঝে ব্যাপক আলোচনার জন্ম দিয়েছে।',
      quoteLead: 'নির্বাহী প্রযোজক · হাফিজউদ্দিন মুন্না',
      quote:
        'এটি দেশের প্রথম পূর্ণদৈর্ঘ্য স্টুডেন্ট পলিটিক্যাল স্যাটায়ার চলচ্চিত্র, যেখানে বিশ্ববিদ্যালয় জীবনের অপ্রকাশিত রূঢ় বাস্তবতা, রাজনৈতিক আনুগত্য, গেস্টরুম সংস্কৃতি এবং ক্ষমতার রাজনীতিকে সাহসীভাবে উপস্থাপন করা হয়েছে।',
      p2: 'চলচ্চিত্রটি মূলত বিশ্ববিদ্যালয়ের দ্বিতীয় বর্ষের কয়েকজন বন্ধুর গল্পকে কেন্দ্র করে নির্মিত, যারা ক্যাম্পাস রাজনীতি, ক্ষমতার দ্বন্দ্ব এবং ব্যক্তিগত স্বপ্নের সংঘর্ষে জড়িয়ে পড়ে। হাস্যরস, ব্যঙ্গ এবং বাস্তবতার সংমিশ্রণে নির্মিত এই গল্প তরুণ প্রজন্মের কাছে ইতোমধ্যেই বিশেষ আগ্রহের কেন্দ্রবিন্দুতে পরিণত হয়েছে।',
      p3: 'পরিচালক আকাশ হক (Monirul Haque Akash) নির্মিত ১৩৪ মিনিট দৈর্ঘ্যের এই সিনেমাটি ইতোমধ্যেই বিভিন্ন আন্তর্জাতিক ও জাতীয় চলচ্চিত্র উৎসবে প্রশংসা কুড়িয়েছে। ২৪তম ঢাকা আন্তর্জাতিক চলচ্চিত্র উৎসব (DIFF)-এর বাংলাদেশ প্যানোরামা বিভাগে চলচ্চিত্রটি FIPRESCI Award for Best Full-Length Feature Film অর্জন করে। এছাড়াও ঢাকা বিশ্ববিদ্যালয় চলচ্চিত্র সংসদ আয়োজিত "আমার ভাষার চলচ্চিত্র ১৪৩২" উৎসবে সিনেমাটি হীরালাল সেন পুরস্কার এবং সেরা চিত্রনাট্য পুরস্কার লাভ করে।',
      p4: 'চলচ্চিত্রটির ওয়ার্ল্ড প্রিমিয়ার অনুষ্ঠিত হয় ঢাকা আন্তর্জাতিক চলচ্চিত্র উৎসবে জাতীয় জাদুঘরে, যেখানে দর্শকদের ব্যাপক উপস্থিতি ও ইতিবাচক প্রতিক্রিয়া বিশেষভাবে আলোচিত হয়। গণমাধ্যমের প্রতিবেদন অনুযায়ী, প্রদর্শনীতে দর্শকদের অতিরিক্ত আগ্রহের কারণে অনেককে মেঝেতে বসেও সিনেমাটি উপভোগ করতে দেখা গেছে। সিনেমাটির থিম সং "সহমত ভাই" ইতোমধ্যেই সামাজিক যোগাযোগমাধ্যমে তরুণদের মধ্যে ব্যাপক জনপ্রিয়তা অর্জন করেছে।',
      castLabel: 'অভিনয়ে',
      cast: 'দেবদ্যুতি আইচ · রকি খান · ববি বিশ্বাস · আবু সায়ীদ · চয়ন · জীবন · সোহান · ইফাদ — এবং আরও একঝাঁক নতুন মুখ। বিশেষ একটি চরিত্রে রয়েছেন সাহিত্যিক ও কবি আনোয়ারুজ্জামান আজাদ।',
      productionLabel: 'নির্মাণে',
      production: 'বি টিম লিমিটেড',
      distLabel: 'পরিবেশনায়',
      dist: 'এইচ এম প্রোডাকশন এন্ড মাল্টিমিডিয়া',
      directorQuoteLead: 'পরিচালক · আকাশ হক',
      directorQuote:
        'এই সিনেমা শুধুমাত্র বিনোদন নয়; বরং বাংলাদেশের বিশ্ববিদ্যালয় রাজনীতি ও তরুণ সমাজের বাস্তবতাকে নতুনভাবে ভাবার একটি সাহসী সিনেম্যাটিক প্রচেষ্টা। সিনেমাটিতে একই সাথে দেশের উচ্চতর শিক্ষার অব্যবস্থাপনা ও অসঙ্গতিগুলোর প্রতিচ্ছবি ফুটে উঠেছে।',
      release: 'শিগগিরই সিনেমাটি সারা দেশের প্রেক্ষাগৃহে মুক্তি পাবে। দর্শকদেরকে সিনেমাটি হলে গিয়ে দেখার জন্য সংশ্লিষ্ট নির্মাতারা আমন্ত্রণ জানান।',
      download: 'সম্পূর্ণ প্রেস রিলিজ ডাউনলোড করুন (PDF)',
      pages: '০৩ পৃষ্ঠা · PDF',
      doc: 'ডক-পিআর-০০১ · ২০২৬',
      facts: 'প্রেস তথ্য',
      runtime: 'সময়কাল',
      runtimeValue: '১৩৪ মিনিট',
      festivals: 'উৎসব সম্মাননা',
      festivalsValue: '০৩+',
      premiere: 'ওয়ার্ল্ড প্রিমিয়ার',
      premiereValue: 'ডিআইএফএফ · ২০২৬',
    },
  } as const

  const t = translations[language]

  return (
    <section
      id="press-release"
      className="relative paper-tex py-24 md:py-32 overflow-hidden"
    >
      {/* Background flares */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-[5%] w-[480px] h-[480px] bg-[#FFD700]/10 blur-[180px]" />
        <div className="absolute bottom-0 left-[10%] w-[360px] h-[360px] bg-amber-100/30 blur-[140px]" />
      </div>

      {/* Side vertical label */}
      <div className="hidden xl:block absolute left-6 top-32 [writing-mode:vertical-rl] rotate-180 font-mono text-[10px] uppercase tracking-[0.4em] text-black/30">
        DOC · PR · 06 · OFFICIAL · BEE TEAM STUDIOS
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-12 gap-8 mb-16 items-end"
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">
                /06
              </span>
              <span className="h-px w-12 bg-[#d4af37]/40" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/50">
                {t.eyebrow}
              </span>
              <span className="ml-2 inline-flex items-center gap-1 bg-[#0a0a0a] text-[#FFD700] font-mono text-[9px] uppercase tracking-[0.25em] px-2 py-1 rounded">
                <span className="dot-pulse" /> {t.kicker}
              </span>
            </div>
            <h2 className="h-display text-[clamp(48px,9vw,140px)] text-black leading-[0.86]">
              {t.title1}
              <br />
              <span className="text-[#d4af37]">{t.title2}</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 lg:pl-8 lg:border-l border-black/10">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/40 mb-3">
              {t.tagline}
            </div>
            <p className="font-serif-d italic text-lg text-black/75 leading-snug">
              {t.headline}
            </p>
          </div>
        </motion.div>

        {/* DOCUMENT */}
        <div className="grid lg:grid-cols-[1.7fr_1fr] gap-10">
          {/* MAIN — document body */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative bg-[#faf8f3] border border-black/10 rounded-2xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.18)] overflow-hidden"
          >
            {/* Stripe accent */}
            <div className="stripes-gold h-2 w-full opacity-90" />

            {/* Letterhead */}
            <div className="px-8 md:px-10 pt-8 pb-6 border-b border-black/10 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <FileText size={16} className="text-[#d4af37]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/55">
                  {t.dateline}
                </span>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-black/40">
                {t.doc}
              </span>
            </div>

            {/* Body */}
            <div className="px-8 md:px-10 py-8 md:py-10 space-y-6 text-[15px] leading-[1.75] text-black/80 font-serif-d">
              <p>{t.p1}</p>

              {/* Pull-quote — executive producer */}
              <figure className="relative my-8 pl-6 border-l-2 border-[#FFD700]">
                <Quote
                  size={18}
                  className="absolute -left-3 -top-1 bg-[#faf8f3] text-[#d4af37]"
                />
                <blockquote className="font-serif-d italic text-lg md:text-xl text-black leading-snug">
                  “{t.quote}”
                </blockquote>
                <figcaption className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/50 mt-3">
                  — {t.quoteLead}
                </figcaption>
              </figure>

              <p>{t.p2}</p>
              <p>{t.p3}</p>
              <p>{t.p4}</p>

              {/* Cast strip */}
              <div className="mt-8 rounded-xl border border-black/10 bg-white/60 p-5">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-black/55 mb-3">
                  <Users size={12} className="text-[#d4af37]" />
                  {t.castLabel}
                </div>
                <p className="text-[14px] leading-relaxed text-black/85">{t.cast}</p>
              </div>

              {/* Director quote */}
              <figure className="relative mt-8 pl-6 border-l-2 border-black/20">
                <blockquote className="font-serif-d italic text-base md:text-lg text-black/85 leading-snug">
                  “{t.directorQuote}”
                </blockquote>
                <figcaption className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/50 mt-3">
                  — {t.directorQuoteLead}
                </figcaption>
              </figure>

              <p className="text-black font-medium">{t.release}</p>
            </div>

            {/* Bottom credits strip */}
            <div className="grid grid-cols-2 gap-px bg-black/10 border-t border-black/10">
              <div className="bg-[#faf8f3] p-5 flex flex-col gap-1">
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-black/40">
                  {t.productionLabel}
                </span>
                <span className="text-sm font-semibold text-black">{t.production}</span>
              </div>
              <div className="bg-[#faf8f3] p-5 flex flex-col gap-1">
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-black/40">
                  {t.distLabel}
                </span>
                <span className="text-sm font-semibold text-black">{t.dist}</span>
              </div>
            </div>
          </motion.article>

          {/* ASIDE — download + facts */}
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Download card */}
            <a
              href="/press-release.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block bg-[#0a0a0a] text-white rounded-2xl p-7 overflow-hidden border border-[#FFD700]/30 sheen"
            >
              {/* Frame brackets */}
              <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#FFD700]" />
              <span className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#FFD700]" />
              <span className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#FFD700]" />
              <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#FFD700]" />

              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/55 mb-5">
                <FileText size={12} className="text-[#FFD700]" />
                {t.pages}
              </div>
              <div className="font-display text-2xl md:text-3xl text-[#FFD700] leading-tight mb-6">
                {t.download}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/55">
                  {t.doc}
                </span>
                <span className="inline-flex items-center gap-2 bg-[#FFD700] text-black px-4 py-2 rounded-full font-mono text-[10px] font-extrabold uppercase tracking-[0.2em] group-hover:gap-3 transition-all">
                  PDF
                  <Download size={12} strokeWidth={3} className="group-hover:translate-y-0.5 transition-transform" />
                </span>
              </div>
            </a>

            {/* Facts grid */}
            <div className="rounded-2xl border border-black/10 bg-white/60 overflow-hidden">
              <div className="px-5 py-4 border-b border-black/10 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/55">
                  {t.facts}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#d97706]">
                  03
                </span>
              </div>
              <div className="divide-y divide-black/10">
                <FactRow label={t.runtime} value={t.runtimeValue} />
                <FactRow label={t.festivals} value={t.festivalsValue} accent />
                <FactRow label={t.premiere} value={t.premiereValue} mono />
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}

function FactRow({
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
    <div className="px-5 py-4 flex items-center justify-between gap-4">
      <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-black/45">
        {label}
      </span>
      <span
        className={`text-base font-semibold ${mono ? 'font-mono-d' : ''} ${accent ? 'text-[#d97706]' : 'text-black'}`}
      >
        {value}
      </span>
    </div>
  )
}
