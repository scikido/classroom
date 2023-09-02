/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-serif-display": ["DM Serif Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#0d1137",
        ivory: "#FFFFF0	",
        secondary: "F5DDE0",
      },
    },
  },
  plugins: [],
};
