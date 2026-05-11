export interface MemoryCardDef {
  id: string
  emoji: string
  labelHe: string
}

// 20 pairs — Easy uses first 4, Medium uses first 10, Hard uses all 20
export const memoryCardDefs: MemoryCardDef[] = [
  { id: 'elephant',   emoji: '🐘', labelHe: 'פיל' },
  { id: 'mango',      emoji: '🥭', labelHe: 'מנגו' },
  { id: 'temple',     emoji: '⛩️', labelHe: 'מקדש' },
  { id: 'tuk-tuk',    emoji: '🛺', labelHe: 'תוק-טוק' },
  { id: 'monkey',     emoji: '🐒', labelHe: 'קוף' },
  { id: 'coconut',    emoji: '🥥', labelHe: 'קוקוס' },
  { id: 'fish',       emoji: '🐠', labelHe: 'דג' },
  { id: 'lotus',      emoji: '🌸', labelHe: 'לוטוס' },
  { id: 'crocodile',  emoji: '🐊', labelHe: 'תנין' },
  { id: 'noodles',    emoji: '🍜', labelHe: 'נודלס' },
  { id: 'butterfly',  emoji: '🦋', labelHe: 'פרפר' },
  { id: 'palm',       emoji: '🌴', labelHe: 'דקל' },
  { id: 'snake',      emoji: '🐍', labelHe: 'נחש' },
  { id: 'parrot',     emoji: '🦜', labelHe: 'תוכי' },
  { id: 'rice',       emoji: '🍚', labelHe: 'אורז' },
  { id: 'chili',      emoji: '🌶️', labelHe: 'פלפל חריף' },
  { id: 'shrimp',     emoji: '🍤', labelHe: 'שרימפס' },
  { id: 'crown',      emoji: '👑', labelHe: 'כתר' },
  { id: 'wai',        emoji: '🙏', labelHe: 'ויי' },
  { id: 'beach',      emoji: '🏖️', labelHe: 'חוף' },
]

export type Difficulty = 'easy' | 'medium' | 'hard'

export const PAIR_COUNTS: Record<Difficulty, number> = {
  easy: 4,
  medium: 10,
  hard: 20,
}
