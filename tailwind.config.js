/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#0a0a0a",
        card: "#16181C",
        text: "#E7E9EA",
        muted: "#71767B",
      },
    },
  },
  plugins: [],
};
