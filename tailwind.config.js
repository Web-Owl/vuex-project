module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: '#0D9488',
        primaryBlue: '#3B82F6',
        shadowModal: '#6B7280'
      },
      fontFamily: {
        inter: ['Inter']
      }
    },
  },
  plugins: [],
}
