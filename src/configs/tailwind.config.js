// baxter-ui/configs/tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        button: {
          primary: {
            bg: '#f4f4f4',
            text: '#333',
            hoverBg: '#b9ced9',
            border: '#c5c5c5',
            hoverBorder: '#627782',
            borderColorNew: '#999',
            activeTabBorder: '#042f2e',
            boxHeaderColor: '#6C8CB3',
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
