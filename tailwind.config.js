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
        paleta1B: {
          100: "#1F1D36",
          200: "#3F3351",
          300: "#864879",
          400: "#E9A6A6",
        },
      },
    },
  },
  plugins: [],
};
