import React from "react"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"

const Comments = ({ post }) => {
  let disqusConfig = {
    url: `${typeof window !== "undefined" ? window.location.href : ""}`,
    identifier: post.id,
    title: post.title,
  }
  return (
    <React.Fragment>
      <CommentCount config={disqusConfig} placeholder={"Comments"} />
      <Disqus config={disqusConfig} />
    </React.Fragment>
  )
}
export default Comments
