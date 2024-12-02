const sharedConfig = require('./src/configs/tailwind.config');

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  prefix: 'bx-',
  presets: [sharedConfig],
  theme: {
    extend: {},
  },
  plugins: [],
};
