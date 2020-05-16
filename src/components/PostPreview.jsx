/**@jsx jsx */

import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Tag from "./tag"
import { jsx } from "theme-ui"
import BackgroundImage from "gatsby-background-image"

const Post = styled("div")`
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.19);
  border-radius: 6px;
  text-align: left;
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s, background-color 0.5s;
  margin-bottom: 2rem;

  :hover {
    transform: translatey(-10px);
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.19);
  }
  > img {
    margin-bottom: 0;
    width: 100%;
    max-height: 300px;
    display: block;
  }
`
const PostBody = styled("div")`
  padding: 0 1rem;
`

const TagContainer = styled("div")`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`
const ImageBackground = styled(BackgroundImage)`
  background-size: cover;
  background-position: center;
  height: 200px;

  * {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
`

const PostPreview = ({ post }) => {
  const tags = post.tags
  
  return (
    <Post
      sx={{
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "postBorderColor",
        backgroundColor: "postPreviewBackground",
        
      }}
    >
      {post.image ? (
        <ImageBackground
          Tag="div"
          fluid={post.image.childImageSharp.fluid}
          alt={post.title}
          fadeIn
        />
      ) : (
        ""
      )}
      <div
        css={css`
          padding: 0.5rem 0;
          /** */
        `}
      >
        <p
          sx={{
            padding: "0 1rem",
            color: "postBody",
            fontSize: "110%",
            marginBottom: "0.5rem",
            /** */
          }}
        >
          {post.title}
        </p>

        {post.image ? "" : <hr />}
        
        <PostBody>
          <p
            sx={{
              fontFamily: "Open sans",
              fontsize: "93%",
              color: "postBody",
              /** */
            }}
          >
            {post.excerpt}
          </p>
          <p
            sx={{
              fontSize: "87%",
              color: "postDateColor",
              /** */
            }}
          >
            {`Posted ${post.date}`}
          </p>
          <TagContainer>
            {tags.map(tag => (
              <Tag tagFor={tag.toLowerCase()} />
            ))}
          </TagContainer>
        </PostBody>
      </div>
      <code>{/*JSON.stringify(post.image)*/}</code>
      <Link
        to={`/${post.slug}`}
        css={css`
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        `}
      ></Link>
    </Post>
  )
}

export default PostPreview


