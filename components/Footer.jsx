'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Facebook,
  Instagram,
  Youtube,
  ArrowUp,
  ArrowRight,
  Globe,
  Phone
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function CompactFooter() {

  const { language } = useLanguage()

  const translations = {
    en: {
      title1: "CREATE",
      title2: "HISTORY.",
      subtitle: "Let’s build cinematic narratives that define the next era.",
      whatsapp: "WhatsApp Us",
      navigation: "Navigation",
      home: "Home",
      works: "Works",
      social: "Social",
      contact: "Contact",
      address: `Shop no -24, 480, Sarker,
R E F Tower, Gawair,
Dakshinkhan, Dhaka 1230`,
      phone: "+880 1400 87 2857",
      copyright: "© 2026 Beeteam Lab. All rights reserved."
    },
    bn: {
      title1: "ইতিহাস",
      title2: "গড়ুন।",
      subtitle: "চলুন এমন সিনেমাটিক গল্প তৈরি করি যা পরবর্তী যুগকে সংজ্ঞায়িত করবে।",
      whatsapp: "হোয়াটসঅ্যাপ করুন",
      navigation: "নেভিগেশন",
      home: "হোম",
      works: "কাজসমূহ",
      social: "সোশ্যাল",
      contact: "যোগাযোগ",
      address: `শপ নং -২৪, ৪৮০, সরকার,
আর ই এফ টাওয়ার, গাওয়াইর,
দক্ষিণখান, ঢাকা ১২৩০`,
      phone: "+৮৮০ ১৪০০ ৮৭ ২৮৫৭",
      copyright: "© ২০২৬ বিটিম ল্যাব। সর্বস্বত্ব সংরক্ষিত।"
    }
  }

  const t = translations[language]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      name: language === "bn" ? "ইনস্টাগ্রাম" : "Instagram",
      icon: <Instagram size={16} />,
      href: "https://www.instagram.com/beeteam26"
    },
    {
      name: language === "bn" ? "ফেসবুক" : "Facebook",
      icon: <Facebook size={16} />,
      href: "https://www.facebook.com/beeteam"
    },
    {
      name: language === "bn" ? "ইউটিউব" : "YouTube",
      icon: <Youtube size={16} />,
      href: "https://www.youtube.com/@BeeTeamltd"
    }
  ]

  return (
    <footer
      id="contact"
      className="relative bg-[#fafafa] pt-20 pb-8 overflow-hidden"
    >

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] bg-[#FFD700]/10 blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-16">

          <div className="space-y-5">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-extrabold leading-[1.05] tracking-tight text-black"
            >
              {t.title1} <br />
              <span className="text-[#FFD700]">{t.title2}</span>
            </motion.h2>

            <p className="text-sm text-black/50 max-w-sm">
              {t.subtitle}
            </p>
          </div>

          <motion.a
            href="https://wa.me/8801400872857"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group flex items-center gap-3 bg-black text-white px-7 py-3 text-xs font-semibold tracking-wide rounded-lg shadow-md transition-all duration-300"
          >
            {t.whatsapp}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.a>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-10 border-y border-black/5 items-start">

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-black/40 tracking-wide">
              {t.navigation}
            </h4>

            <div className="flex flex-col gap-2 text-sm">
              <motion.a href="/" whileHover={{ x: 4 }} className="text-black/70 hover:text-black transition-colors">
                {t.home}
              </motion.a>

              <motion.a href="/works" whileHover={{ x: 4 }} className="text-black/70 hover:text-black transition-colors">
                {t.works}
              </motion.a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-black/40 tracking-wide">
              {t.social}
            </h4>

            <div className="flex flex-col gap-2 text-sm">
              {socialLinks.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="text-black/70 hover:text-black transition-colors"
                >
                  {s.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-black/40 tracking-wide">
              {t.contact}
            </h4>

            <div className="flex items-start gap-3 text-black text-sm leading-relaxed whitespace-pre-line">
              <Globe size={16} className="text-[#FFD700] mt-1" />
              <div>{t.address}</div>
            </div>

            <div className="flex items-center gap-3 text-black text-sm font-medium">
              <Phone size={15} className="text-[#FFD700]" />
              <a href="tel:+8801400872857">
                {t.phone}
              </a>
            </div>

            <div className="flex gap-3 pt-2">
              {socialLinks.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 flex items-center justify-center border border-black/10 rounded-lg bg-white hover:bg-[#FFD700] transition-all duration-300 shadow-sm"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-[200px] rounded-xl overflow-hidden border border-black/10 shadow-sm">
            <iframe
              src="https://www.google.com/maps?q=REF+Tower+Gawair+Dakshinkhan+Dhaka&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              className="grayscale contrast-125"
            />
          </div>

        </div>

        {/* STATUS BAR */}
        <div className="flex justify-between items-center pt-6 text-sm">

          <div className="text-black/40">
            {t.copyright}
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 flex items-center justify-center border border-black/10 rounded-lg bg-white hover:bg-[#FFD700] transition-all duration-300"
          >
            <ArrowUp size={16} />
          </motion.button>

        </div>

      </div>
    </footer>
  )
}
