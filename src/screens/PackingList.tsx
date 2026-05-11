import { useState } from 'react'
import { myPackingItems, familyPackingSections } from '../data/packing'
import { useAppStore } from '../store/useAppStore'

interface PackingListProps {
  store: ReturnType<typeof useAppStore>
}

export function PackingList({ store }: PackingListProps) {
  const { state, toggleMyPacking, toggleFamilyPacking } = store
  const [tab, setTab] = useState<'my' | 'family'>('my')

  const activeChild = state.activeChild
  const myPacking = state.children[activeChild].myPacking
  const checkedCount = myPackingItems.filter(item => myPacking[item.id]).length

  const childNames: Record<string, string> = { leah: 'ליה', ari: 'ארי', ellie: 'אלי' }
  const childEmojis: Record<string, string> = { leah: '🦋', ari: '🦁', ellie: '🐘' }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-black text-navy">🎒 מה ארזנו</h1>

      {/* Tab toggle */}
      <div className="flex bg-gray-100 rounded-xl p-1">
        <button
          onClick={() => setTab('my')}
          className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors ${tab === 'my' ? 'bg-white shadow text-primary' : 'text-gray-500'}`}
        >
          הצ'קליסט שלי {childEmojis[activeChild]}
        </button>
        <button
          onClick={() => setTab('family')}
          className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors ${tab === 'family' ? 'bg-white shadow text-primary' : 'text-gray-500'}`}
        >
          רשימת המשפחה 👨‍👩‍👧‍👦
        </button>
      </div>

      {tab === 'my' ? (
        <div className="space-y-3">
          {/* Progress bar */}
          <div>
            <div className="text-sm font-bold text-navy mb-1">
              {childEmojis[activeChild]} {childNames[activeChild]} — ארזת {checkedCount} מתוך {myPackingItems.length} פריטים!
            </div>
            <div className="bg-gray-200 rounded-full h-3">
              <div
                className="bg-jungle rounded-full h-3 transition-all duration-500"
                style={{ width: `${(checkedCount / myPackingItems.length) * 100}%` }}
              />
            </div>
          </div>
          {myPackingItems.map(item => {
            const checked = !!myPacking[item.id]
            return (
              <button
                key={item.id}
                onClick={() => toggleMyPacking(activeChild, item.id)}
                className={`w-full text-right flex items-center gap-3 p-4 rounded-2xl border-2 transition-all active:scale-95 ${
                  checked ? 'border-jungle bg-jungle/10' : 'border-gray-200 bg-white'
                }`}
              >
                <span className={`text-2xl ml-auto ${checked ? 'animate-bounce-in' : ''}`}>
                  {checked ? '✅' : '⬜'}
                </span>
                <span className="text-3xl">{item.emoji}</span>
                <span className={`font-bold text-base ${checked ? 'line-through text-gray-400' : 'text-navy'}`}>
                  {item.labelHe}
                </span>
              </button>
            )
          })}
        </div>
      ) : (
        <div className="space-y-6">
          {familyPackingSections.map(section => (
            <div key={section.titleHe}>
              <h2 className="text-lg font-bold text-navy mb-2">{section.titleHe}</h2>
              <div className="space-y-2">
                {section.items.map(item => {
                  const checked = !!state.familyPacking[item.id]
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleFamilyPacking(item.id)}
                      className={`w-full text-right flex items-center gap-3 p-3 rounded-xl border transition-all active:scale-95 ${
                        checked ? 'border-jungle bg-jungle/10' : 'border-gray-200 bg-white'
                      }`}
                    >
                      <span className="ml-auto">{checked ? '✅' : '⬜'}</span>
                      <span className="text-xl">{item.emoji}</span>
                      <span className={`text-sm font-medium ${checked ? 'line-through text-gray-400' : 'text-navy'}`}>
                        {item.labelHe}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
