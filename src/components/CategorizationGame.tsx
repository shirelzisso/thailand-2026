import { useState, useRef, useCallback, useEffect } from 'react'
import type { ChildId } from '../types'

export interface GameItem {
  id: string
  categoryHe: string
  emoji: string
  label: string      // short label shown on card
  detail?: string    // longer description (shown in browse, not game)
}

interface Props {
  items: GameItem[]
  categories: string[]
  categoryEmojis: Record<string, string>
  child: ChildId
  onStar: () => void
  onDone: (correct: number, total: number) => void
}

type Phase = 'idle' | 'playing' | 'done'

interface CardState {
  item: GameItem
  placed: boolean
  correct: boolean | null
}

const CHILD_SHOWS_EMOJI: Record<ChildId, boolean> = {
  ellie: true,
  ari: false,
  leah: false,
}

export function CategorizationGame({ items, categories, categoryEmojis, child, onStar, onDone }: Props) {
  const [phase, setPhase] = useState<Phase>('idle')
  const [cards, setCards] = useState<CardState[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [correctCategory, setCorrectCategory] = useState<string | null>(null)
  const [dragging, setDragging] = useState(false)
  const [dragPos, setDragPos] = useState({ x: 0, y: 0 })
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const bucketRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const dragStart = useRef({ x: 0, y: 0 })
  const showEmoji = CHILD_SHOWS_EMOJI[child]

  const shuffled = useRef<GameItem[]>([])

  const startGame = useCallback(() => {
    const sh = [...items].sort(() => Math.random() - 0.5)
    shuffled.current = sh
    setCards(sh.map(item => ({ item, placed: false, correct: null })))
    setCurrentIndex(0)
    setScore(0)
    setFeedback(null)
    setCorrectCategory(null)
    setPhase('playing')
  }, [items])

  const currentCard = phase === 'playing' ? cards[currentIndex] : null

  const handleDrop = useCallback((category: string) => {
    if (!currentCard || feedback) return
    const isCorrect = category === currentCard.item.categoryHe

    setFeedback(isCorrect ? 'correct' : 'wrong')
    setCorrectCategory(isCorrect ? null : currentCard.item.categoryHe)

    if (isCorrect) {
      setScore(s => s + 1)
      onStar()
    }

    setCards(prev => prev.map((c, i) =>
      i === currentIndex ? { ...c, placed: true, correct: isCorrect } : c
    ))

    setTimeout(() => {
      setFeedback(null)
      setCorrectCategory(null)
      const next = currentIndex + 1
      if (next >= cards.length) {
        setPhase('done')
        onDone(isCorrect ? score + 1 : score, cards.length)
      } else {
        setCurrentIndex(next)
      }
    }, isCorrect ? 900 : 1600)
  }, [currentCard, currentIndex, cards.length, feedback, score, onStar, onDone])

  // Pointer-based drag
  const onPointerDown = (e: React.PointerEvent) => {
    if (feedback) return
    e.currentTarget.setPointerCapture(e.pointerId)
    dragStart.current = { x: e.clientX, y: e.clientY }
    setDragPos({ x: e.clientX, y: e.clientY })
    setDragging(true)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return
    setDragPos({ x: e.clientX, y: e.clientY })

    // Detect hovered bucket
    let found: string | null = null
    for (const cat of categories) {
      const el = bucketRefs.current[cat]
      if (!el) continue
      const rect = el.getBoundingClientRect()
      if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
        found = cat
        break
      }
    }
    setHoveredCategory(found)
  }

  const onPointerUp = () => {
    if (!dragging) return
    setDragging(false)
    setHoveredCategory(null)
    if (hoveredCategory) {
      handleDrop(hoveredCategory)
    }
  }

  // Tap fallback — tap a category button directly
  const onTapCategory = (cat: string) => {
    if (dragging || feedback) return
    handleDrop(cat)
  }

  // Reset on unmount or restart
  useEffect(() => {
    return () => {
      setDragging(false)
      setFeedback(null)
    }
  }, [])

  if (phase === 'idle') {
    return (
      <button
        onClick={startGame}
        className="w-full bg-accent text-white font-black text-lg rounded-2xl py-4 active:scale-95 transition-transform shadow-md"
      >
        🎮 התחל משחק!
      </button>
    )
  }

  if (phase === 'done') {
    const total = cards.length
    const pct = Math.round((score / total) * 100)
    const medal = pct === 100 ? '🥇' : pct >= 70 ? '🥈' : '🥉'
    return (
      <div className="text-center space-y-4 py-4">
        <div className="text-6xl">{medal}</div>
        <h2 className="text-2xl font-black text-navy">כל הכבוד!</h2>
        <p className="text-lg font-bold text-primary">{score} מתוך {total} נכון ✓</p>
        <p className="text-sm text-gray-500">קיבלת {score} ⭐ על המשחק!</p>
        <button
          onClick={startGame}
          className="mt-2 bg-primary text-white font-black rounded-2xl px-6 py-3 active:scale-95 transition-transform"
        >
          🔄 שחק שוב
        </button>
      </div>
    )
  }

  const progress = currentIndex / cards.length

  return (
    <div className="space-y-3 select-none">
      {/* Progress bar + score */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-300"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <span className="text-sm font-black text-navy whitespace-nowrap">{currentIndex}/{cards.length}</span>
        <span className="text-sm font-black text-highlight whitespace-nowrap">⭐ {score}</span>
      </div>

      {/* Category buckets */}
      <div className="grid grid-cols-2 gap-2">
        {categories.map(cat => (
          <div
            key={cat}
            ref={el => { bucketRefs.current[cat] = el }}
            onClick={() => onTapCategory(cat)}
            className={`rounded-2xl border-2 p-3 text-center transition-all min-h-[72px] flex flex-col items-center justify-center gap-1 cursor-pointer
              ${hoveredCategory === cat
                ? 'border-accent bg-accent/20 scale-105 shadow-md'
                : correctCategory === cat
                  ? 'border-jungle bg-jungle/20'
                  : 'border-gray-200 bg-white'
              }`}
          >
            <span className="text-2xl">{categoryEmojis[cat]}</span>
            <span className="text-xs font-bold text-navy leading-tight">{cat}</span>
          </div>
        ))}
      </div>

      {/* Feedback overlay */}
      {feedback && (
        <div className={`text-center font-black text-2xl py-1 rounded-xl ${feedback === 'correct' ? 'text-jungle' : 'text-accent'}`}>
          {feedback === 'correct' ? '✓ נכון! ⭐' : `✗ לא נכון — זה: ${correctCategory}`}
        </div>
      )}

      {/* Draggable card */}
      {currentCard && !feedback && (
        <div className="relative flex justify-center">
          <div
            ref={cardRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            className={`bg-white border-2 border-primary/30 rounded-2xl shadow-lg p-4 cursor-grab active:cursor-grabbing
              max-w-xs w-full text-center space-y-2 transition-transform
              ${dragging ? 'opacity-40 scale-95' : 'active:scale-95'}`}
            style={{ touchAction: 'none' }}
          >
            {showEmoji && (
              <div className="text-6xl">{currentCard.item.emoji}</div>
            )}
            <p className="text-sm font-bold text-navy leading-snug">{currentCard.item.label}</p>
            <p className="text-xs text-gray-400">גרור לקטגוריה הנכונה 👆</p>
          </div>

          {/* Floating drag ghost */}
          {dragging && (
            <div
              className="fixed bg-white border-2 border-accent rounded-2xl shadow-2xl p-4 text-center space-y-2 pointer-events-none z-50 w-52"
              style={{ left: dragPos.x - 104, top: dragPos.y - 60 }}
            >
              {showEmoji && <div className="text-5xl">{currentCard.item.emoji}</div>}
              <p className="text-sm font-bold text-navy leading-snug">{currentCard.item.label}</p>
            </div>
          )}
        </div>
      )}

      {/* Remaining mini-indicators */}
      <div className="flex justify-center gap-1 flex-wrap">
        {cards.map((c, i) => (
          <div
            key={c.item.id}
            className={`w-2 h-2 rounded-full transition-colors ${
              i < currentIndex
                ? c.correct ? 'bg-jungle' : 'bg-accent'
                : i === currentIndex ? 'bg-primary' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
