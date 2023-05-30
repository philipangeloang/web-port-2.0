/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        "main-black": "#161616",
        "main-white": "#bdbdbd",
      },
    },
  },
  plugins: [],
};
