import { useState } from 'react'
import { foodItems, foodCategories } from '../data/food'
import { Card } from '../components/Card'

export function FoodGuide() {
  const [activeCategory, setActiveCategory] = useState(foodCategories[0])

  const filtered = foodItems.filter(f => f.categoryHe === activeCategory)

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-black text-navy">🍜 אוכל</h1>
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
            {cat}
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
    </div>
  )
}
