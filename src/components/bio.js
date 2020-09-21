/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import bioStyles from "./bio.module.css"

const Bio = ({className}) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className={className}>
      {avatar && (
        <Link to={"/"} style={{ boxShadow: `none` }}>
          <Image
            fixed={avatar}
            alt={author?.name || ``}
            className={bioStyles.author}
          />
        </Link>
      )}
      {author?.name && (
        <div>
          <h1 className={bioStyles.textauthor}>{author.name}</h1>
          <small><p className={bioStyles.summarytext}>{author?.summary || null}</p></small>
        </div>
      )}
    </div>
  )
}

export default Bio
