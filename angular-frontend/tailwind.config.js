/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {backgroundImage: {
        'landscape': "url('/src/assets/landscape.jpg')",
      }},
  },
  plugins: [],
}

