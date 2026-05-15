export interface PackingItem {
  id: string
  emoji: string
  labelHe: string
}

export interface PersonPackingSection {
  titleHe: string
  items: PackingItem[]
}

export interface FamilyPackingSection {
  titleHe: string
  items: PackingItem[]
}

export type PackingPersonId = 'leah' | 'ari' | 'ellie' | 'shirel' | 'michael'

export const packingPersons: { id: PackingPersonId; nameHe: string; emoji: string }[] = [
  { id: 'leah',    nameHe: 'ליה',    emoji: '🦋' },
  { id: 'ari',     nameHe: 'ארי',    emoji: '🦁' },
  { id: 'ellie',   nameHe: 'אלי',    emoji: '🐘' },
  { id: 'shirel',  nameHe: 'שיראל',  emoji: '👩' },
  { id: 'michael', nameHe: 'מיכאל', emoji: '👨' },
]

// ─── Per-person packing lists ──────────────────────────────────────────────

export const personPackingSections: Record<PackingPersonId, PersonPackingSection[]> = {
  leah: [
    {
      titleHe: 'ביגוד',
      items: [
        { id: 'leah-underwear', emoji: '👙', labelHe: 'תחתונים' },
        { id: 'leah-socks',     emoji: '🧦', labelHe: 'גרביים' },
        { id: 'leah-pyjamas',   emoji: '🌙', labelHe: 'פיג\'מה' },
        { id: 'leah-swimsuit',  emoji: '🩱', labelHe: 'בגדי ים' },
        { id: 'leah-sandals',   emoji: '🩴', labelHe: 'כפכפים' },
        { id: 'leah-sneakers',  emoji: '👟', labelHe: 'נעלי ספורט' },
        { id: 'leah-daywear',   emoji: '👕', labelHe: 'בגדי יום' },
        { id: 'leah-evening',   emoji: '👗', labelHe: 'בגד ערב' },
        { id: 'leah-hoodie',    emoji: '🧥', labelHe: 'קפוצ\'ון קל (מזגן בטיסה/מלון)' },
        { id: 'leah-shoulders', emoji: '🛕', labelHe: 'כיסוי כתפיים למקדשים' },
      ],
    },
    {
      titleHe: 'טיפוח',
      items: [
        { id: 'leah-toothbrush', emoji: '🪥', labelHe: 'מברשת שיניים + משחה' },
        { id: 'leah-hairties',   emoji: '🎀', labelHe: 'גומיות לשיער' },
        { id: 'leah-hairbrush',  emoji: '💆', labelHe: 'מברשת שיער' },
        { id: 'leah-shampoo',    emoji: '🧴', labelHe: 'שמפו + סבון ילדים' },
      ],
    },
    {
      titleHe: 'אישי',
      items: [
        { id: 'leah-doll',       emoji: '🧸', labelHe: 'טולי ללילה' },
        { id: 'leah-backpack',   emoji: '🎒', labelHe: 'תיק גב קטן משלה' },
        { id: 'leah-journal',    emoji: '📓', labelHe: 'יומן מסע + עטים' },
        { id: 'leah-headphones', emoji: '🎧', labelHe: 'אוזניות' },
        { id: 'leah-book',       emoji: '📚', labelHe: 'ספר + קינדל' },
        { id: 'leah-cards',      emoji: '🃏', labelHe: 'משחקי קלפים' },
      ],
    },
  ],

  ari: [
    {
      titleHe: 'ביגוד',
      items: [
        { id: 'ari-underwear',  emoji: '🩲', labelHe: 'תחתונים' },
        { id: 'ari-socks',      emoji: '🧦', labelHe: 'גרביים' },
        { id: 'ari-pyjamas',    emoji: '🌙', labelHe: 'פיג\'מה' },
        { id: 'ari-swimsuit',   emoji: '🩱', labelHe: 'בגדי ים' },
        { id: 'ari-sandals',    emoji: '🩴', labelHe: 'כפכפים' },
        { id: 'ari-sneakers',   emoji: '👟', labelHe: 'נעלי ספורט' },
        { id: 'ari-daywear',    emoji: '👕', labelHe: 'בגדי יום' },
        { id: 'ari-evening',    emoji: '👔', labelHe: 'בגד ערב' },
        { id: 'ari-hoodie',     emoji: '🧥', labelHe: 'קפוצ\'ון קל' },
        { id: 'ari-shoulders',  emoji: '🛕', labelHe: 'כיסוי כתפיים למקדשים' },
      ],
    },
    {
      titleHe: 'טיפוח',
      items: [
        { id: 'ari-toothbrush', emoji: '🪥', labelHe: 'מברשת שיניים + משחה' },
        { id: 'ari-shampoo',    emoji: '🧴', labelHe: 'שמפו + סבון ילדים' },
      ],
    },
    {
      titleHe: 'אישי',
      items: [
        { id: 'ari-figure',     emoji: '🧸', labelHe: 'דמות אהובה ללילה + דמויות' },
        { id: 'ari-cars',       emoji: '🚗', labelHe: 'מכוניות קטנות' },
        { id: 'ari-backpack',   emoji: '🎒', labelHe: 'תיק גב קטן משלו' },
        { id: 'ari-headphones', emoji: '🎧', labelHe: 'אוזניות' },
        { id: 'ari-comic',      emoji: '📚', labelHe: 'ספר קומיקס' },
        { id: 'ari-markers',    emoji: '🖊️', labelHe: 'טושים ודפים' },
      ],
    },
  ],

  ellie: [
    {
      titleHe: 'ביגוד',
      items: [
        { id: 'ellie-underwear',  emoji: '👙', labelHe: 'תחתונים (עודף לבטחון)' },
        { id: 'ellie-socks',      emoji: '🧦', labelHe: 'גרביים' },
        { id: 'ellie-pyjamas',    emoji: '🌙', labelHe: 'פיג\'מה' },
        { id: 'ellie-swimsuit',   emoji: '🩱', labelHe: 'בגדי ים' },
        { id: 'ellie-sandals',    emoji: '🩴', labelHe: 'כפכפים' },
        { id: 'ellie-sneakers',   emoji: '👟', labelHe: 'נעלי ספורט + סנדלים נוחים' },
        { id: 'ellie-daywear',    emoji: '👕', labelHe: 'בגדי יום' },
        { id: 'ellie-hoodie',     emoji: '🧥', labelHe: 'קפוצ\'ון קל' },
        { id: 'ellie-hat',        emoji: '🧢', labelHe: 'כובע חובה עם רצועת סנטר' },
      ],
    },
    {
      titleHe: 'טיפוח',
      items: [
        { id: 'ellie-toothbrush', emoji: '🪥', labelHe: 'מברשת שיניים לפעוטות + משחה' },
        { id: 'ellie-cream',      emoji: '🧴', labelHe: 'קרם טחות + פצעונים' },
        { id: 'ellie-shampoo',    emoji: '🧴', labelHe: 'שמפו + סבון ייחודי לילדים' },
        { id: 'ellie-wipes',      emoji: '🧻', labelHe: 'מגבונים רטובים (הרבה!)' },
      ],
    },
    {
      titleHe: 'אישי',
      items: [
        { id: 'ellie-toli',       emoji: '🧸', labelHe: 'טולי + בובה חובה ללילה' },
        { id: 'ellie-coloring',   emoji: '🎨', labelHe: 'פעילויות צביעה + מדבקות' },
        { id: 'ellie-sleepbook',  emoji: '📖', labelHe: 'ספר שינה אהוב' },
        { id: 'ellie-snacks',     emoji: '🍪', labelHe: 'חטיפים מועדפים לרגעי משבר' },
        { id: 'ellie-toys',       emoji: '🪀', labelHe: 'צעצועים קטנים ושקטים' },
      ],
    },
  ],

  shirel: [
    {
      titleHe: 'ביגוד',
      items: [
        { id: 'sh-underwear',  emoji: '👙', labelHe: 'תחתונים' },
        { id: 'sh-bras',       emoji: '👙', labelHe: 'חזיות' },
        { id: 'sh-socks',      emoji: '🧦', labelHe: 'גרביים' },
        { id: 'sh-pyjamas',    emoji: '🌙', labelHe: 'פיג\'מה' },
        { id: 'sh-swimsuit',   emoji: '🩱', labelHe: 'בגדי ים' },
        { id: 'sh-sandals',    emoji: '🩴', labelHe: 'כפכפים' },
        { id: 'sh-sneakers',   emoji: '👟', labelHe: 'נעלי ספורט' },
        { id: 'sh-daywear',    emoji: '👕', labelHe: 'בגדי יום' },
        { id: 'sh-evening',    emoji: '👗', labelHe: 'בגד ערב' },
        { id: 'sh-sport',      emoji: '🏃', labelHe: 'בגד ספורט' },
        { id: 'sh-shoulders',  emoji: '🛕', labelHe: 'כיסוי כתפיים למקדשים' },
      ],
    },
    {
      titleHe: 'טיפוח ורחצה',
      items: [
        { id: 'sh-deodorant',  emoji: '🧴', labelHe: 'דאודורנט' },
        { id: 'sh-hygiene',    emoji: '🩸', labelHe: 'תחבושות היגייניות' },
        { id: 'sh-perfume',    emoji: '💐', labelHe: 'בושם' },
        { id: 'sh-hairbrush',  emoji: '💆', labelHe: 'מברשת שיער' },
        { id: 'sh-toothbrush', emoji: '🪥', labelHe: 'משחת שיניים + מברשת' },
        { id: 'sh-hairdryer',  emoji: '💨', labelHe: 'מייבש שיער' },
        { id: 'sh-makeup',     emoji: '💄', labelHe: 'איפור + גומיות וקליפסים' },
        { id: 'sh-lipbalm',    emoji: '💋', labelHe: 'שפתון לחות הגנה' },
        { id: 'sh-teatree',    emoji: '🌿', labelHe: 'שמן עץ תה' },
        { id: 'sh-aftersun',   emoji: '🧴', labelHe: 'ג\'ל לאחר שמש' },
        { id: 'sh-cream',      emoji: '🧴', labelHe: 'קרם ידיים ופנים' },
      ],
    },
    {
      titleHe: 'אביזרים',
      items: [
        { id: 'sh-sunglasses',  emoji: '🕶️', labelHe: 'משקפי שמש' },
        { id: 'sh-phone',       emoji: '📱', labelHe: 'טלפון' },
        { id: 'sh-headphones',  emoji: '🎧', labelHe: 'אוזניות' },
        { id: 'sh-hat',         emoji: '🧢', labelHe: 'כובע שמש רחב שוליים' },
        { id: 'sh-watch',       emoji: '⌚', labelHe: 'שעון' },
        { id: 'sh-earplugs',    emoji: '🔇', labelHe: 'אטמי אוזניים' },
        { id: 'sh-eveningbag',  emoji: '👜', labelHe: 'תיק ערב קטן' },
        { id: 'sh-eyemask',     emoji: '😴', labelHe: 'כיסוי עיניים (לטיסה)' },
        { id: 'sh-book',        emoji: '📚', labelHe: 'ספר' },
      ],
    },
  ],

  michael: [
    {
      titleHe: 'ביגוד',
      items: [
        { id: 'mi-underwear',  emoji: '🩲', labelHe: 'תחתונים' },
        { id: 'mi-socks',      emoji: '🧦', labelHe: 'גרביים' },
        { id: 'mi-pyjamas',    emoji: '🌙', labelHe: 'פיג\'מה' },
        { id: 'mi-swimsuit',   emoji: '🩱', labelHe: 'בגדי ים' },
        { id: 'mi-sandals',    emoji: '🩴', labelHe: 'כפכפים' },
        { id: 'mi-sneakers',   emoji: '👟', labelHe: 'נעלי ספורט' },
        { id: 'mi-shirts',     emoji: '👕', labelHe: 'חולצות יום' },
        { id: 'mi-shorts',     emoji: '🩳', labelHe: 'מכנסיים קצרים' },
        { id: 'mi-evening',    emoji: '👔', labelHe: 'בגד ערב' },
        { id: 'mi-sport',      emoji: '🏃', labelHe: 'בגד ספורט' },
        { id: 'mi-shoulders',  emoji: '🛕', labelHe: 'כיסוי כתפיים למקדשים' },
      ],
    },
    {
      titleHe: 'טיפוח ורחצה',
      items: [
        { id: 'mi-deodorant',  emoji: '🧴', labelHe: 'דאודורנט' },
        { id: 'mi-facecream',  emoji: '🧴', labelHe: 'קרם פנים' },
        { id: 'mi-perfume',    emoji: '💐', labelHe: 'בושם' },
        { id: 'mi-gel',        emoji: '💈', labelHe: 'ג\'ל + שמפו שיער' },
        { id: 'mi-toothbrush', emoji: '🪥', labelHe: 'משחת שיניים + מברשת' },
      ],
    },
    {
      titleHe: 'אביזרים',
      items: [
        { id: 'mi-sunglasses', emoji: '🕶️', labelHe: 'משקפי שמש' },
        { id: 'mi-phone',      emoji: '📱', labelHe: 'טלפון' },
        { id: 'mi-headphones', emoji: '🎧', labelHe: 'אוזניות' },
        { id: 'mi-hat',        emoji: '🧢', labelHe: 'כובע' },
        { id: 'mi-watch',      emoji: '⌚', labelHe: 'שעון' },
        { id: 'mi-earplugs',   emoji: '🔇', labelHe: 'אטמי אוזניים' },
        { id: 'mi-eyemask',    emoji: '😴', labelHe: 'כיסוי עיניים (לטיסה)' },
        { id: 'mi-wallet',     emoji: '👜', labelHe: 'ארנק רצועה נגד כיס-גנבים' },
        { id: 'mi-book',       emoji: '📚', labelHe: 'ספר' },
      ],
    },
  ],
}

