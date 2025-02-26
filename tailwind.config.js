/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables dark mode using 'class'
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        baloo: ["'Baloo 2'", "sans-serif"],
        heading: ["Dancing Script", "cursive"],
        body: ["Lora", "serif"],
        sans: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        cursive: ["Great Vibes", "cursive"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        flip: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(180deg)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out forwards",
        flip: "flip 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
      },
    },
  },
  plugins: [],
};
