// baxter-ui/configs/tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        button: {
          primary: {
            bg: '#d4d4d4',
            text: '#333333',
            hoverBg: '#b9ced9',
            border: '#C5C5C5',
            hoverBorder: '#627782',
          },
          secondary: {
            bg: '#9e9e9e',
            text: '#333333',
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
      textShadow: {
        default: '1px 1px #fff',
      },
      fontSize: {
        btn: '12px',
      },
      fontFamily: {
        arial: ['Arial'],
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
