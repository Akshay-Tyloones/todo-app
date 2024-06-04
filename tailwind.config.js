/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBackground:'#F6F6F6',
        CustomBg:'#AEBDDA'
      }
    },
  },
  plugins: [],
}