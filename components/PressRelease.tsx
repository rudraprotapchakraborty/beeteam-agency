'use client'

import { motion } from 'framer-motion'
import { Download, FileText, Quote, Sparkles, Users } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function PressRelease() {
  const { language } = useLanguage()

  const translations = {
    en: {
      eyebrow: 'Press Release · May 2026',
      kicker: 'Just In',
      ribbon: 'Featured',
      title1: 'Press Release',
      title2: 'May 2026',
      dateline: 'Dhaka, Bangladesh',
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
      doc: 'DOC-PR · MAY 2026',
      ticker: 'JUST IN · OFFICIAL PRESS RELEASE · TRAILER LIVE · THE UNIVERSITY OF CHANKHARPUL · FIPRESCI WINNER · DIFF 2026',
    },
    bn: {
      eyebrow: 'প্রেস রিলিজ · মে ২০২৬',
      kicker: 'এইমাত্র',
      ribbon: 'বিশেষ',
      title1: 'প্রেস রিলিজ',
      title2: 'মে ২০২৬',
      dateline: 'ঢাকা, বাংলাদেশ',
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
      doc: 'ডক-পিআর · মে ২০২৬',
      ticker: 'এইমাত্র · অফিসিয়াল প্রেস রিলিজ · ট্রেলার লাইভ · দ্য ইউনিভার্সিটি অফ চানখাঁরপুল · FIPRESCI বিজয়ী · DIFF ২০২৬',
    },
  } as const

  const t = translations[language]

  return (
    <section
      id="press-release"
      className="relative bg-[#0a0a0a] text-white py-0 overflow-hidden grain"
    >
      {/* Breaking marquee — top */}
      <div className="relative bg-[#FFD700] text-black overflow-hidden border-y-2 border-black/30">
        <div className="marquee-track flex items-center py-3 whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="font-display text-xl md:text-2xl tracking-[0.18em] uppercase px-8 flex items-center gap-8"
            >
              <Sparkles size={14} strokeWidth={2.5} />
              {t.ticker}
              <span className="text-black/50">★</span>
            </span>
          ))}
        </div>
      </div>

      {/* Background flares */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-[5%] w-[520px] h-[520px] bg-[#FFD700]/12 blur-[180px]" />
        <div className="absolute bottom-0 left-[8%] w-[360px] h-[360px] bg-[#d97706]/10 blur-[140px]" />
      </div>

      {/* Side vertical label */}
      <div className="hidden xl:block absolute left-6 top-32 [writing-mode:vertical-rl] rotate-180 font-mono text-[10px] uppercase tracking-[0.4em] text-white/30">
        DOC · PR · MAY 2026 · OFFICIAL · BEE TEAM STUDIOS
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-16 z-10">
        {/* HEADER — full width title + download CTA beside it */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FFD700]">
              /03
            </span>
            <span className="h-px w-12 bg-[#FFD700]/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/55">
              {t.eyebrow}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#FFD700] text-black font-mono text-[9px] font-extrabold uppercase tracking-[0.25em] px-2.5 py-1 rounded-full">
              <span className="dot-pulse" />
              {t.kicker}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-10">
            <h2 className="h-display text-[clamp(52px,10vw,160px)] text-white leading-[0.86] flex-1">
              {t.title1}{' '}
              <span className="text-[#FFD700] relative inline-block">
                {t.title2}
                <motion.span
                  className="absolute left-0 -bottom-2 h-[3px] w-full bg-[#FFD700]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.4 }}
                  style={{ originX: 0 }}
                />
              </span>
            </h2>

            {/* Download CTA — beside the title */}
            <a
              href="/press-release.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block bg-[#FFD700] text-black rounded-2xl p-6 overflow-hidden border-2 border-[#FFD700] shadow-[0_25px_60px_-15px_rgba(255,215,0,0.45)] sheen lg:w-[320px] shrink-0"
            >
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-black/65 mb-4">
                <FileText size={12} className="text-black" />
                {t.pages}
              </div>
              <div className="font-display text-xl md:text-2xl text-black leading-tight mb-5">
                {t.download}
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-black/15">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/65">
                  {t.doc}
                </span>
                <span className="inline-flex items-center gap-2 bg-[#0a0a0a] text-[#FFD700] px-4 py-2 rounded-full font-mono text-[10px] font-extrabold uppercase tracking-[0.2em] group-hover:gap-3 transition-all">
                  PDF
                  <Download size={12} strokeWidth={3} className="group-hover:translate-y-0.5 transition-transform" />
                </span>
              </div>
            </a>
          </div>
        </motion.div>

        {/* DOCUMENT — full-width paper exhibit */}
        <div className="w-full">
          {/* MAIN — document body sitting on paper, framed */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative bg-[#faf8f3] text-black border border-[#FFD700]/30 rounded-2xl shadow-[0_40px_120px_-30px_rgba(255,215,0,0.25)] overflow-hidden"
          >
            {/* Frame brackets */}
            <span className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#FFD700] z-10 pointer-events-none" />
            <span className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#FFD700] z-10 pointer-events-none" />
            <span className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#FFD700] z-10 pointer-events-none" />
            <span className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#FFD700] z-10 pointer-events-none" />

            {/* Featured ribbon */}
            <div className="absolute -top-1 right-8 z-20">
              <div className="bg-[#FFD700] text-black px-4 py-2 font-mono text-[10px] font-extrabold uppercase tracking-[0.3em] shadow-lg flex items-center gap-1.5">
                ★ {t.ribbon}
              </div>
              <div className="h-3 w-full bg-[#d4af37] [clip-path:polygon(0_0,100%_0,50%_100%)]" />
            </div>

            {/* Stripe accent */}
            <div className="stripes-gold h-2 w-full opacity-90" />

            {/* Letterhead */}
            <div className="px-8 md:px-10 pt-6 pb-4 border-b border-black/10 flex items-center justify-between flex-wrap gap-3">
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
            <div className="px-8 md:px-10 py-7 md:py-8 space-y-5 text-[15px] leading-[1.7] text-black/80 font-serif-d">
              <p>{t.p1}</p>

              {/* Pull-quote — executive producer */}
              <figure className="relative my-6 pl-6 border-l-2 border-[#FFD700]">
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
              <div className="mt-6 rounded-xl border border-black/10 bg-white/60 p-5">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-black/55 mb-3">
                  <Users size={12} className="text-[#d4af37]" />
                  {t.castLabel}
                </div>
                <p className="text-[14px] leading-relaxed text-black/85">{t.cast}</p>
              </div>

              {/* Director quote */}
              <figure className="relative mt-6 pl-6 border-l-2 border-black/20">
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
        </div>
      </div>

      {/* Bottom marquee — mirror */}
      <div className="relative bg-[#FFD700] text-black overflow-hidden border-y-2 border-black/30">
        <div className="marquee-track flex items-center py-3 whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="font-display text-xl md:text-2xl tracking-[0.18em] uppercase px-8 flex items-center gap-8"
            >
              <span className="text-black/50">★</span>
              {t.ticker}
              <Sparkles size={14} strokeWidth={2.5} />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
