/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        scalebottom: {
          "0%": {
            transform: "scaleY(0.4)",
            "transform-origin": "bottom",
          },
          "100%": {
            transform: "scaleY(1)",
            "transform-origin": "bottom",
          },
        },
      },
      colors: {
        "Dark-Grey": "#263138",
        Grey: "#445964",
        "Soft-Grey": "#DFDFDF",
        BG: "#FBFBFB",
      },
    },
  },
  plugins: [],
};
