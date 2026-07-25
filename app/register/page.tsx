'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowRight, Loader2, Eye, EyeOff } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import { EASE_OUT_EXPO } from '@/lib/motion'

export default function RegisterPage() {
  const { register } = useAuth()
  const router = useRouter()
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await register(fullName, phone, password)
      router.push('/dashboard')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
      setLoading(false)
    }
  }

  return (
    <AuthShell title="Create account" subtitle="Join BeeTeam to book screenings.">
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <Field
          label="Full name"
          value={fullName}
          onChange={setFullName}
          placeholder="Rafiul Karim"
          autoComplete="name"
        />
        <Field
          label="Phone number"
          value={phone}
          onChange={setPhone}
          placeholder="01712345678"
          inputMode="tel"
          autoComplete="tel"
        />
        <Field
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="At least 6 characters"
          autoComplete="new-password"
        />

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-gold-bright text-ink px-6 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.2em] shadow-gold disabled:opacity-60 transition-opacity"
        >
          {loading ? <Loader2 size={15} className="animate-spin" /> : <ArrowRight size={15} />}
          {loading ? 'Creating…' : 'Create account'}
        </button>
      </form>

      <p className="mt-6 text-sm text-muted">
        Already have an account?{' '}
        <a href="/login" className="text-gold-bright link-underline font-semibold">
          Sign in
        </a>
      </p>
    </AuthShell>
  )
}

/* ---- shared auth layout + field (used by login page too) ---- */

export function AuthShell({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-5 py-28">
      <div className="glow-orb -z-0 top-24 left-1/2 -translate-x-1/2 h-72 w-72 bg-[var(--brand)]/10" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
        className="relative z-10 w-full max-w-md glass-strong rounded-3xl p-6 sm:p-10 shadow-premium"
      >
        <p className="label-mono text-gold-bright mb-3">BeeTeam Access</p>
        <h1 className="font-serif-d text-3xl sm:text-4xl text-fg mb-2">{title}</h1>
        <p className="text-sm text-muted mb-8">{subtitle}</p>
        {children}
      </motion.div>
    </section>
  )
}

export function Field({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  autoComplete,
  inputMode,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  type?: string
  placeholder?: string
  autoComplete?: string
  inputMode?: 'tel' | 'text' | 'numeric'
}) {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === 'password'
  const actualType = isPassword ? (showPassword ? 'text' : 'password') : type

  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-subtle">{label}</span>
      <div className="relative w-full">
        <input
          type={actualType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          inputMode={inputMode}
          required
          className={`w-full rounded-xl border border-line bg-fill-soft py-3 pl-4 ${
            isPassword ? 'pr-11' : 'pr-4'
          } text-sm text-fg placeholder:text-faint outline-none transition-colors focus:border-gold/50 focus:bg-fill-hover`}
        />
        {isPassword && value.length > 0 && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-subtle hover:text-gold-bright transition-colors cursor-pointer"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
      </div>
    </label>
  )
}
