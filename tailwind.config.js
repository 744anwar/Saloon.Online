/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        grow: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.2)' }, 
        },
        Pulse: {
          '50%': { opacity: '.5' },
        }
      },
      animation: {
        grow: 'grow 0.3s ease-in-out', 
        Pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) 5',
      },
      colors: {
        customRed : {
          DEFAULT : '#e40134'
        },
        Gray : {
          DEFAULT : '#656565'
        },
        customBlue: {
          DEFAULT : '#f2f5f7'
        }
      },
    },
  },
  plugins: [],
}

