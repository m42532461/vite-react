/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#040C18",
        footer: "#031B34",
        blog: "#042C54",
        text: "#81AFDD",
        subtext: "#FF8A71",
      },
      keyframes: {
        "scale-up-center": {
          "0%": {
            transform: " scale(0.5)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      fontFamily: { Manrope: "Manrope" },
    },
  },
  plugins: [],
};
