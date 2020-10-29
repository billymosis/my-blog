import { Link, graphql } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import { Layout } from "../components/layout"
import CardPost from "../components/cardpost"
import Typist from "react-typist"

export default function Home({ data }) {
  const posts = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <SEO title="Home" />
      <div className="h-screen flex flex-col justify-center">
        <h1 className="font-bold font-sans break-normal text-gray-900 pb-2 text-3xl md:text-4xl">
          Hi!
          <span role="img" aria-label="hand">
            👋
          </span>
        </h1>
        <Typist className="font-normal font-sans break-normal text-gray-900 pt-6 pb-2 text-xl md:text-2xl">
          I'm Water Resource Engineer from Malang, Indonesia. I do stuffs with
          computer and sometimes write about it here. Expect some random stuff
          that I write.
        </Typist>
      </div>
      <span className="font-semibold font-sans break-normal text-gray-900 pt-6 pb-2 text-xl w-full">
        Recent Blog Posts
      </span>
      <div className="flex flex-wrap flex-row my-2 mb-10">
        {posts.map(post => {
          let featuredImgFluid =
            post.frontmatter.featuredImage.childImageSharp.fluid.src
          return (
            <article className="mb-6 w-full">
              <CardPost
                description={post.frontmatter.description || post.excerpt}
                title={post.frontmatter.title}
                tag={post.frontmatter.tags}
                date={post.frontmatter.date}
                link={"blog" + post.fields.slug}
                Img={featuredImgFluid}
                className="transition duration-500 ease-in-out hover:-translate-y-1 transform block shadow-md"
              />
            </article>
          )
        })}
      </div>
      <div className="text-right w-full mb-10">
        <Link to={"blog"}>
          <a class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full">
            Read More ...
          </a>
        </Link>
      </div>
    </Layout>
  )
}

export const postquery = graphql`
  query postquery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 3) {
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
