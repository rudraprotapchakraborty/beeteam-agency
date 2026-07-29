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
import MagneticButton from '@/components/ui/MagneticButton'
import Reveal, { SectionEyebrow } from '@/components/ui/Reveal'

export default function Footer() {

  const t = {
      eyebrow: 'End Roll · Contact',
      title1: 'Create',
      title2: 'History.',
      subtitle: "Let's build cinematic narratives that define the next era.",
      whatsapp: 'Begin a film',
      navigation: 'Navigation',
      home: 'Home',
      works: 'Works',
      team: 'Team',
      social: 'Social',
      contact: 'Contact',
      address: `Shop no -24, 480, Sarker,
R E F Tower, Gawair,
Dakshinkhan, Dhaka 1230`,
      phone: '+880 1400 87 2857',
      copyright: '© 2026 Beeteam Lab · All rights reserved',
      backTop: 'Back to top',
      thanks: 'A Bee Team Production',
      open: 'Open · 24/7 inbox',
    }
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram size={16} strokeWidth={1.8} />,
      href: 'https://www.instagram.com/beeteam26',
    },
    {
      name: 'Facebook',
      icon: <Facebook size={16} strokeWidth={1.8} />,
      href: 'https://www.facebook.com/beeteam',
    },
    {
      name: 'YouTube',
      icon: <Youtube size={16} strokeWidth={1.8} />,
      href: 'https://www.youtube.com/@BeeTeamltd',
    },
  ]

  return (
    <footer id="contact" className="relative bg-page-2 text-fg overflow-hidden border-t border-line">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb top-0 left-1/4 w-[500px] h-[500px] bg-gold/[0.07]" />
        <div className="glow-orb bottom-0 right-0 w-[400px] h-[400px] bg-gold/[0.04]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-20 md:pt-28">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 items-end">
          <Reveal className="lg:col-span-8">
            <SectionEyebrow index="/09" label={t.eyebrow} />
            <h2 className="h-display text-[clamp(52px,10vw,140px)] leading-[0.86] text-fg">
              {t.title1}{' '}
              <span className="text-(--gold-text)">{t.title2}</span>
            </h2>
            <p className="text-base text-muted max-w-md mt-6 leading-relaxed">{t.subtitle}</p>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-4">
            <MagneticButton
              href="https://wa.me/8801400872857"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-between gap-3 bg-gold-bright text-black px-7 py-5 text-sm font-extrabold uppercase tracking-[0.2em] rounded-full shadow-gold sheen overflow-hidden"
            >
              <span className="relative z-10 font-mono">{t.whatsapp}</span>
              <ArrowRight
                size={20}
                strokeWidth={2.5}
                className="relative z-10 group-hover:translate-x-1 transition-transform"
              />
            </MagneticButton>
            <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-subtle">
              {t.open}
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 py-10 border-y border-line">
          <div className="md:col-span-2 space-y-5">
            <h4 className="font-mono text-[10px] text-subtle uppercase tracking-[0.3em]">
              {t.navigation}
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <FooterLink href="/">{t.home}</FooterLink>
              <FooterLink href="/#works">{t.works}</FooterLink>
              <FooterLink href="/team">{t.team}</FooterLink>
            </div>
          </div>

          <div className="md:col-span-2 space-y-5">
            <h4 className="font-mono text-[10px] text-subtle uppercase tracking-[0.3em]">
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

          <div className="md:col-span-4 space-y-5 col-span-2">
            <h4 className="font-mono text-[10px] text-subtle uppercase tracking-[0.3em]">
              {t.contact}
            </h4>
            <div className="flex items-start gap-3 text-sm leading-relaxed whitespace-pre-line text-muted">
              <MapPin size={14} className="text-(--gold-text) mt-1 shrink-0" />
              <div>{t.address}</div>
            </div>
            <a
              href="tel:+8801400872857"
              className="flex items-center gap-3 text-sm font-medium text-muted hover:text-(--gold-text) transition-colors"
            >
              <Phone size={14} className="text-(--gold-text)" />
              {t.phone}
            </a>
            <div className="flex gap-2 pt-2">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center border border-line rounded-xl bg-fill-soft hover:bg-gold-bright hover:text-black hover:border-gold-bright transition-all duration-300"
                  aria-label={s.name}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 col-span-2 relative w-full h-[220px] rounded-2xl overflow-hidden border border-line group">
            <iframe
              src="https://www.google.com/maps?q=REF+Tower+Gawair+Dakshinkhan+Dhaka&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              title="BeeTeam HQ map"
              className="grayscale contrast-125 brightness-90 invert hue-rotate-180"
            />
            <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 backdrop-blur-sm font-mono text-[9px] uppercase tracking-[0.25em] text-gold-bright rounded-md">
              <Globe size={10} className="inline mr-1.5" />
              HQ · Dhaka
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 pb-10 gap-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-subtle">
            {t.copyright}
          </div>

          <a
            href="https://www.creativesurf.agency/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-subtle group-hover:text-fg transition-colors">
              Powered by Creative Surf
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.creativesurf.agency/logo.png"
              alt="Creative Surf Agency"
              className="h-5 w-auto object-contain"
            />
          </a>

          <div className="flex items-center gap-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-(--gold-text) hidden md:block">
              {t.thanks}
            </div>
            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="group flex items-center gap-2 px-4 py-2.5 border border-line rounded-full bg-fill-soft hover:bg-gold-bright hover:text-black hover:border-gold-bright transition-all duration-300"
            >
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] font-bold">
                {t.backTop}
              </span>
            </motion.button>
          </div>
        </div>
      </div>
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
      className="inline-flex items-center text-muted hover:text-(--gold-text) transition-colors group"
    >
      <span className="opacity-0 group-hover:opacity-100 transition mr-1.5 text-(--gold-text)">→</span>
      {children}
    </motion.a>
  )
}
