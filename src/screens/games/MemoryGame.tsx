import { useState, useEffect, useCallback } from 'react'
import { memoryCardDefs, PAIR_COUNTS } from '../../data/memoryCards'
import type { Difficulty } from '../../data/memoryCards'
import { useAppStore } from '../../store/useAppStore'
import { StarBurst } from '../../components/StarBurst'

interface MemoryGameProps {
  store: ReturnType<typeof useAppStore>
}

type GameMode = 'timed' | 'relaxed'

interface Card {
  uid: string
  id: string
  emoji: string
  labelHe: string
  flipped: boolean
  matched: boolean
}

function buildDeck(difficulty: Difficulty): Card[] {
  const count = PAIR_COUNTS[difficulty]
  const defs = memoryCardDefs.slice(0, count)
  const pairs: Card[] = defs.flatMap(def => [
    { uid: `${def.id}-a`, id: def.id, emoji: def.emoji, labelHe: def.labelHe, flipped: false, matched: false },
    { uid: `${def.id}-b`, id: def.id, emoji: def.emoji, labelHe: def.labelHe, flipped: false, matched: false },
  ])
  return pairs.sort(() => Math.random() - 0.5)
}

const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  easy: 'קל 🐣 (8 קלפים)',
  medium: 'בינוני 🦁 (20 קלפים)',
  hard: 'קשה 🏆 (40 קלפים)',
}

const GRID_COLS: Record<Difficulty, string> = {
  easy: 'grid-cols-4',
  medium: 'grid-cols-4',
  hard: 'grid-cols-5',
}

