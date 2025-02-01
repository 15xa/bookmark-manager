/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        redish:{
          401: '#ef5455',
        },
        blueish: {
          401: '#5368E0',
        }
      }
    },
  },
  plugins: [],
}

