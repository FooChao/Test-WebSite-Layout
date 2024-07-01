/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens : {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'

      },
      fontSize : {
        '0.5rem' : '0.5rem',
      },
    }
  },
  plugins: [],
}

