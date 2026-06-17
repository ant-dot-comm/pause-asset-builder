/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#141414',
          800: '#1c1c1c',
          700: '#262226',
        },
        plum: {
          950: '#18121f',
          900: '#211829',
          700: '#4a2c63',
          500: '#7e44b4',
          300: '#b59cd0',
          200: '#cdbede',
        },
        ivory: {
          50: '#f4eee2',
          100: '#ece4d4',
        },
        tan: {
          300: '#d8c3a5',
          500: '#b79a73',
        },
        amber: {
          500: '#cf8a3e',
          600: '#b3742f',
        },
      },
      fontFamily: {
        display: ['Averia Sans Libre', 'Trebuchet MS', 'sans-serif'],
        editorial: ['Newsreader', 'Georgia', 'serif'],
        body: ['Hanken Grotesk', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        matte: '0 18px 48px rgba(10,8,12,0.46)',
        warm: '0 10px 30px rgba(74,44,99,0.10)',
      },
    },
  },
  plugins: [],
};
