/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        branco: '#FFFFFF',
        amarelo: '#FCE22A',
        inputReal: '#141a29',
        inputRealRing: '#4b546c',

        //button and dropdown
        dropdownBtn: '#BACDDB',
        dropdownBtnBg: '#313552'
      },
      backgroundImage: {
        'bg-image': "url('/assets/background/bolsadevalores.png')",
      },
    },
    plugins: [],
  },
}
