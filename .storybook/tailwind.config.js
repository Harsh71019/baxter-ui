const libraryConfig = require('../tailwind.config.js');

module.exports = {
  ...libraryConfig,
  content: ['../src/**/*.{js,ts,jsx,tsx}', './.storybook/preview.ts'],
};
