/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-background": "linear-gradient(to bottom, #00052B, #251A98, #08003A)",
        "gradient-swiper": "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(21, 18, 98, 1))",
        "gradient-matkul-hover": "linear-gradient(180deg, rgba(161, 161, 161, 0), rgba(99, 98, 98, 0.35), rgba(46, 46, 46, 0.58))",
      },
      colors: {
        primary: {
          DEFAULT: "#01052B",
          800: "#0B073B",
        },
      },
    },
  },
  plugins: [],
};
