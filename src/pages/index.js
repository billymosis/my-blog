import { Link, graphql } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import { Layout } from "../components/layout"
import CardPost from "../components/cardpost"
import Typist from "react-typist"
import { FormattedMessage } from "react-intl"

export default function Home({ data }) {
  const posts = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <SEO title="Home" />
      <div className="h-screen flex flex-col justify-center">
        <h1 className="font-bold font-sans break-normal  pb-2 text-3xl md:text-4xl">
          <FormattedMessage id="index.sambutan" />
          <span role="img" aria-label="hand">
            👋
          </span>
        </h1>
        <FormattedMessage id="index.welcomeMessage">
          {placeholder => (
            <Typist className="font-normal font-sans break-normal pt-6 pb-2 text-xl md:text-2xl">
              {placeholder}
            </Typist>
          )}
        </FormattedMessage>
      </div>
      <h3 className="font-semibold font-sans break-normal pt-6 pb-2 text-xl w-full">
        Download Script
      </h3>
      <div className="ml-6">
        <ul className="list-disc">
          <li>
            <a className="hover:underline" download href="/autocad/cross2hecras.lsp" >
              cross2hecras.lsp
          </a>
          </li>
          <li>
            More will be available, please like and subcribe my youtube channel.
          </li>
        </ul>
      </div>
      <h3 className="font-semibold font-sans break-normal pt-6 pb-2 text-xl w-full">
        <FormattedMessage id="index.recent" defaultMessage="Recent Blog Post" />
      </h3>
      <div className="flex flex-wrap flex-row my-2 mb-4 mt-4">
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
                className="bg-white dark:bg-gray-900 transition duration-500 ease-in-out hover:-translate-y-1 transform block shadow-md hover:shadow-xl"
              />
            </article>
          )
        })}
      </div>
      <div className="text-right w-full mb-10">
        <Link to={"blog"}>
          <a
            href="/blog"
            class="bg-green-400 hover:bg-green-600 dark:bg-gray-800 dark:hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full"
          >
            <FormattedMessage id="index.more" />
          </a>
        </Link>
      </div>
    </Layout>
  )
}

export const postquery = graphql`
  query postquery($locale: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { locale: { eq: $locale } } }
    ) {
      nodes {
        excerpt(pruneLength: 280)
        fields {
          slug
          locale
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
