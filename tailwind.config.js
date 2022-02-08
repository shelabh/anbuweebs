module.exports = {
  content: ["./src/**/**/*.{ts,tsx,js,jsx}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Fjalla: ["Fjalla One", "sans-serif"],
        },
      colors:{
        magna:{100:"#ec8058"}
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
