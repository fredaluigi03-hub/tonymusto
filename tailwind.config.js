/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#050507',
          900: '#0A0A0D',
          850: '#101015',
          800: '#16161D',
          700: '#22222B',
          600: '#30303D',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F5E6B8',
          muted: '#C5A059',
          dark: '#9E7D28',
          champagne: '#EAD7A1',
        },
        ivory: {
          50: '#FAF8F5',
          100: '#F5F2EB',
          200: '#EAE4D6',
          300: '#DBD3C0',
          400: '#B8B09F',
        },
        silver: {
          DEFAULT: '#B8BCC2',
          light: '#E2E4E8',
          dark: '#6E727A',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Playfair Display', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.12), transparent 70%)',
        'gold-shimmer': 'linear-gradient(135deg, #D4AF37 0%, #FFF2B2 50%, #C5A059 100%)',
        'silver-shimmer': 'linear-gradient(135deg, #B8BCC2 0%, #FFFFFF 50%, #8E959E 100%)',
      },
      boxShadow: {
        'luxury': '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(212, 175, 55, 0.18)',
        'luxury-hover': '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 18px rgba(212, 175, 55, 0.35)',
        'gold-subtle': '0 0 25px -5px rgba(212, 175, 55, 0.2)',
      }
    },
  },
  plugins: [],
}
