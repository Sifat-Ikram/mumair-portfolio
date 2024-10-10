/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: "#1E1E1E",
        medium: "#293245",
      },
    },
  },
  plugins: [require("daisyui")],
};
