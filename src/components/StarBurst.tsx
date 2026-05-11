import { useEffect, useState } from 'react'

interface StarBurstProps {
  trigger: boolean
  onDone: () => void
}

const PIECES = ['🎉', '⭐', '🌟', '✨', '🎊', '💛', '🟡', '🔴', '🟢', '🔵', '🟠', '💜']
const COUNT = 40

interface Piece {
  id: number
  emoji: string
  x: number
  duration: number
  delay: number
  size: number
}

function makePieces(): Piece[] {
  return Array.from({ length: COUNT }, (_, i) => ({
    id: i,
    emoji: PIECES[i % PIECES.length],
    x: Math.random() * 100,
    duration: 1.2 + Math.random() * 1.2,
    delay: Math.random() * 0.6,
    size: 16 + Math.random() * 20,
  }))
}

export function StarBurst({ trigger, onDone }: StarBurstProps) {
  const [pieces, setPieces] = useState<Piece[]>([])

  useEffect(() => {
    if (trigger) {
      setPieces(makePieces())
      const t = setTimeout(() => { setPieces([]); onDone() }, 2200)
      return () => clearTimeout(t)
    }
  }, [trigger, onDone])

  if (pieces.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map(p => (
        <span
          key={p.id}
          className="absolute animate-confetti-fall select-none"
          style={{
            left: `${p.x}%`,
            top: '-5%',
            fontSize: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  )
}
