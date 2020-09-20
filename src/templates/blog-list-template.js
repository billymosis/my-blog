import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
import bloglist from "./blog-list.module.css"

export default class BlogList extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.nodes
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <Layout>
        <SEO title="Home" />
        <Sidebar />
        <main className={bloglist.bloglist}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            return (
              <article
                key={post.fields.slug}
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h1>
                    <Link
                      to={post.fields.slug}
                      itemProp="url"
                    >
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
              </article>
            )
          })}
          <nav className={isFirst ? bloglist.reverse : bloglist.normal}>
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
          <footer className={bloglist.footermain}>
            <a href="#top">Back to top!</a>
            <p>
              © {new Date().getFullYear()}, Built with ♥{` `}
              <a href="https://www.gatsbyjs.com">Gatsby</a>
            </p>
          </footer>
        </main>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
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
