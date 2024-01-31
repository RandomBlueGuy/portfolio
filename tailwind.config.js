/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
       './pages/**/*.{js,ts,jsx,tsx,mdx}',
       './components/**/*.{js,ts,jsx,tsx,mdx}',
       './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
       extend: {
            backgroundImage: {
                 url: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='25' /%3E%3C/filter%3E%3C/defs%3E%3Crect width='100%25' height='100%25' style='filter: url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            },
       },
  },
  plugins: [],
};
