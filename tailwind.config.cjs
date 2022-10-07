/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        shopee1: "url('../../public/assets/shopeeSale1.png')",
        shopee2: "url('../../public/assets/shopeeSale2.png')",
        shopee3: "url('../../public/assets/shopeeSale3.png')",
      },
    },
  },
  plugins: [],
};
