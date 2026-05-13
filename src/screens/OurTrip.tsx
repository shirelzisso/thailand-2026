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
    { id: 'bangkok',       x: 118, y: 148, label: 'בנגקוק',       emoji: '🏙️', order: 1 },
    { id: 'kanchanaburi',  x:  62, y: 128, label: 'קנצ\'נאבורי',  emoji: '🌿', order: 2 },
    { id: 'pattaya',       x: 140, y: 188, label: 'פאטאיה',        emoji: '🌊', order: 3 },
    { id: 'kohsamui',      x: 188, y: 310, label: 'קו סאמוי',      emoji: '🌴', order: 4 },
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
                {/* Order badge */}
                <circle cx={stop.x + 14} cy={stop.y - 14} r="9" fill="#FF6B6B" />
                <text
                  x={stop.x + 14}
                  y={stop.y - 10}
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="bold"
                  fill="white"
                >
                  {stop.order}
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
        {destinations.map((dest, i) => (
          <button
            key={dest.id}
            onClick={() => setSelected(dest)}
            className="bg-white rounded-2xl border-2 border-gray-100 p-3 text-right active:scale-95 transition-transform shadow-sm relative"
          >
            <span className="absolute top-2 left-2 bg-accent text-white text-xs font-black w-5 h-5 rounded-full flex items-center justify-center">{i + 1}</span>
            <div className="text-2xl">{dest.emoji}</div>
            <div className="font-bold text-sm text-navy mt-1">{dest.nameHe}</div>
            <div className="text-xs text-gray-400">{dest.days.length} ימים</div>
          </button>
        ))}
      </div>

      {/* Flights */}
      <div>
        <h2 className="text-lg font-black text-navy mb-3">✈️ הטיסות שלנו</h2>

        {/* Outbound */}
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-4 space-y-3 mb-3 shadow-sm">
          <div className="text-sm font-black text-primary">🛫 יציאה — 19 במאי 2026</div>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="text-right flex-1">
                <div className="font-black text-navy text-lg">15:50</div>
                <div className="text-xs text-gray-500">תל אביב (TLV)</div>
              </div>
              <div className="text-center flex-1">
                <div className="text-xs text-gray-400">3:15 ↗</div>
                <div className="text-xs font-bold text-gray-500">FZ1082</div>
              </div>
              <div className="text-left flex-1">
                <div className="font-black text-navy text-lg">20:05</div>
                <div className="text-xs text-gray-500">דובאי (DXB)</div>
              </div>
            </div>
            <div className="text-center text-xs text-accent font-bold bg-accent/10 rounded-xl py-1">
              🛑 עצירה בדובאי — 2:25 שעות
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right flex-1">
                <div className="font-black text-navy text-lg">22:30</div>
                <div className="text-xs text-gray-500">דובאי (DXB)</div>
              </div>
              <div className="text-center flex-1">
                <div className="text-xs text-gray-400">6:05 ↗</div>
                <div className="text-xs font-bold text-gray-500">EK0374</div>
              </div>
              <div className="text-left flex-1">
                <div className="font-black text-navy text-lg">07:35 +1</div>
                <div className="text-xs text-gray-500">בנגקוק (BKK)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Return */}
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-4 space-y-3 shadow-sm">
          <div className="text-sm font-black text-jungle">🛬 חזרה — 12 ביוני 2026</div>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="text-right flex-1">
                <div className="font-black text-navy text-lg">01:35</div>
                <div className="text-xs text-gray-500">בנגקוק (BKK)</div>
              </div>
              <div className="text-center flex-1">
                <div className="text-xs text-gray-400">6:05 ↗</div>
                <div className="text-xs font-bold text-gray-500">EK0385</div>
              </div>
              <div className="text-left flex-1">
                <div className="font-black text-navy text-lg">04:40</div>
                <div className="text-xs text-gray-500">דובאי (DXB)</div>
              </div>
            </div>
            <div className="text-center text-xs text-accent font-bold bg-accent/10 rounded-xl py-1">
              🛑 עצירה בדובאי — 2:30 שעות
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right flex-1">
                <div className="font-black text-navy text-lg">07:10</div>
                <div className="text-xs text-gray-500">דובאי (DXB)</div>
              </div>
              <div className="text-center flex-1">
                <div className="text-xs text-gray-400">3:30 ↗</div>
                <div className="text-xs font-bold text-gray-500">FZ1549</div>
              </div>
              <div className="text-left flex-1">
                <div className="font-black text-navy text-lg">09:40</div>
                <div className="text-xs text-gray-500">תל אביב (TLV)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
