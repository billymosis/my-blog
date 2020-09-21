/** @jsx jsx */
import React from "react"
import { graphql } from "gatsby"

import Sidebar from "../components/sidebar"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Box, Text, jsx, useColorMode } from "theme-ui"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const [colorMode, setColorMode] = useColorMode()

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <Sidebar />
      <Box m={3}>
        <header
          sx={{
            // this uses the value from `theme.space[4]`
            padding: 4,
            // these use values from `theme.colors`
            color: "background",
            backgroundColor: "primary",
          }}
        >
          Oye
        </header>
        <Text
          sx={{
            fontSize: 4,
            fontWeight: "bold",
          }}
        >
          Hello
        </Text>
        <Text variant="caps">Hello</Text>
        <button
          onClick={e => {
            setColorMode(colorMode === "default" ? "dark" : "default")
          }}
        >
          Toggle {colorMode === "default" ? "Dark" : "Light"}
        </button>
      </Box>
      <p>Under Construction</p>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
