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

  // All children — new
  { id: 'q16', forChildren: ['leah','ari','ellie'], emoji: '🌴', questionHe: 'מה שם האי שלנו בים?', options: ['קו סאמוי', 'קו פנגן', 'קו פי פי', 'קו לארן'], correctFeedbackHe: 'קו סאמוי! אי ענק עם חופים מדהימים!', hintHe: 'האי שלנו מתחיל ב"קו"...' },
  { id: 'q17', forChildren: ['leah','ari','ellie'], emoji: '🙈', questionHe: 'איזה חיה ראינו הרבה ברחובות בתאילנד?', options: ['קופים', 'פילים', 'תנינים', 'נמרים'], correctFeedbackHe: 'קופים! הם חיים בחופשיות וגונבים אוכל!', hintHe: 'חיה שמטפסת על עצים ואוהבת בננות...' },
  { id: 'q18', forChildren: ['leah','ari','ellie'], emoji: '🍜', questionHe: 'מה השם של המרק התאילנדי המפורסם?', options: ['פאד תאי', 'טום יאם', 'גרין קארי', 'מאנגו סטיקי'], correctFeedbackHe: 'טום יאם! מרק חריף וחמוץ עם קוקוס — סופר מפורסם!', hintHe: 'מרק שמתחיל ב"טום"...' },
  { id: 'q19', forChildren: ['leah','ari','ellie'], emoji: '⛩️', questionHe: 'איך קוראים לפסל הגדול הלבן בקו סאמוי?', options: ['ביג בודהה', 'ביג בן', 'ביג פנדה', 'ביג מאק'], correctFeedbackHe: 'Big Buddha! פסל ענק לבן שנראה מכל האי!', hintHe: 'שם באנגלית — "גדול + שם של מישהו חשוב"...' },
  { id: 'q20', forChildren: ['leah','ari','ellie'], emoji: '🌞', questionHe: 'מה מזג האוויר בתאילנד כשנגיע?', options: ['חם ולח מאוד', 'קר וגשום', 'חם ויבש', 'סתווי'], correctFeedbackHe: 'חם ולח! תביאו בגדים קלים ומשחת שמש!', hintHe: 'תאילנד היא ארץ טרופית...' },
  { id: 'q21', forChildren: ['leah','ari','ellie'], emoji: '🛺', questionHe: 'מה שם כלי הרכב הקטן והכיפי עם 3 גלגלים?', options: ['טוק-טוק', 'ריקשה', 'טנדר', 'סקוטר'], correctFeedbackHe: 'טוק-טוק! כי זה הצליל שהוא עושה!', hintHe: 'קראו לו לפי הצליל שהוא עושה...' },
  { id: 'q22', forChildren: ['leah','ari','ellie'], emoji: '🥥', questionHe: 'איזה פרי מכינים ממנו חלב לאורז הדביק?', options: ['קוקוס', 'מנגו', 'פפאיה', 'אננס'], correctFeedbackHe: 'חלב קוקוס! מסחטים את הקוקוס ומקבלים חלב לבן מתוק!', hintHe: 'פרי עגול, חום, עם נוזל בפנים...' },

  // Ari + Leah — new
  { id: 'q23', forChildren: ['leah','ari'], emoji: '🌉', questionHe: 'על מה נבנה גשר הקוואי הנודע?', options: ['נהר קוואי', 'ים סיאם', 'נהר מקונג', 'תעלת בנגקוק'], correctFeedbackHe: 'נהר קוואי! עברנו עליו ברכבת העתיקה!', hintHe: 'הגשר ידוע בשם נהר ה...' },
  { id: 'q24', forChildren: ['leah','ari'], emoji: '🐊', questionHe: 'איזה חיה מסוכנת חיה בנהרות תאילנד?', options: ['תנין', 'כריש', 'פירנהה', 'לוויתן'], correctFeedbackHe: 'תנינים! ראינו פארק תנינים — מרחוק!', hintHe: 'זוחל גדול עם שיניים חדות מאוד...' },
  { id: 'q25', forChildren: ['leah','ari'], emoji: '💎', questionHe: 'מה שם השוק הצף המפורסם ליד בנגקוק?', options: ['דמנן סדואק', 'צ\'טוצ\'ק', 'אסיאטיק', 'סיאם'], correctFeedbackHe: 'דמנן סדואק! ספינות קטנות עם פירות וירקות על המים!', hintHe: 'שוק שנמצא על... מים!', },
  { id: 'q26', forChildren: ['leah','ari'], emoji: '🎋', questionHe: 'מה שם הג\'ונגל שהלכנו בו בקנצ\'נאבורי?', options: ['ג\'ונגל של ארוואן', 'ג\'ונגל אמזון', 'יער הקוקוסים', 'ג\'ונגל בנגקוק'], correctFeedbackHe: 'ג\'ונגל של ארוואן! עם מפלים ובריכות ודגים שגרגרו!', hintHe: 'המפלים שם נקראים ארוואן...' },
  { id: 'q27', forChildren: ['leah','ari'], emoji: '🌺', questionHe: 'מה שם הפרח הלאומי של תאילנד?', options: ['סחלב', 'ורד', 'לוטוס', 'יסמין'], correctFeedbackHe: 'סחלב! פרח יפהפה שגדל בכל מקום בתאילנד!', hintHe: 'פרח מהודר שגדל על עצים...' },
  { id: 'q28', forChildren: ['leah','ari'], emoji: '🗼', questionHe: 'מה שם המקדש המפורסם ב"ארמון הגדול" בבנגקוק?', options: ['וואט פראקאו', 'וואט פו', 'וואט ארון', 'וואט מאהאט'], correctFeedbackHe: 'וואט פראקאו — מקדש הבודהה האזמרגד! ירוק ומדהים!', hintHe: '"וואט" זה מקדש בתאילנדית...' },

  // Leah only — new
  { id: 'q29', forChildren: ['leah'], emoji: '👑', questionHe: 'מי המלך הנוכחי של תאילנד?', options: ['ראמה העשירי', 'ראמה התשיעי', 'ראמה השמיני', 'ראמה האחד עשר'], correctFeedbackHe: 'ראמה העשירי — המלך ואג\'ירלונגקורן! עלה לשלטון ב-2016.', hintHe: 'המלך האחרון ממשפחת ראמה... ספרו...' },
  { id: 'q30', forChildren: ['leah'], emoji: '📅', questionHe: 'מה שנת הלידה של בנגקוק כבירה?', options: ['1782', '1850', '1900', '1650'], correctFeedbackHe: 'בנגקוק הוקמה ב-1782 על ידי המלך ראמה הראשון!', hintHe: 'מעט אחרי הקמת ארצות הברית...' },
  { id: 'q31', forChildren: ['leah'], emoji: '🌏', questionHe: 'כמה אנשים גרים בתאילנד?', options: ['70 מיליון', '10 מיליון', '200 מיליון', '1 מיליארד'], correctFeedbackHe: 'כ-70 מיליון! פחות ממדינות גדולות אבל יותר מישראל פי 7!', hintHe: 'יותר מ-50 מיליון, פחות מ-100 מיליון...' },
  { id: 'q32', forChildren: ['leah'], emoji: '🐟', questionHe: 'מה שם הדג הצבעוני שגדל בתאילנד ואוהבים להיאבק?', options: ['בטה', 'קוי', 'נמו', 'גולדפיש'], correctFeedbackHe: 'דג הבטה! דג קטן ויפה שגברים שמים אחד ליד השני ואז הם נלחמים!', hintHe: 'שם שנשמע כמו אות יוונית...' },
  { id: 'q33', forChildren: ['leah'], emoji: '🏝️', questionHe: 'כמה איים יש לתאילנד?', options: ['יותר מ-1,400', 'כ-50', 'כ-200', 'כ-700'], correctFeedbackHe: 'יותר מ-1,400 איים! רובם קטנים ולא מיושבים — גן עדן!', hintHe: 'מספר גדול מאוד — יותר מאלף...' },
  { id: 'q34', forChildren: ['leah'], emoji: '✍️', questionHe: 'כמה אותיות יש באלפבית התאילנדי?', options: ['44', '26', '33', '52'], correctFeedbackHe: '44 עיצורים! לכן הכתב התאילנדי נראה כל כך מסובך לנו!', hintHe: 'יותר מהאנגלית — מעל 40...' },
  { id: 'q35', forChildren: ['leah'], emoji: '🎆', questionHe: 'מה שם חג האור המפורסם בתאילנד שבו שולחים פנסים לשמיים?', options: ['לוי קראטונג', 'סונגקראן', 'לוי פנג', 'ואי קרו'], correctFeedbackHe: 'לוי פנג! אלפי פנסים עולים לשמיים — אחד הדברים הכי יפים בעולם!', hintHe: 'שם שמתחיל ב"לוי"...' },
]
