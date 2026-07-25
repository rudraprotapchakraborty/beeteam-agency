'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowRight, Loader2 } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import { AuthShell, Field } from '@/app/register/page'

export default function LoginPage() {
  return (
    <Suspense fallback={<AuthShell title="Sign in" subtitle="Loading…">{null}</AuthShell>}>
      <LoginForm />
    </Suspense>
  )
}

function LoginForm() {
  const { login } = useAuth()
  const router = useRouter()
  const params = useSearchParams()
  const next = params.get('next') || '/dashboard'
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(phone, password)
      router.push(next)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
      setLoading(false)
    }
  }

  return (
    <AuthShell title="Sign in" subtitle="Welcome back. Access your tickets and profile.">
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
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
          placeholder="Your password"
          autoComplete="current-password"
        />

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-gold-bright text-ink px-6 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.2em] shadow-gold disabled:opacity-60 transition-opacity"
        >
          {loading ? <Loader2 size={15} className="animate-spin" /> : <ArrowRight size={15} />}
          {loading ? 'Signing in…' : 'Sign in'}
        </button>
      </form>

      <p className="mt-6 text-sm text-muted">
        New here?{' '}
        <a href="/register" className="text-gold-bright link-underline font-semibold">
          Create an account
        </a>
      </p>
    </AuthShell>
  )
}
