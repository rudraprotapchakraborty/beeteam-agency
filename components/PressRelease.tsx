'use client'

import { motion } from 'framer-motion'
import { Clock, Download, FileText, Play, Quote, Users } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const TRAILER_URL = 'https://youtu.be/0VWQgPVgRrs?si=dA5mpSNb8-Zd2oNH'

export default function PressRelease() {
  const { language } = useLanguage()

  const translations = {
    en: {
      eyebrow: 'Press Release · 16 June 2026',
      kicker: 'Just In',
      ribbon: 'Now Showing',
      title1: 'Press Release',
      title2: 'June 2026',
      dateline: 'Dhaka, 16 June 2026',
      recipients:
        'To: The News Editor / Chief Reporter · Feature Editor / Program Head · Entertainment & Culture Section',
      headline:
        'Following Audience Demand, “The University of Chankharpul” to Screen at Star Cineplex at 7:15 PM for After-Office Viewers',
      p1: 'The political satire film “The University of Chankharpul,” released on Friday, 12 June 2026, has been receiving an overwhelmingly positive response from audiences since its release. With its bold portrayal of university life, student politics, hall culture, power dynamics, and contemporary social realities, the film has generated considerable discussion among young viewers as well as audiences from various professional and social backgrounds.',
      p2: 'Despite unfavorable weather conditions and intermittent rainfall on its opening day, audience attendance at Star Cineplex (Bashundhara City) and Lion Cinemas, Keraniganj remained encouraging. University students, in particular, were among the most prominent viewers. Following the screenings, audience members praised the film’s political satire, realistic storytelling, and courageous approach to addressing sensitive social and political issues.',
      p3: 'In response to the positive audience feedback and growing demand, the screening schedule at Star Cineplex (Bashundhara City) has been revised. From tomorrow, the previous 4:30 PM show will be replaced with a more convenient 7:15 PM evening show, allowing office-goers and working professionals to enjoy the film after work. The film will now be screened daily at 11:00 AM and 7:15 PM at Star Cineplex. Meanwhile, Lion Cinemas, Keraniganj will continue screening the film daily at 4:40 PM and 7:30 PM.',
      scheduleLabel: 'Current Screening Schedule',
      venue1: 'Star Cineplex · Bashundhara City',
      venue1Times: 'Daily · 11:00 AM & 7:15 PM',
      venue2: 'Lion Cinemas · Keraniganj',
      venue2Times: 'Daily · 4:40 PM & 7:30 PM',
      quoteLead: 'Director · Akash Haque',
      quote:
        'The love and appreciation we have received from audiences since the release have been truly inspiring. The enthusiastic participation of young viewers, in particular, gives us great hope and encouragement.',
      directorQuoteLead: 'Executive Producer · Md. Hafizuddin Munna',
      directorQuote:
        'This film is the work of an entirely new team. The support and appreciation from audiences have been our greatest achievement. We hope even more people will come to the theatres and experience the film.',
      p4: 'Inspired by Rono Anowar’s short story “Jhora Patar Dukkho Bilash” (Melancholy of Fallen Leaves), “The University of Chankharpul” explores university life, student politics, hall culture, power structures, and the dreams and struggles of young people. The film has already earned significant recognition, including the prestigious FIPRESCI Award in the Bangladesh Panorama Section at the Dhaka International Film Festival (DIFF), as well as the Hiralal Sen Medal and Best Screenplay Award at the Amar Bhashar Chalachitra Utsab.',
      trailerLabel: 'Official Trailer',
      trailerText:
        'The film’s official trailer has already generated considerable interest on social media and can be viewed here:',
      trailerCta: 'Watch Trailer',
      castLabel: 'Cast & Music',
      cast: 'The film features performances by Debdyuti Aich, Rocky Khan, Bobby Biswas, and a talented ensemble of emerging artists. Its popular songs “Shohomot Bhai” and “Rajnitir Moydan” have also gained significant attention across social media platforms.',
      productionLabel: 'Sent by',
      production: 'Ershadul Huq Tinku · CEO, Cool Exposure · +8801711472367',
      distLabel: 'For Further Information',
      dist: 'Md. Hafizuddin Munna · Executive Producer · +8801711315557 · beeteamltd@gmail.com',
      release:
        'The film is now screening daily — the filmmakers warmly invite audiences to experience it on the big screen.',
      download: 'Download Full Release (PDF)',
      pages: 'PDF',
      doc: 'DOC-PR · JUN 2026',
      ticker: 'NOW SHOWING · STAR CINEPLEX 11:00 AM & 7:15 PM · LION CINEMAS 4:40 PM & 7:30 PM · THE UNIVERSITY OF CHANKHARPUL · FIPRESCI WINNER',
    },
    bn: {
      eyebrow: 'প্রেস রিলিজ · ১৬ জুন ২০২৬',
      kicker: 'এইমাত্র',
      ribbon: 'চলছে',
      title1: 'প্রেস রিলিজ',
      title2: 'জুন ২০২৬',
      dateline: 'ঢাকা, ১৬ জুন ২০২৬',
      recipients:
        'প্রতি: বার্তা সম্পাদক / প্রধান প্রতিবেদক · ফিচার সম্পাদক / অনুষ্ঠান প্রধান · বিনোদন ও সংস্কৃতি বিভাগ',
      headline:
        'দর্শক চাহিদার পরিপ্রেক্ষিতে, অফিস-ফেরত দর্শকদের জন্য স্টার সিনেপ্লেক্সে সন্ধ্যা ৭:১৫ মিনিটে চলবে "দ্য ইউনিভার্সিটি অফ চানখাঁরপুল"',
      p1: 'গত শুক্রবার, ১২ জুন ২০২৬-এ মুক্তি পাওয়া রাজনৈতিক স্যাটায়ার চলচ্চিত্র "দ্য ইউনিভার্সিটি অফ চানখাঁরপুল" মুক্তির পর থেকেই দর্শকদের কাছ থেকে অভূতপূর্ব সাড়া পাচ্ছে। বিশ্ববিদ্যালয় জীবন, ছাত্ররাজনীতি, হল কালচার, ক্ষমতার দ্বন্দ্ব এবং সমকালীন সামাজিক বাস্তবতার সাহসী উপস্থাপনার জন্য তরুণ দর্শকসহ বিভিন্ন পেশা ও শ্রেণির দর্শকের মধ্যে চলচ্চিত্রটি ব্যাপক আলোচনার জন্ম দিয়েছে।',
      p2: 'মুক্তির দিন প্রতিকূল আবহাওয়া ও থেমে থেমে বৃষ্টি সত্ত্বেও স্টার সিনেপ্লেক্স (বসুন্ধরা সিটি) ও লায়ন সিনেমাস, কেরানীগঞ্জে দর্শক উপস্থিতি ছিল আশাব্যঞ্জক। বিশেষত বিশ্ববিদ্যালয়ের শিক্ষার্থীরা ছিলেন অন্যতম প্রধান দর্শক। প্রদর্শনী শেষে দর্শকরা চলচ্চিত্রের রাজনৈতিক স্যাটায়ার, বাস্তবধর্মী গল্প এবং স্পর্শকাতর সামাজিক ও রাজনৈতিক বিষয় তুলে ধরার সাহসিকতার প্রশংসা করেছেন।',
      p3: 'ইতিবাচক দর্শক প্রতিক্রিয়া ও ক্রমবর্ধমান চাহিদার পরিপ্রেক্ষিতে স্টার সিনেপ্লেক্স (বসুন্ধরা সিটি)-এর প্রদর্শনী সময়সূচি পরিবর্তন করা হয়েছে। আগামীকাল থেকে পূর্বের বিকেল ৪:৩০ মিনিটের শো-টির পরিবর্তে অফিস-ফেরত কর্মজীবীদের সুবিধার্থে সন্ধ্যা ৭:১৫ মিনিটের শো চালু করা হচ্ছে। স্টার সিনেপ্লেক্সে চলচ্চিত্রটি এখন প্রতিদিন সকাল ১১:০০ ও সন্ধ্যা ৭:১৫ মিনিটে প্রদর্শিত হবে। অন্যদিকে, লায়ন সিনেমাস, কেরানীগঞ্জে প্রতিদিন বিকেল ৪:৪০ ও সন্ধ্যা ৭:৩০ মিনিটে চলচ্চিত্রটি প্রদর্শিত হবে।',
      scheduleLabel: 'বর্তমান প্রদর্শনী সময়সূচি',
      venue1: 'স্টার সিনেপ্লেক্স · বসুন্ধরা সিটি',
      venue1Times: 'প্রতিদিন · সকাল ১১:০০ ও সন্ধ্যা ৭:১৫',
      venue2: 'লায়ন সিনেমাস · কেরানীগঞ্জ',
      venue2Times: 'প্রতিদিন · বিকেল ৪:৪০ ও সন্ধ্যা ৭:৩০',
      quoteLead: 'পরিচালক · আকাশ হক',
      quote:
        'মুক্তির পর থেকে দর্শকদের কাছ থেকে যে ভালোবাসা ও প্রশংসা পেয়েছি তা সত্যিই অনুপ্রেরণাদায়ক। বিশেষত তরুণ দর্শকদের উৎসাহী অংশগ্রহণ আমাদের অনেক আশা ও সাহস জোগায়।',
      directorQuoteLead: 'নির্বাহী প্রযোজক · মোঃ হাফিজউদ্দিন মুন্না',
      directorQuote:
        'এই চলচ্চিত্রটি একেবারে নতুন একটি দলের কাজ। দর্শকদের সমর্থন ও প্রশংসাই আমাদের সবচেয়ে বড় অর্জন। আমরা আশা করি আরও বেশি মানুষ প্রেক্ষাগৃহে এসে সিনেমাটি উপভোগ করবেন।',
      p4: 'রনো আনোয়ারের ছোটগল্প "ঝরা পাতার দুঃখ বিলাস" অবলম্বনে নির্মিত "দ্য ইউনিভার্সিটি অফ চানখাঁরপুল" বিশ্ববিদ্যালয় জীবন, ছাত্ররাজনীতি, হল কালচার, ক্ষমতার কাঠামো এবং তরুণদের স্বপ্ন ও সংগ্রামকে তুলে ধরে। চলচ্চিত্রটি ইতোমধ্যে উল্লেখযোগ্য স্বীকৃতি অর্জন করেছে, যার মধ্যে রয়েছে ঢাকা আন্তর্জাতিক চলচ্চিত্র উৎসব (DIFF)-এর বাংলাদেশ প্যানোরামা বিভাগে মর্যাদাপূর্ণ FIPRESCI Award, পাশাপাশি আমার ভাষার চলচ্চিত্র উৎসবে হীরালাল সেন পদক ও শ্রেষ্ঠ চিত্রনাট্য পুরস্কার।',
      trailerLabel: 'অফিসিয়াল ট্রেলার',
      trailerText:
        'চলচ্চিত্রটির অফিসিয়াল ট্রেলার ইতোমধ্যে সামাজিক যোগাযোগমাধ্যমে ব্যাপক আগ্রহ তৈরি করেছে এবং এখানে দেখা যাবে:',
      trailerCta: 'ট্রেলার দেখুন',
      castLabel: 'অভিনয় ও সংগীত',
      cast: 'চলচ্চিত্রটিতে অভিনয় করেছেন দেবদ্যুতি আইচ, রকি খান, ববি বিশ্বাস এবং একঝাঁক প্রতিভাবান উদীয়মান শিল্পী। এর জনপ্রিয় গান "সহমত ভাই" এবং "রাজনীতির ময়দান"-ও সামাজিক যোগাযোগমাধ্যমে ব্যাপক সাড়া ফেলেছে।',
      productionLabel: 'প্রেরক',
      production: 'এরশাদুল হক টিংকু · সিইও, কুল এক্সপোজার · +৮৮০১৭১১৪৭২৩৬৭',
      distLabel: 'আরও তথ্যের জন্য',
      dist: 'মোঃ হাফিজউদ্দিন মুন্না · নির্বাহী প্রযোজক · +৮৮০১৭১১৩১৫৫৫৭ · beeteamltd@gmail.com',
      release: 'সিনেমাটি এখন প্রতিদিন প্রেক্ষাগৃহে চলছে — দর্শকদের বড় পর্দায় সিনেমাটি উপভোগ করার জন্য নির্মাতারা আন্তরিক আমন্ত্রণ জানান।',
      download: 'সম্পূর্ণ প্রেস রিলিজ ডাউনলোড করুন (PDF)',
      pages: 'PDF',
      doc: 'ডক-পিআর · জুন ২০২৬',
      ticker: 'এখন চলছে · স্টার সিনেপ্লেক্স সকাল ১১:০০ ও সন্ধ্যা ৭:১৫ · লায়ন সিনেমাস বিকেল ৪:৪০ ও সন্ধ্যা ৭:৩০ · দ্য ইউনিভার্সিটি অফ চানখাঁরপুল · FIPRESCI বিজয়ী',
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
              <Play size={14} strokeWidth={2.5} />
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
        DOC · PR · JUN 2026 · OFFICIAL · BEE TEAM STUDIOS
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
            <div className="px-8 md:px-10 pt-6 pb-4 border-b border-black/10">
              <div className="flex items-center justify-between flex-wrap gap-3">
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
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-black/45">
                {t.recipients}
              </p>
            </div>

            {/* Body */}
            <div className="px-8 md:px-10 py-7 md:py-8 space-y-5 text-[15px] leading-[1.7] text-black/80 font-serif-d">
              <h3 className="font-serif-d text-2xl md:text-3xl leading-tight text-black">
                {t.headline}
              </h3>

              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>

              {/* Screening schedule */}
              <div className="my-6 rounded-xl border border-[#FFD700]/50 bg-[#FFD700]/10 p-5">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-black/60 mb-4">
                  <Clock size={12} className="text-[#d4af37]" />
                  {t.scheduleLabel}
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-sm font-bold text-black">{t.venue1}</div>
                    <div className="mt-1 text-sm text-black/65">{t.venue1Times}</div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-black">{t.venue2}</div>
                    <div className="mt-1 text-sm text-black/65">{t.venue2Times}</div>
                  </div>
                </div>
              </div>

              {/* Pull-quote — director */}
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

              {/* Executive producer quote */}
              <figure className="relative my-6 pl-6 border-l-2 border-black/20">
                <blockquote className="font-serif-d italic text-base md:text-lg text-black/85 leading-snug">
                  “{t.directorQuote}”
                </blockquote>
                <figcaption className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/50 mt-3">
                  — {t.directorQuoteLead}
                </figcaption>
              </figure>

              <p>{t.p4}</p>

              {/* Trailer */}
              <div className="my-6 rounded-xl border border-black/10 bg-white/60 p-5">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-black/55 mb-3">
                  <Play size={12} className="text-[#d4af37]" />
                  {t.trailerLabel}
                </div>
                <p className="text-[14px] leading-relaxed text-black/85 mb-4">{t.trailerText}</p>
                <a
                  href={TRAILER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0a0a0a] text-[#FFD700] px-4 py-2.5 rounded-full font-mono text-[10px] font-extrabold uppercase tracking-[0.2em] hover:gap-3 transition-all"
                >
                  <Play size={12} strokeWidth={3} />
                  {t.trailerCta}
                </a>
              </div>

              {/* Cast strip */}
              <div className="mt-6 rounded-xl border border-black/10 bg-white/60 p-5">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-black/55 mb-3">
                  <Users size={12} className="text-[#d4af37]" />
                  {t.castLabel}
                </div>
                <p className="text-[14px] leading-relaxed text-black/85">{t.cast}</p>
              </div>

              <p className="text-black font-medium">{t.release}</p>
            </div>

            {/* Bottom credits strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/10 border-t border-black/10">
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
              <Play size={14} strokeWidth={2.5} />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
