/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        // Footer
        'mobile-bg-footer': "url('assets/img/footer/mobile-bg-footer.png')",
        'mobile-bg-footer@2x':
          "url('assets/img/footer/mobile-bg-footer@2x.png')",
        'tablet-bg-footer': "url('assets/img/footer/tablet-bg-footer.png')",
        'tablet-bg-footer@2x':
          "url('assets/img/footer/tablet-bg-footer@2x.png')",
        'desktop-bg-footer': "url('assets/img/footer/desktop-bg-footer.png')",
        'desktop-bg-footer@2x':
          "url('assets/img/footer/desktop-bg-footer@2x.png')",
        // Home Page
        'mobile-bg-homepage':
          "url('assets/img/homePage/mobile-bg-homepage.png')",
        'mobile-bg-homepage@2x':
          "url('assets/img/homePage/mobile-bg-homepage@2x.png')",
        'tablet-bg-homepage':
          "url('assets/img/homePage/tablet-bg-homepage.png')",
        'tablet-bg-homepage@2x':
          "url('assets/img/homePage/tablet-bg-homepage@2x.png')",
        'desktop-bg-homepage':
          "url('assets/img/homePage/desktop-bg-homepage.png')",
        'desktop-bg-homepage@2x':
          "url('assets/img/homePage/desktop-bg-homepage@2x.png')",
        // Common Pages
        'mobile-bg-commonpage':
          "url('assets/img/commonPages/mobile-bg-commonpage.png')",
        'mobile-bg-commonpage@2x':
          "url('assets/img/commonPages/mobile-bg-commonpage@2x.png')",
        'tablet-bg-commonpage':
          "url('assets/img/commonPages/tablet-bg-commonpage.png')",
        'tablet-bg-commonpage@2x':
          "url('assets/img/commonPages/tablet-bg-commonpage@2x.png')",
        'desktop-bg-commonpage':
          "url('assets/img/commonPages/desktop-bg-commonpage.png')",
        'desktop-bg-commonpage@2x':
          "url('assets/img/commonPages/desktop-bg-commonpage@2x.png')",
      },
    },
    container: {
      center: true,
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
      'border-color-add': 'rgba(64, 112, 205, 0.5)',
      'grey-text-color': 'rgba(243, 243, 243, 0.5)',
      'hover-button-border-color': 'rgba(64, 112, 205, 0.5)',
      'ingredients-card-bg': ' rgba(22, 31, 55, 0.5)',
      transparent: 'rgba(243, 243, 243, 0)',
      'background-color': '#080811',
      'error-color': '#da1414',
      'correct-color': '#3cbc81',
    },
  },
  plugins: [],
};
