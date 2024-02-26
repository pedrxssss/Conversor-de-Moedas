/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "app.js"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        gray: "#6b7280 ",
        black: "#000000",
        lightRichBlack: "#040F16",
        richBlack: "#051014",
      },
      fontSize: {
        sm: ".875rem",
        md: "1.25rem",
        lg: "1.5rem",
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
    plugins: [],
  },
};
