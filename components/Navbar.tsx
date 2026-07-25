'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion'
import { LogOut, Menu, Moon, Sun, Ticket, X } from 'lucide-react'
import MagneticButton from '@/components/ui/MagneticButton'
import Avatar from '@/components/ui/Avatar'
import { useTheme } from '@/context/ThemeContext'
import { useAuth } from '@/context/AuthContext'
import { EASE_OUT_EXPO } from '@/lib/motion'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Works', href: '/works' },
  { name: 'Team', href: '/team' },
]

export default function Navbar() {
  const { scrollY, scrollYProgress } = useScroll()
  const { theme, toggleTheme } = useTheme()
  const { user, logout } = useAuth()
  const router = useRouter()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)
  const [lastY, setLastY] = useState(0)

  useMotionValueEvent(scrollY, 'change', (y) => {
    const dy = y - lastY
    setScrolled(y > 40)
    if (y > 120 && dy > 4 && !mobileOpen) setHidden(true)
    else if (dy < -4 || y < 80) setHidden(false)
    setLastY(y)
  })

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{
          y: hidden ? -120 : 0,
          opacity: 1,
        }}
        transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
        className="fixed top-0 left-0 right-0 z-[1000] flex justify-center px-3 sm:px-4 pt-3 sm:pt-4 pointer-events-none"
      >
        <motion.div
          className={`pointer-events-auto relative flex w-full max-w-6xl items-center justify-between gap-3 rounded-full px-3 sm:px-5 py-2.5 transition-shadow duration-500 glass-strong ${
            scrolled ? 'shadow-premium' : ''
          }`}
        >
          <motion.div
            className="absolute bottom-0 left-6 right-6 h-px origin-left rounded-full bg-gradient-to-r from-[var(--brand)] via-[var(--brand)] to-transparent"
            style={{ scaleX: scrollYProgress }}
          />

          <a href="/" className="relative h-8 w-24 sm:h-9 sm:w-28 shrink-0 group">
            <Image
              src="/logo-white.png"
              alt="Beeteam Logo"
              fill
              sizes="112px"
              className="logo-dark object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              priority
            />
            <Image
              src="/logo-black.png"
              alt="Beeteam Logo"
              fill
              sizes="112px"
              className="logo-light object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              priority
            />
          </a>

          <nav className="hidden md:flex items-center gap-0.5 rounded-full p-1 border border-line bg-fill-soft">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHovered(link.name)}
                onMouseLeave={() => setHovered(null)}
                className="relative px-5 py-2 text-[10px] font-bold uppercase tracking-[0.22em] z-10"
              >
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    hovered === link.name ? 'text-gold-bright' : 'text-muted'
                  }`}
                >
                  {link.name}
                </span>
                {hovered === link.name && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-fill-hover"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="flex items-center justify-center w-9 h-9 rounded-full border border-line bg-fill-soft text-fg hover:border-gold/40 hover:text-gold-bright transition-colors"
            >
              {theme === 'dark' ? <Sun size={15} strokeWidth={2.2} /> : <Moon size={15} strokeWidth={2.2} />}
            </button>

            <MagneticButton
              href="/tickets"
              className="hidden sm:inline-flex group items-center gap-2 bg-gold-bright text-ink px-4 py-2 rounded-full sheen overflow-hidden shadow-gold"
              strength={0.25}
            >
              <Ticket size={13} strokeWidth={2.5} className="relative z-10" />
              <span className="relative z-10 text-[10px] font-extrabold uppercase tracking-[0.2em]">
                Buy Tickets
              </span>
            </MagneticButton>

            {user ? (
              <>
                <a
                  href="/dashboard"
                  aria-label="Your dashboard"
                  className="hidden sm:inline-flex items-center rounded-full transition-transform hover:scale-105"
                >
                  <Avatar name={user.fullName} size={34} />
                </a>
                <button
                  type="button"
                  onClick={async () => {
                    await logout()
                    router.push('/')
                  }}
                  aria-label="Sign out"
                  className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-full border border-line bg-fill-soft text-fg hover:border-gold/40 hover:text-gold-bright transition-colors"
                >
                  <LogOut size={15} strokeWidth={2.2} />
                </button>
              </>
            ) : (
              <a
                href="/login"
                className="hidden sm:inline-flex items-center rounded-full border border-line bg-fill-soft px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-fg hover:border-gold/40 hover:text-gold-bright transition-colors"
              >
                Sign in
              </a>
            )}

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={mobileOpen}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full text-fg hover:bg-fill-hover transition-colors"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-[999] bg-page/80 backdrop-blur-xl overflow-y-auto pb-10"
            onClick={() => setMobileOpen(false)}
          >
            <motion.nav
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
              onClick={(e) => e.stopPropagation()}
              className="mt-20 mx-4 glass-strong rounded-3xl p-4 flex flex-col gap-1 shadow-premium"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  onClick={() => setMobileOpen(false)}
                  className="px-5 py-4 rounded-2xl text-sm font-bold uppercase tracking-[0.2em] text-fg hover:bg-fill-soft hover:text-gold-bright transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <button
                type="button"
                onClick={() => {
                  toggleTheme()
                }}
                className="mx-1 mt-1 flex items-center justify-center gap-2 rounded-full border border-line px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-fg"
              >
                {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
                {theme === 'dark' ? 'Light mode' : 'Dark mode'}
              </button>
              <a
                href={user ? '/dashboard' : '/login'}
                onClick={() => setMobileOpen(false)}
                className="mx-1 mt-1 flex items-center gap-3 rounded-2xl border border-line px-4 py-3 text-fg hover:bg-fill-soft transition-colors"
              >
                {user ? (
                  <>
                    <Avatar name={user.fullName} size={32} />
                    <span className="flex flex-col text-left">
                      <span className="text-sm font-semibold">{user.fullName}</span>
                      <span className="text-[10px] uppercase tracking-[0.18em] text-subtle">
                        View dashboard
                      </span>
                    </span>
                  </>
                ) : (
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.2em]">
                    Sign in / Register
                  </span>
                )}
              </a>
              <a
                href="/tickets"
                onClick={() => setMobileOpen(false)}
                className="mt-1 mx-1 flex items-center justify-center gap-2 rounded-full bg-gold-bright text-ink px-5 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.2em]"
              >
                <Ticket size={14} />
                Buy Tickets
              </a>
              {user && (
                <button
                  type="button"
                  onClick={async () => {
                    setMobileOpen(false)
                    await logout()
                    router.push('/')
                  }}
                  className="mx-1 mt-1 flex items-center justify-center gap-2 rounded-full border border-line px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-fg hover:bg-fill-soft transition-colors"
                >
                  <LogOut size={14} />
                  Sign out
                </button>
              )}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
