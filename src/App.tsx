import { useState } from 'react'
import { BottomNav } from './components/BottomNav'
import type { Tab } from './components/BottomNav'
import { useAppStore } from './store/useAppStore'
import { Home } from './screens/Home'
import { OurTrip } from './screens/OurTrip'
import { LearnThai } from './screens/LearnThai'
import { Facts } from './screens/Facts'
import { FoodGuide } from './screens/FoodGuide'
import { PackingList } from './screens/PackingList'
import { Quiz } from './screens/Quiz'
import { Games } from './screens/Games'

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home')
  const store = useAppStore()

  const screen = {
    home: <Home store={store} onNavigate={setActiveTab} />,
    trip: <OurTrip />,
    thai: <LearnThai store={store} />,
    facts: <Facts />,
    food: <FoodGuide />,
    packing: <PackingList store={store} />,
    quiz: <Quiz store={store} />,
    games: <Games store={store} />,
  }[activeTab]

  return (
    <div className="min-h-dvh bg-background">
      <main className="pb-20 min-h-dvh">
        {screen}
      </main>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}
