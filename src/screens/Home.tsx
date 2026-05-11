import { useEffect, useState } from 'react'
import { useAppStore } from '../store/useAppStore'
import { destinations } from '../data/itinerary'
import type { ChildId } from '../types'
import type { Tab } from '../components/BottomNav'

const TRIP_START = new Date('2026-05-20T00:00:00')

const children: { id: ChildId; emoji: string; nameHe: string }[] = [
  { id: 'leah', emoji: '🦋', nameHe: 'ליה' },
  { id: 'ari', emoji: '🦁', nameHe: 'ארי' },
  { id: 'ellie', emoji: '🐘', nameHe: 'אלי' },
]

interface HomeProps {
  store: ReturnType<typeof useAppStore>
  onNavigate: (tab: Tab) => void
}

export function Home({ store, onNavigate }: HomeProps) {
  const { state, setActiveChild } = store
  const [daysLeft, setDaysLeft] = useState(0)

  useEffect(() => {
    function calc() {
      const now = new Date()
      const diff = Math.ceil((TRIP_START.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
      setDaysLeft(Math.max(0, diff))
    }
    calc()
    const interval = setInterval(calc, 60000)
    return () => clearInterval(interval)
  }, [])

  const today = new Date()

  return (
    <div className="p-4 space-y-6">
      {/* Countdown */}
      <div className="bg-primary rounded-2xl p-6 text-center text-white shadow-lg">
        <div className="text-6xl font-black animate-pulse-soft">{daysLeft}</div>
        <div className="text-xl font-bold mt-1">
          {daysLeft === 0 ? '🌴 אנחנו בתאילנד! 🌴' : `ימים עד תאילנד! 🌴`}
        </div>
        <div className="text-sm opacity-80 mt-1">20 במאי – 12 ביוני 2026</div>
      </div>

      {/* Child selector */}
      <div>
        <h2 className="text-lg font-bold text-navy mb-3">מי אתה/את?</h2>
        <div className="flex gap-3">
          {children.map(child => {
            const isActive = state.activeChild === child.id
            const childState = state.children[child.id]
            return (
              <button
                key={child.id}
                onClick={() => setActiveChild(child.id)}
                className={`flex-1 rounded-2xl p-3 text-center transition-all border-2 ${
                  isActive ? 'border-primary bg-primary/10 scale-105' : 'border-gray-200 bg-white'
                }`}
              >
                <div className="text-3xl">{child.emoji}</div>
                <div className="font-bold text-sm mt-1">{child.nameHe}</div>
                <div className="text-xs text-highlight font-bold">{'⭐'.repeat(Math.min(childState.stars, 5))}</div>
                {childState.stars > 0 && (
                  <div className="text-xs text-gray-500">{childState.stars} כוכבים</div>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Destinations journey */}
      <div>
        <h2 className="text-lg font-bold text-navy mb-3">המסע שלנו</h2>
        <div className="space-y-3">
          {destinations.map((dest, i) => {
            const unlocked = today >= dest.startDate || daysLeft === 0
            return (
              <div key={dest.id} className="flex items-center gap-3">
                {i > 0 && <div className="absolute" />}
                <button
                  onClick={() => unlocked && onNavigate('trip')}
                  className={`flex-1 rounded-2xl p-4 flex items-center gap-3 transition-all border-2 ${
                    unlocked
                      ? 'border-jungle bg-white shadow-md active:scale-95'
                      : 'border-gray-200 bg-gray-100 opacity-50'
                  }`}
                >
                  <span className="text-3xl">{dest.emoji}</span>
                  <div className="text-right flex-1">
                    <div className="font-bold text-navy">{dest.nameHe}</div>
                    <div className="text-xs text-gray-500">{dest.hotel}</div>
                  </div>
                  {unlocked ? <span className="text-jungle text-xl">🔓</span> : <span className="text-gray-400 text-xl">🔒</span>}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
