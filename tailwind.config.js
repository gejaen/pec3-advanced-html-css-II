/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    plugins: [
        require('@tailwindcss/typography'),
      ],
      corePlugins: {
        preflight: true,
      },
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
        fontSize : {
            'base' : ['16px', '0.9'],
            '4.5xl' : ['2.6rem', '1.15']
        } 
      }
    },
  }