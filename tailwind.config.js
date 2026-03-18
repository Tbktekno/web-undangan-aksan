/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#2C3333", // Deep Teal/Dark Gray
        surface: "#3E4E4E", // Slightly lighter for cards
        primary: "#FFFFFF", // White for emphasis
        secondary: "#DCDCDC", // Silver for body text
        accent: "#E5C384", // Muted Gold for small details if needed
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "sans-serif"],
        serif: ["Baskervville", "Playfair Display", "serif"],
        script: ["Allison", "Great Vibes", "cursive"], 
        display: ["Edensor", "Bona Nova", "serif"], // Edensor as fallback if found, else Bona Nova
      },
    },
  },
  plugins: [],
};
