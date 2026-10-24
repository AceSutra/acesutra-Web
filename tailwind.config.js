/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#07090E',
          900: '#0C0F17', // Deep tech charcoal with navy tint
          800: '#121722', // Dark surface
          700: '#182030', // Dark surface elevated
          600: '#222D42',
        },
        brand: {
          blue: '#0066FF',
          cyan: '#00C2FF',
          navy: '#0B1E3D',
          hover: '#0085FF',
          dark: '#0047BA',
          light: '#E0F2FE',
          glow: 'rgba(0, 102, 255, 0.2)',
          'cyan-glow': 'rgba(0, 194, 255, 0.25)',
          // Backward-compatible alias for existing components
          orange: '#0066FF',
        },
        warmWhite: '#F8FAFC',
        mutedGray: '#94A3B8',
        subtleBorder: '#1E293B',
        subtleBorderHover: '#334155',
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        display: [
          'Plus Jakarta Sans',
          'Inter',
          'sans-serif',
        ],
      },
      boxShadow: {
        'glow-blue': '0 0 25px -5px rgba(0, 102, 255, 0.4)',
        'glow-blue-lg': '0 0 50px -10px rgba(0, 102, 255, 0.5)',
        'glow-cyan': '0 0 25px -5px rgba(0, 194, 255, 0.45)',
        'glow-cyan-lg': '0 0 50px -10px rgba(0, 194, 255, 0.55)',
        'glow-orange': '0 0 25px -5px rgba(0, 102, 255, 0.4)',
        'glow-orange-lg': '0 0 50px -10px rgba(0, 102, 255, 0.5)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
