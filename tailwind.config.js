/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#334EFF",
      },
    },
    screens: {
      xsm: "420px",
    },
  },
  plugins: [],
};
