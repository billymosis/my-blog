/** @jsx jsx */
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import { jsx } from "theme-ui"

const Bio = ({ className }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.webp/" }) {
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
    <div>
      {avatar && (
        <Link to={"/"}>
          <Image
            fixed={avatar}
            sx={{
              borderRadius: 5,
              boxShadow: "-1px 1px 6px 0px rgba(50, 50, 50, 0.75)",
              shapeOutside: "circle()",
              clipPath: "circle()",
              backgroundColor: "primary",
            }}
            alt={author?.name || ``}
          />
        </Link>
      )}
      {author?.name && (
        <div>
          <h1>{author.name}</h1>
          <small>
            <em>
              <p>{author?.summary || null}</p>
            </em>
          </small>
        </div>
      )}
    </div>
  )
}

export default Bio
