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
        bg100: "#dfdfdf",
        bg200: "#b3b3b3",
        bg500: "#777777",
        bg800: "#333333",
        bg900: "#1d1d1d",
        // Add dark mode bg shades
        darkbg100: "#1a1a1a",
        darkbg200: "#141414",
        darkbg500: "#0f0f0f",
        darkbg800: "#0a0a0a",
        darkbg900: "#050505",
      },
    },
  },
  plugins: [],
};
