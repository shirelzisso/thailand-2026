import { useState } from 'react'
import { destinations } from '../data/itinerary'
import type { Destination } from '../data/itinerary'
import { Card } from '../components/Card'

export function OurTrip() {
  const [selected, setSelected] = useState<Destination | null>(null)

  if (selected) {
    return (
      <div className="p-4 space-y-4">
        <button
          onClick={() => setSelected(null)}
          className="flex items-center gap-2 text-primary font-bold text-lg"
        >
          ← חזרה
        </button>
        <h1 className="text-2xl font-black text-navy">
          {selected.emoji} {selected.nameHe}
        </h1>
        <Card className="bg-jungle/10 border border-jungle">
          <p className="text-sm text-navy font-medium">{selected.hotelTagline}</p>
          <p className="text-xs text-gray-500 mt-1">🏨 {selected.hotel}</p>
        </Card>
        <div className="space-y-4">
          {selected.days.map(day => (
            <Card key={day.dayNumber}>
              <div className="font-bold text-primary mb-2">יום {day.dayNumber} — {day.date}</div>
              <ul className="space-y-2">
                {day.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="text-xl flex-shrink-0">{h.emoji}</span>
                    <span className="text-sm text-navy">{h.text}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-black text-navy">🗺️ המסע שלנו</h1>
      <div className="space-y-3">
        {destinations.map(dest => (
          <Card key={dest.id} onClick={() => setSelected(dest)}>
            <div className="flex items-center gap-3">
              <span className="text-4xl">{dest.emoji}</span>
              <div className="flex-1">
                <div className="text-xl font-black text-navy">{dest.nameHe}</div>
                <div className="text-sm text-gray-500">{dest.days.length} ימים • {dest.hotel}</div>
              </div>
              <span className="text-2xl text-gray-300">←</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
