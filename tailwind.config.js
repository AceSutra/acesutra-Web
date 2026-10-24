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
          950: '#0B0C0E',
          900: '#101114', // Deep charcoal
          800: '#181A20', // Dark surface
          700: '#1F222A', // Dark surface elevated
          600: '#282C37',
        },
        brand: {
          orange: '#FF6B35', // Primary brand orange
          hover: '#FF8552',
          glow: 'rgba(255, 107, 53, 0.15)',
          dark: '#E5531E',
          light: '#FFF0EB',
        },
        warmWhite: '#F7F7F5',
        mutedGray: '#A3A5AD',
        subtleBorder: '#2D3038',
        subtleBorderHover: '#424652',
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
        'glow-orange': '0 0 25px -5px rgba(255, 107, 53, 0.3)',
        'glow-orange-lg': '0 0 50px -10px rgba(255, 107, 53, 0.4)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
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
