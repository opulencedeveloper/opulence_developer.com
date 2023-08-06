const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'montserrat': 'Montserrat',
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
      fontSize: {
        fs1: "0.6rem",
      },
      colors: {
        primary: "#024554",
        primary1: "#ACC2C7",
        secondary: "#030303",
      },
      width: {
        piw: "62rem",
        piw1: "34.2rem",
        boxw1: "5rem",
      },
      keyframes: {
        "zoom-out": {
          "0%": { transform: "scale(0.0000000000000001)" },
          "100%": { transform: "scale(1)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-340px)" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideLeftRight: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        "zoom-out": "zoom-out 2s",
        "slide-left": "slideLeft 1s ease-out 0.5s forwards",
        marquee: "marquee 25s linear infinite",
        slideLeftRight: 'slideLeftRight 30s linear infinite',
      },
    },
  },
  plugins: [],
};
