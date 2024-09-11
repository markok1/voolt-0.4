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
      colors: {
        background: "#fff",
        muted: "#F4F4F5",
        "light-background": "#FAFAFA",
        "dark-background": "#091A3F",
        "bluelight-background": "#FAFAFA",
        primary: "#FCC82C",
        foreground: "#09090B",
        "muted-foreground": "#71717A",
        "blue-foreground": "#058BEB",
        border: "#E4E4E7",
        ring: "#058BEB",
        "Color-Blue-500---primary": "#058BEB",
        secondaryBlue: "#0094FF",
        black: "#000",
        inputGray: "#F7F7FF",
      },
    },
  },
  plugins: [],
};
