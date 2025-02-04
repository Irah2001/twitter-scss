/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontFamily: {
      sans: ['SF Pro Text', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#FFFFFF',
        'primary-color': '#4C9EEB',
        'primary-card': '#BDC5CD',
        'color-darken': '#687684',
        'secondary-separator': '#CED5DC',
        'color-bold': '#141619'
      },
      fontSize: {
        x_small: '12px', 
        small: '14px',
        medium: '16px',
      },
      boxShadow: {
        'line': '0px 0px 0px 0.33px #BDC5CD',
      },
    }
  },
  plugins: [],
}