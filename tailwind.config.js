/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#F5EEC8",
        secondary:"#45474B",
        third:"#495E57"
      },

      fontFamily:{
        lora: "'Roboto', sans-serif",
        new: "Helvetica Neue,Helvetica,Arial,sans-serif"
      }
    },
  },
  plugins: [],
}

