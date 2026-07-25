import { initialsFromName } from '@/context/AuthContext'

/* Deterministic gradient avatar built from a name's initials. */

const GRADIENTS = [
  'linear-gradient(135deg, #ffd700, #b8860b)',
  'linear-gradient(135deg, #f59e0b, #7c2d12)',
  'linear-gradient(135deg, #38bdf8, #1e3a8a)',
  'linear-gradient(135deg, #a78bfa, #4c1d95)',
  'linear-gradient(135deg, #34d399, #065f46)',
  'linear-gradient(135deg, #fb7185, #831843)',
]

function gradientFor(name: string): string {
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) >>> 0
  return GRADIENTS[hash % GRADIENTS.length]
}

export default function Avatar({
  name,
  size = 44,
  className = '',
}: {
  name: string
  size?: number
  className?: string
}) {
  const initials = initialsFromName(name)
  return (
    <span
      aria-hidden
      className={`inline-flex items-center justify-center rounded-full font-bold text-ink select-none shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        background: gradientFor(name),
        fontSize: size * 0.4,
        letterSpacing: '0.02em',
        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.18)',
      }}
    >
      {initials}
    </span>
  )
}
