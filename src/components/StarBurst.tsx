import { useEffect, useState } from 'react'

interface StarBurstProps {
  trigger: boolean
  onDone: () => void
}

export function StarBurst({ trigger, onDone }: StarBurstProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (trigger) {
      setVisible(true)
      const t = setTimeout(() => { setVisible(false); onDone() }, 700)
      return () => clearTimeout(t)
    }
  }, [trigger, onDone])

  if (!visible) return null

  return (
    <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-50">
      <span className="text-6xl animate-star-burst">⭐</span>
    </div>
  )
}
