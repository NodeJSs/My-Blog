import React from "react"
import styled from "@emotion/styled"

const StyledFooter = styled("footer")`
  background: #1d282e;
  padding: 0.5rem 0.5rem;
  text-align: center;
  color: white;

  font-family: "Open sans";
  p {
    font-weight: 100;
  }

  @media (min-width: );
`

const Footer = () => {
  return (
    <StyledFooter>
      <p style={{ margin: "0.5rem" }}>
        All articles are written by Yusuff Faruq
      </p>
      <p style={{ margin: "0" }}>Copyright &copy; 2019</p>
    </StyledFooter>
  )
}

export default Footer
