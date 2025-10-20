/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a3a52',
          light: '#2c5f7f',
        },
        secondary: {
          DEFAULT: '#d4af37',
          light: '#c09e30',
        },
        accent: '#2c5f7f',
        'text-dark': '#2d2d2d',
        'text-light': '#666666',
        'bg-light': '#f8f9fa',
        'bg-white': '#ffffff',
        'border-color': '#e0e0e0',
      },
      fontFamily: {
        primary: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'custom-hover': '0 8px 15px rgba(0, 0, 0, 0.15)',
      },
      spacing: {
        '18': '4.5rem', // 72px
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
