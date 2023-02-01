/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'move-down': 'translate(30px,30px) linear 3s'
      }
    }
  },
  plugins: []
}
