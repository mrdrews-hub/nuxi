/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite'
      },
      keyframes: {
        'spin': {
          '0%': 'transform: rotate(0deg)',
          '100%': 'transform: rotate(360deg)'
        }
      }
    },
  },
  plugins: [],
}
