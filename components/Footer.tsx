'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUp,
  Facebook,
  Globe,
  Instagram,
  MapPin,
  Phone,
  Youtube,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { language } = useLanguage()

  const translations = {
    en: {
      eyebrow: 'End Roll · 09',
      title1: 'Create',
      title2: 'History.',
      subtitle: "Let's build cinematic narratives that define the next era.",
      whatsapp: 'Begin a film',
      navigation: 'Navigation',
      home: 'Home',
      works: 'Works',
      social: 'Social',
      contact: 'Contact',
      address: `Shop no -24, 480, Sarker,
R E F Tower, Gawair,
Dakshinkhan, Dhaka 1230`,
      phone: '+880 1400 87 2857',
      copyright: '© 2026 Beeteam Lab · All rights reserved',
      rolling: 'CRAFTED IN DHAKA · BANGLADESH · DIRECTED BY MONIRUL HAQUE AKASH · BEE TEAM STUDIOS · EST. 2026',
      backTop: 'Back to top',
      thanks: 'A Bee Team Production',
    },
    bn: {
      eyebrow: 'এন্ড রোল · ০৯',
      title1: 'ইতিহাস',
      title2: 'গড়ুন।',
      subtitle: 'চলুন এমন সিনেমাটিক গল্প তৈরি করি যা পরবর্তী যুগকে সংজ্ঞায়িত করবে।',
      whatsapp: 'একটি ফিল্ম শুরু করুন',
      navigation: 'নেভিগেশন',
      home: 'হোম',
      works: 'কাজসমূহ',
      social: 'সোশ্যাল',
      contact: 'যোগাযোগ',
      address: `শপ নং -২৪, ৪৮০, সরকার,
আর ই এফ টাওয়ার, গাওয়াইর,
দক্ষিণখান, ঢাকা ১২৩০`,
      phone: '+৮৮০ ১৪০০ ৮৭ ২৮৫৭',
      copyright: '© ২০২৬ বিটিম ল্যাব · সর্বস্বত্ব সংরক্ষিত',
      rolling: 'ঢাকায় নির্মিত · বাংলাদেশ · পরিচালক মনিরুল হক আকাশ · বি টিম স্টুডিওস · ২০২৬',
      backTop: 'উপরে যান',
      thanks: 'একটি বি টিম প্রোডাকশন',
    },
  } as const

  const t = translations[language]

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const socialLinks = [
    {
      name: language === 'bn' ? 'ইনস্টাগ্রাম' : 'Instagram',
      icon: <Instagram size={16} strokeWidth={1.8} />,
      href: 'https://www.instagram.com/beeteam26',
    },
    {
      name: language === 'bn' ? 'ফেসবুক' : 'Facebook',
      icon: <Facebook size={16} strokeWidth={1.8} />,
      href: 'https://www.facebook.com/beeteam',
    },
    {
      name: language === 'bn' ? 'ইউটিউব' : 'YouTube',
      icon: <Youtube size={16} strokeWidth={1.8} />,
      href: 'https://www.youtube.com/@BeeTeamltd',
    },
  ]

  return (
    <footer id="contact" className="relative bg-[#0a0a0a] text-white pt-12 overflow-hidden grain">
      {/* End-roll marquee */}
      <div className="relative bg-[#FFD700] text-black overflow-hidden border-y border-black/20">
        <div className="marquee-track flex items-center py-3 whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="font-display text-2xl tracking-[0.18em] uppercase px-8 flex items-center gap-8"
            >
              {t.rolling}
              <span className="text-black/50">★</span>
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute bottom-[10%] left-[10%] w-[40%] h-[40%] bg-[#FFD700]/15 blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-14">
        {/* HERO CTA */}
        <div className="grid lg:grid-cols-12 gap-8 mb-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FFD700]">
                /09
              </span>
              <span className="h-px w-12 bg-[#FFD700]/40" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                {t.eyebrow}
              </span>
            </div>
            <h2 className="h-display text-[clamp(48px,8vw,128px)] leading-[0.86] text-white whitespace-nowrap">
              {t.title1} <span className="text-[#FFD700]">{t.title2}</span>
            </h2>
            <p className="text-base text-white/65 max-w-md mt-6">{t.subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 lg:col-start-9"
          >
            <motion.a
              href="https://wa.me/8801400872857"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex w-full items-center justify-between gap-3 bg-[#FFD700] text-black px-7 py-5 text-sm font-extrabold uppercase tracking-[0.22em] rounded-full shadow-[0_18px_50px_-15px_rgba(255,215,0,0.6)] sheen overflow-hidden"
            >
              <span className="relative z-10 font-mono">{t.whatsapp}</span>
              <ArrowRight
                size={20}
                strokeWidth={2.5}
                className="relative z-10 group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
            <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
              <span className="dot-pulse" />
              <span>Open · 24/7 inbox</span>
            </div>
          </motion.div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 py-8 border-y border-white/10">
          {/* Navigation */}
          <div className="md:col-span-2 space-y-5">
            <h4 className="font-mono text-[10px] font-medium text-white/40 uppercase tracking-[0.3em]">
              {t.navigation}
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <FooterLink href="/">{t.home}</FooterLink>
              <FooterLink href="/works">{t.works}</FooterLink>
            </div>
          </div>

          {/* Social */}
          <div className="md:col-span-2 space-y-5">
            <h4 className="font-mono text-[10px] font-medium text-white/40 uppercase tracking-[0.3em]">
              {t.social}
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              {socialLinks.map((s) => (
                <FooterLink key={s.href} href={s.href}>
                  {s.name}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 space-y-5">
            <h4 className="font-mono text-[10px] font-medium text-white/40 uppercase tracking-[0.3em]">
              {t.contact}
            </h4>

            <div className="flex items-start gap-3 text-sm leading-relaxed whitespace-pre-line text-white/85">
              <MapPin size={14} className="text-[#FFD700] mt-1 shrink-0" strokeWidth={2} />
              <div>{t.address}</div>
            </div>

            <a
              href="tel:+8801400872857"
              className="flex items-center gap-3 text-sm font-medium text-white/85 hover:text-[#FFD700] transition-colors"
            >
              <Phone size={14} className="text-[#FFD700]" strokeWidth={2} />
              {t.phone}
            </a>

            <div className="flex gap-2 pt-3">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center border border-white/15 rounded-lg bg-white/[0.04] hover:bg-[#FFD700] hover:text-black hover:border-[#FFD700] transition-all duration-300"
                  aria-label={s.name}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="md:col-span-4 relative w-full h-[220px] rounded-xl overflow-hidden border border-white/10 group">
            <iframe
              src="https://www.google.com/maps?q=REF+Tower+Gawair+Dakshinkhan+Dhaka&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              className="grayscale contrast-125 brightness-90 invert hue-rotate-180"
            />
            <div className="absolute inset-0 bg-[#FFD700]/0 group-hover:bg-[#FFD700]/5 pointer-events-none transition-colors duration-500" />
            <div className="absolute top-3 left-3 px-2 py-1 bg-black/80 backdrop-blur-sm font-mono text-[9px] uppercase tracking-[0.25em] text-[#FFD700] rounded">
              <Globe size={10} className="inline mr-1.5" />
              HQ · Dhaka
            </div>
            {/* corner brackets */}
            <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#FFD700]/60 z-10 pointer-events-none" />
            <span className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#FFD700]/60 z-10 pointer-events-none" />
            <span className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#FFD700]/60 z-10 pointer-events-none" />
            <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#FFD700]/60 z-10 pointer-events-none" />
          </div>
        </div>

        {/* STATUS BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 pb-6 gap-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
            {t.copyright}
          </div>

          {/* Powered by Creative Surf */}
          <a
            href="https://www.creativesurf.agency/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 opacity-80 hover:opacity-100 transition-opacity duration-300"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-colors">
              Powered by
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/70 group-hover:text-white transition-colors">
              Creative Surf
            </span>
            <img
              src="https://www.creativesurf.agency/logo.png"
              alt="Creative Surf Agency"
              className="h-5 w-auto object-contain"
            />
          </a>

          <div className="flex items-center gap-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FFD700] hidden md:block">
              {t.thanks}
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-4 py-2.5 border border-white/15 rounded-full bg-white/[0.04] hover:bg-[#FFD700] hover:text-black hover:border-[#FFD700] transition-all duration-300"
            >
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] font-bold">
                {t.backTop}
              </span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Film strip bottom */}
      <div className="film-strip h-6 opacity-90" />
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      whileHover={{ x: 4 }}
      className="inline-flex items-center text-white/70 hover:text-[#FFD700] transition-colors group"
    >
      <span className="opacity-0 group-hover:opacity-100 transition mr-1">→</span>
      {children}
    </motion.a>
  )
}
