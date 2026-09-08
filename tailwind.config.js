/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        terracotta: '#bd4f37',
        sumac: '#9f291f',
        pistachio: '#728b55',
        sand: '#e8d7bd',
        parchment: '#f7f1e8',
        ink: '#201b18',
        charcoal: '#302925',
      },
      borderRadius: {
        arch: '999px 999px 24px 24px',
        soft: '24px 8px 24px 8px',
      },
      boxShadow: {
        tactile: '0 12px 0 rgba(32, 27, 24, 0.08), 0 22px 45px rgba(32, 27, 24, 0.12)',
        warm: '0 18px 35px rgba(112, 67, 40, 0.16)',
      },
    },
  },
  plugins: [],
};
