module.exports = {
  // content: [],
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '2000px',
      },
      fontFamily: {
        'Source-Sans-Pro': ['"Source Sans Pro"'],
        'Bebas-Neue': ['"Bebas Neue"'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
