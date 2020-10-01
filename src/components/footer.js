/** @jsx jsx */

import {
  FaTwitter as Twitter,
  FaGithub as GitHub,
  FaAt as At,
} from "react-icons/fa"

import { jsx, useColorMode } from "theme-ui"

import { ColorButton } from "./sidebar"

const modes = ["light", "black", "dark", "deep", "hack", "pink"]

const Footer = () => {
  const [mode, setMode] = useColorMode()
  const cycleMode = e => {
    const i = modes.indexOf(mode)
    const n = (i + 1) % modes.length
    setMode(modes[n])
  }
  return (
    <footer
      sx={{
        px: 3,
        py: 4,
        width: "100%",
        maxWidth: "wide",
        mx: "auto",
      }}
    >
      <div
        sx={{
          py: 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a
          href="https://twitter.com/billymosis"
          title="Twitter"
          sx={{
            variant: "styles.navitem",
            mx: 2,
          }}
        >
          <Twitter size={24} />
        </a>
        <a
          href="https://github.com/billymosis"
          title="GitHub"
          sx={{
            variant: "styles.navitem",
            mx: 2,
          }}
        >
          <GitHub size={24} />
        </a>
        <a
          href="mailto:edo.billy@gmail.com"
          title="Email"
          sx={{
            variant: "styles.navitem",
            mx: 2,
          }}
        >
          <At size={24} />
        </a>
      </div>
      <div
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          alignItems: "center",
          fontSize: 0,
        }}
      >
        <div sx={{ mx: "auto", paddingBottom: 2, color:"gray" }}>
          © 2020 Billy Mosis made with
          <a target="_blank" rel="noreferrer" href="https://www.gatsbyjs.org/">
          &nbsp;Gatsby
          </a>
        </div>
        <ColorButton
          sx={{ display: ["block", "block", "none"] }}
          mode={mode}
          onClick={cycleMode}
        />
      </div>
    </footer>
  )
}

export default Footer
