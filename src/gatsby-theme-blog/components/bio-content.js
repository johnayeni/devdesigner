import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Personal blog by{" "}
    <Styled.a href="https://johnayeni.github.io/portfolio/">
      John Ayeni
    </Styled.a>
    <br />I post articles on Front-end tech and <br />
    other experiences I have in the tech space.
  </Fragment>
)
