/** @jsx jsx */

import Bio from "./bio"
import { Link } from "gatsby"
import { useColorMode, jsx, Box, Styled } from "theme-ui"


const modes = ["light", "black", "dark", "deep", "hack", "pink"]
export const ColorButton = ({ mode, ...props }) => (
  <button
    {...props}
    title="Cycle Color Mode"
    sx={{
      appearance: "none",
      bg: "transparent",
      color: "inherit",
      p: 1,
      m: 0,
      border: 0,
      borderRadius: 9999,
      ":hover,:focus": {
        boxShadow: "0 0 0 3px",
        outline: "none",
      },
      cursor:"pointer",
    }}
  >
    <svg
      viewBox="0 0 32 32"
      width="24"
      height="24"
      fill="currentcolor"
      sx={{
        display: "block",
      }}
    >
      <circle
        cx="16"
        cy="16"
        r="14"
        fill="none"
        stroke="currentcolor"
        strokeWidth="4"
      />
      <path
        d={`
          M 16 0
          A 16 16 0 0 0 16 32
          z
        `}
      />
    </svg>
  </button>
)
const Sidebar = () => {
  const [mode, setMode] = useColorMode()
  const cycleMode = e => {
    const i = modes.indexOf(mode)
    const n = (i + 1) % modes.length
    setMode(modes[n])
  }

  return (
    <Box pl={4} pt={2}>
      <Bio />
      <nav>
        <Styled.ul>
          <li>
            <Link to={"/"}>My Post</Link>
          </li>
          <li>
            <Link to={"/about"}>About me</Link>
          </li>
        </Styled.ul>
        <ColorButton
          sx={{ display: ["none", "block", "block"] }}
          mode={mode}
          onClick={cycleMode}
        />
      </nav>
    </Box>
  )
}

export default Sidebar
