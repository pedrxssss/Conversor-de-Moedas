/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "app.js"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        blue: "#3498db",
        gray: "#6b7280 ",
        gray100: "#95A5A6",
        black: "#000000",
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
      
      screens: {
        mediumScreen: "1024px",
      },
    },
    plugins: [],
  },
};
