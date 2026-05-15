import { useState } from 'react'
import { foodItems, foodCategories } from '../data/food'
import { Card } from '../components/Card'
import { CategorizationGame } from '../components/CategorizationGame'
import type { GameItem } from '../components/CategorizationGame'
import type { ChildId } from '../types'

const CATEGORY_EMOJIS: Record<string, string> = {
  'בטוח ומעולה לנו': '✅',
  'חייבים לנסות': '⭐',
  'לשים לב': '⚠️',
  'בשווקי הלילה': '🌙',
}

interface Props {
  child: ChildId
  onStar: () => void
}

export function FoodGuide({ child, onStar }: Props) {
  const [mode, setMode] = useState<'browse' | 'game'>('browse')
  const [activeCategory, setActiveCategory] = useState(foodCategories[0])
  const [gameKey, setGameKey] = useState(0)

  const filtered = foodItems.filter(f => f.categoryHe === activeCategory)

  // Only items that are clearly one category (skip warnings / multi-use) for game
  const gameItems: GameItem[] = foodItems.map(item => ({
    id: item.id,
    categoryHe: item.categoryHe,
    emoji: item.emoji,
    label: item.nameHe,
    detail: item.descHe,
  }))

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-navy">🍜 אוכל</h1>
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
            onClick={() => setMode('game')}
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
          <p className="text-sm text-gray-600">אנחנו אוכלים כשר — הנה מה שעובד לנו!</p>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {foodCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-bold transition-colors ${
                  activeCategory === cat ? 'bg-highlight text-white' : 'bg-white text-gray-500 border border-gray-200'
                }`}
              >
                {CATEGORY_EMOJIS[cat]} {cat}
              </button>
            ))}
          </div>
          <div className="space-y-3">
            {filtered.map(item => (
              <Card key={item.id}>
                <div className="flex gap-3 items-start">
                  <span className="text-4xl flex-shrink-0">{item.emoji}</span>
                  <div>
                    <div className="font-bold text-navy">{item.nameHe}</div>
                    <div className="text-sm text-gray-600 mt-0.5">{item.descHe}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </>
      )}

      {mode === 'game' && (
        <div className="space-y-3">
          <p className="text-sm text-gray-500">
            האם את/ה יודע/ת לאיזה קטגוריה שייך כל מאכל? גרור לתיבה הנכונה!
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {foodCategories.map(cat => (
              <div key={cat} className="flex items-center gap-1 bg-white rounded-xl border border-gray-100 px-2 py-1">
                <span>{CATEGORY_EMOJIS[cat]}</span>
                <span className="font-bold text-gray-600 truncate">{cat}</span>
              </div>
            ))}
          </div>
          <CategorizationGame
            key={gameKey}
            items={gameItems}
            categories={foodCategories}
            categoryEmojis={CATEGORY_EMOJIS}
            child={child}
            onStar={onStar}
            onDone={() => setGameKey(k => k + 1)}
          />
        </div>
      )}
    </div>
  )
}
