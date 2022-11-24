/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: " 'Lora', serif ",
        sans: ["'Open Sans'", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#016dc3",
        secondary: "#feAd00",
        lightGray: "#f3f4f6",
        medGray: "#e5e7eb",
        darkGray: "#4b5563",
      },
      animation: {
        toastIn: "toastIn .8s both",
        toastOut: "toastOut .8s both",
      },
      keyframes: {
        toastIn: {
          "0%": {
            transform: "translate(2000px) scale(0.7)",
            opacity: 0.7,
          },
          "80%": { transform: "translate(0px) scale(0.7)", opacity: 0.7 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        toastOut: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "20%": { transform: "translate(0px) scale(0.7)", opacity: 0.7 },
          "100%": {
            transform: "translateY(2000px) scale(0.7)",
            opacity: 0.7,
          },
        },
      },
    },
  },
  plugins: [],
};
