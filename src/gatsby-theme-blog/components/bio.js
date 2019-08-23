import React from "react"
import { Styled, css, Flex } from "theme-ui"
import BioContent from "./bio-content.js"
import avatar from "../assets/avatar.png"

const Bio = () => {
  return (
    <Flex css={css({ mb: 4 })}>
      {avatar ? (
        <img
          src={avatar}
          alt={"John Ayeni"}
          css={css({
            mr: 2,
            mb: 0,
            width: 50,
            height: 50,
            borderRadius: 100,
            objectFit: "cover",
          })}
        />
      ) : (
        <div
          css={css({
            mr: 2,
            mb: 0,
            width: 48,
            borderRadius: 99999,
          })}
          role="presentation"
        />
      )}
      <Styled.div>
        <BioContent />
      </Styled.div>
    </Flex>
  )
}

export default Bio
