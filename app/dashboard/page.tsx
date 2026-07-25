'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { LogOut, Ticket as TicketIcon, Loader2, ShieldCheck } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import Avatar from '@/components/ui/Avatar'
import { EASE_OUT_EXPO } from '@/lib/motion'
import { PAYMENT_LABELS, statusLabel } from '@/lib/tickets'

type Purchase = {
  id: string
  showLabel: string
  showTime: string
  method: 'bkash' | 'nagad'
  amount: number
  transactionId: string
  status: 'pending' | 'verified' | 'rejected'
  createdAt: string
}

export default function DashboardPage() {
  const { user, loading, logout } = useAuth()
  const router = useRouter()
  const [purchases, setPurchases] = useState<Purchase[]>([])
  const [loadingPurchases, setLoadingPurchases] = useState(true)

  useEffect(() => {
    if (!loading && !user) router.replace('/login?next=/dashboard')
  }, [loading, user, router])

  useEffect(() => {
    if (!user) return
    fetch('/api/tickets', { cache: 'no-store' })
      .then((r) => r.json())
      .then((d) => setPurchases(d.purchases ?? []))
      .catch(() => setPurchases([]))
      .finally(() => setLoadingPurchases(false))
  }, [user])

  if (loading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center text-muted">
        <Loader2 className="animate-spin" size={22} />
      </div>
    )
  }

  const memberSince = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString('en-GB', {
        month: 'short',
        year: 'numeric',
      })
    : null

  const confirmed = purchases.filter((p) => p.status === 'verified').length

  return (
    <section className="relative min-h-screen bg-page text-fg pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb top-16 right-1/4 w-[460px] h-[460px] bg-gold/[0.05]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Profile header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          className="glass-strong rounded-3xl p-6 sm:p-8 shadow-premium"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <Avatar name={user.fullName} size={72} className="text-2xl" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h1 className="font-serif-d text-2xl sm:text-3xl text-fg truncate">
                  {user.fullName}
                </h1>
                {user.isAdmin && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-gold-bright/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-gold-bright">
                    <ShieldCheck size={11} /> Admin
                  </span>
                )}
              </div>
              <p className="text-sm text-muted font-mono-d mt-0.5">{user.phone}</p>
              {memberSince && (
                <p className="text-xs text-subtle mt-1">Member since {memberSince}</p>
              )}
            </div>

            <div className="flex items-center gap-2">
              {user.isAdmin && (
                <a
                  href="/admin"
                  className="rounded-full border border-line px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-fg hover:bg-fill-hover transition-colors"
                >
                  Admin panel
                </a>
              )}
              <button
                type="button"
                onClick={async () => {
                  await logout()
                  router.push('/')
                }}
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-muted hover:bg-fill-hover transition-colors"
              >
                <LogOut size={13} /> Sign out
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:max-w-xs">
            <Stat label="Confirmed" value={confirmed} />
            <Stat label="Total bookings" value={purchases.length} />
          </div>
        </motion.div>

        {/* Recent purchases */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-serif-d text-xl text-fg">Recent purchases</h2>
            <a
              href="/tickets"
              className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-gold-bright link-underline"
            >
              Buy more →
            </a>
          </div>

          {loadingPurchases ? (
            <div className="flex items-center justify-center rounded-2xl border border-line bg-fill-soft py-14 text-muted">
              <Loader2 className="animate-spin" size={18} />
            </div>
          ) : purchases.length === 0 ? (
            <div className="rounded-2xl border border-line bg-fill-soft py-14 text-center">
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-fill-hover text-subtle">
                <TicketIcon size={18} />
              </div>
              <p className="text-sm text-muted">No purchases yet.</p>
              <a
                href="/tickets"
                className="mt-4 inline-block rounded-full bg-gold-bright px-5 py-2.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-ink shadow-gold"
              >
                Book a ticket
              </a>
            </div>
          ) : (
            <div className="grid gap-3">
              {purchases.map((p) => (
                <PurchaseCard key={p.id} p={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-line bg-fill-soft px-4 py-3">
      <p className="font-display text-3xl text-gold-bright leading-none">{value}</p>
      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-subtle">{label}</p>
    </div>
  )
}

export function StatusBadge({ status }: { status: Purchase['status'] }) {
  const styles: Record<Purchase['status'], string> = {
    verified: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    rejected: 'bg-red-500/15 text-red-400 border-red-500/30',
    pending: 'bg-gold-bright/15 text-gold-bright border-gold/30',
  }
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${styles[status]}`}
    >
      {statusLabel(status)}
    </span>
  )
}

function PurchaseCard({ p }: { p: Purchase }) {
  return (
    <div className="rounded-2xl border border-line bg-fill-soft p-5 flex flex-wrap items-center justify-between gap-4">
      <div className="min-w-0">
        <p className="font-serif-d text-lg text-fg">{p.showLabel}</p>
        <p className="text-xs text-muted mt-0.5">
          {p.showTime} · {PAYMENT_LABELS[p.method]} · {p.amount} BDT
        </p>
        <p className="text-[11px] text-subtle font-mono-d mt-1">TrxID: {p.transactionId}</p>
      </div>
      <StatusBadge status={p.status} />
    </div>
  )
}
