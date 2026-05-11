export interface PackingItem {
  id: string
  emoji: string
  labelHe: string
}

export const myPackingItems: PackingItem[] = [
  { id: 'swimsuit', emoji: '🩱', labelHe: 'בגד ים' },
  { id: 'waterShoes', emoji: '👟', labelHe: 'נעלי מים' },
  { id: 'hat', emoji: '🧢', labelHe: 'כובע שמש' },
  { id: 'sunglasses', emoji: '🕶️', labelHe: 'משקפי שמש' },
  { id: 'backpack', emoji: '🎒', labelHe: 'תרמיל קטן שלי' },
  { id: 'book', emoji: '📚', labelHe: 'ספר / משחק לטיסה' },
  { id: 'water', emoji: '💧', labelHe: 'בקבוק מים' },
  { id: 'sunscreen', emoji: '🧴', labelHe: 'קרם הגנה (אמא/אבא שמים)' },
]

export interface FamilyPackingSection {
  titleHe: string
  items: PackingItem[]
}

export const familyPackingSections: FamilyPackingSection[] = [
  {
    titleHe: 'ביגוד',
    items: [
      { id: 'fam-temple', emoji: '👗', labelHe: 'בגדי מקדש x5 — כתפיים וברכיים מכוסות' },
      { id: 'fam-watershoes', emoji: '👟', labelHe: 'נעלי מים x3 לילדים — ארוואן + קו לארן' },
      { id: 'fam-ponchos', emoji: '🌂', labelHe: 'מעילי גשם x5 — עונת הגשמים' },
    ],
  },
  {
    titleHe: 'בריאות ובטיחות',
    items: [
      { id: 'fam-sunscreen', emoji: '🧴', labelHe: 'קרם הגנה SPF50+ — בכמות גדולה' },
      { id: 'fam-deet', emoji: '🦟', labelHe: 'דוחה יתושים DEET x5 — במיוחד לקנצ\'נאבורי' },
      { id: 'fam-firstaid', emoji: '🩹', labelHe: 'ערכת עזרה ראשונה + תרופות ילדים' },
    ],
  },
  {
    titleHe: 'טכנולוגיה',
    items: [
      { id: 'fam-battery', emoji: '🔋', labelHe: 'סוללות נייד x2' },
      { id: 'fam-snorkel', emoji: '🤿', labelHe: 'ערכות שנורקל — או לשכור באתר' },
    ],
  },
  {
    titleHe: 'אפליקציות וכסף',
    items: [
      { id: 'fam-grab', emoji: '📱', labelHe: 'Grab — להגדיר תשלום לפני הטיסה' },
      { id: 'fam-maps', emoji: '🗺️', labelHe: 'Google Maps אופליין — בנגקוק, קנצ\'נאבורי, פאטאיה, סאמוי' },
      { id: 'fam-cash', emoji: '💵', labelHe: 'להחליף $200-300 במזומן להגעה' },
    ],
  },
]
