/* ---------------------------------------------------------------
   Shared ticket configuration — safe to import on client & server.
   Payment numbers come from NEXT_PUBLIC_ env vars so they render
   in the buyer's browser. Change shows/price here.
   --------------------------------------------------------------- */

export const TICKET_PRICE = Number(process.env.NEXT_PUBLIC_TICKET_PRICE) || 100

export const BKASH_NUMBER = process.env.NEXT_PUBLIC_BKASH_NUMBER || '01XXXXXXXXX'
export const NAGAD_NUMBER = process.env.NEXT_PUBLIC_NAGAD_NUMBER || '01XXXXXXXXX'

export type PaymentMethod = 'bkash' | 'nagad'

export const PAYMENT_NUMBERS: Record<PaymentMethod, string> = {
  bkash: BKASH_NUMBER,
  nagad: NAGAD_NUMBER,
}

export const PAYMENT_LABELS: Record<PaymentMethod, string> = {
  bkash: 'bKash',
  nagad: 'Nagad',
}

export type Show = {
  /** Stable id used in the purchase form. */
  id: string
  /** ISO-ish date string, e.g. "2026-08-15". */
  date: string
  /** Human date label, e.g. "Fri, 15 Aug 2026". */
  label: string
  /** Screening times available on that date. */
  times: string[]
  venue: string
}

/**
 * Screenings for "The University of Chankharpul".
 * Edit this list to change what buyers can book.
 */
export const SHOWS: Show[] = [
  {
    id: 'cha-2026-08-15',
    date: '2026-08-15',
    label: 'Fri, 15 Aug 2026',
    times: ['3:00 PM', '6:30 PM', '9:00 PM'],
    venue: 'Star Cineplex, Bashundhara City',
  },
  {
    id: 'cha-2026-08-16',
    date: '2026-08-16',
    label: 'Sat, 16 Aug 2026',
    times: ['3:00 PM', '6:30 PM', '9:00 PM'],
    venue: 'Star Cineplex, Bashundhara City',
  },
  {
    id: 'cha-2026-08-22',
    date: '2026-08-22',
    label: 'Fri, 22 Aug 2026',
    times: ['4:00 PM', '7:30 PM'],
    venue: 'Blockbuster Cinemas, Jamuna Future Park',
  },
]

export function findShow(id: string): Show | undefined {
  return SHOWS.find((s) => s.id === id)
}

export function statusLabel(status: 'pending' | 'verified' | 'rejected'): string {
  switch (status) {
    case 'verified':
      return 'Confirmed'
    case 'rejected':
      return 'Rejected'
    default:
      return 'Awaiting verification'
  }
}
