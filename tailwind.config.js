/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        navy: "#0b1221",
        charcoal: "#0f1a2b",
      },
      boxShadow: {
        card: "0 20px 60px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
};
