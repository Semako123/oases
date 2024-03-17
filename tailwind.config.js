/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['"DM Sans"', 'sans-serif'],
        'secondary': ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

