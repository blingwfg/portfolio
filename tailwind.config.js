/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      screens:{
        'xl': '1320px',
      },
      colors:{
        primary: '#06b6d4',
        secondary: '#64748b',
        dark: '#0f172a'
      }
    },
  },
  plugins: [],
}

