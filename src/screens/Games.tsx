import { useState, useEffect } from 'react'
import { useAppStore } from '../store/useAppStore'
import { MemoryGame } from './games/MemoryGame'
import { BingoCaller } from './games/BingoCaller'

interface GamesProps {
  store: ReturnType<typeof useAppStore>
}

const UNLOCK_DATE = new Date('2026-05-19T16:00:00')

type GameTab = 'memory' | 'bingo'

function useCountdown(target: Date) {
  const [diff, setDiff] = useState(() => target.getTime() - Date.now())
  useEffect(() => {
    const interval = setInterval(() => setDiff(target.getTime() - Date.now()), 1000)
    return () => clearInterval(interval)
  }, [target])
  return diff
}

function formatCountdown(ms: number) {
  if (ms <= 0) return null
  const totalSeconds = Math.floor(ms / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  if (days > 0) return `${days} ימים ו-${hours} שעות`
  if (hours > 0) return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  return `${minutes}:${String(seconds).padStart(2, '0')}`
}

const GAMES = [
  { id: 'memory' as GameTab, emoji: '🃏', nameHe: 'משחק זיכרון', descHe: 'הפכו קלפים תאילנדיים ומצאו זוגות!' },
  { id: 'bingo' as GameTab, emoji: '🎱', nameHe: 'בינגו', descHe: 'משוך ריבועים לכרטיסי הבינגו שלכם!' },
]

export function Games({ store }: GamesProps) {
  const msLeft = useCountdown(UNLOCK_DATE)
  const isUnlocked = msLeft <= 0
  const [activeGame, setActiveGame] = useState<GameTab | null>(null)

  if (!isUnlocked) {
    const countdown = formatCountdown(msLeft)
    return (
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-black text-navy">🃏 משחקי טיסה</h1>
        <div className="bg-primary/5 border-2 border-primary/20 rounded-3xl p-5 text-center space-y-2">
          <div className="text-4xl">✈️</div>
          <p className="font-black text-navy text-lg">המשחקים ייפתחו לפני הטיסה!</p>
          {countdown && (
            <p className="text-3xl font-black text-primary">{countdown}</p>
          )}
          <p className="text-sm text-gray-500">19 במאי בשעה 16:00</p>
        </div>

        <p className="text-sm font-bold text-gray-500">מה מחכה לכם:</p>
        <div className="space-y-3">
          {GAMES.map(game => (
            <div
              key={game.id}
              className="bg-white border-2 border-gray-100 rounded-2xl p-4 flex items-center gap-4 opacity-50"
            >
              <span className="text-4xl">{game.emoji}</span>
              <div>
                <div className="font-black text-navy flex items-center gap-2">
                  {game.nameHe} <span className="text-lg">🔒</span>
                </div>
                <div className="text-sm text-gray-500">{game.descHe}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (activeGame === 'memory') {
    return (
      <div>
        <button
          onClick={() => setActiveGame(null)}
          className="flex items-center gap-2 text-primary font-bold text-lg p-4"
        >
          ← חזרה
        </button>
        <MemoryGame store={store} />
      </div>
    )
  }

  if (activeGame === 'bingo') {
    return (
      <div>
        <button
          onClick={() => setActiveGame(null)}
          className="flex items-center gap-2 text-primary font-bold text-lg p-4"
        >
          ← חזרה
        </button>
        <BingoCaller />
      </div>
    )
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-black text-navy">🃏 משחקי טיסה</h1>
      <p className="text-sm text-gray-500">בחרו משחק — הטיסה מתחילה! ✈️</p>
      <div className="space-y-3">
        {GAMES.map(game => (
          <button
            key={game.id}
            onClick={() => setActiveGame(game.id)}
            className="w-full bg-white border-2 border-gray-100 rounded-2xl p-5 flex items-center gap-4 active:scale-95 transition-transform shadow-sm text-right"
          >
            <span className="text-5xl">{game.emoji}</span>
            <div>
              <div className="font-black text-navy text-lg">{game.nameHe}</div>
              <div className="text-sm text-gray-500">{game.descHe}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
