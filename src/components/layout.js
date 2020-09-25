/** @jsx jsx */

import { jsx } from "theme-ui"
import Footer from "./footer"

import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <div>
      <div
        sx={{
          minHeight: "100vh",
          maxWidth: "wide",
          marginX: "auto",
        }}
      >
        <Link to={"/"}>
          <h1
            sx={{
              display: ["none", "none", "block"],
              fontSize: 5,
              mb: 3,
              mt: 5,
              textAlign: "center",
            }}
          >
            Billy's Blog
          </h1>
        </Link>

        <header
          sx={{
            display: "flex",
            visibility: ["visible", "visible", "hidden"],
            alignItems: "center",
            variant: "styles.header",
            boxShadow: "5",
            p:4,
          }}
        >
          <Link
            to="/"
            sx={{
              variant: "styles.navlink",
            }}
          >
            <strong>
              <em>by Billy</em>
            </strong>
          </Link>
          <div sx={{ mx: "auto" }} />
          <Link
            to="/about"
            sx={{
              variant: "styles.navlink",
            }}
          >
            About
          </Link>
        </header>
        <div
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
