module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#D4AF37',
          black: '#000000',
          white: '#ffffff',
          muted: '#f5f5f5',
        },
        primary: {
          50: '#fefbf0',
          100: '#fdf7e0',
          500: '#D4AF37',
          600: '#c49f2e',
          700: '#b08f25',
          900: '#8b6f1d',
        },
        accent: {
          500: '#D4AF37',
          600: '#c49f2e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'gap-xs': '0.5rem',
        'gap-sm': '1rem',
        'gap-md': '2rem',
        'gap-lg': '3rem',
      },
    },
  },
  plugins: [],
};
