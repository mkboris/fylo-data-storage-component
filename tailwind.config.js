/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: "480px",
      lg: "976px",
    },
    colors: {
      "gradient-1": "hsl(6, 100%, 80%)",
      "gradient-2": "hsl(335, 100%, 65%)",
      "pale-blue": "hsl(243, 100%, 93%)",
      "grayish-blue": "hsl(229, 7%, 55%)",
      "dark-blue": "hsl(228, 56%, 26%)",
      "very-dark-blue": "hsl(229, 57%, 11%)",
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
