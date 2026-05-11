export type ChildId = 'leah' | 'ari' | 'ellie'

export interface ChildState {
  stars: number
  masteredPhrases: string[]   // phrase ids
  cantWaitFor: string[]        // activity ids (max 3)
  myPacking: Record<string, boolean>
}

export interface AppState {
  activeChild: ChildId
  children: Record<ChildId, ChildState>
  familyPacking: Record<string, boolean>
}

export const defaultChildState = (): ChildState => ({
  stars: 0,
  masteredPhrases: [],
  cantWaitFor: [],
  myPacking: {},
})

export const defaultAppState = (): AppState => ({
  activeChild: 'leah',
  children: {
    leah: defaultChildState(),
    ari: defaultChildState(),
    ellie: defaultChildState(),
  },
  familyPacking: {},
})
