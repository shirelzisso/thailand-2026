import { useState } from 'react'
import { phrases, phraseCategories } from '../data/phrases'
import { useAppStore } from '../store/useAppStore'
import { Card } from '../components/Card'

interface LearnThaiProps {
  store: ReturnType<typeof useAppStore>
}

function speakThai(thaiScript: string) {
  if (!window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const utt = new SpeechSynthesisUtterance(thaiScript)
  utt.lang = 'th-TH'
  utt.rate = 0.85
  window.speechSynthesis.speak(utt)
}

export function LearnThai({ store }: LearnThaiProps) {
  const { state, toggleMasteredPhrase } = store
  const [activeCategory, setActiveCategory] = useState(phraseCategories[0])

  const activeChild = state.activeChild
  const mastered = state.children[activeChild].masteredPhrases
  const filtered = phrases.filter(p => p.categoryHe === activeCategory)

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-black text-navy">🇹🇭 לדבר תאילנדית</h1>

      {/* Category tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {phraseCategories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-bold transition-colors ${
              activeCategory === cat ? 'bg-primary text-white' : 'bg-white text-gray-500 border border-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Phrase cards */}
      <div className="space-y-3">
        {filtered.map(phrase => {
          const isMastered = mastered.includes(phrase.id)
          return (
            <Card key={phrase.id} className={isMastered ? 'border-2 border-highlight bg-highlight/10' : ''}>
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <div className="text-xl font-black text-navy">{phrase.meaningHe}</div>
                  <div className="text-2xl mt-1 text-primary font-bold">{phrase.thaiScript}</div>
                  <div className="text-base text-gray-600 mt-0.5">📢 {phrase.phoneticHe}</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => speakThai(phrase.thaiScript)}
                    className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl shadow-md active:scale-95 transition-transform"
                    aria-label="השמע"
                  >
                    👂
                  </button>
                  <button
                    onClick={() => toggleMasteredPhrase(activeChild, phrase.id)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-md active:scale-95 transition-all ${
                      isMastered ? 'bg-highlight text-white' : 'bg-gray-100 text-gray-400'
                    }`}
                    aria-label={isMastered ? 'שלטתי!' : 'עוד לא'}
                  >
                    ⭐
                  </button>
                </div>
              </div>
              {isMastered && (
                <div className="mt-2 text-center text-highlight font-bold text-sm">שלטתי! 🌟</div>
              )}
            </Card>
          )
        })}
      </div>
    </div>
  )
}
