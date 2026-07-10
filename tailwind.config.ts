import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        kool: {
          bg: '#0b0f14',
          card: '#111827',
          accent: '#33b1ff',
          accent2: '#00d4ff',
          text: '#e5f2ff',
          mut: '#8aa4b8'
        }
      },
      boxShadow: {
        soft: '0 10px 30px -15px rgba(0,0,0,0.6)'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp .6s ease-out both'
      }
    }
  },
  plugins: [],
}
export default config
