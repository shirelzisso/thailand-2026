import { useEffect, useState } from 'react'
import { useAppStore } from '../store/useAppStore'
import { destinations } from '../data/itinerary'
import type { ChildId } from '../types'
import type { Tab } from '../components/BottomNav'
import { Card } from '../components/Card'

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
  const { state, setActiveChild, resetAll } = store
  const [daysLeft, setDaysLeft] = useState(0)
  const [confirmReset, setConfirmReset] = useState(false)

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
                  <div className="text-xs text-gray-500">{childState.stars} ⭐</div>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Quiz stats for active child */}
      {(() => {
        const cs = state.children[state.activeChild]
        const child = children.find(c => c.id === state.activeChild)!
        const pct = cs.quizAnswered > 0 ? Math.round((cs.quizCorrect / cs.quizAnswered) * 100) : null
        if (cs.quizAnswered === 0) return null
        return (
          <Card className="bg-highlight/10 border border-highlight">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{child.emoji}</span>
              <span className="font-bold text-navy text-sm">סטטיסטיקת חידון — {child.nameHe}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <div className="text-2xl font-black text-primary">{cs.quizCorrect}</div>
                <div className="text-xs text-gray-500">תשובות נכונות</div>
              </div>
              <div>
                <div className="text-2xl font-black text-navy">{pct}%</div>
                <div className="text-xs text-gray-500">אחוז הצלחה</div>
              </div>
              <div>
                <div className="text-2xl font-black text-accent">🔥{cs.quizBestStreak}</div>
                <div className="text-xs text-gray-500">רצף שיא</div>
              </div>
            </div>
          </Card>
        )
      })()}

      {/* Destinations journey */}
      <div>
        <h2 className="text-lg font-bold text-navy mb-3">המסע שלנו</h2>
        <div className="space-y-3">
          {destinations.map((dest) => {
            const unlocked = today >= dest.startDate || daysLeft === 0
            return (
              <div key={dest.id} className="flex items-center gap-3">
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
      {/* Reset */}
      <div className="text-center pt-2 pb-6">
        {confirmReset ? (
          <div className="space-y-2">
            <p className="text-sm text-gray-500 font-medium">בטוח? כל הכוכבים והנקודות יימחקו!</p>
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => { resetAll(); setConfirmReset(false) }}
                className="bg-accent text-white font-bold px-5 py-2 rounded-full text-sm"
              >
                כן, מחק הכל
              </button>
              <button
                onClick={() => setConfirmReset(false)}
                className="bg-gray-100 text-gray-600 font-bold px-5 py-2 rounded-full text-sm"
              >
                ביטול
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setConfirmReset(true)}
            className="text-xs text-gray-400 underline"
          >
            איפוס כל הנתונים
          </button>
        )}
      </div>
    </div>
  )
}
