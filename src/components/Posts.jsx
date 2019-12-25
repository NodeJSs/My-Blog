import React from "react"
import styled from "@emotion/styled"

const StyledPosts = styled("div")`
  display: grid;
  grid-column-gap: 3rem;
  grid-template-columns: 1fr 1fr;
  max-width: 900px;
  margin: 2rem auto 0 auto;

  @media (max-width: 950px) {
    max-width: 800px;
    grid-column-gap: 2rem;
  }

  @media (max-width: 870px) {
    grid-template-columns: 1fr;
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`

const Posts = ({ children }) => {
  return <StyledPosts>{children}</StyledPosts>
}

export default Posts
