'use client'

import { useCallback, useEffect, useState } from 'react'
import { Check, Loader2, RotateCcw, X } from 'lucide-react'
import Avatar from '@/components/ui/Avatar'
import StatusBadge from '@/components/ui/StatusBadge'
import { PAYMENT_LABELS } from '@/lib/tickets'

type AdminPurchase = {
  id: string
  buyerName: string
  buyerPhone: string
  showLabel: string
  showTime: string
  method: 'bkash' | 'nagad'
  payTo: string
  amount: number
  senderNumber: string
  transactionId: string
  status: 'pending' | 'verified' | 'rejected'
  createdAt: string
}

type AdminUser = {
  id: string
  fullName: string
  phone: string
  isAdmin: boolean
  createdAt: string
  totalPurchases: number
  confirmedPurchases: number
}

type Tab = 'purchases' | 'users'

export default function AdminPanel() {
  const [tab, setTab] = useState<Tab>('purchases')
  const [purchases, setPurchases] = useState<AdminPurchase[]>([])
  const [users, setUsers] = useState<AdminUser[]>([])
  const [ready, setReady] = useState(false)
  const [busyId, setBusyId] = useState<string | null>(null)
  const [denied, setDenied] = useState(false)

  const load = useCallback(async () => {
    const [pRes, uRes] = await Promise.all([
      fetch('/api/admin/purchases', { cache: 'no-store' }),
      fetch('/api/admin/users', { cache: 'no-store' }),
    ])
    if (pRes.status === 403 || uRes.status === 403) {
      setDenied(true)
      setReady(true)
      return
    }
    const p = await pRes.json()
    const u = await uRes.json()
    setPurchases(p.purchases ?? [])
    setUsers(u.users ?? [])
    setReady(true)
  }, [])

  useEffect(() => {
    load()
  }, [load])

  async function setStatus(id: string, status: AdminPurchase['status']) {
    setBusyId(id)
    try {
      const res = await fetch(`/api/admin/purchases/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      })
      if (res.ok) {
        setPurchases((prev) => prev.map((p) => (p.id === id ? { ...p, status } : p)))
      }
    } finally {
      setBusyId(null)
    }
  }

  if (denied) {
    return (
      <div className="rounded-2xl border border-line bg-fill-soft p-8 text-center text-sm text-muted">
        Admin access is restricted. Set{' '}
        <code className="font-mono-d text-gold-bright">isAdmin: true</code> on your account in
        MongoDB.
      </div>
    )
  }

  if (!ready) {
    return (
      <div className="flex items-center justify-center rounded-2xl border border-line bg-fill-soft py-14 text-muted">
        <Loader2 className="animate-spin" size={18} />
      </div>
    )
  }

  const pending = purchases.filter((p) => p.status === 'pending').length

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="label-mono text-gold-bright mb-2">Control Room</p>
          <h2 className="font-serif-d text-2xl sm:text-3xl text-fg">Admin dashboard</h2>
          <p className="text-sm text-muted mt-1">
            {users.length} users · {purchases.length} purchases · {pending} awaiting verification
          </p>
        </div>

        {/* Tabs */}
        <div className="inline-flex rounded-full border border-line bg-fill-soft p-1">
          {(['purchases', 'users'] as Tab[]).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`rounded-full px-5 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] transition-colors ${
                tab === t ? 'bg-gold-bright text-ink' : 'text-muted hover:text-fg'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {tab === 'purchases' ? (
        <div className="mt-6 overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[820px] text-left text-sm">
            <thead className="bg-fill-soft text-[10px] uppercase tracking-[0.15em] text-subtle">
              <tr>
                <Th>Buyer</Th>
                <Th>Screening</Th>
                <Th>Payment</Th>
                <Th>TrxID</Th>
                <Th>Status</Th>
                <Th>Action</Th>
              </tr>
            </thead>
            <tbody>
              {purchases.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-10 text-center text-muted">
                    No purchases yet.
                  </td>
                </tr>
              )}
              {purchases.map((p) => (
                <tr key={p.id} className="border-t border-line align-top">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2.5">
                      <Avatar name={p.buyerName} size={32} />
                      <div>
                        <p className="font-medium text-fg">{p.buyerName}</p>
                        <p className="text-xs text-subtle font-mono-d">{p.buyerPhone}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <p className="text-fg">{p.showLabel}</p>
                    <p className="text-xs text-subtle">{p.showTime}</p>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1.5 text-fg">
                      <div className="h-5 w-5 rounded bg-white p-0.5 flex items-center justify-center shadow-sm shrink-0" title={PAYMENT_LABELS[p.method]}>
                        <img
                          src={p.method === 'bkash' ? '/bkash-mini.png' : '/nagad-mini.jpg'}
                          alt={PAYMENT_LABELS[p.method]}
                          className="h-full object-contain"
                        />
                      </div>
                      <span className="font-medium">{p.amount} BDT</span>
                    </div>
                    <p className="text-xs text-subtle font-mono-d mt-1">from {p.senderNumber}</p>
                  </td>
                  <td className="px-4 py-4 font-mono-d text-xs text-fg">{p.transactionId}</td>
                  <td className="px-4 py-4">
                    <StatusBadge status={p.status} />
                  </td>
                  <td className="px-4 py-4">
                    {busyId === p.id ? (
                      <Loader2 className="animate-spin text-muted" size={16} />
                    ) : p.status === 'pending' ? (
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setStatus(p.id, 'verified')}
                          title="Confirm ticket"
                          className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-emerald-400 hover:bg-emerald-500/25 transition-colors"
                        >
                          <Check size={12} /> Verify
                        </button>
                        <button
                          type="button"
                          onClick={() => setStatus(p.id, 'rejected')}
                          title="Reject"
                          className="inline-flex items-center justify-center rounded-full border border-red-500/30 bg-red-500/10 px-2.5 py-1.5 text-red-400 hover:bg-red-500/20 transition-colors"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setStatus(p.id, 'pending')}
                        className="inline-flex items-center gap-1 rounded-full border border-line px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-muted hover:bg-fill-hover transition-colors"
                      >
                        <RotateCcw size={11} /> Reset
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-fill-soft text-[10px] uppercase tracking-[0.15em] text-subtle">
              <tr>
                <Th>User</Th>
                <Th>Role</Th>
                <Th>Bookings</Th>
                <Th>Confirmed</Th>
                <Th>Joined</Th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-t border-line">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2.5">
                      <Avatar name={u.fullName} size={32} />
                      <div>
                        <p className="font-medium text-fg">{u.fullName}</p>
                        <p className="text-xs text-subtle font-mono-d">{u.phone}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    {u.isAdmin ? (
                      <span className="rounded-full bg-gold-bright/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-gold-bright">
                        Admin
                      </span>
                    ) : (
                      <span className="text-xs text-subtle">Member</span>
                    )}
                  </td>
                  <td className="px-4 py-4 text-fg">{u.totalPurchases}</td>
                  <td className="px-4 py-4 text-fg">{u.confirmedPurchases}</td>
                  <td className="px-4 py-4 text-xs text-subtle">
                    {new Date(u.createdAt).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="px-4 py-3 font-semibold">{children}</th>
}
