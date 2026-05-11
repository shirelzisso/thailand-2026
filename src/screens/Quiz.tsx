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
  const { state, addStar } = store
  const activeChild = state.activeChild

  const [flightMode, setFlightMode] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [starBurst, setStarBurst] = useState(false)
  const [sessionScore, setSessionScore] = useState(0)
  const [done, setDone] = useState(false)
  // Shuffle once per session — stored so order doesn't change on re-render
  const [shuffledQuestions] = useState(() =>
    shuffle(quizQuestions)
  )

  const filtered = flightMode
    ? shuffledQuestions
    : shuffledQuestions.filter(q => q.forChildren.includes(activeChild))

  const question = filtered[questionIndex]

  // Per-question shuffled options — re-derive when question changes
  const currentOptions = useMemo(
    () => question
      ? shuffle(question.options.map((opt, i) => ({ text: opt, isCorrect: i === 0 })))
      : [],
    [questionIndex, shuffledQuestions] // eslint-disable-line react-hooks/exhaustive-deps
  )

  const handleAnswer = useCallback((isCorrect: boolean) => {
    setSelected(isCorrect ? 'correct' : 'wrong')
    setShowFeedback(true)
    if (isCorrect) {
      addStar(activeChild)
      setStarBurst(true)
      setSessionScore(s => s + 1)
    }
  }, [activeChild, addStar])

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
    setDone(false)
  }

  const childEmojis: Record<string, string> = { leah: '🦋', ari: '🦁', ellie: '🐘' }

  if (done) {
    return (
      <div className="p-4 flex flex-col items-center justify-center min-h-[60vh] space-y-6 text-center">
        <div className="text-6xl">🎉</div>
        <h2 className="text-2xl font-black text-navy">כל הכבוד!</h2>
        <p className="text-lg text-gray-600">ענית נכון על {sessionScore} מתוך {filtered.length} שאלות!</p>
        <p className="text-4xl">{'⭐'.repeat(Math.min(sessionScore, 10))}</p>
        <button onClick={reset} className="bg-primary text-white font-bold px-8 py-3 rounded-full text-lg">
          שחק שוב!
        </button>
      </div>
    )
  }

  if (!question) return null

  return (
    <div className="p-4 space-y-4">
      <StarBurst trigger={starBurst} onDone={() => setStarBurst(false)} />

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-navy">🎯 חידון</h1>
        <button
          onClick={() => { setFlightMode(f => !f); reset() }}
          className={`text-sm font-bold px-3 py-1.5 rounded-full border ${flightMode ? 'bg-primary text-white border-primary' : 'bg-white text-gray-500 border-gray-300'}`}
        >
          ✈️ מצב טיסה
        </button>
      </div>

      <div className="text-sm text-gray-500">
        {childEmojis[activeChild]} שאלה {questionIndex + 1} מתוך {filtered.length} • {sessionScore} נקודות
      </div>

      <Card>
        <div className="text-center space-y-2">
          <div className="text-5xl">{question.emoji}</div>
          <p className="text-xl font-bold text-navy">{question.questionHe}</p>
        </div>
      </Card>

      <div className="space-y-3">
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

      {showFeedback && (
        <Card className={selected === 'correct' ? 'bg-jungle/10 border-jungle border-2' : 'bg-accent/10 border-accent border-2'}>
          <p className="font-bold text-navy">
            {selected === 'correct'
              ? `✅ ${question.correctFeedbackHe}`
              : `💡 ${question.hintHe}`}
          </p>
          <button
            onClick={handleNext}
            className="mt-3 w-full bg-primary text-white font-bold py-2.5 rounded-xl"
          >
            {questionIndex + 1 >= filtered.length ? 'סיימתי!' : 'שאלה הבאה ←'}
          </button>
        </Card>
      )}
    </div>
  )
}
