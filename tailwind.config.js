/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        frame: '#9EA5AF',
        soft: '#ECECEC',
        paper: '#F8F8F6',
        ink: '#111111',
        sky: '#A7CEDA',
        'sky-dark': '#6FAFBD',
        bluegray: '#CFD5DA',
      },
      fontFamily: {
        display: ['"Arial Narrow"', '"Avenir Next Condensed"', '"Franklin Gothic Medium"', 'Impact', 'sans-serif'],
        body: ['Inter', 'Avenir', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.04em',
      },
      boxShadow: {
        poster: '0 22px 70px rgba(17, 17, 17, 0.16)',
      },
    },
  },
  plugins: [],
}
