/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      "color-bg": "#ffeee5",
      "color-primary": "#a46c00",
      black: "#000000",
      white: "#ffffff",
      gray: "#c6c6c6",
    },
    minWidth: {
      'sm': '600px',
      'md': '768px'
    }
  },
  plugins: [],
}
