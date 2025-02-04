/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#0f3a5f",
        tertiary: "#e8b210",
        quaternary: "#3f5a4b",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg_3.jpg')",
        "hero-pattern2": "url('/src/assets/bg_5.jpg')",
        "hero-pattern3": "url('/src/assets/bg_7.jpg')",
      },
    },
  },
  plugins: [],
};