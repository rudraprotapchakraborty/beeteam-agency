'use client'

import { motion } from 'framer-motion'
import { Clock, Download, FileText, Play, Quote, Users } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const TRAILER_URL = 'https://youtu.be/0VWQgPVgRrs?si=dA5mpSNb8-Zd2oNH'

export default function PressRelease() {
  const { language } = useLanguage()

  const translations = {
    en: {
      eyebrow: 'Press Release · 3 July 2026',
      kicker: 'Just In',
      ribbon: 'Now Showing',
      title1: 'Press Release',
      title2: 'July 2026',
      dateline: 'Dhaka, 3 July 2026',
      recipients:
        'To: The News Editor / Chief Reporter · Feature Editor / Program Head · Entertainment & Culture Section',
      headline:
        'Acclaimed Bangladeshi Feature Film “The University of Chankharpul” Opens in Cumilla and Rajshahi',
      p1: 'Following its successful theatrical release and widespread critical acclaim, the much-talked-about Bangladeshi feature film The University of Chankharpul is expanding its nationwide theatrical run with releases in two new cities.',
      p2: 'Beginning Friday, July 3, 2026, the film will be screened at K Screen Cineplex, Cumilla, with daily shows at 2:00 PM and 5:00 PM. It will also open at Grand River View (GRV) Cineplex, Rajshahi, from Saturday, July 4, 2026, with a daily show at 3:30 PM.',
      p3: 'Written and directed by Akash Haque, The University of Chankharpul presents a compelling portrayal of university life, exploring student politics, residential hall culture, friendship, personal struggles, and the social realities shaping today’s youth. Since its theatrical debut, the film has generated significant attention from both audiences and critics for its powerful storytelling, authentic performances, and thought-provoking narrative, earning particular appreciation among young moviegoers.',
      scheduleLabel: 'Screening Expansion Schedule',
      venue1: 'K Screen Cineplex · Cumilla',
      venue1Times: 'Daily · 2:00 PM & 5:00 PM (From July 3)',
      venue2: 'GRV Cineplex · Rajshahi',
      venue2Times: 'Daily · 3:30 PM (From July 4)',
      quoteLead: 'Executive Producer & Distributor · Md. Hafizuddin Munna',
      quote:
        'The overwhelming love and support from audiences have inspired us to bring The University of Chankharpul to viewers across Bangladesh. We are delighted to introduce the film to audiences in Cumilla and Rajshahi. We firmly believe that its authentic portrayal of university life and its emotionally engaging story will resonate deeply with movie lovers.',
      directorQuoteLead: 'Executive Producer · Md. Hafizuddin Munna',
      directorQuote:
        'We warmly invite everyone to experience the film on the big screen with their family and friends. The theatrical release will continue to expand to additional cities across Bangladesh in the coming weeks.',
      p4: 'The film features performances by Devodyuti Aich, Rocky Khan, Bobby Biswas, Akhtaruzzaman Azad, Chayan Mondal, Abu Saeed, Mehedi Hasan Sohan, Jibon along with a talented ensemble of emerging Bangladeshi actors.',
      trailerLabel: 'Official Trailer',
      trailerText:
        'The film’s official trailer has already generated considerable interest on social media and can be viewed here:',
      trailerCta: 'Watch Trailer',
      castLabel: 'Cast & Production Ensemble',
      cast: 'The film features performances by Devodyuti Aich, Rocky Khan, Bobby Biswas, Akhtaruzzaman Azad, Chayan Mondal, Abu Saeed, Mehedi Hasan Sohan, Jibon, and a group of emerging Bangladeshi talents.',
      productionLabel: 'Sent by',
      production: 'Ershadul Huq Tinku · CEO, Cool Exposure · +8801711472367',
      distLabel: 'For Further Information',
      dist: 'Md. Hafizuddin Munna · Executive Producer · +8801711315557 · beeteamltd@gmail.com',
      release:
        'The film is expanding to more theatres across the country in response to massive audience demand.',
      download: 'Download Expanded Release (TXT)',
      pages: 'TXT · JULY 2026',
      doc: 'DOC-PR · JUL 2026',
      ticker: 'NOW SHOWING · K SCREEN CUMILLA 2:00 PM & 5:00 PM · GRV CINEPLEX RAJSHAHI 3:30 PM · THE UNIVERSITY OF CHANKHARPUL · ACCLAIMED DRAMA',
    },
    bn: {
      eyebrow: 'প্রেস রিলিজ · ৩ জুলাই ২০২৬',
      kicker: 'এইমাত্র',
      ribbon: 'চলছে',
      title1: 'প্রেস রিলিজ',
      title2: 'জুলাই ২০২৬',
      dateline: 'ঢাকা, ৩ জুলাই ২০২৬',
      recipients:
        'প্রতি: বার্তা সম্পাদক / প্রধান প্রতিবেদক · ফিচার সম্পাদক / অনুষ্ঠান প্রধান · বিনোদন ও সংস্কৃতি বিভাগ',
      headline:
        'কুমিল্লা ও রাজশাহীতে মুক্তি পাচ্ছে প্রশংসিত বাংলাদেশি পূর্ণদৈর্ঘ্য চলচ্চিত্র “দ্য ইউনিভার্সিটি অফ চানখাঁরপুল”',
      p1: 'সফল মুক্তি এবং দর্শকদের বিপুল প্রশংসার পর, আলোচিত বাংলাদেশি চলচ্চিত্র "দ্য ইউনিভার্সিটি অফ চানখাঁরপুল" দুটি নতুন শহরে মুক্তি পেয়ে এর দেশব্যাপী প্রদর্শন আরও প্রসারিত করছে।',
      p2: 'শুক্রবার, ৩ জুলাই ২০২৬ থেকে কুমিল্লায় কে স্ক্রিন সিনেপ্লেক্সে প্রতিদিন দুপুর ২:০০ ও বিকেল ৫:০০ টায় সিনেমাটি প্রদর্শিত হবে। এছাড়াও শনিবার, ৪ জুলাই ২০২৬ থেকে রাজশাহীর গ্র্যান্ড রিভার ভিউ (জিআরভি) সিনেপ্লেক্সে প্রতিদিন দুপুর ৩:৩০ মিনিটে সিনেমাটি প্রদর্শিত হবে।',
      p3: 'আকাশ হকের রচনা ও পরিচালনায় "দ্য ইউনিভার্সিটি অফ চানখাঁরপুল" ছবিতে ছাত্ররাজনীতি, হলের সংস্কৃতি, বন্ধুত্ব, ব্যক্তিগত লড়াই এবং তরুণদের সামাজিক বাস্তবতার এক বাস্তব চিত্র তুলে করা হয়েছে। মুক্তির পর থেকেই চলচ্চিত্রটি এর শক্তিশালী গল্প ও অভিনয়ের কারণে তরুণ দর্শক ও সমালোচকদের মাঝে বিপুল সাড়া ফেলেছে।',
      scheduleLabel: 'নতুন প্রদর্শনী সময়সূচি',
      venue1: 'কে স্ক্রিন সিনেপ্লেক্স · কুমিল্লা',
      venue1Times: 'প্রতিদিন · দুপুর ২:০০ ও বিকেল ৫:০০ (৩ জুলাই থেকে)',
      venue2: 'জিআরভি সিনেপ্লেক্স · রাজশাহী',
      venue2Times: 'প্রতিদিন · দুপুর ৩:৩০ (৪ জুলাই থেকে)',
      quoteLead: 'পরিচালক · আকাশ হক',
      quote:
        'দর্শকদের ভালোবাসাই আমাদের চলচ্চিত্রটি সারা দেশের মানুষের কাছে নিয়ে যেতে অনুপ্রাণিত করেছে। আমরা কুমিল্লা ও রাজশাহীর দর্শকদের কাছে এই চলচ্চিত্রটি পৌঁছে দিতে পেরে অত্যন্ত আনন্দিত। আমরা বিশ্বাস করি বিশ্ববিদ্যালয় জীবনের এই বাস্তব চিত্র মানুষের হৃদয় ছুঁয়ে যাবে।',
      directorQuoteLead: 'নির্বাহী প্রযোজক · মোঃ হাফিজউদ্দিন মুন্না',
      directorQuote:
        'আমরা আন্তরিকভাবে সবাইকে পরিবার ও বন্ধুদের নিয়ে সিনেমা হলে এসে সিনেমাটি বড় পর্দায় দেখার আমন্ত্রণ জানাচ্ছি। আগামী দিনগুলোতে আরও অনেক শহরে সিনেমাটি মুক্তি পাবে।',
      p4: 'সিনেমাটিতে অভিনয় করেছেন দেবদ্যুতি আইচ, রকি খান, ববি বিশ্বাস, আখতারুজ্জামান আজাদের মতো গুণী ও দক্ষ অভিনেতারা, এবং সাথে যুক্ত আছেন একঝাঁক প্রতিভাবান উদীয়মান শিল্পী।',
      trailerLabel: 'অফিসিয়াল ট্রেলার',
      trailerText:
        'চলচ্চিত্রটির অফিসিয়াল ট্রেলার ইতোমধ্যে সামাজিক যোগাযোগমাধ্যমে ব্যাপক আগ্রহ তৈরি করেছে এবং এখানে দেখা যাবে:',
      trailerCta: 'ট্রেলার দেখুন',
      castLabel: 'অভিনয় ও শিল্পীদল',
      cast: 'চলচ্চিত্রটিতে অভিনয় করেছেন দেবদ্যুতি আইচ, রকি খান, ববি বিশ্বাস, আখতারুজ্জামান আজাদ, চয়ন মন্ডল, আবু সাঈদ, মেহেদী হাসান সোহান, জীবন এবং একঝাঁক উদীয়মান শিল্পী।',
      productionLabel: 'প্রেরক',
      production: 'এরশাদুল হক টিংকু · সিইও, কুল এক্সপোজার · +৮৮০১৭১১৪৭২৩৬৭',
      distLabel: 'আরও তথ্যের জন্য',
      dist: 'মোঃ হাফিজউদ্দিন মুন্না · নির্বাহী প্রযোজক · +৮৮০১টি১১৩১৫৫৫৭ · beeteamltd@gmail.com',
      release: 'দর্শক চাহিদার কারণে দেশের আরও অনেক প্রেক্ষাগৃহে সিনেমাটির প্রদর্শন চলমান রয়েছে।',
      download: 'সম্পূর্ণ প্রেস রিলিজ ডাউনলোড করুন (TXT)',
      pages: 'TXT · জুলাই ২০২৬',
      doc: 'ডক-পিআর · জুলাই ২০২৬',
      ticker: 'এখন চলছে · কে স্ক্রিন কুমিল্লা দুপুর ২:০০ ও বিকেল ৫:০০ · জিআরভি রাজশাহী দুপুর ৩:৩০ · দ্য ইউনিভার্সিটি অফ চানখাঁরপুল',
    },
  } as const

  const t = translations[language]

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault()
    const textContent = `PRESS RELEASE
For Immediate Release

Acclaimed Bangladeshi Feature Film The University of Chankharpul Opens in Cumilla and Rajshahi

Dhaka | July 3, 2026

Following its successful theatrical release and widespread critical acclaim, the much-talked-about Bangladeshi feature film The University of Chankharpul is expanding its nationwide theatrical run with releases in two new cities.

Beginning Friday, July 3, 2026, the film will be screened at K Screen Cineplex, Cumilla, with daily shows at 2:00 PM and 5:00 PM. It will also open at Grand River View (GRV) Cineplex, Rajshahi, from Saturday, July 4, 2026, with a daily show at 3:30 PM

Written and directed by Akash Haque, The University of Chankharpul presents a compelling portrayal of university life, exploring student politics, residential hall culture, friendship, personal struggles, and the social realities shaping today's youth. Since its theatrical debut, the film has generated significant attention from both audiences and critics for its powerful storytelling, authentic performances, and thought-provoking narrative, earning particular appreciation among young moviegoers.

The film features performances by Devodyuti Aich, Rocky Khan, Bobby Biswas, Akhtaruzzaman Azad, Chayan Mondal, Abu Saeed, Mehedi Hasan Sohan, Jibon along with a talented ensemble of emerging Bangladeshi actors.

Speaking on the occasion, Md. Hafizuddin Munna, Executive Producer and Distributor of the film, said: "The overwhelming love and support from audiences have inspired us to bring The University of Chankharpul to viewers across Bangladesh. We are delighted to introduce the film to audiences in Cumilla and Rajshahi. We firmly believe that its authentic portrayal of university life and its emotionally engaging story will resonate deeply with movie lovers. We warmly invite everyone to experience the film on the big screen with their family and friends."

The production team also confirmed that, in response to audience demand, the film's theatrical release will continue to expand to additional cities across Bangladesh in the coming weeks.

Media Contact:
Md. Hafizuddin Munna
Executive Producer & Distributor
Bee Team Productions
Contact: 01711315557
Email: beeteamltd@gmail.com`

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'press_release_university_of_chankharpul_july_2026.txt')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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
        DOC · PR · JUL 2026 · OFFICIAL · BEE TEAM STUDIOS
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
            <button
              onClick={handleDownload}
              className="group relative block bg-[#FFD700] text-black rounded-2xl p-6 overflow-hidden border-2 border-[#FFD700] shadow-[0_25px_60px_-15px_rgba(255,215,0,0.45)] sheen lg:w-[320px] shrink-0 text-left cursor-pointer"
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
                  TXT
                  <Download size={12} strokeWidth={3} className="group-hover:translate-y-0.5 transition-transform" />
                </span>
              </div>
            </button>
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
