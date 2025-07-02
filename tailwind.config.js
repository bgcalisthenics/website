/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#2563eb',
        background: '#ffffff',
        text: '#111111',
        accent: '#1e40af',
        makova: {
          navy: '#0a1026',
          navyLight: '#10142c',
          blue: '#3b82f6',
          teal: '#06b6d4',
          gold: '#fbbf24',
          white: '#f9fafb',
          gray: '#e5e7eb',
          darkGray: '#232857',
        },
        'primary-blue': '#3b82f6',
        'primary-blue-dark': '#2563eb',
        'secondary-blue': '#60a5fa',
        'dark-bg': '#0f172a',
        'dark-bg-lighter': '#1e293b',
        'dark-card': '#1e293b',
        'dark-border': '#334155',
      },
      boxShadow: {
        'primary-blue': '0 0 0 1px var(--primary-blue)',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      fontWeight: {
        'extrabold': '800',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
      },
    },
  },
  plugins: [],
} 