// ─── Shared family packing sections (collapsible) ─────────────────────────

export const familyPackingSections: FamilyPackingSection[] = [
  {
    titleHe: '✈️ לטיסה ומסמכים',
    items: [
      { id: 'fam-passports',    emoji: '🛂', labelHe: 'דרכונים + צילומי גיבוי' },
      { id: 'fam-cash',         emoji: '💵', labelHe: 'כסף מזומן + כרטיסי אשראי' },
      { id: 'fam-tickets',      emoji: '🎫', labelHe: 'כרטיסי טיסה (מודפס + דיגיטלי)' },
      { id: 'fam-docwallet',    emoji: '📁', labelHe: 'ארנק מסמכים משפחתי' },
      { id: 'fam-insurance',    emoji: '🏥', labelHe: 'ביטוח נסיעות' },
      { id: 'fam-kidid',        emoji: '🪪', labelHe: 'כרטיסי זיהוי לילדים' },
    ],
  },
  {
    titleHe: '🔌 חשמל וטכנולוגיה',
    items: [
      { id: 'fam-chargers',     emoji: '🔌', labelHe: 'מטענים לכל המכשירים' },
      { id: 'fam-speaker',      emoji: '🔊', labelHe: 'רמקול בלוטות\'' },
      { id: 'fam-powerbank',    emoji: '🔋', labelHe: 'מטען נייד קיבולת גבוהה' },
      { id: 'fam-splitter',     emoji: '🔌', labelHe: 'מפצל חשמל + כבל סיומת' },
      { id: 'fam-adapter',      emoji: '🔧', labelHe: 'מתאם חשמל תאילנדי' },
      { id: 'fam-grab',         emoji: '📱', labelHe: 'Grab — להגדיר תשלום לפני הטיסה' },
      { id: 'fam-maps',         emoji: '🗺️', labelHe: 'Google Maps אופליין — כל היעדים' },
    ],
  },
  {
    titleHe: '💊 תרופות ובריאות',
    items: [
      { id: 'fam-eutrox',       emoji: '💊', labelHe: 'יוטירוקס — מלאי + עודף' },
      { id: 'fam-mosquito',     emoji: '🦟', labelHe: 'תרסיס נגד יתושים (DEET)' },
      { id: 'fam-advil-adult',  emoji: '💊', labelHe: 'אדויל + אקמול מבוגרים' },
      { id: 'fam-advil-kids',   emoji: '💊', labelHe: 'אדויל + אקמול ילדים' },
      { id: 'fam-licecomb',     emoji: '🪮', labelHe: 'נגד כינים + מסרק' },
      { id: 'fam-tums',         emoji: '🫁', labelHe: 'טאמס + טיפות אוזניים ועיניים' },
      { id: 'fam-firstaid',     emoji: '🩹', labelHe: 'ערכת עזרה ראשונה' },
      { id: 'fam-worms',        emoji: '💊', labelHe: 'תולעים + רמוקס + ג\'ל' },
      { id: 'fam-tweezers',     emoji: '🪛', labelHe: 'פינצטה + אימודיום' },
      { id: 'fam-nailclipper',  emoji: '✂️', labelHe: 'קוצץ ציפורניים + מדחום' },
      { id: 'fam-antihistamine',emoji: '💊', labelHe: 'אלתוש + פניסטיל' },
      { id: 'fam-motionsick',   emoji: '🤢', labelHe: 'תרופות לבחילת נסיעה (ילדים)' },
      { id: 'fam-sunscreen',    emoji: '🧴', labelHe: 'קרם הגנה — כמות גדולה' },
    ],
  },
  {
    titleHe: '🌊 טיול וים',
    items: [
      { id: 'fam-floaties',     emoji: '🏊', labelHe: 'מצופים + אפודי הצלה לילדים' },
      { id: 'fam-binoculars',   emoji: '🔭', labelHe: 'משקפות' },
      { id: 'fam-snorkel',      emoji: '🤿', labelHe: 'שנורקלים ומסכות (לפי גיל)' },
      { id: 'fam-drybag',       emoji: '🎒', labelHe: 'שק אטום למים' },
      { id: 'fam-watershoes',   emoji: '👟', labelHe: 'נעלי מים לכל המשפחה' },
      { id: 'fam-rings',        emoji: '🏖️', labelHe: 'צלצלים + טבעות ים' },
    ],
  },
  {
    titleHe: '🎒 שימושי כללי',
    items: [
      { id: 'fam-bottles',      emoji: '💧', labelHe: 'בקבוקי מים — לכל אחד' },
      { id: 'fam-locks',        emoji: '🔒', labelHe: 'מנעולים לתיקים' },
      { id: 'fam-daybag',       emoji: '👜', labelHe: 'תיק יומיום משפחתי' },
      { id: 'fam-laundrybags',  emoji: '👕', labelHe: 'שקיות ניילון לכביסה מלוכלכת' },
      { id: 'fam-tote',         emoji: '🛍️', labelHe: 'תיקים רב-פעמיים' },
      { id: 'fam-laundrypods',  emoji: '🧺', labelHe: 'טבליות כביסה קטנות' },
      { id: 'fam-umbrella',     emoji: '☂️', labelHe: 'מטריה קטנה + פונצ\'ו גשם' },
    ],
  },
  {
    titleHe: '🧸 לילדים — כללי',
    items: [
      { id: 'fam-markers',      emoji: '🖊️', labelHe: 'טושים ודפים + ספרים + פאזלים' },
      { id: 'fam-transitgames', emoji: '🎲', labelHe: 'משחקים למעברים ולטיסה' },
      { id: 'fam-snacks',       emoji: '🍫', labelHe: 'חטיפים לטיסה ולדרך' },
      { id: 'fam-tablet',       emoji: '📱', labelHe: 'טאבלט + אוזניות לטיסה' },
      { id: 'fam-flightbag',    emoji: '🎒', labelHe: 'סל קטן לכל ילד בטיסה' },
    ],
  },
]

// Keep backward compat — children's "my packing" used to use this
export const myPackingItems = personPackingSections.leah.flatMap(s => s.items)
