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
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'], // Built-in default sans-serif font
      serif: ['ui-serif', 'Georgia'],      // Built-in serif font
      mono: ['ui-monospace', 'SFMono-Regular'], // Built-in monospace font
    },
    },
  },
  plugins: [],
}

