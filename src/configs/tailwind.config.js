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
        yellow:{
          50:'#FFFACD'
        },
        border:{
          50:'#c5c5c5',
          100:'#000',
        },
        button: {
          primary: {
            bg: '#d4d4d4',
            text: '#333333',
            hoverBg: '#b9ced9',
            border: '#C5C5C5',
            hoverBorder: '#627782',
            borderColorNew: '#999',
            activeTabBorder: '#042f2e',
            boxHeaderColor: '#6C8CB3',
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
