const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      'xs': ['12px', '16px'],
      'sm': ['14px', '20px'],
      'base': ['16px', '24px'],
      'lg': ['18px', '28px'],
      'xl': ['20px', '28px'],
      '2xl': ['26px', '32px'],
      '3xl': ['30px', '36px'],
      '4xl': ['36px', '40px'],
      '5xl': ['48px', '1'],
      '6xl': ['60px', '1'],
      '7xl': ['72px', '1'],
      '8xl': ['96px', '1'],
      '9xl': ['128px', '1'],
      '10xl': ['230px', '1'],
    },
    extend: {
      fontFamily: {
        main: ['roboto', ...defaultTheme.fontFamily.sans],
        title: ['Roboto Slab', 'serif'],
        custom1: ['Courier Prime', 'monospace'],
        custom2: ['Major Mono Display', 'monospace'],
        custom3: ['Montserrat', 'sans-serif'],
        custom4: ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        url: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='25' /%3E%3C/filter%3E%3C/defs%3E%3Crect width='100%25' height='100%25' style='filter: url(%23noiseFilter)' /%3E%3C/svg%3E")`,
      },
      colors: {
        vWhite: '#e6e8e8',
        vBlue: '#2070c0',
        vTitle: '#346596',
        vGray: '#6d6e6e',
        selected: 'rgba(0,200,255)',
      },
      animation: {
        spinner: 'spinner 5s linear infinite',
      },
      keyframes: {
        spinner: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
};

