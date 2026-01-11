/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#259566"
      },
      fontFamily: {
        iceland: ['Iceland', 'serif'],
        orbitron: ['Orbitron', 'serif'],
        oxanium: ['Oxanium', 'serif'],
        chakra: ['Chakra Petch', 'serif'],
        sarpanch: ['Sarpanch', 'serif'],
      }
    },
  },
  plugins: [],
}
