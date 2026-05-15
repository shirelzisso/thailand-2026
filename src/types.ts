export type ChildId = 'leah' | 'ari' | 'ellie'

export interface ChildState {
  stars: number
  masteredPhrases: string[]   // phrase ids
  cantWaitFor: string[]        // activity ids (max 3)
  myPacking: Record<string, boolean>
  quizCorrect: number
  quizAnswered: number
  quizBestStreak: number
  memoryBestTimes: Record<string, number> // key: "easy-timed" | "medium-timed" | "hard-timed", value: seconds
}

export interface AppState {
  activeChild: ChildId
  children: Record<ChildId, ChildState>
  familyPacking: Record<string, boolean>
  personPacking: Record<string, Record<string, boolean>>  // keyed by PackingPersonId
}

export const defaultChildState = (): ChildState => ({
  stars: 0,
  masteredPhrases: [],
  cantWaitFor: [],
  myPacking: {},
  quizCorrect: 0,
  quizAnswered: 0,
  quizBestStreak: 0,
  memoryBestTimes: {},
})

export const defaultAppState = (): AppState => ({
  activeChild: 'leah',
  children: {
    leah: defaultChildState(),
    ari: defaultChildState(),
    ellie: defaultChildState(),
  },
  familyPacking: {},
  personPacking: {},
})
