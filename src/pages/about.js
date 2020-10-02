/** @jsx jsx */
import { graphql } from "gatsby"

import Sidebar from "../components/sidebar"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { jsx } from "theme-ui"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <aside
        sx={{
          flexGrow: 1,
          flexBasis: "sidebar",
        }}
      >
        <Sidebar />
      </aside>
      <main>
        <article>
          <p>
            Halo perkenalkan, saya Billy Mosis Priambodo. Saya menempuh
            pendidikan Water Resources Engineering, Teknik Pengairan di
            Universitas Brawijaya Malang. Engineering, IT, dan games adalah 3
            hal yang mungkin teman-teman saya pikir jika mengenal saya. Skill
            saya masih cupu. Belum ada research paper, product, talks, dan
            achievement. Jadi saya masih belum bisa pamer guys.
          </p>
          <p sx={{ mt: 5 }}>Sekian perkenalan dari saya.</p>
        </article>
      </main>
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
