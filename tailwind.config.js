/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'kaushan': "Kaushan Script",
        'archivo': "Archivo, sans-serif ",
      },
      colors:{
        'black' : '#001008',
        'white': '#FFFFFF',
        'lightgreen': '#6E9277',
        'whitesmoke': '#F5F8F6',
      },
      boxShadow:{
        'btnshadow': '0px 0px 30px 2px green',
        'cardshow':  '0px 0px 20px 1px #00000030'
      }
    },
  },
  plugins: [],
}

