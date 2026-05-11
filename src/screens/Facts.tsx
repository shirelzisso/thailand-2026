import { useState } from 'react'
import { facts } from '../data/facts'
import { Card } from '../components/Card'

const categories = ['הכל', 'קסמים ומקדשים', 'היסטוריה', 'טבע ובעלי חיים', 'כיף ועובדות']

export function Facts() {
  const [activeCategory, setActiveCategory] = useState('הכל')

  const filtered = activeCategory === 'הכל'
    ? facts
    : facts.filter(f => f.categoryHe === activeCategory)

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-black text-navy">🏛️ על תאילנד</h1>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-bold transition-colors ${
              activeCategory === cat ? 'bg-accent text-white' : 'bg-white text-gray-500 border border-gray-200'
            }`}
          >
            {cat}
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
    </div>
  )
}
