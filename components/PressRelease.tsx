'use client'

import { useState } from 'react'

const TRAILER_URL = 'https://www.youtube.com/watch?v=ErRnSJQ9nhg'

type Lang = 'en' | 'bn'

const copy = {
  en: {
    title: 'Press Release',
    subtitle: 'July 3, 2026',
    dateline: 'Dhaka, 3 July 2026',
    recipients:
      'To: The News Editor / Chief Reporter · Feature Editor / Program Head · Entertainment & Culture Section',
    headline:
      'Acclaimed Bangladeshi Feature Film “The University of Chankharpul” Opens in Cumilla and Rajshahi',
    p1: 'Following its successful theatrical release and widespread critical acclaim, the much-talked-about Bangladeshi feature film The University of Chankharpul is expanding its nationwide theatrical run with releases in two new cities.',
    p2: 'Beginning Friday, July 3, 2026, the film will be screened at K Screen Cineplex, Cumilla, with daily shows at 2:00 PM and 5:00 PM. It will also open at Grand River View (GRV) Cineplex, Rajshahi, from Saturday, July 4, 2026, with a daily show at 3:30 PM.',
    p3: 'Written and directed by Akash Haque, The University of Chankharpul presents a compelling portrayal of university life, exploring student politics, residential hall culture, friendship, personal struggles, and the social realities shaping today’s youth. Since its theatrical debut, the film has generated significant attention from both audiences and critics for its powerful storytelling, authentic performances, and thought-provoking narrative, earning particular appreciation among young moviegoers.',
    scheduleLabel: 'Screening Expansion Schedule',
    venue1: 'K Screen Cineplex · Cumilla — Daily · 2:00 PM & 5:00 PM (From July 3)',
    venue2: 'GRV Cineplex · Rajshahi — Daily · 3:30 PM (From July 4)',
    quoteLead: 'Executive Producer · Md. Hafizuddin Munna',
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
  },
  bn: {
    title: 'প্রেস রিলিজ',
    subtitle: '৩ জুলাই ২০২৬',
    dateline: 'ঢাকা, ৩ জুলাই ২০২৬',
    recipients:
      'প্রতি: বার্তা সম্পাদক / প্রধান প্রতিবেদক · ফিচার সম্পাদক / অনুষ্ঠান প্রধান · বিনোদন ও সংস্কৃতি বিভাগ',
    headline:
      'কুমিল্লা ও রাজশাহীতে মুক্তি পাচ্ছে প্রশংসিত বাংলাদেশি পূর্ণদৈর্ঘ্য চলচ্চিত্র “দ্য ইউনিভার্সিটি অফ চানখাঁরপুল”',
    p1: 'সফল মুক্তি এবং দর্শকদের বিপুল প্রশংসার পর, আলোচিত বাংলাদেশি চলচ্চিত্র "দ্য ইউনিভার্সিটি অফ চানখাঁরপুল" দুটি নতুন শহরে মুক্তি পেয়ে এর দেশব্যাপী প্রদর্শন আরও প্রসারিত করছে।',
    p2: 'শুক্রবার, ৩ জুলাই ২০২৬ থেকে কুমিল্লায় কে স্ক্রিন সিনেপ্লেক্সে প্রতিদিন দুপুর ২:০০ ও বিকেল ৫:০০ টায় সিনেমাটি প্রদর্শিত হবে। এছাড়াও শনিবার, ৪ জুলাই ২০২৬ থেকে রাজশাহীর গ্র্যান্ড রিভার ভিউ (জিআরভি) সিনেপ্লেক্সে প্রতিদিন দুপুর ৩:৩০ মিনিটে সিনেমাটি প্রদর্শিত হবে।',
    p3: 'আকাশ হকের রচনা ও পরিচালনায় "দ্য ইউনিভার্সিটি অফ চানখাঁরপুল" ছবিতে ছাত্ররাজনীতি, হলের সংস্কৃতি, বন্ধুত্ব, ব্যক্তিগত লড়াই এবং তরুণদের সামাজিক বাস্তবতার এক বাস্তব চিত্র তুলে করা হয়েছে। মুক্তির পর থেকেই চলচ্চিত্রটি এর শক্তিশালী গল্প ও অভিনয়ের কারণে তরুণ দর্শক ও সমালোচকদের মাঝে বিপুল সাড়া ফেলেছে।',
    scheduleLabel: 'নতুন প্রদর্শনী সময়সূচি',
    venue1: 'কে স্ক্রিন সিনেপ্লেক্স · কুমিল্লা — প্রতিদিন · দুপুর ২:০০ ও বিকেল ৫:০০ (৩ জুলাই থেকে)',
    venue2: 'জিআরভি সিনেপ্লেক্স · রাজশাহী — প্রতিদিন · দুপুর ৩:৩০ (৪ জুলাই থেকে)',
    quoteLead: 'নির্বাহী প্রযোজক · মোঃ হাফিজউদ্দিন মুন্না',
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
    dist: 'মোঃ হাফিজউদ্দিন মুন্না · নির্বাহী প্রযোজক · +৮৮০১৭১১৩১৫৫৫৭ · beeteamltd@gmail.com',
    release: 'দর্শক চাহিদার কারণে দেশের আরও অনেক প্রেক্ষাগৃহে সিনেমাটির প্রদর্শন চলমান রয়েছে।',
  },
} as const

