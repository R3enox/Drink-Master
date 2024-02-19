/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        // Welcome-Page
        'mobile-bg-welcome':
          "url('assets/img/welcomePage/mobile-bg-welcome-page.png')",
        'mobile-bg-welcome@2x':
          "url('assets/img/welcomePage/mobile-bg-welcome-page@2x.png')",
        'tablet-bg-welcome':
          "url('assets/img/welcomePage/tablet-bg-welcome-page.png')",
        'tablet-bg-welcome@2x':
          "url('assets/img/welcomePage/tablet-bg-welcome-page@2x.png')",
        'desctop-bg-welcome':
          "url('assets/img/welcomePage/desctop-bg-welcome.png')",
        'desctop-bg-welcome@2x':
          "url('assets/img/welcomePage/desktop-bg-welcome@2x.png')",
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
      transparent: 'rgba(243, 243, 243, 0)',
      'background-color': '#080811',
    },
  },
  plugins: [],
};
