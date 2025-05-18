/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0f172a',
        'dark-card': '#1e293b',
        'dark-border': '#334155',
        'primary-blue': '#3b82f6',
        'secondary-blue': '#60a5fa',
        'accent-blue': '#93c5fd',
      },
    },
  },
  plugins: [],
} 