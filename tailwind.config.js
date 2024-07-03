/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["src/**/*{.html, .js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["century-gothic", "Arial", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        mee: "#C44D9D",
        text: "#040707",
      },
    },
  },
  plugins: [],
};
