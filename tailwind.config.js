/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#080B10',
          900: '#0B0F16',
          800: '#111826',
          700: '#1A2333',
          600: '#28344A',
        },
        mist: {
          400: '#5D6B84',
          300: '#8B96AA',
          200: '#B8C0CE',
          100: '#E7EAEF',
        },
        signal: {
          500: '#2FD9C4',
          600: '#1FB8A6',
          400: '#6EE7D6',
        },
        ember: {
          500: '#F0A85A',
          400: '#F5BE7E',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(8,11,16,0) 0%, rgba(8,11,16,1) 85%)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(12px, -10px)' },
        },
        pulseline: {
          '0%': { strokeDashoffset: '240' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        drift: 'drift 9s ease-in-out infinite',
        pulseline: 'pulseline 2.4s ease-out forwards',
      },
    },
  },
  plugins: [],
}
