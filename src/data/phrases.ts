export interface Phrase {
  id: string
  categoryHe: string
  meaningHe: string
  thaiScript: string
  phoneticHe: string
}

export const phraseCategories = ['ברכות', 'מילים נחמדות', 'אוכל ושוק', 'מספרים']

export const phrases: Phrase[] = [
  // ברכות
  { id: 'sawadee-m', categoryHe: 'ברכות', meaningHe: 'שלום (גבר מדבר)', thaiScript: 'สวัสดีครับ', phoneticHe: 'סאוואדי קאפ' },
  { id: 'sawadee-f', categoryHe: 'ברכות', meaningHe: 'שלום (בת מדברת)', thaiScript: 'สวัสดีค่ะ', phoneticHe: 'סאוואדי קא' },
  { id: 'kopkhun-m', categoryHe: 'ברכות', meaningHe: 'תודה (גבר)', thaiScript: 'ขอบคุณครับ', phoneticHe: 'קופ קון קאפ' },
  { id: 'kopkhun-f', categoryHe: 'ברכות', meaningHe: 'תודה (בת)', thaiScript: 'ขอบคุณค่ะ', phoneticHe: 'קופ קון קא' },
  { id: 'chai', categoryHe: 'ברכות', meaningHe: 'כן', thaiScript: 'ใช่', phoneticHe: 'צ\'אי' },
  { id: 'mai', categoryHe: 'ברכות', meaningHe: 'לא', thaiScript: 'ไม่', phoneticHe: 'מאי' },
  // מילים נחמדות
  { id: 'khotot', categoryHe: 'מילים נחמדות', meaningHe: 'סליחה', thaiScript: 'ขอโทษ', phoneticHe: 'כאו טוט' },
  { id: 'aroy', categoryHe: 'מילים נחמדות', meaningHe: 'טעים!', thaiScript: 'อร่อย', phoneticHe: 'אָ-רוֹי' },
  { id: 'suaymak', categoryHe: 'מילים נחמדות', meaningHe: 'יפה מאוד!', thaiScript: 'สวยมาก', phoneticHe: 'סואי מאק' },
  // אוכל ושוק
  { id: 'taorai', categoryHe: 'אוכל ושוק', meaningHe: 'כמה זה עולה?', thaiScript: 'เท่าไหร่', phoneticHe: 'טאו ריי' },
  { id: 'anni', categoryHe: 'אוכל ושוק', meaningHe: 'זה, הדבר הזה', thaiScript: 'อันนี้', phoneticHe: 'אן-ניי' },
  { id: 'maipet', categoryHe: 'אוכל ושוק', meaningHe: 'בלי חריף!', thaiScript: 'ไม่เผ็ด', phoneticHe: 'מאי פד' },
  { id: 'nam', categoryHe: 'אוכל ושוק', meaningHe: 'מים', thaiScript: 'น้ำ', phoneticHe: 'נאם' },
  // מספרים
  { id: 'n1', categoryHe: 'מספרים', meaningHe: 'אחת — 1', thaiScript: 'หนึ่ง', phoneticHe: 'נוּנג' },
  { id: 'n2', categoryHe: 'מספרים', meaningHe: 'שתיים — 2', thaiScript: 'สอง', phoneticHe: 'סוֹנג' },
  { id: 'n3', categoryHe: 'מספרים', meaningHe: 'שלוש — 3', thaiScript: 'สาม', phoneticHe: 'סאאם' },
  { id: 'n4', categoryHe: 'מספרים', meaningHe: 'ארבע — 4', thaiScript: 'สี่', phoneticHe: 'סִי' },
  { id: 'n5', categoryHe: 'מספרים', meaningHe: 'חמש — 5', thaiScript: 'ห้า', phoneticHe: 'הָא' },
  { id: 'n6', categoryHe: 'מספרים', meaningHe: 'שש — 6', thaiScript: 'หก', phoneticHe: 'הוֹק' },
  { id: 'n7', categoryHe: 'מספרים', meaningHe: 'שבע — 7', thaiScript: 'เจ็ด', phoneticHe: 'ג\'ד' },
  { id: 'n8', categoryHe: 'מספרים', meaningHe: 'שמונה — 8', thaiScript: 'แปด', phoneticHe: 'פּאאד' },
  { id: 'n9', categoryHe: 'מספרים', meaningHe: 'תשע — 9', thaiScript: 'เก้า', phoneticHe: 'גָאו' },
  { id: 'n10', categoryHe: 'מספרים', meaningHe: 'עשר — 10', thaiScript: 'สิบ', phoneticHe: 'סִיב' },
]
