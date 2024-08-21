/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        h1:"3rem",
        h2:"2.5rem",
        h3:"2rem",
        h4:"1.5rem",
        p:"1.2rem"
      },
      backgroundColor:{
        main:"#387F39",
        subMain:"#A2CA71"
      },
      colors:{
        main:"#E7E8D8",
        hover:"#F6E96B"
      }
    },
  },
  plugins: [],
}