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
        inter: ['var(--font-inter)'],
        serif: ['var(--font-serif)'],
      },
      colors: {
        yellow: {
          0: '#FAD201',
        },
        green: {
          0: '#47DCAF',
          1: '#34CA9D',
        },
        cobalt: {
          0: '#002E65',
          1: '#00489D',
          2: '#315682',
          3: '#002551',
        },
        cyan: {
          0: '#5BCEFB',
        },
      },
      letterSpacing: {
        tight: '-.01em',
        tighter: '-.03em',
      },
      backgroundImage: {
        'smart-carbon': "url('/images/smart-carbon')",
      },
    },
  },
};
