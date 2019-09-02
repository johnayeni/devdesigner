import React from "react"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"

const Comments = ({ post, siteUrl }) => {
  let disqusConfig = {
    url: `${siteUrl + window.location.pathname}`,
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
