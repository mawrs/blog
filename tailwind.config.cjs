/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      display: ["Boska", ...defaultTheme.fontFamily.sans],
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.75rem" }],
      lg: ["1.125rem", { lineHeight: "2rem" }],
      xl: ["1.25rem", { lineHeight: "2rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["2rem", { lineHeight: "2.5rem" }],
      "4xl": ["2.5rem", { lineHeight: "3.5rem" }],
      "5xl": ["3rem", { lineHeight: "3.5rem" }],
      "6xl": ["3.75rem", "1"],
      "7xl": ["4.5rem", "1.1"],
      "8xl": ["6rem", "1"],
      "9xl": ["8rem", "1"],
    },
    colors: {
      neutral: colors.neutral,
      white: colors.white,
      transparent: colors.transparent,
      kotei: {
        50: "hsl(207, 60%, 97%)",
        100: "hsl(206, 50%, 94%)",
        200: "hsl(204, 52%, 86%)",
        300: "hsl(203, 53%, 74%)",
        400: "hsl(202, 51%, 60%)",
        500: "hsl(202, 49%, 48%)",
        600: "hsl(204, 54%, 39%)",
        700: "hsl(205, 54%, 32%)",
        800: "hsl(204, 50%, 27%)",
        900: "hsl(206, 44%, 24%)",
        950: "hsl(207, 43%, 16%)",
        1000: "hsl(215, 63%, 12%)",
        1050: "hsl(210, 54%, 5%)",
      },
    },

    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
