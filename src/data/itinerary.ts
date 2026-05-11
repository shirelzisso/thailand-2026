export interface DayHighlight {
  emoji: string
  text: string
}

export interface Day {
  dayNumber: number
  date: string
  highlights: DayHighlight[]
}

export interface Destination {
  id: string
  nameHe: string
  emoji: string
  hotel: string
  hotelTagline: string
  startDate: Date
  endDate: Date
  days: Day[]
}

export const destinations: Destination[] = [
  {
    id: 'bangkok',
    nameHe: 'בנגקוק',
    emoji: '🏙️',
    hotel: 'Carlton Hotel Bangkok Sukhumvit',
    hotelTagline: 'מלון מגניב עם ברכה ואוכל ילדים — ממש ליד הרכבת המהירה!',
    startDate: new Date('2026-05-20'),
    endDate: new Date('2026-05-26'),
    days: [
      { dayNumber: 1, date: 'רביעי, 20 במאי', highlights: [
        { emoji: '✈️', text: 'נוחתים! אחרי טיסה ארוכה — הגענו לתאילנד!' },
        { emoji: '🦈', text: 'SEA LIFE — כרישים, פינגווינים ומנהרת זכוכית של 105 מטר!' },
        { emoji: '🎡', text: 'Asiatique — גלגל ענק, אוכל רחוב ונוף לנהר בלילה' },
      ]},
      { dayNumber: 2, date: 'חמישי, 21 במאי', highlights: [
        { emoji: '👑', text: 'ארמון המלך — ארמון זהב ממש כמו בסרטי נסיכות!' },
        { emoji: '🛕', text: 'וואט פו — פסל בודהה מוזהב של 46 מטר, שוכב ענק' },
        { emoji: '⛵', text: 'סירת מנוע בנהר + מקדש וואט ארון' },
      ]},
      { dayNumber: 3, date: 'שישי, 22 במאי', highlights: [
        { emoji: '🎪', text: 'MELAND — פארק משחקים ענק! 500 חוויות, 6 עולמות שונים' },
        { emoji: '🎠', text: 'קרוסלה ים, מגלשות, בניית רכבים — כל היום!' },
      ]},
      { dayNumber: 4, date: 'שבת, 23 במאי', highlights: [
        { emoji: '🦒', text: 'Safari World — ג\'ירפות, אריות, דובים — ממכונית!' },
        { emoji: '🐬', text: 'הופעת דולפינים ואריות ים' },
        { emoji: '🧖', text: 'אחר הצהריים — עיסוי תאילנדי למשפחה!' },
      ]},
      { dayNumber: 5, date: 'ראשון, 24 במאי', highlights: [
        { emoji: '🛍️', text: 'שוק צ\'טוצ\'אק — 15,000 דוכנים! צעצועים, מזכרות, אוכל' },
        { emoji: '🦋', text: 'גן הפרפרים — 500+ פרפרים טסים חופשי בכיפה זכוכית' },
        { emoji: '🌊', text: 'מוזיאון ילדים — פארק מים חיצוני! להביא בגדי ים!' },
      ]},
      { dayNumber: 6, date: 'שני, 25 במאי', highlights: [
        { emoji: '🏛️', text: 'העיר העתיקה — 116 מקדשים מוקטנים ב-320 דונם! בגולף קארט' },
        { emoji: '🦕', text: 'Jurassic World — תערוכת דינוזאורים אינטראקטיבית' },
        { emoji: '🎒', text: 'ערב — לארוז לקנצ\'נאבורי!' },
      ]},
    ],
  },
  {
    id: 'kanchanaburi',
    nameHe: 'קנצ\'נאבורי',
    emoji: '🌿',
    hotel: 'Boutique Raft Resort',
    hotelTagline: 'ישנים על רפסודה צפה בנהר! מוקפים ג\'ונגל — לא ייאמן!',
    startDate: new Date('2026-05-26'),
    endDate: new Date('2026-05-28'),
    days: [
      { dayNumber: 1, date: 'שלישי, 26 במאי', highlights: [
        { emoji: '🌉', text: 'גשר על נהר קוואי — גשר היסטורי מזמן מלחמת העולם!' },
        { emoji: '🚂', text: 'רכבת עתיקה על גשר עץ מעל הנהר — מרגש!' },
        { emoji: '🛖', text: 'לינה ראשונה על הרפסודה הצפה!' },
      ]},
      { dayNumber: 2, date: 'רביעי, 27 במאי', highlights: [
        { emoji: '💦', text: 'מפלי ארוואן — שחייה בבריכות אמרלד ירוקות! דגים מגרדים רגליים 🐟' },
        { emoji: '🐘', text: 'מקלט הפילים — מאכילים ומלוּוים פילים מוצלים. בלי רכיבה!' },
        { emoji: '🛶', text: 'רפטינג על הנהר בסירת במבוק!' },
      ]},
      { dayNumber: 3, date: 'חמישי, 28 במאי', highlights: [
        { emoji: '🏚️', text: 'חורבות פראסאט מואנג סינג — מקדש קמרי בתוך ג\'ונגל' },
        { emoji: '🌊', text: 'נוסעים לפאטאיה — The Lost World מחכה!' },
      ]},
    ],
  },
  {
    id: 'pattaya',
    nameHe: 'פאטאיה',
    emoji: '🌊',
    hotel: 'Centara Grand Mirage Beach Resort',
    hotelTagline: 'The Lost World — פארק מים ענק ישר מהמלון! מגלשות, נהר עצל, קפיצות!',
    startDate: new Date('2026-05-28'),
    endDate: new Date('2026-06-02'),
    days: [
      { dayNumber: 1, date: 'חמישי, 28 במאי', highlights: [
        { emoji: '🏨', text: 'מגיעים ל-Centara Grand Mirage' },
        { emoji: '🌊', text: 'The Lost World — ישר לפארק המים!' },
      ]},
      { dayNumber: 2, date: 'שישי, 29 במאי', highlights: [
        { emoji: '🏝️', text: 'אי קו לארן — חוף פרטי, שנרקל עם דגים צבעוניים' },
        { emoji: '🌊', text: 'אחר הצהריים — Lost World שוב!' },
        { emoji: '🦀', text: 'שוק נאקלואה — לבחור סרטן חי ולאכול אותו טרי!' },
      ]},
      { dayNumber: 3, date: 'שבת, 30 במאי', highlights: [
        { emoji: '🌺', text: 'גן נונג נוץ\' — גן טרופי ענק עם דינוזאורים ומכוניות עתיקות' },
        { emoji: '🍭', text: 'כפר הממתקים של הפיות — קרוסלה, סוכריות DIY, בית ג\'ינג\'ר!' },
        { emoji: '🍢', text: 'שוק לילה Thepprasit — 50+ דוכני אוכל!' },
      ]},
      { dayNumber: 4, date: 'ראשון, 31 במאי', highlights: [
        { emoji: '🌊', text: 'Lost World — יום שלם!' },
        { emoji: '🏬', text: 'Central Festival — הקניון הגדול בחוף הים באסיה' },
      ]},
      { dayNumber: 5, date: 'שני, 1 ביוני', highlights: [
        { emoji: '🌊', text: 'Lost World + חוף פרטי' },
        { emoji: '🎮', text: 'HarborLand — טרמפולינות, לייזר טאג, טיפוס' },
        { emoji: '🛶', text: 'שוק הצף של פאטאיה — קנייה מסירות על המים!' },
      ]},
      { dayNumber: 6, date: 'שלישי, 2 ביוני', highlights: [
        { emoji: '🌊', text: 'Lost World — הפעם האחרונה!' },
        { emoji: '✈️', text: 'טיסה לקו סאמוי — האי שלנו מחכה! 🌴' },
      ]},
    ],
  },
  {
    id: 'kohsamui',
    nameHe: 'קו סאמוי',
    emoji: '🌴',
    hotel: 'Melia Koh Samui',
    hotelTagline: 'חוף קריסטל, נהר עצל, מועדון ילדים Kidsdom — 7 לילות בגן עדן!',
    startDate: new Date('2026-06-02'),
    endDate: new Date('2026-06-11'),
    days: [
      { dayNumber: 1, date: 'שלישי, 2 ביוני', highlights: [
        { emoji: '🌴', text: 'מגיעים לקו סאמוי — ברוכים הבאים לאי!' },
        { emoji: '🏨', text: 'לינה ראשונה ב-IHG Bophut Beach' },
      ]},
      { dayNumber: 2, date: 'רביעי, 3 ביוני', highlights: [
        { emoji: '🏖️', text: 'חוף בופוט — שחייה, חול, מנוחה' },
        { emoji: '🎪', text: 'שוק הדייגים של בופוט — אוכל רחוב, מוזיקה חיה, מלאכת יד' },
      ]},
      { dayNumber: 3, date: 'חמישי, 4 ביוני', highlights: [
        { emoji: '🏨', text: 'עוברים ל-Melia Koh Samui — הבית שלנו לשבוע!' },
        { emoji: '🏊', text: 'חוף צ\'ואנג מון — רדוד, שקוף, מושלם!' },
      ]},
      { dayNumber: 4, date: 'שישי, 5 ביוני', highlights: [
        { emoji: '🪷', text: 'הבודהה הגדול — פסל זהב של 12 מטר על המפרץ' },
        { emoji: '🐢', text: 'וואט פלאי לאם — מאכילים צבים ודגים בבריכת מקדש!' },
        { emoji: '🤿', text: 'Silver Beach — השנורקל הטוב ביותר בסאמוי' },
      ]},
      { dayNumber: 5, date: 'שבת, 6 ביוני', highlights: [
        { emoji: '🔓', text: 'יום חופשי — להחליט על הרגע!' },
        { emoji: '🌿', text: 'אפשרויות: גן הבודהה הסודי, מפל Na Muang, או פארק ים אנג טונג' },
      ]},
      { dayNumber: 6, date: 'ראשון, 7 ביוני', highlights: [
        { emoji: '🏊', text: 'Kidsdom + נהר עצל + חוף Choeng Mon — יום מלון מלא!' },
        { emoji: '🛍️', text: 'צ\'אוואנג — קניות וארוחת ערב' },
      ]},
      { dayNumber: 7, date: 'שני, 8 ביוני', highlights: [
        { emoji: '🐷', text: 'אי קו מאדסום — חזירים שחים בים ואוכלים מידנו! 🐷🐷🐷' },
        { emoji: '🎪', text: 'שוק הדייגים בערב' },
      ]},
      { dayNumber: 8, date: 'שלישי, 9 ביוני', highlights: [
        { emoji: '🔓', text: 'יום חופשי — להחליט על הרגע!' },
        { emoji: '🌊', text: 'אפשרויות: שיעור בישול, Ang Thong Marine Park, או ים מאאנאם' },
      ]},
      { dayNumber: 9, date: 'רביעי, 10 ביוני', highlights: [
        { emoji: '🏊', text: 'חוף Melia + בריכה — יום מנוחה אחרון!' },
        { emoji: '🏖️', text: 'מפרץ טונגסון — ג\'ם סודי, ילדים בלבד יודעים 🤫' },
      ]},
      { dayNumber: 10, date: 'חמישי, 11 ביוני', highlights: [
        { emoji: '👋', text: 'בוקר אחרון על החוף — להיפרד מהאי' },
        { emoji: '✈️', text: 'טיסה הביתה — עם מלא זכרות!' },
      ]},
    ],
  },
]
