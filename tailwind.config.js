/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'victus-purple': '#2B0058',
        'victus-violet': '#8A3BFF',
        'victus-cyan': '#00D1FF',
        'victus-charcoal': '#0F1724',
        'victus-bg': '#0A0E1A',
        'victus-dark': '#050810',
        'victus-card': '#141A26',
        'victus-border': '#1F2937',
        'victus-text': '#E5E7EB',
        'victus-text-light': '#9CA3AF',
      },
      fontFamily: {
        'display': ['Sora', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.8s cubic-bezier(0.2, 0.9, 0.1, 1)',
        'slide-in-right': 'slideInRight 0.8s cubic-bezier(0.2, 0.9, 0.1, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-80px) rotateY(8deg)', opacity: '0' },
          '100%': { transform: 'translateX(0) rotateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(80px) rotateY(-8deg)', opacity: '0' },
          '100%': { transform: 'translateX(0) rotateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

