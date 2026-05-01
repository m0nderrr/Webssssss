/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        olive: '#2F3A2D',
        sage: '#7C8A6A',
        beige: '#D8C7A3',
        ivory: '#F6F2E8',
        charcoal: '#111111',
        stone: '#D9D7CF',
      },
      fontFamily: {
        display: ['"Arial Narrow"', '"Avenir Next Condensed"', '"Franklin Gothic Medium"', 'sans-serif'],
        body: ['Inter', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.08em',
      },
      boxShadow: {
        editorial: '0 18px 45px rgba(17, 17, 17, 0.08)',
      },
    },
  },
  plugins: [],
}
