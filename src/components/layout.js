/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/**@jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"
import Header from "./header"
import "./layout.css"
import { jsx } from "theme-ui"

import { Global, css } from "@emotion/core"

const MainDarkModeColor = "#334149"
const MainLightModeColor = "FFFFFF"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css?family=Roboto Mono");
          @import url("https://fonts.googleapis.com/css?family=Open+Sans");
          html {
            scroll-behaviour: smooth;
          }
          body {
            margin: 0;
            font-family: "Roboto mono";
            border: 5px solid rgba(34, 48, 148, 0.7);
          }
        `}
      />
        <Header
          siteTitle={data.site.siteMetadata.title}
          css={css`
            grid-area: header;
          `}
        />
        <main
          sx={{
            gridArea: "main",
            transition: "background-color 0.5s",
            backgroundColor: "body",
          }}
        >
          {children}
        </main>
        <Footer
          css={css`
            grid-area: footer;
          `}
        />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

