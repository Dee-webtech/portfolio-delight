/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",      // deep navy (text / anchors)
        accent: "#1d4ed8",       // darker blue (CTAs)
        purple: "#7c3aed",       // purple accent
        accentOrange: "#fb923c", // subtle orange highlight
        mint: "#64ffda",
        soft: "#f8fafc",
      },
      fontFamily: {
        heading: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "soft-lg": "0 10px 30px rgba(2,6,23,0.12)",
      },
    },
  },
  plugins: [],
};
