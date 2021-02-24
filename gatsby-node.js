const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const locales = require("./src/constants/locales")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          nodes {
            fields {
              slug
              locale
            }
            frontmatter {
              title
            }
            fileAbsolutePath
          }
        }
      }
    `
  )

  const resulten = await graphql(
    `
    {
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 1000, filter: {fields: {locale: {eq: "en"}}}) {
        nodes {
          fields {
            locale
          }
        }
      }
    }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes
  const postsen = resulten.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1]
      const next = index === 0 ? null : posts[index - 1]
      let filename = post.fileAbsolutePath
      let myRegex = new RegExp(".en.md")
      let myPath
      if (myRegex.test(filename)) {
        myPath = "en/blog" + post.fields.slug
      } else {
        myPath = "/blog" + post.fields.slug
      }
      createPage({
        path: myPath,
        component: blogPost,
        context: {
          slug: post.fields.slug,
          previous,
          next,
        },
      })
    })
  }

  const postsPerPage = 4
  const numPages = Math.ceil((posts.length - postsen.length) / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `blog` : `blog/${i + 1}`,
      component: path.resolve("./src/templates/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        locale: 'id',
        currentPage: i + 1,
      },
    })
  })

  const numPages2 = Math.ceil(postsen.length / postsPerPage)
  Array.from({ length: numPages2 }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `en/blog` : `en/blog/${i + 1}`,
      component: path.resolve("./src/templates/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        locale: 'en',
        currentPage: i + 1,
      },
    })
  })

  // Array.from({ length: numPages }).forEach((_, i) => {
  //   createPage({
  //     path: i === 0 ? `en/blog` : `en/blog/${i + 1}`,
  //     component: path.resolve("./src/templates/blog-list-template.en.js"),
  //     context: {
  //       limit: postsPerPage,
  //       skip: i * postsPerPage,
  //       numPages,
  //       currentPage: i + 1,
  //     },
  //   })
  // })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    const name = node.frontmatter.title
    const filename = path.basename(node.fileAbsolutePath, `.md`)
    const lang = filename.split(`.`)[1] == "en" ? "en" : "id"
    const slugFileName = name.replace(/\s/g, "-")
    createNodeField({
      name: `slug`,
      node,
      value: "/" + slugFileName,
    })
    createNodeField({ node, name: `locale`, value: lang })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  return new Promise(resolve => {
    deletePage(page)

    Object.keys(locales).map(lang => {
      const localizedPath = locales[lang].default
        ? page.path
        : locales[lang].path + page.path

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang,
        },
      })
    })

    resolve()
  })
}
