import type { ChildId } from '../types'

export interface QuizQuestion {
  id: string
  forChildren: ChildId[]          // which difficulty levels include this question
  questionHe: string
  emoji: string
  options: string[]               // options[0] is always the correct answer
  correctFeedbackHe: string       // shown on correct answer
  hintHe: string                  // shown on wrong answer
}

export const quizQuestions: QuizQuestion[] = [
  // All children
  { id: 'q1', forChildren: ['leah','ari','ellie'], emoji: '🦈', questionHe: 'איפה ראינו כרישים?', options: ['SEA LIFE בנגקוק', 'בבריכת המלון', 'בנהר קוואי', 'ביער'], correctFeedbackHe: 'כן! SEA LIFE בסיאם פרגון — מנהרת זכוכית עם כרישים!', hintHe: 'חשבו על היום הראשון בבנגקוק...' },
  { id: 'q2', forChildren: ['leah','ari','ellie'], emoji: '🐘', questionHe: 'מה החיה הלאומית של תאילנד?', options: ['פיל', 'נמר', 'קוף', 'דרקון'], correctFeedbackHe: 'נכון! פילים הם החיה הלאומית ואנחנו פגשנו אותם!', hintHe: 'חיה גדולה עם חדק ארוך...' },
  { id: 'q3', forChildren: ['leah','ari','ellie'], emoji: '🥭', questionHe: 'איזה קינוח הכי מפורסם בתאילנד?', options: ['מנגו עם אורז דביק', 'גלידה שוקולד', 'פלאפל', 'עוגת גבינה'], correctFeedbackHe: 'מנגו עם אורז דביק וחלב קוקוס — הטעמנו?!', hintHe: 'פרי צהוב טרופי + אורז מתוק...' },
  { id: 'q4', forChildren: ['leah','ari','ellie'], emoji: '🙏', questionHe: 'איך אומרים שלום בתאילנדית?', options: ['סאוואדי', 'קופ קון', 'מאי פד', 'אָ-רוֹי'], correctFeedbackHe: 'סאוואדי קאפ / סאוואדי קא — ננסה לגיד לכולם!', hintHe: 'זה נשמע קצת כמו "סאו"...' },
  { id: 'q5', forChildren: ['leah','ari','ellie'], emoji: '🐷', questionHe: 'באיזה אי פגשנו חזירים שחים בים?', options: ['קו מאדסום', 'קו לארן', 'קו פי פי', 'קו צ\'אנג'], correctFeedbackHe: 'קו מאדסום! החזירים שחים ואוכלים ממש מהידיים!', hintHe: 'אי קטן וסודי ליד קו סאמוי...' },
  // Ari + Leah
  { id: 'q6', forChildren: ['leah','ari'], emoji: '🚂', questionHe: 'מה בנו פועלי מלחמה בקנצ\'נאבורי?', options: ['מסילת רכבת', 'גשר אבן', 'ארמון', 'מקדש'], correctFeedbackHe: 'Death Railway — מסילה דרך ג\'ונגל. אנחנו רכבנו עליה!', hintHe: 'נסענו עליו — כלי תחבורה על פסים...' },
  { id: 'q7', forChildren: ['leah','ari'], emoji: '🌊', questionHe: 'מה שם פארק המים במלון בפאטאיה?', options: ['The Lost World', 'Water Kingdom', 'Splash Zone', 'Aqua Park'], correctFeedbackHe: 'The Lost World! מגלשות, נהר עצל, קפיצות — כל יום!', hintHe: 'עולם אבוד... בלי דינוזאורים...' },
  { id: 'q8', forChildren: ['leah','ari'], emoji: '💦', questionHe: 'מה היה מיוחד בבריכות של מפלי ארוואן?', options: ['דגים גרגרו לנו את הרגליים', 'היה שם תנין', 'הבריכות היו חמות', 'הבריכות היו בצבע ורוד'], correctFeedbackHe: 'דגים קטנים שגרגרו את הרגליים! כמו עיסוי מדגדג!', hintHe: 'משהו קטן ומדגדג בבריכה...' },
  { id: 'q9', forChildren: ['leah','ari'], emoji: '💰', questionHe: 'איך אומרים "כמה זה עולה?" בתאילנדית?', options: ['טאו ריי', 'מאי פד', 'אן-ניי', 'נאם'], correctFeedbackHe: 'טאו ריי! לשאול בשווקים כמה זה עולה!', hintHe: 'מילה ששואלים בשוק כשרוצים לקנות...' },
  { id: 'q10', forChildren: ['leah','ari'], emoji: '🇹🇭', questionHe: 'כמה צבעים יש בדגל תאילנד?', options: ['3', '2', '4', '5'], correctFeedbackHe: 'שלושה — אדום, לבן וכחול. הכחול הוא צבע המלך!', hintHe: 'ספרו את פסי הדגל...' },
  // Leah only
  { id: 'q11', forChildren: ['leah'], emoji: '🗺️', questionHe: 'מה היה השם הישן של תאילנד לפני 1939?', options: ['סיאם', 'קמבודיה', 'בורמה', 'סינגפור'], correctFeedbackHe: 'סיאם! גם חתול הסיאמי קרוי על שמה!', hintHe: 'שם שמופיע בסרטי נסיכות ישנים...' },
  { id: 'q12', forChildren: ['leah'], emoji: '🏛️', questionHe: 'כמה מקדשים מוקטנים יש בעיר העתיקה?', options: ['116', '50', '200', '30'], correctFeedbackHe: '116 מקדשים מדויקים ב-320 דונם — המוזיאון הגדול בעולם!', hintHe: 'מספר גדול — יותר ממאה...' },
  { id: 'q13', forChildren: ['leah'], emoji: '🤿', questionHe: 'איזה חוף בקו סאמוי הכי טוב לשנורקל?', options: ['Silver Beach', 'Choeng Mon', 'Maenam', 'Bophut'], correctFeedbackHe: 'Silver Beach — שקוף, שקט, מלא דגים צבעוניים!', hintHe: 'החוף שנקרא על שם מתכת יקרה...' },
  { id: 'q14', forChildren: ['leah'], emoji: '🛕', questionHe: 'כמה מקדשים בודהיסטים יש בתאילנד?', options: ['יותר מ-40,000', 'כ-500', 'כ-5,000', 'כ-100'], correctFeedbackHe: '40,000+ מקדשים! כמעט בכל פינה!', hintHe: 'מספר עצום — הרבה יותר מ-1,000...' },
  { id: 'q15', forChildren: ['leah'], emoji: '🌶️', questionHe: 'איך אומרים "לא חריף" בתאילנדית?', options: ['מאי פד', 'אָ-רוֹי', 'טאו ריי', 'סאוואדי'], correctFeedbackHe: 'מאי פד! חשוב לדעת — במיוחד בשביל אלי!', hintHe: '"מאי" אומר "לא" בתאילנדית...' },
]
