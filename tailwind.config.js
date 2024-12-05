/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      colors: {
        'blue': '#000B58',
        'mint-blue': '#003161',
        'mint-green': '#006A67',
        'light-pink': '#FFF4B7',
    },
    },
  },
  plugins: [],
}

