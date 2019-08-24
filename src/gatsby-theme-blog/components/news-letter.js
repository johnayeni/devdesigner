import React from "react"
import "./news-letter.css"

const NewsLetter = () => (
  <form
    action="https://tinyletter.com/johnayeni"
    method="post"
    className="form"
    target="popupwindow"
    onSubmit={() =>
      window.open(
        "https://tinyletter.com/johnayeni",
        "popupwindow",
        "scrollbars=yes,width=800,height=600"
      )
    }
  >
    <h3>Join the newsletter</h3>
    <input
      type="text"
      name="email"
      id="tlemail"
      aria-label="email"
      placeholder="e.g rick.sanchez@gmail.com"
    />
    <input type="hidden" value="1" name="embed" />
    <button type="submit">Subscribe</button>
    <a href="https://tinyletter.com" target="_blank" rel="noopener noreferrer">
      powered by TinyLetter
    </a>
  </form>
)

export default NewsLetter
