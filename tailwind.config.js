/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
    container: {
      padding: {
        sm: '1.25rem',
        md: '2rem',
        lg: '6.25rem',
      },
    },

    lightMode: 'class',
    screens: {
      sm: '375px',
      // => @media (min-width: 375px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1440px',
      // => @media (min-width: 1440px) { ... }
    },

    colors: {
      'primary-text-color': '#F3F3F3',
      'primary-text-button-color': '#161F37',
      'pagination-button-color': '#4070CD',
      'button-hover-color': '#0A0A11',
      'welcome-text-color': '#FAFAFA',
      'filter-scroll-text': '#434D67',
    },
  },

  plugins: [],
};
