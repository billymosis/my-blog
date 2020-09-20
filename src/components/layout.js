import React from "react"
import layoutStyles from "./layout.module.css"

const Layout = ({ children }) => {
  return (
    <div id="top">
      <div className={layoutStyles.layout}>{children}</div>{" "}

    </div>
  )
}

export default Layout
