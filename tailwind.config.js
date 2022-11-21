/** @type {import('tailwindcss').Config} */
// const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#E6E9F2",
        secondary: "#EFF0F5",
        lightGrey: "#DEE3EF",
        grey: "#70778B",
        textGrey: "#878D9D",
        starBlue: "#38415D",
        textBlue: "#3A4562",
        lightBlue: "#5876C5",
        transpBlue: "rgba(161, 177, 219, 0.317343)",
        transpYellow: "rgba(255, 207, 0, 0.15)",
        yellow: "#FFCF00",
        darkYellow: "#988B49",
      },
      fontFamily: {
        sans: ["Proxima Nova", "sans-serif"],
        mono: ["Roboto", "monospace"],

      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
