/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paleta1: {
          100: "#FFB5A7",
          200: "#FCD5CE",
          300: "#F8EDEB",
          400: "#F9DCC4",
          500: "#FEC89A",
        },
      },
    },
  },
  plugins: [],
};