export default function PressRelease() {
  const [lang, setLang] = useState<Lang>('en')
  const t = copy[lang]

  return (
    <section id="press-release" className="px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
        <div>
          <h2 className="h-display text-[clamp(48px,9vw,128px)] text-fg leading-[0.86]">
            Press Release
          </h2>
          <p className="mt-3 font-mono text-[11px] sm:text-xs uppercase tracking-[0.28em] text-gold-bright">
            July 3, 2026
          </p>
        </div>

        {/* Local EN / BN toggle — press release only */}
        <div
          className="inline-flex shrink-0 self-start sm:self-auto items-center rounded-full border border-line bg-fill-soft p-1"
          role="group"
          aria-label="Press release language"
        >
          <button
            type="button"
            onClick={() => setLang('en')}
            className={`px-4 py-2 rounded-full font-mono text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${
              lang === 'en'
                ? 'bg-gold-bright text-black'
                : 'text-subtle hover:text-fg'
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLang('bn')}
            className={`px-4 py-2 rounded-full font-mono text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${
              lang === 'bn'
                ? 'bg-gold-bright text-black'
                : 'text-subtle hover:text-fg'
            }`}
          >
            বাং
          </button>
        </div>
      </div>

      <article className="max-w-6xl mx-auto w-full rounded-2xl border border-line bg-card p-8 md:p-12 lg:p-14 text-muted text-base leading-relaxed">
        <p>{t.dateline}</p>
        <p className="mt-4">{t.recipients}</p>

        <h3 className="mt-8 text-fg text-xl font-semibold leading-snug">{t.headline}</h3>

        <p className="mt-6">{t.p1}</p>
        <p className="mt-4">{t.p2}</p>
        <p className="mt-4">{t.p3}</p>

        <p className="mt-6 font-medium text-fg">{t.scheduleLabel}</p>
        <p className="mt-2">{t.venue1}</p>
        <p className="mt-1">{t.venue2}</p>

        <p className="mt-6">“{t.quote}”</p>
        <p className="mt-1">— {t.quoteLead}</p>

        <p className="mt-6">“{t.directorQuote}”</p>
        <p className="mt-1">— {t.directorQuoteLead}</p>

        <p className="mt-6">{t.p4}</p>

        <p className="mt-6 font-medium text-fg">{t.trailerLabel}</p>
        <p className="mt-2">
          {t.trailerText}{' '}
          <a href={TRAILER_URL} target="_blank" rel="noopener noreferrer" className="underline">
            {t.trailerCta}
          </a>
        </p>

        <p className="mt-6 font-medium text-fg">{t.castLabel}</p>
        <p className="mt-2">{t.cast}</p>

        <p className="mt-6">{t.release}</p>

        <p className="mt-8">
          {t.productionLabel}: {t.production}
        </p>
        <p className="mt-2">
          {t.distLabel}: {t.dist}
        </p>
      </article>
    </section>
  )
}
