/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: { DEFAULT: '#faf6ee', 2: '#f3ecdd' },
        paper: '#fffdf8',
        brown: { DEFAULT: '#3a2a20', 2: '#5c4433' },
        terracotta: { DEFAULT: '#c1613f', 2: '#a34b2d' },
        gold: { DEFAULT: '#c99a3b', 2: '#e0b458' },
        ink: '#6b5c4f',
      },
    },
  },
  plugins: [],
}