import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF7',
          100: '#F9F4E8',
          200: '#F0E3CA',
          300: '#E4CC9C',
          400: '#D5B36F',
          500: '#B08D57', // Primary Luxury Gold Accent
          600: '#9B7743',
          700: '#7E5B34',
          800: '#67482D',
          900: '#563C29',
        },
        slate: {
          850: '#151F32',
          950: '#0B1120',
        },
        cream: '#F8F7F4',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(15, 23, 42, 0.08), 0 0 15px rgba(176, 141, 87, 0.05)',
        'luxury-hover': '0 30px 60px -15px rgba(15, 23, 42, 0.16), 0 0 25px rgba(176, 141, 87, 0.15)',
        'gold-glow': '0 0 30px rgba(176, 141, 87, 0.3)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.85) 100%)',
        'gold-gradient': 'linear-gradient(135deg, #C5A46D 0%, #B08D57 50%, #967440 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
