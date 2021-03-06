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

  
`

const Footer = () => {
  return (
    <StyledFooter>
      <p style={{ margin: "0.5rem" }}>
        All articles are written by Yusuff Faruq Gbolahan
      </p>
  <p style={{ margin: "0" }}>Copyright &copy; {new Date().getFullYear()}</p>
    </StyledFooter>
  )
}

export default Footer
