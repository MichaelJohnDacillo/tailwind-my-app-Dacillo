/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        poppins: ["Poppins", "san-serif"]
      }
    },
  },
  plugins: [],
};
