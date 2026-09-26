/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#202522',
        cream: '#f5f3ee',
        sand: '#e9e4da',
        bronze: '#ae815e',
        moss: '#5d685a',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(32, 37, 34, 0.08)',
      },
    },
  },
  plugins: [],
}
