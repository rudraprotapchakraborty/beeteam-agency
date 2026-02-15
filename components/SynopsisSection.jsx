'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function SynopsisSection() {
  const { language } = useLanguage()

  const translations = {
    en: {
      presents: "Bee Team Presents",
      title: "Synopsis",
      sideTitle: "THE UNIVERSITY OF CHANKHARPUL",
      text: `Unlike universities in most parts of the world, a third-world institution like The University of Chankharpul becomes a gambling arena where ambitious students sacrifice their youth, careers, and principles for a single dream: a political post in a government-backed student wing. A post that promises shortcuts to influence, corruption, and future power.

The film follows a group of friends who enter university as brothers, eating together, marching together, fighting together. But slowly, ambition rips them apart. They begin to compete silently, desperately, to rise in the political hierarchy. Friendship here becomes nothing more than a temporary alliance built only to be broken.

Our protagonist has no name; also no other character does. They are known only as “vai”, “mama”, etc, here, identities shaped by position. Our protagonist dreams of rising in politics but lacks the key tool of networking: a Motorbike. Without family support or income, he sinks into depression, trying every humiliating way to earn one.

Then one day, he returns to campus riding a Horse. Absurdity becomes power. The horse instantly transforms him into a symbol: stylish, rebellious, and influential. The University President of the student wing notices him, elevates him, praises him, uses him. With the horse comes money, protection, respect. The protagonist’s world flips overnight. Soon he forgets who he started with. Friends turn into shadows behind him. He becomes the selfish figure he once despised.

Day by day it becomes clear that, in this world, nobody climbs without stepping on someone else.`
    },
    bn: {
      presents: "বি টিম উপস্থাপন করছে",
      title: "সিনোপসিস",
      sideTitle: "দ্য ইউনিভার্সিটি অব চানখারপুল",
      text: `বিশ্বের অধিকাংশ বিশ্ববিদ্যালয়ের তুলনায়, তৃতীয় বিশ্বের একটি প্রতিষ্ঠান যেমন দ্য ইউনিভার্সিটি অব চানখারপুল হয়ে ওঠে এক জুয়ার মঞ্চ, যেখানে উচ্চাকাঙ্ক্ষী শিক্ষার্থীরা তাদের যৌবন, ক্যারিয়ার এবং নীতিবোধ বিসর্জন দেয় একমাত্র স্বপ্নের জন্য: সরকার-সমর্থিত ছাত্র সংগঠনে একটি রাজনৈতিক পদ। একটি পদ যা প্রভাব, দুর্নীতি এবং ভবিষ্যৎ ক্ষমতার শর্টকাটের প্রতিশ্রুতি দেয়।

চলচ্চিত্রটি একদল বন্ধুর গল্প অনুসরণ করে যারা বিশ্ববিদ্যালয়ে প্রবেশ করে ভাইয়ের মতো—একসাথে খায়, একসাথে মিছিল করে, একসাথে লড়াই করে। কিন্তু ধীরে ধীরে উচ্চাকাঙ্ক্ষা তাদের আলাদা করে দেয়। তারা নীরবে, মরিয়া হয়ে রাজনৈতিক স্তরে উপরে উঠতে প্রতিযোগিতা শুরু করে। এখানে বন্ধুত্ব কেবল একটি অস্থায়ী জোট, যা ভাঙার জন্যই তৈরি।

আমাদের প্রধান চরিত্রের কোনো নাম নেই; অন্যদেরও নেই। এখানে তারা পরিচিত “ভাই”, “মামা” ইত্যাদি নামে—পরিচয় নির্ধারিত হয় অবস্থান দিয়ে। প্রধান চরিত্র রাজনীতিতে উত্থানের স্বপ্ন দেখে, কিন্তু নেটওয়ার্কিংয়ের প্রধান মাধ্যম—একটি মোটরবাইক—তার নেই। পারিবারিক সহায়তা বা আয় ছাড়া সে হতাশায় ডুবে যায়, একটি পাওয়ার জন্য অপমানজনক সব পথ চেষ্টা করে।

তারপর একদিন, সে ক্যাম্পাসে ফিরে আসে একটি ঘোড়ায় চড়ে। অযৌক্তিকতা হয়ে ওঠে ক্ষমতা। ঘোড়াটি তাকে মুহূর্তেই একটি প্রতীকে রূপান্তরিত করে—স্টাইলিশ, বিদ্রোহী, প্রভাবশালী। ছাত্র সংগঠনের সভাপতি তাকে লক্ষ্য করে, উন্নীত করে, প্রশংসা করে, ব্যবহার করে। ঘোড়ার সাথে আসে অর্থ, সুরক্ষা, সম্মান। প্রধান চরিত্রের জগৎ এক রাতেই বদলে যায়। শীঘ্রই সে ভুলে যায় কার সাথে শুরু করেছিল। বন্ধুরা তার পেছনে ছায়ায় পরিণত হয়। সে হয়ে ওঠে সেই স্বার্থপর মানুষ, যাকে সে একসময় ঘৃণা করত।

দিন দিন স্পষ্ট হয়ে ওঠে—এই পৃথিবীতে কেউই কারও ওপর পা না দিয়ে উপরে উঠতে পারে না।`
    }
  }

  const t = translations[language]

  return (
    <section className="relative bg-black text-white py-20 md:py-24 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/synopsis.jpg"
          alt="Synopsis Background"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/15 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-12 gap-10">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-white/50 mb-4">
              {t.presents}
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              {t.title}
            </h2>

            <div className="mt-6 w-16 h-[2px] bg-[#FFD700]" />
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md">
              <p className="text-sm md:text-[15px] leading-relaxed text-white/85 whitespace-pre-line">
                {t.text}
              </p>
            </div>
          </motion.div>

        </div>

        {/* Vertical Side Text */}
        <div className="hidden xl:block absolute right-6 top-1/2 -translate-y-1/2 rotate-90 origin-right text-white/10 tracking-[0.5em] text-xs select-none">
          {t.sideTitle}
        </div>

      </div>
    </section>
  )
}
