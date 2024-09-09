/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "inter-tight": ['"Inter Tight"', "sans-serif"],
      },
      screens: {
        xsm: "480px",
      },
    },
  },
  plugins: [],
};
