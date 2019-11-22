import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const StyledFooter = styled("footer")`
    background: #1D282E;
    padding: 1.5rem 0.5rem;
    text-align: center;
    color: white;
    
    font-family: "Open sans";
    p{
        font-weight: 100;
    }
    


`;



const Footer = () => {
    return (
        <StyledFooter>
            <p style = {{margin: "1rem"}}>All articles are written by Yusuff Faruq</p>
            <p style = {{margin: "0"}}>Copyright &copy; 2019</p>
        </StyledFooter>
    );
}

export default Footer;