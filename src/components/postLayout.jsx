/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Footer from "./footer";
import Header from "./postheader"
import "./layout.css"
import { Global, css } from "@emotion/core";

const PostLayout = ({ children }) => {
  
  return (
    <>
      <Global styles={css`
        @import url('https://fonts.googleapis.com/css?family=Roboto Mono');
        @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

        body{
          margin: 5px;
          font-family: "Roboto mono";
          
        }
        html{
          
        }

        img{
          display: block;
          margin: 0 auto;
          
        }
        p{
          letter-spacing:0.01rem;
          line-height:2rem;
        }
        code[class*="language-"], pre[class*="language-"] {
          font-size: 90%;
          overflow-x: auto;
        }
        
      `} />
      <div css = {css`
          display:grid;
          grid-template-areas: "header" "main" "footer";
          grid-template-columns: 1fr;
          grid-template-rows: auto 1fr auto;
          
          height: 100%;
      `}>
        <Header css={css`grid-area: header;`} />
        <main css={css`
            grid-area: main;
            background-color: white;
            text-align: justify;
            
        `}>
            {children}
        </main>
        <Footer css={css`grid-area: footer;`} />
      </div>


    </>
  )
}

PostLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PostLayout


