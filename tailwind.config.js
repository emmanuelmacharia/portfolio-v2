/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,js}'],
  // content: ['./src/**/*.{html, ts, js}'], './src/**/*.{html,ts}', './src/**/*'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {},
    fontFamily: {
      sans: ['Poppins', 'Helvetica Neue', 'sans-serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        none: '0',
        sm: '.125rem',
        DEFAULT: '.25rem',
        lg: '.5rem',
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
};
