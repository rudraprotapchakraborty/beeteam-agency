'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Ticket as TicketIcon, Loader2, ShieldCheck, Edit2, Check, X } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import Avatar from '@/components/ui/Avatar'
import StatusBadge from '@/components/ui/StatusBadge'
import AdminPanel from '@/components/admin/AdminPanel'
import { EASE_OUT_EXPO } from '@/lib/motion'
import { PAYMENT_LABELS } from '@/lib/tickets'

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
  const { user, loading, refresh } = useAuth()
  const router = useRouter()
  const [purchases, setPurchases] = useState<Purchase[]>([])
  const [loadingPurchases, setLoadingPurchases] = useState(true)

  const [isEditingName, setIsEditingName] = useState(false)
  const [editName, setEditName] = useState('')
  const [savingName, setSavingName] = useState(false)
  const [nameError, setNameError] = useState('')

  const startEditing = () => {
    if (user) {
      setEditName(user.fullName)
      setIsEditingName(true)
      setNameError('')
    }
  }

  const saveName = async () => {
    if (editName.trim().length < 2) {
      setNameError('Name must be at least 2 characters.')
      return
    }
    setSavingName(true)
    setNameError('')
    try {
      const res = await fetch('/api/auth/me', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName: editName }),
      })
      if (!res.ok) {
        const d = await res.json()
        throw new Error(d.error || 'Failed to save.')
      }
      await refresh()
      setIsEditingName(false)
    } catch (err: any) {
      setNameError(err.message || 'Something went wrong.')
    } finally {
      setSavingName(false)
    }
  }

  useEffect(() => {
    if (!loading && !user) router.replace('/login?next=/dashboard')
  }, [loading, user, router])

  useEffect(() => {
    if (!user || user.isAdmin) return
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

      <div className={`${user.isAdmin ? 'max-w-6xl' : 'max-w-4xl'} mx-auto px-6 relative z-10`}>
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
              {isEditingName ? (
                <div className="flex flex-col gap-1.5 w-full max-w-sm">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      disabled={savingName}
                      className="flex-1 rounded-lg border border-line bg-fill-soft px-3 py-1.5 text-sm text-fg focus:border-gold-bright focus:outline-none"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={saveName}
                      disabled={savingName}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gold-bright text-ink hover:opacity-90 disabled:opacity-50 transition-opacity"
                      title="Save name"
                    >
                      {savingName ? (
                        <Loader2 size={14} className="animate-spin" />
                      ) : (
                        <Check size={14} strokeWidth={2.5} />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditingName(false)}
                      disabled={savingName}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-line text-muted hover:bg-fill-hover disabled:opacity-50 transition-colors"
                      title="Cancel"
                    >
                      <X size={14} />
                    </button>
                  </div>
                  {nameError && (
                    <p className="text-[11px] text-red-500 font-medium">{nameError}</p>
                  )}
                </div>
              ) : (
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <h1 className="font-serif-d text-2xl sm:text-3xl text-fg truncate">
                    {user.fullName}
                  </h1>
                  <button
                    type="button"
                    onClick={startEditing}
                    className="p-1 rounded-full text-subtle hover:text-gold-bright hover:bg-fill-soft transition-colors"
                    title="Edit name"
                  >
                    <Edit2 size={14} />
                  </button>
                  {user.isAdmin && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-gold-bright/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-gold-bright">
                      <ShieldCheck size={11} /> Admin
                    </span>
                  )}
                </div>
              )}
              <p className="text-sm text-muted font-mono-d mt-0.5">{user.phone}</p>
              {memberSince && (
                <p className="text-xs text-subtle mt-1">Member since {memberSince}</p>
              )}
            </div>


          </div>

          {!user.isAdmin && (
            <div className="mt-6 grid grid-cols-2 gap-3 sm:max-w-xs">
              <Stat label="Confirmed" value={confirmed} />
              <Stat label="Total bookings" value={purchases.length} />
            </div>
          )}
        </motion.div>

        {/* Recent purchases */}
        {!user.isAdmin && (
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
        )}

        {/* Admin management — only for admins, merged into their dashboard */}
        {user.isAdmin && (
          <div className="mt-14 border-t border-line pt-12">
            <AdminPanel />
          </div>
        )}
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

function PurchaseCard({ p }: { p: Purchase }) {
  return (
    <div className="rounded-2xl border border-line bg-fill-soft p-5 flex flex-wrap items-center justify-between gap-4">
      <div className="min-w-0">
        <p className="font-serif-d text-lg text-fg">{p.showLabel}</p>
        <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted mt-1">
          <span>{p.showTime}</span>
          <span>·</span>
          <div className="inline-flex items-center gap-1">
            <div className="h-5 w-5 rounded bg-white p-0.5 flex items-center justify-center shadow-sm shrink-0" title={PAYMENT_LABELS[p.method]}>
              <img
                src={p.method === 'bkash' ? '/bkash-mini.png' : '/nagad-mini.jpg'}
                alt={PAYMENT_LABELS[p.method]}
                className="h-full object-contain"
              />
            </div>
            <span className="text-fg font-medium">{p.amount} BDT</span>
          </div>
        </div>
        <p className="text-[11px] text-subtle font-mono-d mt-1">TrxID: {p.transactionId}</p>
      </div>
      <StatusBadge status={p.status} />
    </div>
  )
}
