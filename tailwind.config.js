/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'sm': '640px',  // Mobil boyutlar
        'md': '768px',  // Tablet boyutlar
        'lg': '1024px', // Masaüstü boyutlar
        'xl': '1280px', // Ekstra büyük ekran boyutları
      },
    },
  },
  
  plugins: [],
}