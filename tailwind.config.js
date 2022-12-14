module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'prim-dark': '#24252D',
        'prim-gray-1': '#E3E1E3',
        'prim-gray-2': '#888888',
        'prim-gray-3': '#4F4F4F',
        'prim-black-1': '#2D2E36',
        'prim-black-2': '#1B1A21',
        'prim-black-3': '#2A2D3A',
        'prim-black-4': '#24252D',
      },
    },
    screens: {
      lg: { max: '1800px' },
      md: { max: '1080px' },
      sm: { max: '600px' },
      xs: { max: '400px' },
      pc: '1500px',
      minmd: '1700px',
      minlg: '2100px',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};