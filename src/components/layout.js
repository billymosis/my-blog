import React from "react"
import { Link } from "gatsby"

import layoutStyles from "./layout.module.css"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return <div className={layoutStyles.layout}>{children}</div>
}

export default Layout
