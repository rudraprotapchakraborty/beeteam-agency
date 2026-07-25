'use client'

import { motion } from 'framer-motion'
import Reveal, { SectionEyebrow } from '@/components/ui/Reveal'
import { EASE_OUT_EXPO } from '@/lib/motion'

type Member = {
  name: string
  role: string
  index: string
}

const team: Member[] = [
  {
    index: '01',
    name: 'Akash Haque',
    role: 'Writer · Producer · Director',
  },
  {
    index: '02',
    name: 'Md. Hafizuddin Munna',
    role: 'Executive Producer',
  },
  {
    index: '03',
    name: 'Devodyuti Aich',
    role: 'Performance Supervisor',
  },
  {
    index: '04',
    name: 'Mehedee Hasan',
    role: 'Head of PR',
  },
  {
    index: '05',
    name: 'Tanvir Tonmoy',
    role: 'Team',
  },
  {
    index: '06',
    name: 'Noor Hosen Nayan',
    role: 'Team',
  },
]

export default function TeamPage() {
  return (
    <section className="relative pt-32 pb-28 bg-page overflow-hidden min-h-screen">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb top-20 left-1/4 w-[500px] h-[500px] bg-gold/[0.06]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <Reveal className="mb-14 md:mb-16">
          <SectionEyebrow index="/04" label="The Studio" />
          <h1 className="h-display text-[clamp(56px,10vw,140px)] text-fg leading-[0.86] whitespace-nowrap">
            Our <span className="text-gold-bright">Team</span>
          </h1>
          <p className="mt-5 max-w-md text-base text-muted leading-relaxed">
            Bee Team Studios — the people behind The University of Chankharpul.
          </p>
        </Reveal>

        {/* Table-style roster */}
        <div className="rounded-2xl border border-line overflow-hidden bg-fill-soft">
          {/* Column headers */}
          <div className="hidden sm:grid grid-cols-[4rem_1fr_1.2fr] gap-4 px-6 md:px-8 py-4 border-b border-line bg-fill-soft">
            <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-faint">
              #
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-faint">
              Name
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-faint">
              Role
            </span>
          </div>

          <ul className="divide-y divide-line">
            {team.map((m, i) => (
              <motion.li
                key={m.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.55, ease: EASE_OUT_EXPO }}
                className="group relative grid grid-cols-1 sm:grid-cols-[4rem_1fr_1.2fr] gap-1 sm:gap-4 items-center px-6 md:px-8 py-5 md:py-6 hover:bg-fill-soft transition-colors duration-300"
              >
                {/* Gold accent bar on hover */}
                <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold-bright scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-300" />

                <span className="font-mono text-[11px] tracking-[0.2em] text-faint group-hover:text-gold transition-colors">
                  {m.index}
                </span>

                <span className="text-lg md:text-xl font-semibold text-fg group-hover:text-gold-bright transition-colors">
                  {m.name}
                </span>

                <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.18em] text-subtle group-hover:text-muted transition-colors">
                  {m.role}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
