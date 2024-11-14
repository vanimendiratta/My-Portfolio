/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#13B0F5',
        secondary: '#E70FAA',
        accent: '#FFD700',
        dark: '#2D2D2D',
        light: '#FFFFFF',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(19, 176, 245, 0.5)',
        'neon-hover': '0 0 30px rgba(19, 176, 245, 0.7)',
      }
    },
  },
  plugins: [],
};