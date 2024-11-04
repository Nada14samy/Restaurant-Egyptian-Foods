/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightRed: "#ED0707",
        lightWhite: "#fff",
        gray: "#666666",
        yellow: "#FFB52C",
        lightRose: "#FF505B",
        darkRed: "#A30114",
      },
      backgroundImage: {
        'black-gray-gradient': 'linear-gradient(24deg, rgba(102,102,102,1) 0%, rgba(102,102,102,1) 0%, rgba(0,0,0,1) 52%)'
      },
    },
  },
  plugins: [],
}
