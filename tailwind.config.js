/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "cursive"],
        comfortaa: ["Comfortaa", "cursive"],
        inter: ["Inter", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
        prata: ["Prata", "serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        primary: "#F5F5F5",
        secondary: "#414141",
        pink: "#ffe0e5",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
