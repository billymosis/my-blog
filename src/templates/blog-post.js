import { graphql } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import { Layout } from "../components/layout"

function BlogPostTemplate({ data, pageContext }) {
  const post = data.markdownRemark
  let featuredImgFluid =
    post.frontmatter.featuredImage.childImageSharp.fluid.src
  let featuredImgFixed =
    post.frontmatter.featuredImage.childImageSharp.fixed.src
  //const { previous, next } = pageContext

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={featuredImgFixed}
      />
      <article itemScope itemType="http://schema.org/Article">
        <div className="w-full px-4 md:px-6 text-xl leading-normal">
          <div
            className="bg-cover bg-center rounded shadow-lg h-64"
            style={{ backgroundImage: `url(${featuredImgFluid})` }}
          ></div>
          <div className="font-sans">
            <h1
              itemProp="headline"
              className="font-bold font-sans break-normal pt-6 pb-2 text-3xl md:text-4xl"
            >
              {post.frontmatter.title}
            </h1>
            <p className="text-sm md:text-base font-normal text-gray-600 dark:text-white">
              {post.frontmatter.date}
            </p>
          </div>
          <section
            className="prose lg:prose-xl mx-0 max-w-full dark:prose-dark pt-5"
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          ></section>
        </div>

        <div className="text-base md:text-sm text-gray-500 px-4 py-6">
          Tags:&nbsp;
          {post.frontmatter.tags.map(tagx => {
            return (
              <a
                href="/"
                className="text-base md:text-sm text-teal-500 no-underline hover:underline"
              >
                {tagx},&nbsp;
              </a>
            )
          })}
        </div>
        <hr className="border-b-1 border-gray-400 mb-8 mx-4" />
        {/* <nav className="font-sans flex justify-between content-center px-4 pb-12">
          <div className="text-left">
            <span className="text-xs md:text-sm font-normal text-gray-600">
              &lt; Previous Post
            </span>
            <br />
            <p>
              {previous && (
                <Link
                  to={previousPath}
                  className="break-normal text-base md:text-sm text-teal-500 font-bold no-underline hover:underline"
                  rel="prev"
                >
                  {previous.frontmatter.title}
                </Link>
              )}
            </p>
          </div>

          <div className="text-right">
            <span className="text-xs md:text-sm font-normal text-gray-600">
              Next Post &gt;
            </span>
            <br />
            <p>
              {next && (
                <Link
                  to={nextPath}
                  className="break-normal text-base md:text-sm text-teal-500 font-bold no-underline hover:underline"
                  rel="next"
                >
                  {next.frontmatter.title}
                </Link>
              )}
            </p>
          </div>
        </nav> */}
      </article>
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
        tags
        featuredImage {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
            fixed(width: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
