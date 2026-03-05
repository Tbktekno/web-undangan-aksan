/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: "#C9A227", // Gold
        Background: "#F8F4E9", // Ivory
        Text: "#2C2C2C", // Dark Gray
        Accent: "#E8DFC8", // Soft Beige
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Cinzel", "Playfair Display", "serif"],
        script: ["Great Vibes", "cursive"], // Untuk inisial dan nama pasangan
      },
    },
  },
  plugins: [],
};
