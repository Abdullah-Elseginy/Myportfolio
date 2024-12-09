/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
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

