'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, MapPin, Apple, Smartphone } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

type CinemaLink = {
  label: string
  href: string
  icon: 'web' | 'android' | 'ios'
}

type Cinema = {
  key: string
  name: string
  logo: string
  tagline: { en: string; bn: string }
  links: CinemaLink[]
}

const cinemas: Cinema[] = [
  {
    key: 'star',
    name: 'Star Cineplex',
    logo: '/star.jpeg',
    tagline: {
      en: 'Book your seat online',
      bn: 'অনলাইনে আসন বুক করুন',
    },
    links: [
      {
        label: 'Book Online',
        href: 'https://www.cineplexbd.com/detail/the-university-of-chankharpool',
        icon: 'web',
      },
    ],
  },
  {
    key: 'lions',
    name: 'Lions Cinemas',
    logo: '/lion.jpeg',
    tagline: {
      en: 'Get tickets on the app',
      bn: 'অ্যাপে টিকিট নিন',
    },
    links: [
      {
        label: 'Android',
        href: 'https://play.google.com/store/apps/details?id=com.pulsetechltd.lion_cinema&hl=en',
        icon: 'android',
      },
      {
        label: 'iOS',
        href: 'https://apps.apple.com/us/app/lion-cinema/id1644910272',
        icon: 'ios',
      },
    ],
  },
]

function LinkIcon({ icon }: { icon: CinemaLink['icon'] }) {
  if (icon === 'android') return <Smartphone size={13} strokeWidth={2.5} />
  if (icon === 'ios') return <Apple size={13} strokeWidth={2.5} />
  return <ArrowUpRight size={13} strokeWidth={2.5} />
}

function CinemaCard({ cinema, compact = false }: { cinema: Cinema; compact?: boolean }) {
  const { language } = useLanguage()

  return (
    <div
      className={`relative group bg-[#faf8f3] border border-black/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#FFD700]/50 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.25)] ${
        compact ? 'p-5' : 'p-6 md:p-7'
      }`}
    >
      {/* Corner brackets */}
      <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-center gap-4 mb-5">
        <div
          className={`relative shrink-0 rounded-xl overflow-hidden border border-black/10 bg-white ${
            compact ? 'h-12 w-12' : 'h-16 w-16'
          }`}
        >
          <Image
            src={cinema.logo}
            alt={`${cinema.name} logo`}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <h3 className={`font-bold text-black leading-tight ${compact ? 'text-base' : 'text-lg md:text-xl'}`}>
            {cinema.name}
          </h3>
          <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-black/45 mt-1">
            {cinema.tagline[language]}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {cinema.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center gap-2 bg-[#0a0a0a] text-[#f4f1ea] px-4 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] hover:bg-[#FFD700] hover:text-black transition-colors"
          >
            <LinkIcon icon={link.icon} />
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default function WatchInCinemas() {
  const { language } = useLanguage()

  const t = {
    en: {
      title: 'Watch in Cinemas',
      sub: 'The University of Chankharpul · Now Screening',
      eyebrow: 'Where to Watch',
    },
    bn: {
      title: 'প্রেক্ষাগৃহে দেখুন',
      sub: 'দ্য ইউনিভার্সিটি অফ চানখারপুল · এখন প্রদর্শিত',
      eyebrow: 'কোথায় দেখবেন',
    },
  }[language]

  return (
    <section id="watch-in-cinemas" className="relative paper-tex py-20 overflow-hidden">
      {/* Background flares */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[8%] w-[35%] h-[35%] bg-[#FFD700]/10 blur-[160px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[30%] h-[30%] bg-amber-100/30 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex justify-center">
        {/* Ticket Booking Card (formerly the CinemaPopup modal) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-full max-w-2xl paper-tex bg-[#faf8f3] border border-black/10 rounded-3xl shadow-[0_24px_70px_-15px_rgba(0,0,0,0.12)] overflow-hidden"
        >
          {/* Top tape */}
          <div className="bg-[#0a0a0a] text-[#f4f1ea] text-[9px] font-mono uppercase tracking-[0.3em] py-2 px-6 flex justify-between items-center border-b border-[#FFD700]/20">
            <span className="flex items-center gap-2">
              <span className="dot-pulse" /> Now Reeling
            </span>
            <span className="opacity-60 hidden sm:block">24fps · 2.39:1 · DCP</span>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FFD700]">
                /Tickets
              </span>
              <span className="h-px w-10 bg-[#FFD700]/40" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/45 flex items-center gap-1">
                <MapPin size={11} /> Dhaka · BD
              </span>
            </div>

            <h2 className="h-display text-[clamp(32px,6vw,56px)] text-black leading-[0.9] mb-2">
              {t.title}
            </h2>
            <p className="font-serif-d italic text-black/60 mb-7">{t.sub}</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {cinemas.map((c) => (
                <CinemaCard key={c.key} cinema={c} compact />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
