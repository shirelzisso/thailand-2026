import { useState, useCallback, useMemo } from 'react'
import { quizQuestions } from '../data/quiz'
import { useAppStore } from '../store/useAppStore'
import { StarBurst } from '../components/StarBurst'
import { Card } from '../components/Card'

interface QuizProps {
  store: ReturnType<typeof useAppStore>
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

export function Quiz({ store }: QuizProps) {
  const { state, addStar, recordQuizAnswer } = store
  const activeChild = state.activeChild

  const [flightMode, setFlightMode] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [starBurst, setStarBurst] = useState(false)
  const [sessionScore, setSessionScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [done, setDone] = useState(false)
  const [shakeKey, setShakeKey] = useState(0)
  const [scoreFlash, setScoreFlash] = useState(false)
  const [streakPop, setStreakPop] = useState(false)

  const [shuffledQuestions] = useState(() => shuffle(quizQuestions))

  const filtered = flightMode
    ? shuffledQuestions
    : shuffledQuestions.filter(q => q.forChildren.includes(activeChild))

  const question = filtered[questionIndex]

  const currentOptions = useMemo(
    () => question
      ? shuffle(question.options.map((opt, i) => ({ text: opt, isCorrect: i === 0 })))
      : [],
    [question?.id] // eslint-disable-line react-hooks/exhaustive-deps
  )

  const handleAnswer = useCallback((isCorrect: boolean) => {
    setSelected(isCorrect ? 'correct' : 'wrong')
    setShowFeedback(true)
    if (isCorrect) {
      addStar(activeChild)
      setStarBurst(true)
      setSessionScore(s => s + 1)
      setScoreFlash(true)
      setTimeout(() => setScoreFlash(false), 500)
      setStreak(s => {
        const next = s + 1
        setBestStreak(b => Math.max(b, next))
        recordQuizAnswer(activeChild, true, next)
        if (next >= 2) {
          setStreakPop(true)
          setTimeout(() => setStreakPop(false), 600)
        }
        return next
      })
    } else {
      setStreak(0)
      setShakeKey(k => k + 1)
      recordQuizAnswer(activeChild, false, 0)
    }
  }, [activeChild, addStar, recordQuizAnswer])

  const handleNext = () => {
    if (questionIndex + 1 >= filtered.length) {
      setDone(true)
    } else {
      setQuestionIndex(i => i + 1)
      setSelected(null)
      setShowFeedback(false)
    }
  }

  const reset = () => {
    setQuestionIndex(0)
    setSelected(null)
    setShowFeedback(false)
    setSessionScore(0)
    setStreak(0)
    setBestStreak(0)
    setDone(false)
  }

  const childEmojis: Record<string, string> = { leah: '🦋', ari: '🦁', ellie: '🐘' }
  const progress = filtered.length > 0 ? ((questionIndex) / filtered.length) * 100 : 0

  if (done) {
    const pct = Math.round((sessionScore / filtered.length) * 100)
    const medal = pct === 100 ? '🏆' : pct >= 70 ? '🥇' : pct >= 40 ? '🥈' : '🥉'
    return (
      <div className="p-4 flex flex-col items-center justify-center min-h-[60vh] space-y-6 text-center">
        <StarBurst trigger={starBurst} onDone={() => setStarBurst(false)} />
        <div className="text-7xl animate-bounce-in">{medal}</div>
        <h2 className="text-3xl font-black text-navy">כל הכבוד!</h2>
        <p className="text-lg text-gray-600">
          ענית נכון על <span className="font-black text-primary text-2xl">{sessionScore}</span> מתוך {filtered.length} שאלות!
        </p>
        {bestStreak >= 3 && (
          <p className="text-base text-accent font-bold">🔥 רצף הכי ארוך: {bestStreak} תשובות נכונות ברצף!</p>
        )}
        <p className="text-4xl tracking-widest">{'⭐'.repeat(Math.min(sessionScore, 10))}</p>
        <button
          onClick={reset}
          className="bg-primary text-white font-bold px-10 py-4 rounded-full text-xl shadow-lg active:scale-95 transition-transform"
        >
          שחק שוב! 🎯
        </button>
      </div>
    )
  }

  if (!question) return (
    <div className="p-4 text-center mt-20 text-gray-400">
      <div className="text-5xl mb-4">🎯</div>
      <p className="text-lg font-bold text-navy">אין שאלות זמינות</p>
      <p className="text-sm mt-2">נסה להחליף ילד או להפעיל מצב טיסה</p>
    </div>
  )

  return (
    <div className="p-4 space-y-4">
      <StarBurst trigger={starBurst} onDone={() => setStarBurst(false)} />

      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-navy">🎯 חידון</h1>
        <button
          onClick={() => { setFlightMode(f => !f); reset() }}
          className={`text-sm font-bold px-3 py-1.5 rounded-full border ${flightMode ? 'bg-primary text-white border-primary' : 'bg-white text-gray-500 border-gray-300'}`}
        >
          ✈️ מצב טיסה
        </button>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
        <div
          className="h-3 bg-primary rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Score + streak row */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className="text-gray-500">{childEmojis[activeChild]} שאלה {questionIndex + 1}/{filtered.length}</span>
        </div>
        <div className="flex items-center gap-3">
          {streak >= 2 && (
            <span
              key={streakPop ? 'pop' : 'idle'}
              className={`font-black text-accent ${streakPop ? 'animate-streak-pop' : ''}`}
            >
              🔥 {streak}
            </span>
          )}
          <span
            key={scoreFlash ? `flash-${sessionScore}` : `idle-${sessionScore}`}
            className={`font-black text-navy ${scoreFlash ? 'animate-score-flash' : ''}`}
          >
            ⭐ {sessionScore}
          </span>
        </div>
      </div>

      {/* Question card */}
      <Card>
        <div className="text-center space-y-2">
          <div className="text-5xl">{question.emoji}</div>
          <p className="text-xl font-bold text-navy">{question.questionHe}</p>
        </div>
      </Card>

      {/* Answer buttons */}
      <div
        key={shakeKey}
        className={shakeKey > 0 && selected === 'wrong' ? 'animate-wrong-shake space-y-3' : 'space-y-3'}
      >
        {currentOptions.map((option, i) => {
          let style = 'border-2 border-gray-200 bg-white'
          if (showFeedback) {
            if (option.isCorrect) style = 'border-2 border-jungle bg-jungle/20'
            else if (selected === 'wrong' && !option.isCorrect) style = 'border-2 border-accent bg-accent/10'
          }
          return (
            <button
              key={i}
              disabled={showFeedback}
              onClick={() => handleAnswer(option.isCorrect)}
              className={`w-full text-right p-4 rounded-2xl font-bold text-navy transition-all active:scale-95 ${style}`}
            >
              {option.text}
            </button>
          )
        })}
      </div>

      {/* Feedback card */}
      {showFeedback && (
        <Card className={selected === 'correct' ? 'bg-jungle/10 border-jungle border-2' : 'bg-accent/10 border-accent border-2'}>
          <p className="font-bold text-navy text-lg">
            {selected === 'correct'
              ? `✅ ${question.correctFeedbackHe}`
              : `💡 ${question.hintHe}`}
          </p>
          {selected === 'correct' && streak >= 2 && (
            <p className="text-accent font-black mt-1">🔥 {streak} ברצף! מדהים!</p>
          )}
          <button
            onClick={handleNext}
            className="mt-3 w-full bg-primary text-white font-bold py-3 rounded-xl text-lg active:scale-95 transition-transform"
          >
            {questionIndex + 1 >= filtered.length ? '🎉 סיימתי!' : 'שאלה הבאה ←'}
          </button>
        </Card>
      )}
    </div>
  )
}
