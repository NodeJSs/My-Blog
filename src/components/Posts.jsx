import React from "react";
import styled from "@emotion/styled";


const StyledPosts = styled("div")`
  
  max-width: 500px;
  margin: 2rem auto 0 auto;

  @media (max-width: 600px){
    width: 90%;
  }
`;


const Posts = ({children}) => {

    return(
        <StyledPosts>
            {children}
        </StyledPosts>
    );
}

export default Posts;