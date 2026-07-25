import { statusLabel } from '@/lib/tickets'

export type PurchaseStatus = 'pending' | 'verified' | 'rejected'

const STYLES: Record<PurchaseStatus, string> = {
  verified: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  rejected: 'bg-red-500/15 text-red-400 border-red-500/30',
  pending: 'bg-gold-bright/15 text-gold-bright border-gold/30',
}

export default function StatusBadge({ status }: { status: PurchaseStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${STYLES[status]}`}
    >
      {statusLabel(status)}
    </span>
  )
}
