/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a265c",
          100: "#050812",
          200: "#0a0f25",
          300: "#0f1737",
          400: "#151e49",
          500: "#1a265c",
          600: "#2b3f99",
          700: "#475fcb",
          800: "#8495dc",
          900: "#c2caee",
        },
        secondary: {
          DEFAULT: "#f7ca18",
          100: "#342a02",
          200: "#685404",
          300: "#9d7e06",
          400: "#d1a808",
          500: "#f7ca18",
          600: "#f8d546",
          700: "#fadf74",
          800: "#fceaa2",
          900: "#fdf4d1",
        }
      },
    },
  },
  plugins: [],
};
