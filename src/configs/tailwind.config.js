// baxter-ui/configs/tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#E0E9F2',
          100: '#6C8CB3',
          200: '#295DA7',
          300: '#0033FF',
          400: '#6C80A3',
          500: '#305C83',
          600: '#2B477D',
          700: '#006CFF',
        },
        button: {
          primary: {
            bg: '#f4f4f4',
            text: '#333',
            hoverBg: '#b9ced9',
            border: '#c5c5c5',
            hoverBorder: '#627782',
          },
          secondary: {
            bg: '#9e9e9e',
            text: 'white',
            hoverBg: '#8e8e8e',
            border: '#c5c5c5',
            hoverBorder: '#627782',
          },
        },
      },
      spacing: {
        18: '18px',
        70: '70px',
      },
      fontSize: {
        btn: '12px',
      },
    },
  },
};
