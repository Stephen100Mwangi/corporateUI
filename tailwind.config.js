/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        overall: "#ECF4D6",
        text: "#151515",
        titles: "#0B60B0",
        hover: "#424769",
      }
    },
  },
  plugins: [],
}