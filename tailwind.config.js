/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    boxShadow: {
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      focus: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      // light: '1px 1px 3px 0px rgb(66,45,255) ',
      // night: '1px 1px 3px 0px rgba(100, 100, 255,0.3) ',
      // night: '1px 1px 3px 0px rgb(66, 153, 225) ',
      none: 'none',
    },
    fontFamily: {
      'roboto': ['"Roboto Mono"'],
      'dancing': ['"Dancing Script"']
    },
    extend: {
      keyframes: {
        spread: {
          '0%': { width: '0%' },
          '10%': { width: '15%' },
          '20%': { width: '30%' },
          '30%': { width: '45%' },
          '40%': { width: '60%' },
          '50%': { width: '75%' },
          '60%': { width: '90%' },
          '70%': { width: '100%' },
          '80%': { width: '80%' },
          '90%': { width: '90%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        'spread': 'spread 0.6s',
      },
      colors: {
        dark: '#0a192f',
        sDark: '#334155',
        sLight: '#e5e7eb',
        'sl-100': '#f3f4f6',
        'sl-200': '#e5e7eb',
        'sl-300': '#d1d5db',
        'sl-50': '#f9fafb',
        textGreen: '#64ffda',
        textDark: '#0a192f',
        navyBlue: '#0a192f'
      }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}

