/**@jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PostLayout from "../components/postLayout"
import SEO from "../components/seo"

const PostTemplate = ({ data: { mdx: post } }) => {
  return (
    <PostLayout>
      <SEO
        title={post.frontmatter.title}
        image={post.frontmatter.image !== null ? post.frontmatter.image.childImageSharp.fluid.src:undefined}
        pathname={post.frontmatter.slug}
        description={post.frontmatter.excerpt}
      />
      
      <h1
        sx={{
          textAlign: "center",
          padding: "2rem 1rem 1rem 1rem",
          fontFamily: "Roboto mono",
          fontWeight: "normal",
          userSelect: "none",
          color: "articleTextColor",

          /** */
        }}
      >
        {post.frontmatter.title}
      </h1>
      <p
        sx={{
          textAlign: "center",
          userSelect: "none",
          color: "articleTextColor",
          /** */
        }}
      >
        Posted {post.frontmatter.date}
      </p>
      <div
        sx={{
          width: "95%",
          maxWidth: "800px",
          backgroundColor: "articleBodyColor",
          fontFamily: "Open sans",
          margin: "0 auto 2rem auto",
          border: "1px solid",
          borderColor: "articleBorderColor",
          borderRadius: "6px",
          color: "articleTextColor",
          padding: "1.5rem",
          userSelect: "none",
        }}
      >
        <MDXRenderer>{post.body}</MDXRenderer>

        {/*<Clap />*/}
      </div>
    </PostLayout>
  )
}



export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        date
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        excerpt
      }
      body
    }
  }
`

export default PostTemplate
