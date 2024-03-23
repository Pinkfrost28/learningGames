/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,jsx}",
];
export const theme = {
  extend: {
    colors: {
      bgGreen: '#58f4b2',
      bgBlue: '#41b4f2',
      bgTeal: '#4dd4d2',
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(to br, var(--tw-gradient-stops))',
    },
    linearGradientColors: {
      'custom-diagonal': ['var(--color-customGreen)', 'var(--color-customTeal)', 'var(--color-customBlue)'],
    },
    fontFamily: {
      'lalezar': ['Lalezar', 'sans-serif'], 
    }
  },
};
export const plugins = [];

