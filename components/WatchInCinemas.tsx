'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, MapPin, Apple, Smartphone } from 'lucide-react'

type CinemaLink = {
  label: string
  href: string
  icon: 'web' | 'android' | 'ios'
}

type Cinema = {
  key: string
  name: string
  logo: string
  tagline: string
  links: CinemaLink[]
}

const cinemas: Cinema[] = [
  {
    key: 'star',
    name: 'Star Cineplex',
    logo: '/star.jpeg',
    tagline: 'Book your seat online',
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
    tagline: 'Get tickets on the app',
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
  return (
    <div
      className={`relative group bg-[#faf8f3] border border-black/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#FFD700]/50 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.25)] ${
        compact ? 'p-5' : 'p-6 md:p-7'
      }`}
    >
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
            {cinema.tagline}
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
  return (
    <section id="watch-in-cinemas" className="relative paper-tex py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-full max-w-2xl paper-tex bg-[#faf8f3] border border-black/10 rounded-3xl shadow-[0_24px_70px_-15px_rgba(0,0,0,0.12)] overflow-hidden"
        >
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
              Watch in Cinemas
            </h2>
            <p className="font-serif-d italic text-black/60 mb-7">
              The University of Chankharpul · Now Screening
            </p>

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
