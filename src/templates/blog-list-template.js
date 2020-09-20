import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
import postindexStyles from "../components/postindex.module.css"

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
        <main className={postindexStyles.postindex}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            return (
              <article
                key={post.fields.slug}
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link
                      style={{ boxShadow: `none` }}
                      to={post.fields.slug}
                      itemProp="url"
                    >
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
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
          <div
            style={
              isFirst
                ? {
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    margin: "5px",
                    marginBottom: "30px",
                    flexDirection: "row-reverse",
                  }
                : {
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    margin: "5px",
                    marginBottom: "30px",
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
          </div>
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
