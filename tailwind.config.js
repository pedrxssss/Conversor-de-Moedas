/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "app.js"],
  theme: {
    extend: {
      colors: {
        branco: "#FFFFFF",
        amarelo: "#FEC530",
        azul: "#3498db",
        verde: "#2ecc71",
        verdeEscura: "#004000",
        cinza: "#222222",
        cinza100: "#95A5A6",
        cinza200: "#222121",
        preto: "#000000",
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
      keyframes: {
        piscar: {
          from: {
            opacity: 1,
            boxShadow: "0 0 10px 5px #FFFF68",
          },
          to: {
            opacity: 0.5,
            boxShadow: "none",
          },
        },
      },
      screens: {
        mediumScreen: "1024px",
      },
      animation: {
        piscar: "piscar 1s infinite alternate",
      },
    },
    plugins: [],
  },
};
