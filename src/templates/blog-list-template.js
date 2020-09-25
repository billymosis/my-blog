/** @jsx jsx */
import { jsx, Card } from "theme-ui"

import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"

const BlogList = ({ data, pageContext, location }) => {
  const posts = data.allMarkdownRemark.nodes
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()
  const isRoot = location.pathname === "/" ? true : false

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
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
          px: 4,
          borderStyle: "none none none solid",
          borderImage:
            "linear-gradient(to bottom,rgba(0, 0, 0, 0),#e6e6e6,rgba(0, 0, 0, 0)) 1 100%",
        }}
      >
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          return (
            <article
              key={post.fields.slug}
              itemScope
              itemType="http://schema.org/Article"
            >
              <Card mb={4}>
                <header>
                  <h1>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h1>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
                <Link to={post.fields.slug} itemProp="url">
                  <button
                    sx={{
                      borderRadius: 4,
                      border: 0,
                      py: 2,
                      px: 2,
                      my: 2,
                      variant: "buttons.gray",
                      "&:hover": {
                        variant: "buttons.primary",
                      },
                      cursor: "pointer",
                    }}
                  >
                    <em>read more ...</em>
                  </button>
                </Link>
              </Card>
            </article>
          )
        })}
        <nav
          sx={
            isRoot
              ? {
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "flex-end",
                }
              : {
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }
          }
        >
          {!isFirst && (
            <Link to={`/${prevPage}`} rel="prev">
              ← Previous Page
            </Link>
          )}
          {!isLast && (
            <Link to={`/${nextPage}`} rel="next">
              Next Page →
            </Link>
          )}
        </nav>
      </main>
    </Layout>
  )
}

export default BlogList

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        excerpt(pruneLength: 280)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
