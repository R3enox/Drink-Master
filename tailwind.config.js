/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-bg-welcome':
          "url('./src/assets/img/welcomePage/mobile-bg-welcome-page.png')",
        'mobile-bg-welcome@2x':
          "url('./src/assets/img/welcomePage/mobile-bg-welcome-page@2x.png')",
        'mobile-bg-footer':
          "url('./src/assets/img/footer/mobile-bg-footer.png')",
        'mobile-bg-footer@2x':
          "url('./src/assets/img/footer/mobile-bg-footer@2x.png')",
        'tablet-bg-footer':
          "url('./src/assets/img/footer/tablet-bg-footer.png')",
        'tablet-bg-footer@2x':
          "url('./src/assets/img/footer/tablet-bg-footer@2x.png')",
        'desktop-bg-footer':
          "url('./src/assets/img/footer/desktop-bg-footer.png')",
        'desktop-bg-footer@2x':
          "url('./src/assets/img/footer/desktop-bg-footer@2x.png')",
      },
    },
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
      'hover-text-color': '#253d6f',
      'border-color': 'rgba(243, 243, 243, 0.2)',
      'grey-text-color': 'rgba(243, 243, 243, 0.5)',
      "ingredients-card-bg": " rgba(22, 31, 55, 0.5)",
      transparent: 'rgba(243, 243, 243, 0)',
    },
  },
  plugins: [],
};
