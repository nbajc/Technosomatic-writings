/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0A0A0B',
        card: '#121215',
        border: '#27272A',
        primary: '#FAFAFA',
        muted: '#A1A1AA',
        cyanGlow: '#38BDF8',
        amberGlow: '#F59E0B',
        gold: '#D4AF37',
      },
      fontFamily: {
        serif: ['Cinzel', 'Instrument Serif', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
};
