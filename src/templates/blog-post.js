/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = pageContext
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <aside
        sx={{
          flexGrow: 1,
          flexBasis: "sidebar",
        }}
      >
        <Sidebar />
      </aside>
      <main
        sx={{
          flexGrow: 99999,
          flexBasis: 0,
          minWidth: 320,
          paddingLeft: 4,
          borderStyle: "none none none solid",
          borderImage:
            "linear-gradient(to bottom,rgba(0, 0, 0, 0),#e6e6e6,rgba(0, 0, 0, 0)) 1 100%",
        }}
      >
        <article itemScope itemType="http://schema.org/Article">
          <header>
            <h1>
              <span itemProp="headline">{post.frontmatter.title}</span>
            </h1>
            <small>{post.frontmatter.date}</small>
          </header>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
          <hr />
        </article>

        <nav
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}

          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </nav>
      </main>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
