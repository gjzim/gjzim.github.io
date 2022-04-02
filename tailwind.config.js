module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    listStyleType: {
      disc: 'disc',
      square: 'square'
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}