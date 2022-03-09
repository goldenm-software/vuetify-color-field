import colors from '../misc/colors'

export default {
  computed: {
    colors () {
      return colors
    }
  },

  methods: {
    convertToHex (color) {
      if (color in this.colors) {
        return this.colors[color]
      }
      return this.colors.primary
    },

    hexToRgb (hex) {
      if (!hex.includes('#')) {
        hex = this.convertToHex(hex)
      }
      hex = hex.substring(0, 7)
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
          }
        : null
    },

    useBlack (color) {
      const rgb = this.hexToRgb(color)
      const a = 1 - (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255
      return (a < 0.5)
    },

    validateColor (color) {
      if (this.useBlack(color)) {
        return 'black'
      } else {
        return 'white'
      }
    }
  }
}