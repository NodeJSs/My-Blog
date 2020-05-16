const createPaginatedPages = require("gatsby-paginate")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx(sort: { fields: [frontmatter___dateForSorting], order: [DESC] }) {
        nodes {
          frontmatter {
            excerpt
            slug
            title
            date
            dateForSorting(formatString: "D-M-Y")
            image {
              childImageSharp {
                fluid {
                  src
                  srcSet
                  aspectRatio
                  sizes
                  base64
                }
              }
            }
            tags
          }
        }
      }
    }
  `)
  const { createPage } = actions

  createPaginatedPages({
    edges: result.data.allMdx.nodes,
    createPage: createPage,
    pageTemplate: "src/templates/index.js",
    pageLength: 4,
    pathPrefix: "",
    context: {},
  })

  if (result.errors) {
    reporter.panic("failed to create posts", result.errors)
  }
  const tagsArray = []
  result.data.allMdx.nodes.forEach(post =>
    tagsArray.push(...post.frontmatter.tags)
  )
  const tags = new Set(tagsArray)
  tags.forEach(tag => {
    actions.createPage({
      path: `tag/${tag.toLowerCase()}`,
      component: require.resolve("./src/templates/TagPosts.jsx"),
      context: {
        tagFor: tag.toLowerCase(),
      },
    })
  })
  const posts = result.data.allMdx.nodes
  posts.forEach(post => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve("./src/templates/post.jsx"),
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })
}
exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}
