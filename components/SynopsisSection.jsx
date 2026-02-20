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
      text: `In a third-world university where student politics is a ruthless gamble, a nameless student rises to power through an unexpected symbol—a horse.

What begins as absurdity quickly becomes influence, status, and political capital. But as ambition grows, friendship collapses.

In a world built on selfishness, every rise demands a sacrifice.


Achievement Unlock for Bee Team

The University of Chankharpul set a record by becoming the first film in the history of Bangladeshi cinema to achieve both Best Film awards at the Dhaka International Film Festival 2026 and Amar Vasha Cholochitro Utshob 2026, competing alongside the best films ever produced in Bangladesh.`
    },
    bn: {
      presents: "বি টিম উপস্থাপন করছে",
      title: "সিনোপসিস",
      sideTitle: "দ্য ইউনিভার্সিটি অব চানখারপুল",
      text: `তৃতীয় বিশ্বের একটি বিশ্ববিদ্যালয়ে, যেখানে ছাত্ররাজনীতি এক নির্মম জুয়ার মতো, এক নামহীন শিক্ষার্থী অপ্রত্যাশিত এক প্রতীক—একটি ঘোড়া—এর মাধ্যমে ক্ষমতার শিখরে উঠতে শুরু করে।

যা শুরু হয় অযৌক্তিকতা দিয়ে, তা দ্রুতই প্রভাব, মর্যাদা এবং রাজনৈতিক পুঁজিতে রূপ নেয়। কিন্তু উচ্চাকাঙ্ক্ষা বাড়ার সাথে সাথে বন্ধুত্ব ভেঙে পড়ে।

এক স্বার্থপর পৃথিবীতে, প্রতিটি উত্থানের জন্যই লাগে একটি ত্যাগ।


বি টিমের অর্জন

দ্য ইউনিভার্সিটি অব চানখারপুল বাংলাদেশি সিনেমার ইতিহাসে প্রথম চলচ্চিত্র হিসেবে একসাথে ধাকা ইন্টারন্যাশনাল ফিল্ম ফেস্টিভ্যাল ২০২৬ এবং আমার ভাষা চলচ্চিত্র উৎসব ২০২৬-এ সেরা চলচ্চিত্র পুরস্কার অর্জন করে একটি রেকর্ড স্থাপন করেছে, যেখানে এটি বাংলাদেশের ইতিহাসের সেরা নির্মিত চলচ্চিত্রগুলোর সাথে প্রতিযোগিতা করেছে।`
    }
  }

  const t = translations[language]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25
      }
    }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section className="relative bg-black py-24 md:py-28 overflow-hidden">

      {/* Animated Background */}
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0"
      >
        <img
          src="/synopsis.jpg"
          alt="Synopsis Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-6xl mx-auto px-6"
      >

        <div className="grid lg:grid-cols-12 gap-12">

          {/* LEFT COLUMN */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-4 font-bold"
            style={{ color: '#FFD700' }}
          >
            <p className="text-sm tracking-[0.3em] uppercase mb-6">
              {t.presents}
            </p>

            <h2 className="text-5xl md:text-6xl leading-tight">
              {t.title}
            </h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mt-8 h-[3px]"
              style={{ backgroundColor: '#FFD700' }}
            />
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-8 font-semibold"
            style={{ color: '#FFD700' }}
          >
            <p className="text-lg md:text-xl leading-relaxed whitespace-pre-line">
              {t.text}
            </p>
          </motion.div>

        </div>

        {/* Floating Vertical Side Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 0.4, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hidden xl:block absolute right-6 top-1/2 -translate-y-1/2 rotate-90 origin-right tracking-[0.5em] text-sm font-bold select-none"
          style={{ color: '#FFD700' }}
        >
          {t.sideTitle}
        </motion.div>

      </motion.div>
    </section>
  )
}