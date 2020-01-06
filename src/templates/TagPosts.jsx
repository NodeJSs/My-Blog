/**@jsx jsx */
import React from "react"
import PostLayout from "../components/postLayout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import PostPreview from "../components/PostPreview"
import Posts from "../components/Posts"
import { jsx } from "theme-ui"

export const query = graphql`
  query($tagFor: [String]) {
    allMdx(filter: { frontmatter: { tags: { in: $tagFor } } }) {
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
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          tags
        }
      }
    }
  }
`

const TagPosts = ({
  data: {
    allMdx: { nodes: tagPosts },
  },
  pageContext: { tagFor },
}) => {
  return (
    <PostLayout>
      <SEO
        title={`Tag - ${tagFor}`}
        image={tagFor === "gatsby" ? "/assets/gatsby-image.jpeg" : ""}
      />
      <h1
        sx={{
          textTransform: "capitalize",
          textAlign: "center",
          margin: "1.5rem auto",
          fontFamily: "Open Sans",
          color: "articleTextColor",
          fontSize: "150%",
          width: "70%",

          fontWeight: "normal",
          /** */
        }}
      >
        {`My Articles on ${tagFor}`}
      </h1>

      <Posts>
        {tagPosts.map(tagPost => (
          <div>
            <PostPreview post={tagPost.frontmatter} />
          </div>
          
        ))}
      </Posts>
    </PostLayout>
  )
}

export default TagPosts
