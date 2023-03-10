/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        twitter: '#00ADED',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
