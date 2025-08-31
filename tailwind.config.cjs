module.exports = {
  darkMode: "class",
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          green: "#00ff88",
          greenDark: "#00cc66",
          black: "#0d0d0d",
          blue: "#1e3a8a",      // dark mode base
          lightBlue: "#60a5fa", // dark mode accent
        },
      },
    },
  },
  plugins: [],
}
