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

  // Approximate positions on a 300×420 SVG canvas representing Thailand
  const stops = [
    { id: 'bangkok',       x: 118, y: 148, label: 'בנגקוק',       emoji: '🏙️' },
    { id: 'kanchanaburi',  x:  62, y: 128, label: 'קנצ\'נאבורי',  emoji: '🌿' },
    { id: 'pattaya',       x: 140, y: 188, label: 'פאטאיה',        emoji: '🌊' },
    { id: 'kohsamui',      x: 188, y: 310, label: 'קו סאמוי',      emoji: '🌴' },
  ]

  // Dotted path order: Bangkok → Kanchanaburi → Bangkok → Pattaya → Koh Samui
  const pathPoints = [
    stops[0], stops[1], stops[0], stops[2], stops[3],
  ]
  const pathD = pathPoints
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
    .join(' ')

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-black text-navy">🗺️ המסע שלנו</h1>
      <p className="text-sm text-gray-500 text-right">לחצו על עיר כדי לראות את התוכנית!</p>

      <div className="relative bg-primary/5 rounded-3xl border-2 border-primary/20 overflow-hidden">
        <svg
          viewBox="0 0 300 420"
          className="w-full"
          style={{ maxHeight: '70vh' }}
        >
          {/* Thailand landmass — rough outline */}
          <path
            d="M 100 20 Q 140 15 160 30 L 170 60 Q 185 75 175 95 L 185 115 Q 195 130 180 145
               L 190 170 Q 200 195 185 215 L 175 240 Q 170 265 160 280
               L 165 300 Q 170 320 160 335 L 155 355 Q 145 370 135 365
               L 120 350 Q 110 335 115 315 L 108 295 Q 100 275 110 255
               L 105 235 Q 95 215 100 195 L 90 170 Q 80 150 90 130
               L 85 105 Q 75 85 85 65 L 90 40 Z"
            fill="#06D6A0"
            fillOpacity="0.15"
            stroke="#06D6A0"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />

          {/* Gulf of Thailand hint */}
          <ellipse cx="200" cy="240" rx="45" ry="70" fill="#00B4D8" fillOpacity="0.08" />
          <text x="218" y="248" fontSize="8" fill="#00B4D8" fillOpacity="0.6" textAnchor="middle">
            מפרץ
          </text>
          <text x="218" y="258" fontSize="8" fill="#00B4D8" fillOpacity="0.6" textAnchor="middle">
            תאילנד
          </text>

          {/* Dotted route path */}
          <path
            d={pathD}
            fill="none"
            stroke="#FF6B6B"
            strokeWidth="2.5"
            strokeDasharray="6 4"
            strokeLinecap="round"
          />

          {/* Stop pins */}
          {stops.map((stop) => {
            const dest = destinations.find(d => d.id === stop.id)!
            return (
              <g
                key={stop.id}
                onClick={() => setSelected(dest)}
                style={{ cursor: 'pointer' }}
              >
                {/* Pin shadow */}
                <circle cx={stop.x} cy={stop.y + 2} r="18" fill="#000" fillOpacity="0.08" />
                {/* Pin circle */}
                <circle
                  cx={stop.x}
                  cy={stop.y}
                  r="18"
                  fill="white"
                  stroke="#00B4D8"
                  strokeWidth="2.5"
                />
                {/* Emoji */}
                <text
                  x={stop.x}
                  y={stop.y + 6}
                  textAnchor="middle"
                  fontSize="16"
                >
                  {stop.emoji}
                </text>
                {/* Label background */}
                <rect
                  x={stop.x - 36}
                  y={stop.y + 22}
                  width="72"
                  height="18"
                  rx="9"
                  fill="white"
                  stroke="#00B4D8"
                  strokeWidth="1"
                  fillOpacity="0.95"
                />
                {/* Label text */}
                <text
                  x={stop.x}
                  y={stop.y + 34}
                  textAnchor="middle"
                  fontSize="9"
                  fontWeight="bold"
                  fill="#1A1A2E"
                  fontFamily="Heebo, sans-serif"
                >
                  {stop.label}
                </text>
              </g>
            )
          })}

          {/* Decorative elements */}
          <text x="240" y="60"  fontSize="18" opacity="0.3">🐠</text>
          <text x="50"  y="200" fontSize="16" opacity="0.3">🌿</text>
          <text x="220" y="360" fontSize="20" opacity="0.3">🐚</text>
          <text x="48"  y="310" fontSize="14" opacity="0.25">✈️</text>
        </svg>
      </div>

      {/* Legend / summary cards below the map */}
      <div className="grid grid-cols-2 gap-2">
        {destinations.map(dest => (
          <button
            key={dest.id}
            onClick={() => setSelected(dest)}
            className="bg-white rounded-2xl border-2 border-gray-100 p-3 text-right active:scale-95 transition-transform shadow-sm"
          >
            <div className="text-2xl">{dest.emoji}</div>
            <div className="font-bold text-sm text-navy mt-1">{dest.nameHe}</div>
            <div className="text-xs text-gray-400">{dest.days.length} ימים</div>
          </button>
        ))}
      </div>
    </div>
  )
}
