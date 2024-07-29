const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    colors: {
      primary: "#243042",
      secondary: "#171f2b",
      text: {
        primary: "#E6E9EF",
        button: "#7FB2F9"
      },
      button: {
        primary: "#2E5BFF",
        secondary: "#4D7FFF"
      },
      accent: {
        primary: "#bd7a03",
        secondary: "#008000"
      }
    },

    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif']
    },

    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}

