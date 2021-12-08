import * as React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Welcom to my site</h1>
      <p>I'm making this following gatsby tuto</p>
      <Link to="/about">About</Link>
    </main>
  )
}

export default IndexPage
