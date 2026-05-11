type Tab = 'home' | 'trip' | 'thai' | 'facts' | 'food' | 'packing' | 'quiz' | 'games'

interface NavItem {
  id: Tab
  emoji: string
  labelHe: string
}

const navItems: NavItem[] = [
  { id: 'home', emoji: '🏠', labelHe: 'בית' },
  { id: 'trip', emoji: '🗺️', labelHe: 'המסע' },
  { id: 'thai', emoji: '🇹🇭', labelHe: 'תאילנדית' },
  { id: 'facts', emoji: '🏛️', labelHe: 'עובדות' },
  { id: 'food', emoji: '🍜', labelHe: 'אוכל' },
  { id: 'packing', emoji: '🎒', labelHe: 'ארזנו' },
  { id: 'quiz', emoji: '🎯', labelHe: 'חידון' },
  { id: 'games', emoji: '🃏', labelHe: 'משחקים' },
]

interface BottomNavProps {
  activeTab: Tab
  onTabChange: (tab: Tab) => void
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 flex justify-around items-center h-16 z-40 pb-safe">
      {navItems.map(item => (
        <button
          key={item.id}
          onClick={() => onTabChange(item.id)}
          className={`flex flex-col items-center justify-center flex-1 h-full gap-0.5 text-xs transition-colors ${
            activeTab === item.id ? 'text-primary font-bold' : 'text-gray-400'
          }`}
        >
          <span className="text-xl leading-none">{item.emoji}</span>
          <span>{item.labelHe}</span>
        </button>
      ))}
    </nav>
  )
}

export type { Tab }
