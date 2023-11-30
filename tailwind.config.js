/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    fontFamily: {
       'sans': ['Roboto'] 
    },
    colors: {
       background: 'rgb(5, 5, 20)',
       cinza: '#ececec',
       azulBnt: 'rgb(45, 96, 185)',
       azulVioleta: 'rgb(90, 63, 225)',
       cinzaEscuro: '#cdcdcd',
       btnBackground: 'rgb(63, 116, 207)',
       btnBackgroundHover: 'rgb(114, 62, 218)',
       colorWhite: 'rgb(255 255 255)',
       backgroundCinza: 'rgb(22, 22, 27)',
       cinzaLetra: '#d4d4d8'

    },
    extend: {
     
    },
  },
  plugins: [],
}

