import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

const blackish = `#1b1b1b`
const mint = `#429e9d`

export default merge(defaultThemeColors, {
  text: blackish,
  primary: mint,
  heading: blackish,
  modes: {
    dark: {
      background: blackish,
      primary: mint,
      highlight: mint,
    },
  },
})
