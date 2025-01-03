/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins: "Poppins",
        Inter : "Inter",
        Crimson : "Crimson Text",
        Roboto : "Roboto"
      },
      backgroundImage:{
        'custom-radial': 'radial-gradient(circle at top,black, rgb(87, 34, 4) , black )',
        'loginHero2' : "url('/loginHero2.webp')",
        'loginHero' : "url('/loginHero.webp')",
        'profileHero' : "url('/profile-bg.jpg')"

      },
      screens:{
        'sm-0':"510px"
      }
      
    },
  },
  plugins: [],
}

