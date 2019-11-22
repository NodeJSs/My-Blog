import React from "react";
import styled from "@emotion/styled";


const TagDiv = styled("div")`
    background: #E8E8E8;
    border-radius: 22.5px;
    padding: 0.4rem 1.5rem;
    margin-right: 0.7rem;
    margin-bottom:0.5rem;
    p{
        color: #000;
        margin:0;
        text-align: center;
        font-size: 80%;
    }
`
const Tag = ({tagFor}) => {
    return(
        <TagDiv>
            <p>
                {`#${tagFor}`}
            </p>
        </TagDiv>
    );
}

export default Tag;