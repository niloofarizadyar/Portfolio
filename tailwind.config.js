/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightRoseBrown:"#C99A9A",
        darkRoseBrown:"#A06E6E",
        oddBgColor:"#101010"
      },
    },
  },
  plugins: [],
}

