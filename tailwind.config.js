/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#334EFF",
        darkgrey: "#514F4F",
        grey: "#959292",
      },
    },
    screens: {
      xsm: "420px",
    },
  },
  plugins: [],
};
