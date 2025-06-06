/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx,md}",
    "./components/**/*.{html,js,ts,jsx,tsx}",
  ],
  plugins: [
    require('@tailwindcss/typography')
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Lora", "serif"],
      },
      colors: {
        customGray: "#f1f3f6",
        brand: "#c22a24",
      },
    },
  },
};
