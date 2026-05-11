import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00B4D8',
        accent: '#FF6B6B',
        highlight: '#FFD166',
        background: '#FFFBF0',
        navy: '#1A1A2E',
        jungle: '#06D6A0',
      },
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addUtilities }: { addUtilities: (utils: Record<string, Record<string, string>>) => void }) {
      addUtilities({
        '.pb-safe': {
          paddingBottom: 'env(safe-area-inset-bottom)',
        },
      })
    },
  ],
} satisfies Config
