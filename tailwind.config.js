/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      'colors':{
        'body-background-color':'#E9E9E9',
        'header-color':'#36474F',
        'body-color':'#18212A',
        'orange':'#FF6531'
      },
      'fontFamily':{
        Varela: ['Varela Round'],
      }
    },
  },
  plugins: [],
}

