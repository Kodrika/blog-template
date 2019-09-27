module.exports = {
  theme: {
    extend: {
      backgroundColor: theme => ({
             'darkslategray': '#2f3b59',
      }),
      colors : {
        'darkslategray': '#2f3b59',
      },
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus']
  },
  plugins: [],
  corePlugins: {
    fontSmoothing: false,
    textTransform: false,
    cursor: false,
    userSelect: false,
    pointerEvents: false,
    stroke: false,
    resize: false,
    order: false,
  }
};