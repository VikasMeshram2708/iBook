/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import type { Config } from 'tailwindcss';

// const defaultTheme = require('tailwindcss/defaultTheme');
// const colors = require('tailwindcss/colors');
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ':root': newVars,
  });
}
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      Anta: ['Anta', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      animation: {
        shimmer: 'shimmer 2s linear infinite',
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
        shimmer: {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
    addVariablesForColors,
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    themes: ['light', 'dark', 'black'],
  },
};

export default config;
