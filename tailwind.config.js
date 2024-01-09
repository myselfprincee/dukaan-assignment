/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '640px'},
      'md': '960px',
      'lg': '1440px'

    },
    extend: {},
  },
  plugins: [],
}
