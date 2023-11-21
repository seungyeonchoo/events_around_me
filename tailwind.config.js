/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#00944a',
        primary_strong: '#00632a',
        primary_weak: '#4cc178',
        secondary: '#c73a5e',
        secondary_strong: '#8c2c52',
        secondary_weak: '#f1577c',
        default: '#e2e2e2',
        default_strong: '#777777',
        default_weak: '#efefef',
        dark: '#333132',
        dark_strong: '#131212',
        dark_weak: '#514f50',
      },
      screens: {
        sm: { max: '819px' },
        md: { min: '820px', max: '1024px' },
        lg: { min: '1025px' },
      },
      gridTemplateColumns: {
        'auto-fill-status': 'repeat(auto-fit, minmax(2rem, 1fr))',
      },
    },
  },
  plugins: [],
};
