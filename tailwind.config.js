/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          background: "#0f0f0f",
          surface: "rgba(255,255,245,0.86)",
          surface2: "rgba(235,235,245,0.6)",
          border: "rgba(235,235,245,0.1)",
        },
      },
      fontSize: {
        title: ["clamp(3rem, 14vw, 9rem)"],
        "heading-1": ["clamp(2.5rem, 6.5vw, 10rem)"],
        "heading-2": ["clamp(2.4rem, 8vw, 10rem)"],
        "heading-3": ["clamp(2rem, 5vw, 2.75rem)"],
        special: ["clamp(2rem, 4vw, 3.25rem)"],
        "works-title": ["clamp(1.25rem, 2vw, 1.5rem)"],
        "body-1": ["clamp(1.1rem, 2vw, 1.3rem)"],
        "body-2": ["clamp(1rem, 1.5vw, 1.5rem)"],
        "body-3": "1.1rem",
        "body-4": ["clamp(0.75rem, 3vw, 1rem)"],
      },
      letterSpacing: {
        headings: "-0.03em",
      },
    },
  },
  plugins: [],
};
