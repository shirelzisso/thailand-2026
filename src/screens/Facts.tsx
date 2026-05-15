import { useState } from 'react'
import { facts, factCategories } from '../data/facts'
import { Card } from '../components/Card'
import { CategorizationGame } from '../components/CategorizationGame'
import type { GameItem } from '../components/CategorizationGame'
import type { ChildId } from '../types'

const CATEGORY_EMOJIS: Record<string, string> = {
  'קסמים ומקדשים': '🛕',
  'היסטוריה': '🏛️',
  'טבע ובעלי חיים': '🐘',
  'כיף ועובדות': '🎉',
}

const browseCategories = ['הכל', ...factCategories]

interface Props {
  child: ChildId
  onStar: () => void
}

export function Facts({ child, onStar }: Props) {
  const [mode, setMode] = useState<'browse' | 'game'>('browse')
  const [activeCategory, setActiveCategory] = useState('הכל')
  const [gameKey, setGameKey] = useState(0)
  const [lastResult, setLastResult] = useState<{ correct: number; total: number } | null>(null)

  const filtered = activeCategory === 'הכל'
    ? facts
    : facts.filter(f => f.categoryHe === activeCategory)

  const gameItems: GameItem[] = facts.map(f => ({
    id: f.id,
    categoryHe: f.categoryHe,
    emoji: f.emoji,
    label: f.textHe,
  }))

  const handleDone = (correct: number, total: number) => {
    setLastResult({ correct, total })
  }

  const restartGame = () => {
    setGameKey(k => k + 1)
    setLastResult(null)
  }

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-navy">🏛️ על תאילנד</h1>
        <div className="flex bg-gray-100 rounded-xl p-0.5 gap-0.5">
          <button
            onClick={() => setMode('browse')}
            className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-colors ${
              mode === 'browse' ? 'bg-white text-navy shadow-sm' : 'text-gray-400'
            }`}
          >
            📖 קרא
          </button>
          <button
            onClick={() => { setMode('game'); setLastResult(null) }}
            className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-colors ${
              mode === 'game' ? 'bg-white text-accent shadow-sm' : 'text-gray-400'
            }`}
          >
            🎮 משחק
          </button>
        </div>
      </div>

      {mode === 'browse' && (
        <>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {browseCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-bold transition-colors ${
                  activeCategory === cat ? 'bg-accent text-white' : 'bg-white text-gray-500 border border-gray-200'
                }`}
              >
                {cat !== 'הכל' ? `${CATEGORY_EMOJIS[cat]} ` : ''}{cat}
              </button>
            ))}
          </div>
          <div className="space-y-3">
            {filtered.map(fact => (
              <Card key={fact.id}>
                <div className="flex gap-3 items-start">
                  <span className="text-4xl flex-shrink-0">{fact.emoji}</span>
                  <p className="text-base text-navy leading-relaxed">{fact.textHe}</p>
                </div>
              </Card>
            ))}
          </div>
        </>
      )}

      {mode === 'game' && (
        <div className="space-y-3">
          <p className="text-sm text-gray-500">
            גרור כל עובדה לקטגוריה הנכונה. על כל תשובה נכונה מקבלים ⭐!
          </p>
          <CategorizationGame
            key={gameKey}
            items={gameItems}
            categories={factCategories}
            categoryEmojis={CATEGORY_EMOJIS}
            child={child}
            onStar={onStar}
            onDone={handleDone}
          />
          {lastResult && (
            <button
              onClick={restartGame}
              className="w-full bg-gray-100 text-gray-600 font-bold rounded-2xl py-3 active:scale-95 transition-transform text-sm"
            >
              🔄 שחק שוב
            </button>
          )}
        </div>
      )}
    </div>
  )
}
