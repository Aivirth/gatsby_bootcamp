import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <h1>Hello</h1>
      <h2>Fullstack developer</h2>
      <p>
        Need a developer ? <Link to="/contact">click here</Link>
      </p>
    </div>
  )
}

export default IndexPage
