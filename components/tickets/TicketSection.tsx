'use client'

import Reveal, { SectionEyebrow } from '@/components/ui/Reveal'
import TicketFlow from '@/components/tickets/TicketFlow'
import { TICKET_PRICE } from '@/lib/tickets'

export default function TicketSection() {
  return (
    <section id="tickets" className="relative bg-page text-fg py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb top-10 left-1/4 w-[480px] h-[480px] bg-gold/[0.06]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionEyebrow index="/07" label="Now Booking" />
              <h2 className="h-display text-[clamp(48px,8vw,96px)] text-fg leading-[0.86] mb-6">
                Buy
                <br />
                <span className="text-gold-bright">Tickets</span>
              </h2>
              <p className="text-muted max-w-md leading-relaxed">
                Reserve your seat for{' '}
                <span className="text-fg font-semibold">The University of Chankharpul</span>. Pay
                just <span className="text-gold-bright font-semibold">{TICKET_PRICE} BDT</span> via
                bKash or Nagad Send Money, submit your transaction ID, and we&apos;ll confirm your
                ticket after verification.
              </p>

              <ul className="mt-8 space-y-3 text-sm text-muted">
                {[
                  'Pick your screening date & time',
                  'Send money via bKash or Nagad',
                  'Enter the transaction ID',
                  'Get confirmed after verification',
                ].map((step, i) => (
                  <li key={step} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-bright/15 text-[11px] font-bold text-gold-bright">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <TicketFlow />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
