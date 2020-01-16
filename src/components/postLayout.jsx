/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

/**@jsx jsx */
import PropTypes from "prop-types"
import React from "react"
import { jsx } from "theme-ui"
import Footer from "./footer"
import Header from "./postheader"
import "./layout.css"
import { Global, css } from "@emotion/core"

const PostLayout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css?family=Roboto Mono");
          @import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");

          body {
            margin: 0;
            font-family: "Roboto mono";
            border: 5px solid rgba(34, 48, 148, 0.7);
          }
          html {
          }

          img {
            display: block;
            margin: 0 auto;
          }
          p {
            letter-spacing: 0.01rem;
            line-height: 2rem;
          }
          code[class*="language-"],
          pre[class*="language-"] {
            font-size: 90%;
            overflow-x: auto;
          }
        `}
      />
      <div sx={{
         backgroundColor: "articlePageBodyColor" ,
         display: "grid",
         gridTemplateRows: "1fr auto 1fr",
         }}>
        <Header css={css``} />
        <main
          sx={{
            backgroundColor: "articlePageBodyColor",
            textAlign: "justify",
            minWidth: "100%",
            maxWidth: "100%",
            "h2,h3,h4,h5,h6": {
              textAlign: "left",
            },
          }}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

PostLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PostLayout
