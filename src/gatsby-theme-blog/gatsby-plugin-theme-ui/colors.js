import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

const blueGray = `#282c35`
const pink = `#FF337D`
const darkPink = `#DD3A69`

export default merge(defaultThemeColors, {
  text: blueGray,
  primary: darkPink,
  heading: darkPink,
  modes: {
    dark: {
      background: blueGray,
      primary: pink,
      highlight: pink,
    },
  },
})
