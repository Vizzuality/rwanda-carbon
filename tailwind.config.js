const forms = require('@tailwindcss/forms');
const lineClamp = require('@tailwindcss/line-clamp');

/**
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    './src/components/**/*.@(tsx|ts)',
    './src/containers/**/*.@(tsx|ts)',
    './src/pages/**/*.tsx',
  ],
  plugins: [forms, lineClamp],
  theme: {
    extend: {
      colors: {
        yellow: {
          0: '#FAD201',
        },
        green: {
          0: '#47DCAF',
        },
      },
    },
  },
};
