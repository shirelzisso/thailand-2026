import { useState, useCallback } from 'react'
import type { AppState, ChildId } from '../types'
import { defaultAppState } from '../types'


const STORAGE_KEY = 'thailand-app'

function load(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultAppState()
    const parsed = JSON.parse(raw) as Partial<AppState>
    const defaults = defaultAppState()
    return {
      activeChild: parsed.activeChild ?? defaults.activeChild,
      children: {
        leah: { ...defaults.children.leah, ...parsed.children?.leah },
        ari: { ...defaults.children.ari, ...parsed.children?.ari },
        ellie: { ...defaults.children.ellie, ...parsed.children?.ellie },
      },
      familyPacking: parsed.familyPacking ?? {},
      personPacking: parsed.personPacking ?? {},
    }
  } catch {
    return defaultAppState()
  }
}

function save(state: AppState): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function useAppStore() {
  const [state, setState] = useState<AppState>(load)

  const update = useCallback((updater: (s: AppState) => AppState) => {
    setState(prev => {
      const next = updater(prev)
      save(next)
      return next
    })
  }, [])

  const setActiveChild = (id: ChildId) =>
    update(s => ({ ...s, activeChild: id }))

  const addStar = (child: ChildId) =>
    update(s => ({
      ...s,
      children: {
        ...s.children,
        [child]: { ...s.children[child], stars: s.children[child].stars + 1 },
      },
    }))

  const toggleMasteredPhrase = (child: ChildId, phraseId: string) =>
    update(s => {
      const current = s.children[child].masteredPhrases
      const next = current.includes(phraseId)
        ? current.filter(id => id !== phraseId)
        : [...current, phraseId]
      return {
        ...s,
        children: { ...s.children, [child]: { ...s.children[child], masteredPhrases: next } },
      }
    })

  const toggleCantWaitFor = (child: ChildId, activityId: string) =>
    update(s => {
      const current = s.children[child].cantWaitFor
      const isSelected = current.includes(activityId)
      const next = isSelected
        ? current.filter(id => id !== activityId)
        : current.length < 3 ? [...current, activityId] : current
      return {
        ...s,
        children: { ...s.children, [child]: { ...s.children[child], cantWaitFor: next } },
      }
    })

  const toggleMyPacking = (child: ChildId, itemId: string) =>
    update(s => {
      const current = s.children[child].myPacking
      return {
        ...s,
        children: {
          ...s.children,
          [child]: { ...s.children[child], myPacking: { ...current, [itemId]: !current[itemId] } },
        },
      }
    })

  const toggleFamilyPacking = (itemId: string) =>
    update(s => ({ ...s, familyPacking: { ...s.familyPacking, [itemId]: !s.familyPacking[itemId] } }))

  const togglePersonPacking = (personId: string, itemId: string) =>
    update(s => {
      const person = s.personPacking[personId] ?? {}
      return { ...s, personPacking: { ...s.personPacking, [personId]: { ...person, [itemId]: !person[itemId] } } }
    })

  const recordQuizAnswer = (child: ChildId, correct: boolean, currentStreak: number) =>
    update(s => {
      const prev = s.children[child]
      return {
        ...s,
        children: {
          ...s.children,
          [child]: {
            ...prev,
            quizAnswered: prev.quizAnswered + 1,
            quizCorrect: prev.quizCorrect + (correct ? 1 : 0),
            quizBestStreak: Math.max(prev.quizBestStreak, currentStreak),
          },
        },
      }
    })

  const recordMemoryBestTime = (child: ChildId, key: string, seconds: number) =>
    update(s => {
      const prev = s.children[child].memoryBestTimes
      if (prev[key] !== undefined && prev[key] <= seconds) return s
      return {
        ...s,
        children: {
          ...s.children,
          [child]: {
            ...s.children[child],
            memoryBestTimes: { ...prev, [key]: seconds },
          },
        },
      }
    })

  const resetAll = () => update(() => defaultAppState())

  return {
    state,
    setActiveChild,
    addStar,
    toggleMasteredPhrase,
    toggleCantWaitFor,
    toggleMyPacking,
    toggleFamilyPacking,
    togglePersonPacking,
    recordQuizAnswer,
    recordMemoryBestTime,
    resetAll,
  }
}
