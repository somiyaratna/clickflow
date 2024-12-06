/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary100: "#c8d9ff",
        primary500: "#4b6cb7",
        primary600: "#364fc7",
        primary800: "#182848",
        primary900: "#001686",
        text500: "#555",
      },
    },
  },
  plugins: [],
};
