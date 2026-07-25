'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Check,
  Clock,
  Copy,
  Loader2,
  Lock,
  Ticket,
} from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import {
  PAYMENT_LABELS,
  PAYMENT_NUMBERS,
  SHOWS,
  TICKET_PRICE,
  type PaymentMethod,
} from '@/lib/tickets'
import { EASE_OUT_EXPO } from '@/lib/motion'

type Step = 'show' | 'method' | 'pay' | 'done'

export default function TicketFlow() {
  const { user, loading } = useAuth()

  const [step, setStep] = useState<Step>('show')
  const [showId, setShowId] = useState('')
  const [time, setTime] = useState('')
  const [method, setMethod] = useState<PaymentMethod | ''>('')
  const [senderNumber, setSenderNumber] = useState('')
  const [transactionId, setTransactionId] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [copied, setCopied] = useState(false)

  const selectedShow = SHOWS.find((s) => s.id === showId)

  if (loading) {
    return (
      <div className="flex items-center justify-center rounded-3xl border border-line bg-fill-soft py-16 text-muted">
        <Loader2 className="animate-spin" size={20} />
      </div>
    )
  }

  if (!user) {
    return (
      <div className="rounded-3xl border border-line bg-fill-soft p-8 sm:p-10 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-bright/15 text-gold-bright">
          <Lock size={20} />
        </div>
        <h3 className="font-serif-d text-2xl text-fg">Sign in to book tickets</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-muted">
          You&apos;ll need an account to reserve seats and track your booking status.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="/login?next=/tickets"
            className="rounded-full bg-gold-bright px-6 py-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-ink shadow-gold"
          >
            Sign in
          </a>
          <a
            href="/register"
            className="rounded-full border border-line px-6 py-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-fg hover:bg-fill-hover transition-colors"
          >
            Create account
          </a>
        </div>
      </div>
    )
  }

  async function copyNumber() {
    if (!method) return
    try {
      await navigator.clipboard.writeText(PAYMENT_NUMBERS[method])
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard blocked — ignore */
    }
  }

  async function submit() {
    setError('')
    if (!showId || !time || !method) return
    setSubmitting(true)
    try {
      const res = await fetch('/api/tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ showId, time, method, senderNumber, transactionId }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'Could not submit your ticket.')
      }
      setStep('done')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="rounded-3xl border border-line bg-fill-soft p-5 sm:p-8">
      {step !== 'done' && <StepBar step={step} />}

      <StepWrap key={step}>
        {/* ---- STEP 1: choose date + time ---- */}
        {step === 'show' && (
          <div>
            <StepTitle icon={<Ticket size={16} />} n="01" title="Choose a screening" />
            <div className="mt-5 grid gap-3">
              {SHOWS.map((s) => {
                const active = showId === s.id
                return (
                  <div
                    key={s.id}
                    className={`rounded-2xl border p-4 transition-colors ${
                      active ? 'border-gold/50 bg-fill-hover' : 'border-line'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setShowId(s.id)
                        setTime('')
                      }}
                      className="flex w-full items-center justify-between text-left"
                    >
                      <div>
                        <p className="font-serif-d text-lg text-fg">{s.label}</p>
                        <p className="text-xs text-muted">{s.venue}</p>
                      </div>
                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                          active ? 'border-gold bg-gold-bright text-ink' : 'border-line-strong'
                        }`}
                      >
                        {active && <Check size={12} strokeWidth={3} />}
                      </span>
                    </button>

                    {active && (
                      <div className="mt-3 flex flex-wrap gap-2 border-t border-line pt-3">
                        {s.times.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setTime(t)}
                            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold transition-colors ${
                              time === t
                                ? 'bg-gold-bright text-ink'
                                : 'border border-line text-muted hover:bg-fill-hover'
                            }`}
                          >
                            <Clock size={12} />
                            {t}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <NextButton
              disabled={!showId || !time}
              onClick={() => setStep('method')}
              label="Continue to payment"
            />
          </div>
        )}

        {/* ---- STEP 2: choose method ---- */}
        {step === 'method' && (
          <div>
            <StepTitle icon={<Ticket size={16} />} n="02" title="Select payment method" />
            <p className="mt-2 text-sm text-muted">
              {selectedShow?.label} · {time} — <span className="text-fg font-semibold">{TICKET_PRICE} BDT</span>
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {(['bkash', 'nagad'] as PaymentMethod[]).map((m) => {
                const active = method === m
                return (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMethod(m)}
                    className={`relative rounded-2xl border p-5 transition-all duration-300 flex items-center justify-center ${
                      active
                        ? 'border-gold bg-gold-bright/5 shadow-premium'
                        : 'border-line bg-fill-soft hover:border-line-strong hover:bg-fill-hover'
                    }`}
                  >
                    <div className="h-10 w-28 rounded-lg bg-white p-1.5 flex items-center justify-center shadow-sm">
                      <img
                        src={m === 'bkash' ? '/bkash-full.png' : '/nagad-full.png'}
                        alt={PAYMENT_LABELS[m]}
                        className="h-full object-contain"
                      />
                    </div>

                    {active && (
                      <span className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gold-bright text-ink shadow-sm">
                        <Check size={12} strokeWidth={3} />
                      </span>
                    )}
                  </button>
                )
              })}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <BackButton onClick={() => setStep('show')} />
              <NextButton
                disabled={!method}
                onClick={() => setStep('pay')}
                label="Continue"
                grow
              />
            </div>
          </div>
        )}

        {/* ---- STEP 3: pay + submit txn id ---- */}
        {step === 'pay' && method && (
          <div>
            <StepTitle icon={<Ticket size={16} />} n="03" title="Send money & submit" />

            <div className="mt-5 rounded-2xl border border-gold/30 bg-gold-bright/5 p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-20 rounded bg-white p-1 flex items-center justify-center shadow-sm">
                  <img
                    src={method === 'bkash' ? '/bkash-full.png' : '/nagad-full.png'}
                    alt={PAYMENT_LABELS[method]}
                    className="h-full object-contain"
                  />
                </div>
                <span className="text-xs font-semibold text-gold-bright uppercase tracking-[0.1em]">
                  Payment via {PAYMENT_LABELS[method]}
                </span>
              </div>
              <p className="text-sm text-muted">
                Open <span className="font-semibold text-fg">{PAYMENT_LABELS[method]}</span>, choose{' '}
                <span className="font-semibold text-fg">Send Money</span>, and send{' '}
                <span className="font-semibold text-gold-bright">{TICKET_PRICE} BDT</span> to:
              </p>
              <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-line bg-page/40 px-4 py-3">
                <span className="font-mono-d text-lg font-semibold tracking-wide text-fg text-center sm:text-left">
                  {PAYMENT_NUMBERS[method]}
                </span>
                <button
                  type="button"
                  onClick={copyNumber}
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-muted hover:bg-fill-hover transition-colors w-full sm:w-auto"
                >
                  {copied ? <Check size={12} /> : <Copy size={12} />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <p className="mt-3 text-xs text-subtle">
                After sending, enter the number you paid from and the Transaction ID (TrxID) from
                your confirmation SMS.
              </p>
            </div>

            <div className="mt-5 grid gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-subtle">
                  Your {PAYMENT_LABELS[method]} number
                </span>
                <input
                  value={senderNumber}
                  onChange={(e) => setSenderNumber(e.target.value)}
                  inputMode="tel"
                  placeholder="01712345678"
                  className="rounded-xl border border-line bg-fill-soft px-4 py-3 text-sm text-fg placeholder:text-faint outline-none focus:border-gold/50 focus:bg-fill-hover"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-subtle">
                  Transaction ID (TrxID)
                </span>
                <input
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value.toUpperCase())}
                  placeholder="e.g. 9F7A1B2C3D"
                  className="rounded-xl border border-line bg-fill-soft px-4 py-3 text-sm font-mono-d text-fg placeholder:text-faint outline-none focus:border-gold/50 focus:bg-fill-hover"
                />
              </label>
            </div>

            {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

            <div className="mt-6 flex items-center gap-3">
              <BackButton onClick={() => setStep('method')} />
              <button
                type="button"
                disabled={submitting || !senderNumber || !transactionId}
                onClick={submit}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold-bright px-6 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-ink shadow-gold disabled:opacity-50 transition-opacity"
              >
                {submitting ? <Loader2 size={15} className="animate-spin" /> : <ArrowRight size={15} />}
                {submitting ? 'Submitting…' : 'Submit for verification'}
              </button>
            </div>
          </div>
        )}

        {/* ---- DONE ---- */}
        {step === 'done' && (
          <div className="py-6 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold-bright/15 text-gold-bright">
                <Clock size={26} />
              </div>
              <h3 className="font-serif-d text-3xl text-fg">Awaiting verification</h3>
              <p className="mx-auto mt-3 max-w-sm text-sm text-muted">
                We&apos;ve received your payment details for{' '}
                <span className="text-fg font-semibold">
                  {selectedShow?.label} · {time}
                </span>
                . Our team will confirm your ticket shortly. Please wait — you can track the status
                on your dashboard.
              </p>
              <div className="mt-7 flex items-center justify-center gap-3">
                <a
                  href="/dashboard"
                  className="rounded-full bg-gold-bright px-6 py-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-ink shadow-gold"
                >
                  Go to dashboard
                </a>
              </div>
          </div>
        )}
      </StepWrap>
    </div>
  )
}

/* ---------- small building blocks ---------- */

function StepWrap({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
    >
      {children}
    </motion.div>
  )
}

function StepTitle({ icon, n, title }: { icon: React.ReactNode; n: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-bright/15 text-gold-bright">
        {icon}
      </span>
      <div>
        <span className="label-mono text-gold-bright">Step {n}</span>
        <h3 className="font-serif-d text-xl text-fg leading-tight">{title}</h3>
      </div>
    </div>
  )
}

function StepBar({ step }: { step: Step }) {
  const order: Step[] = ['show', 'method', 'pay']
  const current = order.indexOf(step)
  return (
    <div className="mb-6 flex items-center gap-2">
      {order.map((s, i) => (
        <div
          key={s}
          className={`h-1 flex-1 rounded-full transition-colors ${
            i <= current ? 'bg-gold-bright' : 'bg-line-strong'
          }`}
        />
      ))}
    </div>
  )
}

function NextButton({
  disabled,
  onClick,
  label,
  grow = false,
}: {
  disabled?: boolean
  onClick: () => void
  label: string
  grow?: boolean
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gold-bright px-6 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-ink shadow-gold disabled:opacity-40 transition-opacity ${
        grow ? 'mt-0 flex-1' : 'w-full'
      }`}
    >
      {label}
      <ArrowRight size={15} />
    </button>
  )
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-line px-5 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-muted hover:bg-fill-hover transition-colors"
    >
      Back
    </button>
  )
}
