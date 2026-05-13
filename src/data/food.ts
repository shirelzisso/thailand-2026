export interface FoodItem {
  id: string
  categoryHe: string
  emoji: string
  nameHe: string
  descHe: string
}

export const foodCategories = ['בטוח ומעולה לנו', 'חייבים לנסות', 'לשים לב', 'בשווקי הלילה']

export const foodItems: FoodItem[] = [
  // בטוח ומעולה לנו
  { id: 'rice', categoryHe: 'בטוח ומעולה לנו', emoji: '🍚', nameHe: 'אורז מבושל', descHe: 'בכל מקום, תמיד טרי. הבסיס של כל ארוחה תאילנדית!' },
  { id: 'fish', categoryHe: 'בטוח ומעולה לנו', emoji: '🐟', nameHe: 'דגים טריים צלויים', descHe: 'בשוק הדייגים ובמסעדות חוף — בוחרים את הדג הטרי ומבשלים!' },
  { id: 'vegs', categoryHe: 'בטוח ומעולה לנו', emoji: '🥦', nameHe: 'ירקות מוקפצים', descHe: 'לבקש "בלי בשר" — אפשר לאכול בלי בעיה' },
  { id: 'fruit', categoryHe: 'בטוח ומעולה לנו', emoji: '🥭', nameHe: 'פירות טריים חתוכים', descHe: 'מנגו, פפאיה, פיטייה, קוקוס — טריים, זולים ומדהימים!' },
  { id: 'eggs', categoryHe: 'בטוח ומעולה לנו', emoji: '🍳', nameHe: 'ביצים בכל צורה', descHe: 'מוקשות, עין, מטורפות — בכל מסעדה ובכל שעה!' },
  { id: 'fried-rice-egg', categoryHe: 'בטוח ומעולה לנו', emoji: '🍳', nameHe: 'כאו פד קאי — אורז עם ביצה', descHe: 'אורז מוקפץ עם ביצה מטוגנת — הילדים מתים עליו! לבקש בכל מקום.' },
  // חייבים לנסות
  { id: 'mango-sticky', categoryHe: 'חייבים לנסות', emoji: '🥭', nameHe: 'מנגו עם אורז דביק', descHe: 'אורז דביק + מנגו + חלב קוקוס = הקינוח הכי טוב בתאילנד. חובה!' },
  { id: 'coconut', categoryHe: 'חייבים לנסות', emoji: '🥥', nameHe: 'קוקוס טרי עם קש', descHe: 'שותים ישר מהפרי! קר, טעים ואקזוטי.' },
  { id: 'bangkok-toast', categoryHe: 'חייבים לנסות', emoji: '🍞', nameHe: 'טוסט בנגקוק', descHe: 'לחם עם חמאה, סוכר וקרם — ארוחת בוקר הילדים!' },
  { id: 'padthai', categoryHe: 'חייבים לנסות', emoji: '🍜', nameHe: 'פד תאי עם עוף', descHe: 'המנה הכי מפורסמת בתאילנד! לבקש עם עוף (גאי) ובלי שרימפס.' },
  { id: '7eleven', categoryHe: 'חייבים לנסות', emoji: '🥪', nameHe: 'לחם עם פנדה מ-7-Eleven', descHe: 'ממרח שוקולד-פנדה מדהים — בכל פינה יש חנות 7-Eleven!' },
  // לשים לב
  { id: 'seafood', categoryHe: 'לשים לב', emoji: '🚫', nameHe: 'פירות ים — שרימפס, סרטנים', descHe: 'אנחנו לא אוכלים! לבדוק שאין שרימפס או סרטנים לפני הזמנה' },
  { id: 'chicken', categoryHe: 'לשים לב', emoji: '⚠️', nameHe: 'מנות עוף', descHe: 'אפשר לאכול עוף — אבל לשאול שזה לא מבושל עם רוטב בשרי' },
  { id: 'sauces', categoryHe: 'לשים לב', emoji: '⚠️', nameHe: 'רטבים מוכנים', descHe: 'לעיתים מכילים fish sauce (רוטב דגים) — לשאול לפני' },
  { id: 'soups', categoryHe: 'לשים לב', emoji: '⚠️', nameHe: 'מרקים', descHe: 'לשאול מה הבסיס לפני שמזמינים — לפעמים עוף' },
  { id: 'icecream', categoryHe: 'לשים לב', emoji: '⚠️', nameHe: 'גלידה', descHe: 'לבדוק שאין ג\'לטין — אמא/אבא בודקים!' },
  // בשווקי הלילה
  { id: 'market-fruit', categoryHe: 'בשווקי הלילה', emoji: '✅', nameHe: 'דוכני פירות טריים', descHe: 'תמיד בטוח! לחפש מנגו, אננס ולנסות הכל' },
  { id: 'market-eggs', categoryHe: 'בשווקי הלילה', emoji: '✅', nameHe: 'ביצים ועוף על גריל', descHe: 'על גריל פתוח — טרי ובטוח. לבקש עוף (גאי) ולא שרימפס' },
  { id: 'market-nopet', categoryHe: 'בשווקי הלילה', emoji: '🌶️', nameHe: 'לומר "מאי פד" — לא חריף!', descHe: 'תמיד לומר "מאי פד" כשמזמינים — במיוחד בשביל אלי!' },
  { id: 'market-water', categoryHe: 'בשווקי הלילה', emoji: '💧', nameHe: 'מים מ-7-Eleven', descHe: 'לקחת בקבוק מים קר לפני כניסה לשוק — חם בחוץ!' },
]
