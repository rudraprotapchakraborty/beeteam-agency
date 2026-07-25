import type { Metadata } from 'next'
import TicketFlow from '@/components/tickets/TicketFlow'
import { SectionEyebrow } from '@/components/ui/Reveal'
import { TICKET_PRICE } from '@/lib/tickets'

export const metadata: Metadata = {
  title: 'Buy Tickets — BeeTeam Studios',
  description: 'Book your screening of The University of Chankharpul.',
}

export default function TicketsPage() {
  return (
    <section className="relative min-h-screen bg-page text-fg pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb top-24 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-gold/[0.06]" />
      </div>

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <SectionEyebrow index="/01" label="Now Booking" />
        <h1 className="h-display text-[clamp(44px,9vw,80px)] text-fg leading-[0.86] mb-4">
          Buy <span className="text-gold-bright">Tickets</span>
        </h1>
        <p className="text-muted max-w-lg leading-relaxed mb-10">
          The University of Chankharpul — {TICKET_PRICE} BDT per ticket. Pay via bKash or Nagad
          Send Money and submit your transaction ID for verification.
        </p>

        <TicketFlow />
      </div>
    </section>
  )
}