export function MemoryGame({ store }: MemoryGameProps) {
  const { state, recordMemoryBestTime } = store
  const activeChild = state.activeChild

  const [phase, setPhase] = useState<'setup' | 'playing' | 'done'>('setup')
  const [difficulty, setDifficulty] = useState<Difficulty>('easy')
  const [mode, setMode] = useState<GameMode>('relaxed')
  const [deck, setDeck] = useState<Card[]>([])
  const [flippedUids, setFlippedUids] = useState<string[]>([])
  const [moves, setMoves] = useState(0)
  const [elapsed, setElapsed] = useState(0)
  const [confetti, setConfetti] = useState(false)
  const [locked, setLocked] = useState(false)

  useEffect(() => {
    if (phase !== 'playing' || mode !== 'timed') return
    const interval = setInterval(() => setElapsed(e => e + 1), 1000)
    return () => clearInterval(interval)
  }, [phase, mode])

  const startGame = () => {
    setDeck(buildDeck(difficulty))
    setFlippedUids([])
    setMoves(0)
    setElapsed(0)
    setPhase('playing')
  }

  const handleFlip = useCallback((uid: string) => {
    if (locked) return
    setDeck(prev => {
      const card = prev.find(c => c.uid === uid)
      if (!card || card.flipped || card.matched) return prev
      return prev.map(c => c.uid === uid ? { ...c, flipped: true } : c)
    })
    setFlippedUids(prev => [...prev, uid])
  }, [locked])

  useEffect(() => {
    if (flippedUids.length !== 2) return
    setMoves(m => m + 1)
    setLocked(true)

    const [uidA, uidB] = flippedUids
    setDeck(prev => {
      const cardA = prev.find(c => c.uid === uidA)!
      const cardB = prev.find(c => c.uid === uidB)!
      if (cardA.id === cardB.id) {
        return prev.map(c =>
          c.uid === uidA || c.uid === uidB ? { ...c, matched: true } : c
        )
      }
      return prev
    })

    setTimeout(() => {
      setDeck(prev => {
        const cardA = prev.find(c => c.uid === uidA)!
        const cardB = prev.find(c => c.uid === uidB)!
        if (cardA.id !== cardB.id) {
          return prev.map(c =>
            c.uid === uidA || c.uid === uidB ? { ...c, flipped: false } : c
          )
        }
        return prev
      })
      setFlippedUids([])
      setLocked(false)
    }, 900)
  }, [flippedUids])

  useEffect(() => {
    if (phase !== 'playing' || deck.length === 0) return
    if (deck.every(c => c.matched)) {
      setPhase('done')
      setConfetti(true)
      if (mode === 'timed') {
        const key = `${difficulty}-timed`
        recordMemoryBestTime(activeChild, key, elapsed)
      }
    }
  }, [deck, phase, mode, difficulty, elapsed, activeChild, recordMemoryBestTime])

  const bestTime = state.children[activeChild].memoryBestTimes[`${difficulty}-timed`]

  function formatTime(s: number) {
    const m = Math.floor(s / 60)
    return m > 0 ? `${m}:${String(s % 60).padStart(2, '0')}` : `${s}s`
  }

  if (phase === 'setup') {
    return (
      <div className="p-4 space-y-6">
        <h2 className="text-xl font-black text-navy">🃏 משחק זיכרון</h2>

        <div>
          <p className="text-sm font-bold text-gray-500 mb-2">בחרו רמת קושי:</p>
          <div className="space-y-2">
            {(['easy', 'medium', 'hard'] as Difficulty[]).map(d => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={`w-full text-right p-3 rounded-2xl border-2 font-bold transition-all ${
                  difficulty === d ? 'border-primary bg-primary/10 text-primary' : 'border-gray-200 bg-white text-navy'
                }`}
              >
                {DIFFICULTY_LABELS[d]}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-bold text-gray-500 mb-2">בחרו מצב:</p>
          <div className="flex gap-2">
            {(['relaxed', 'timed'] as GameMode[]).map(m => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 p-3 rounded-2xl border-2 font-bold transition-all ${
                  mode === m ? 'border-primary bg-primary/10 text-primary' : 'border-gray-200 bg-white text-navy'
                }`}
              >
                {m === 'relaxed' ? '🌴 רגוע' : '⏱️ על הזמן'}
              </button>
            ))}
          </div>
        </div>

        {mode === 'timed' && bestTime !== undefined && (
          <p className="text-center text-sm text-accent font-bold">
            🏆 שיא: {formatTime(bestTime)}
          </p>
        )}

        <button
          onClick={startGame}
          className="w-full bg-primary text-white font-black py-4 rounded-2xl text-lg active:scale-95 transition-transform"
        >
          התחילו! 🎮
        </button>
      </div>
    )
  }

  if (phase === 'done') {
    return (
      <div className="p-4 flex flex-col items-center justify-center min-h-[60vh] space-y-5 text-center">
        <StarBurst trigger={confetti} onDone={() => setConfetti(false)} />
        <div className="text-7xl animate-bounce-in">🎉</div>
        <h2 className="text-2xl font-black text-navy">כל הכבוד!</h2>
        <div className="space-y-1">
          <p className="text-lg text-gray-600">מהלכים: <span className="font-black text-primary">{moves}</span></p>
          {mode === 'timed' && (
            <>
              <p className="text-lg text-gray-600">זמן: <span className="font-black text-primary">{formatTime(elapsed)}</span></p>
              {bestTime !== undefined && bestTime === elapsed && (
                <p className="text-accent font-black text-lg">🏆 שיא חדש!</p>
              )}
              {bestTime !== undefined && bestTime < elapsed && (
                <p className="text-gray-500 text-sm">שיא: {formatTime(bestTime)}</p>
              )}
            </>
          )}
        </div>
        <div className="flex gap-3 w-full">
          <button
            onClick={startGame}
            className="flex-1 bg-primary text-white font-bold py-3 rounded-2xl active:scale-95 transition-transform"
          >
            שוב! 🔄
          </button>
          <button
            onClick={() => setPhase('setup')}
            className="flex-1 bg-gray-100 text-navy font-bold py-3 rounded-2xl active:scale-95 transition-transform"
          >
            הגדרות
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-black text-navy">🃏 זיכרון</h2>
        <div className="flex gap-3 text-sm font-bold text-gray-500">
          <span>מהלכים: {moves}</span>
          {mode === 'timed' && <span>⏱️ {formatTime(elapsed)}</span>}
        </div>
      </div>

      <div className={`grid ${GRID_COLS[difficulty]} gap-2`}>
        {deck.map(card => (
          <button
            key={card.uid}
            onClick={() => handleFlip(card.uid)}
            disabled={card.flipped || card.matched}
            className={`aspect-square rounded-xl flex flex-col items-center justify-center border-2 transition-all text-center
              ${card.matched
                ? 'bg-jungle/20 border-jungle'
                : card.flipped
                  ? 'bg-primary/10 border-primary'
                  : 'bg-white border-gray-200 active:scale-95'
              }`}
          >
            {card.flipped || card.matched ? (
              <>
                <span className="text-2xl leading-none">{card.emoji}</span>
                {difficulty !== 'hard' && (
                  <span className="text-xs text-navy font-bold mt-0.5 leading-tight">{card.labelHe}</span>
                )}
              </>
            ) : (
              <span className="text-2xl">🌴</span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
