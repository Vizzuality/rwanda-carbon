const forms = require('@tailwindcss/forms');
const lineClamp = require('@tailwindcss/line-clamp');

/**
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    './src/components/**/*.@(tsx|ts)',
    './src/containers/**/*.@(tsx|ts)',
    './src/layouts/**/*.tsx',
    './src/pages/**/*.tsx',
  ],
  plugins: [forms, lineClamp],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
        serif: ['DM Serif Display'],
        montserrat: ['Montserrat'],
      },
      colors: {
        yellow: {
          0: '#FAD201',
        },
        green: {
          0: '#47DCAF',
          1: '#34CA9D',
        },
        blue: {
          0: '#5BCEFB',
          1: '#002E65',
          2: '#00489D',
        },
      },
    },
  },
};
