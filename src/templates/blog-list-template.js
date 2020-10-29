import { Link, graphql } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import { Layout } from "../components/layout"
import CardPost from "../components/cardpost"

const BlogList = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.nodes
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <Layout>
      <SEO title="Blog" />

      <main className="flex flex-wrap flex-row my-2 mb-10">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid.src
          return (
            <article
              key={post.fields.slug}
              itemScope
              itemType="http://schema.org/Article"
              className="mb-6 w-full"
            >
              <CardPost
                title={title}
                description={post.frontmatter.description}
                tag={post.frontmatter.tags}
                link={"/blog" + post.fields.slug}
                date={post.frontmatter.date}
                Img={featuredImgFluid}
                className="transition duration-500 ease-in-out hover:-translate-y-1 transform block shadow-md"
              />
            </article>
          )
        })}
        <nav>
          {!isFirst && (
            <Link to={"/blog/" + prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}
          {!isLast && (
            <Link to={"/blog/" + nextPage} rel="next">
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
          tags
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
