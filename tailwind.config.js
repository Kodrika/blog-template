module.exports = {
  theme: {
    extend: {
      backgroundColor: theme => ({
             'darkslategray': '#1f2529',
      })
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