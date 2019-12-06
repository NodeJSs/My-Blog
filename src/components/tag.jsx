import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { css } from "@emotion/core";



const Tag = ({ tagFor }) => {
    return (
        <Link 
            css= {css`
                background-color: #E8E8E8;
                border-radius: 5px;
                margin-right: 0.7rem;
                margin-bottom:0.5rem;
                transition: background-color 0.4s;
                position: relative;
                cursor: pointer;
                z-index:2;
                color: #000;
                padding: 0.5rem 1rem;
                text-align: center;
                font-size: 80%;
                text-decoration: none;
                :hover{
                    background-color: #1D282E;
                    color: white;
                    text-decoration: underline;
                }
            `}

            to={`tag/${tagFor}`}>

        {`#${tagFor}`}

        </Link>
    );
}

export default Tag;

