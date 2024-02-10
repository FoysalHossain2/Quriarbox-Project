/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        navbarbgto:"#FFFFFF",
        navbarbgvia:"#FFFBF4",
        navbarbgfrom:"#FFF9EC",
        navShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.05)",
        bgColor: "#fff6e6",
        btnColor: "#F95C19",
      },
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        Oxanium: ["Oxanium", "sans-serif"]
      },

    },
  },
  plugins: [],
}

