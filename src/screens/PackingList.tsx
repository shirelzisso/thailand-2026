import { useState } from 'react'
import { packingPersons, personPackingSections, familyPackingSections } from '../data/packing'
import type { PackingPersonId } from '../data/packing'
import { useAppStore } from '../store/useAppStore'

interface PackingListProps {
  store: ReturnType<typeof useAppStore>
}

export function PackingList({ store }: PackingListProps) {
  const { state, togglePersonPacking, toggleFamilyPacking } = store
  const [tab, setTab] = useState<'my' | 'family'>('my')
  const [activePerson, setActivePerson] = useState<PackingPersonId>('leah')
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})

  const personPacking = state.personPacking[activePerson] ?? {}
  const sections = personPackingSections[activePerson]
  const allItems = sections.flatMap(s => s.items)
  const checkedCount = allItems.filter(item => personPacking[item.id]).length

  // sections default open, track closed ones
  const isFamilyOpen = (title: string) => openSections[`fam-${title}`] !== false

  const toggleFamilySection = (title: string) =>
    setOpenSections(prev => ({ ...prev, [`fam-${title}`]: !isFamilyOpen(title) }))

  const isPersonSectionOpen = (title: string) => openSections[`per-${title}`] !== false

  const togglePersonSection = (title: string) =>
    setOpenSections(prev => ({ ...prev, [`per-${title}`]: !isPersonSectionOpen(title) }))

  const person = packingPersons.find(p => p.id === activePerson)!

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-black text-navy">🎒 מה ארזנו</h1>

      {/* Tab toggle */}
      <div className="flex bg-gray-100 rounded-xl p-1">
        <button
          onClick={() => setTab('my')}
          className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors ${tab === 'my' ? 'bg-white shadow text-primary' : 'text-gray-500'}`}
        >
          הצ'קליסט שלי
        </button>
        <button
          onClick={() => setTab('family')}
          className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors ${tab === 'family' ? 'bg-white shadow text-primary' : 'text-gray-500'}`}
        >
          משפחה 👨‍👩‍👧‍👦
        </button>
      </div>

      {tab === 'my' ? (
        <div className="space-y-4">
          {/* Person selector */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            {packingPersons.map(p => (
              <button
                key={p.id}
                onClick={() => setActivePerson(p.id)}
                className={`flex-shrink-0 flex flex-col items-center gap-0.5 px-3 py-2 rounded-2xl border-2 transition-all text-sm font-bold ${
                  activePerson === p.id
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-gray-200 bg-white text-gray-500'
                }`}
              >
                <span className="text-xl">{p.emoji}</span>
                <span>{p.nameHe}</span>
              </button>
            ))}
          </div>

          {/* Progress bar */}
          <div>
            <div className="text-sm font-bold text-navy mb-1">
              {person.emoji} {person.nameHe} — ארזת {checkedCount} מתוך {allItems.length} פריטים
            </div>
            <div className="bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-jungle rounded-full h-2.5 transition-all duration-500"
                style={{ width: `${allItems.length ? (checkedCount / allItems.length) * 100 : 0}%` }}
              />
            </div>
          </div>

          {/* Collapsible sections */}
          <div className="space-y-3">
            {sections.map(section => {
              const open = isPersonSectionOpen(section.titleHe)
              const sectionChecked = section.items.filter(i => personPacking[i.id]).length
              return (
                <div key={section.titleHe} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <button
                    onClick={() => togglePersonSection(section.titleHe)}
                    className="w-full flex items-center justify-between px-4 py-3 text-right"
                  >
                    <span className="text-xs font-bold text-gray-400">{sectionChecked}/{section.items.length}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-navy">{section.titleHe}</span>
                      <span className="text-gray-400 text-sm">{open ? '▲' : '▼'}</span>
                    </div>
                  </button>
                  {open && (
                    <div className="border-t border-gray-50 divide-y divide-gray-50">
                      {section.items.map(item => {
                        const checked = !!personPacking[item.id]
                        return (
                          <button
                            key={item.id}
                            onClick={() => togglePersonPacking(activePerson, item.id)}
                            className={`w-full text-right flex items-center gap-3 px-4 py-3 transition-all active:scale-95 ${
                              checked ? 'bg-jungle/5' : 'bg-white'
                            }`}
                          >
                            <span className="ml-auto text-lg">{checked ? '✅' : '⬜'}</span>
                            <span className="text-xl">{item.emoji}</span>
                            <span className={`text-sm font-medium ${checked ? 'line-through text-gray-400' : 'text-navy'}`}>
                              {item.labelHe}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {familyPackingSections.map(section => {
            const open = isFamilyOpen(section.titleHe)
            const checked = section.items.filter(i => state.familyPacking[i.id]).length
            return (
              <div key={section.titleHe} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFamilySection(section.titleHe)}
                  className="w-full flex items-center justify-between px-4 py-3 text-right"
                >
                  <span className="text-xs font-bold text-gray-400">{checked}/{section.items.length}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-navy">{section.titleHe}</span>
                    <span className="text-gray-400 text-sm">{open ? '▲' : '▼'}</span>
                  </div>
                </button>
                {open && (
                  <div className="border-t border-gray-50 divide-y divide-gray-50">
                    {section.items.map(item => {
                      const isChecked = !!state.familyPacking[item.id]
                      return (
                        <button
                          key={item.id}
                          onClick={() => toggleFamilyPacking(item.id)}
                          className={`w-full text-right flex items-center gap-3 px-4 py-3 transition-all active:scale-95 ${
                            isChecked ? 'bg-jungle/5' : 'bg-white'
                          }`}
                        >
                          <span className="ml-auto text-lg">{isChecked ? '✅' : '⬜'}</span>
                          <span className="text-xl">{item.emoji}</span>
                          <span className={`text-sm font-medium ${isChecked ? 'line-through text-gray-400' : 'text-navy'}`}>
                            {item.labelHe}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
