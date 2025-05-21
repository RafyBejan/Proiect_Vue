/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Fonturile folosite
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#FD3D57', // Culoarea "primary" definită în proiectul original
      },
     
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Include pluginul necesar pentru stilizarea formularelor
  ],
};

