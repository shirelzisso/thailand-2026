import { useState } from 'react'
import { bingoSquares } from '../../data/bingo'
import type { BingoSquare } from '../../data/bingo'

export function BingoCaller() {
  const [remaining, setRemaining] = useState<BingoSquare[]>([...bingoSquares])
  const [called, setCalled] = useState<BingoSquare[]>([])
  const [current, setCurrent] = useState<BingoSquare | null>(null)
  const [confirmReset, setConfirmReset] = useState(false)

  const draw = () => {
    if (remaining.length === 0) return
    const idx = Math.floor(Math.random() * remaining.length)
    const drawn = remaining[idx]
    setCurrent(drawn)
    setCalled(prev => [drawn, ...prev])
    setRemaining(prev => prev.filter((_, i) => i !== idx))
  }

  const reset = () => {
    setRemaining([...bingoSquares])
    setCalled([])
    setCurrent(null)
    setConfirmReset(false)
  }

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-black text-navy">🎱 בינגו</h2>

      <div className="bg-primary/5 border-2 border-primary/20 rounded-3xl p-6 text-center min-h-[140px] flex flex-col items-center justify-center">
        {current ? (
          <>
            <div className="text-6xl mb-2">{current.emoji}</div>
            <div className="text-xl font-black text-navy">{current.labelHe}</div>
          </>
        ) : (
          <p className="text-gray-400 font-bold">לחצו "משוך!" כדי להתחיל</p>
        )}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={draw}
          disabled={remaining.length === 0}
          className="flex-1 bg-primary text-white font-black py-4 rounded-2xl text-xl active:scale-95 transition-transform disabled:opacity-40"
        >
          משוך! 🎲
        </button>
        <div className="text-center">
          <div className="text-2xl font-black text-navy">{called.length}</div>
          <div className="text-xs text-gray-500">מתוך 25</div>
        </div>
      </div>

      {remaining.length === 0 && (
        <p className="text-center font-bold text-jungle">🎉 כל הריבועים נמשכו!</p>
      )}

      {called.length > 0 && (
        <div>
          <p className="text-sm font-bold text-gray-500 mb-2">מה נמשך עד עכשיו:</p>
          <div className="flex flex-wrap gap-2">
            {called.map((sq, i) => (
              <div
                key={sq.id}
                className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold border ${
                  i === 0 ? 'bg-primary text-white border-primary' : 'bg-white text-navy border-gray-200'
                }`}
              >
                <span>{sq.emoji}</span>
                <span>{sq.labelHe}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="text-center pt-2">
        {confirmReset ? (
          <div className="space-y-2">
            <p className="text-sm text-gray-500">מתחילים משחק חדש?</p>
            <div className="flex gap-2 justify-center">
              <button onClick={reset} className="bg-accent text-white font-bold px-5 py-2 rounded-full text-sm">
                כן, אפס
              </button>
              <button onClick={() => setConfirmReset(false)} className="bg-gray-100 text-gray-600 font-bold px-5 py-2 rounded-full text-sm">
                ביטול
              </button>
            </div>
          </div>
        ) : (
          <button onClick={() => setConfirmReset(true)} className="text-xs text-gray-400 underline">
            איפוס משחק
          </button>
        )}
      </div>
    </div>
  )
}
