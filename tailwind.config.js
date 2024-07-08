/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFB700",
        secondary: "#1760A6",
        tertiary: "#273044",
      }
    },
  },
  plugins: [],
}

