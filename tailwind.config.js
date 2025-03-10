/** @type {import('tailwindcss').Config} */
const {
  fontFamily,
  colors,
  screens,
  keyframes,
  animation,
} = require('tailwindcss/defaultTheme');

module.exports = {
  presets: [
    require('tailwindcss-preset-email'),
  ],
  content: [
    './components/**/*.html',
    './emails/**/*.html',
    './layouts/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        brands: {
          primary: '#075D6C',
          secondary: '#E9E9E9',
        },
        purple: {
          ...colors['purple'],
          100: '#E2CFFC',
          200: '#C49FF9',
          250: '#EDE2FD',
          300: '#A76EF7',
          400: '#8A3EF4',
          50: '#F0E7FE',
          500: '#1F0444',
          600: '#570BC1',
          700: '#410891',
          800: '#2B0660',
          850: '#04053D',
          900: '#160330',
          950: '#0A0115',
        },
        yellow: {
          ...colors['yellow'],
          500: "#F0AB20"
        }
      },

      fontFamily: {
        jost: ['var(--font-jost)'],
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
      },
      screens: {
        ...screens,
        xs: '320px',
      },
    },
  },
}
