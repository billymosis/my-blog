import React from "react"
import layoutStyles from "./layout.module.css"

const Layout = ({ children }) => {
  return <div className={layoutStyles.layout}>{children}</div>
}

export default Layout
