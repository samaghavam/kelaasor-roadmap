/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        green1: "rgb(26,114,101)",
        blue1: "#a3b9e0",
        pink1: "#f4c3c3"
      }
    },
  },
  plugins: [],
}

