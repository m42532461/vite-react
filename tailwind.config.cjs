/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
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
        "slide-left": {
          "0%": {
            opacity: 0,
            transform: "translateX(-100%)",
            filter: "blur(5px)",
            transition: "all 1s",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
            filter: "blur(0px)",
          },
        },
        "slide-right": {
          "0%": {
            opacity: 0,
            transform: "translateX(100%)",
            filter: "blur(5px)",
            transition: "all 1s",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
            filter: "blur(0px)",
          },
        },
      },
      animation: {
        "slide-left": "slide-left 1s ease-in-out 1",
        "slide-right": "slide-right 1s ease-in-out 1",
        shine: "shine 1s ease-in-out 1",
      },
      colors: {
        "Dark-Grey": "#263138",
        Grey: "#445964",
        "Soft-Grey": "#DFDFDF",
        BG: "#FBFBFB",
      },
    },
  },
  plugins: [require("daisyui")],
};
