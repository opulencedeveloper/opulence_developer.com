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
      screens: {
        'md2': '872px',
        'size1': '690px',
        'size2': '1200px',
        'size4': '1300px',
        'size5': '347px',
        'size6': '280px',
        'size7': '290px',
      },
      boxShadow: {
        "custom-shadow": " 2px 2px 2px 0px #ACC2C7",
        "custom-shadow2": " 0px 7px 7px 0px #030303",
      },
      width: {
        piw: "62rem",
        piw1: "34.2rem",
        boxw1: "5rem",
      },
      fontSize: {
        'title': ['clamp(3rem, 14vw, 9rem)'],
        'heading-1': ['clamp(2.5rem, 6.5vw, 10rem)'],
        'heading-2': ['clamp(2.4rem, 8vw, 10rem)'],
        'heading-3': ['clamp(2rem, 5vw, 2.75rem)'], 
        'special': ['clamp(2rem, 4vw, 3.25rem)'],
        'works-title': ['clamp(1.25rem, 2vw, 1.5rem)'],
        'body-1': ['clamp(1.1rem, 2vw, 1.3rem)'], 
        'body-2': ['clamp(1rem, 1.5vw, 1.5rem)'],
        'body-3': '1.1rem',
        'body-4': ['clamp(0.75rem, 3vw, 1rem)'],
        fs1: "0.6rem",
      },
      letterSpacing: {
        'headings': '-0.03em'
      },
      fontFamily: {
        'general': ['GeneralSans-Variable', 'sans-serif'],
        'grotesk': ['CabinetGrotesk-Variable', 'sans-serif'],
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
      colors: {
        'transparent': 'transparent',
        'primary-200': '#F2F2F2',
        'primary-300': '#E6E6E6',
        'primary-400': '#D9D9D9',
        'secondary-100': '#FAFAF9',
        'secondary-200': '#E8E8E3',
        'secondary-300': '#DDDDD5',
        'secondary-400': '#D1D1C7',
        'secondary-500': '#AEAE9D',
        'secondary-600': '#8C8C73',
        'secondary-700': '#70705C',
        'accent-400': '#0E0E0C',
        'accent-300': '#262626',
        'accent-200': '#4D4D4D',
        'accent-100': '#666666',
        primary: "#03262e",
        primary1: "#ACC2C7",
        secondary: "#030303",
        color1: "#561C24",
        cartonColor: '#D9CFA6'
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
        slideFromTop: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(96px)" },
        },
        slideFromBottom: {
          "0%": { transform: "translateY(30rem)" },
          "100%": { transform: "translateY(-28rem)" },
        },
        slideFromLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(42rem)" },
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
        "slideFromTop": "slideFromTop 1s ease-out 0.1ms forwards",
        "slideFromBottom": "slideFromBottom 1s ease-out 0.1ms forwards",
        "slideFromLeft": "slideFromLeft 1s ease-out 0.1ms forwards",
        marquee: "marquee 25s linear infinite",
        slideLeftRight: 'slideLeftRight 30s linear infinite',
        
      },
      backgroundColor: {
        'transparent': 'transparent',
        'black-50': 'rgba(0, 0, 0, 0.5)', // Adjust the opacity value as needed
      },
    }
  },
  plugins: [],
}