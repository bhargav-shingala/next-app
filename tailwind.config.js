/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        3.75: '15px',
        4.5: '50px'
      },
      borderRadius: {
        2.313: '2.313rem'
      },
      colors: {
        tableRow: "#ebf3fd"
      },
      height: {
        3.125: '3.125rem'
      }

    },
  },
  plugins: [],
}
