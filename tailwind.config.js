/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    plugins: [
        require('@tailwindcss/typography'),
      ],
    theme: {
      colors: {
        'pink': '#ffb0ca',
        'green': '#8dff9e',
        'gray' : '#888888',
        'white': '#ffffff'
      },
      fontFamily: {
        mono: ['DM Mono', 'monospace'],
      },
      extend: {
      }
    },
  }