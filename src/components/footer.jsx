import React from "react";
import {css} from "@emotion/core";
import styled from "@emotion/styled";

const StyledFooter = styled("footer")`
    background: #1D282E;
    padding: 1.5rem;

    form{
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    }
    input{
        margin-bottom: 1rem;
    }
`;

const Footer = () => {
    return(
        <StyledFooter>
            <form action="">
                <input type="text"/>
                <input type="email" name="" id=""/>
                <button>
                    Subscribe
                </button>
            </form>
        </StyledFooter>
    );
}

export default Footer;