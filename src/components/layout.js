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
import Footer from "./footer";
import Header from "./header"
import "./layout.css"
import {jsx} from "theme-ui";

import { Global, css } from "@emotion/core";

const MainDarkModeColor = "#334149";
const MainLightModeColor = "FFFFFF";

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
      <Global styles={css`
        @import url('https://fonts.googleapis.com/css?family=Roboto Mono');
        @import url('https://fonts.googleapis.com/css?family=Open+Sans');
        html{
          scroll-behaviour: smooth;
        }
        body{
          margin: 5px;
          font-family: "Roboto mono";
          
        }
      `} />
      <div css = {css`
          display:grid;
          grid-template-areas: "header" "main" "footer";
          grid-template-columns: 1fr;
          grid-template-rows: auto 1fr auto;
          
          height: 100vh;
      `}>
        <Header siteTitle={data.site.siteMetadata.title} css={css`grid-area: header;`} />
        <main sx={{
          gridArea: "main",
          backgroundColor: "body",
          }}>{children}</main>
        <Footer css={css`grid-area: footer;`} />
      </div>


    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


/*<footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>*/