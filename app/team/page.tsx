'use client'

import { motion } from 'framer-motion'
import Reveal, { SectionEyebrow } from '@/components/ui/Reveal'
import Avatar from '@/components/ui/Avatar'
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

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Reveal className="mb-14 md:mb-16">
          <SectionEyebrow index="/04" label="The Studio" />
          <h1 className="h-display text-[clamp(56px,10vw,140px)] text-fg leading-[0.86] whitespace-nowrap">
            Our <span className="text-(--gold-text)">Team</span>
          </h1>
          <p className="mt-5 max-w-md text-base text-muted leading-relaxed">
            Bee Team Studios — the people behind The University of Chankharpul.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.65, ease: EASE_OUT_EXPO }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col items-center text-center gap-4 rounded-3xl border border-line bg-card p-8 sheen transition-shadow duration-500 hover:shadow-gold hover:border-gold/35"
            >
              <span className="absolute top-5 left-6 font-mono text-[10px] tracking-[0.25em] text-faint">
                {m.index}
              </span>

              <Avatar name={m.name} size={96} className="text-2xl shadow-premium" />

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-fg group-hover:text-(--gold-text) transition-colors">
                  {m.name}
                </h3>
                <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-subtle">
                  {m.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
