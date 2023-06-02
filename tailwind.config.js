/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: "Outfit",
      },
      colors: {
        "main-black": "#161616",
        "main-white": "#bdbdbd",
        "overlay-black": "#1a1a1a",
      },
    },
  },
  plugins: [],
};
