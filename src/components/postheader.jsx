import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core";

const Header = ({ siteTitle }) => (
  <header css = {css`
  

    padding: 1rem 1.5rem 0 1.5rem;
    display: flex;
    align-items: center;
    img{
      margin:0;
    }
    p{
      margin: 0;
      font-family: Roboto Mono;
    }
  `}>
    <span css = {css`
        font-size: 150%;
        font-weight: bold;
        cursor: pointer
        /** */

    `}> 
        <Link css = {css`
            text-decoration: none;
            color: #000;
        `}to  = "/">&larr;</Link>
    </span>
    <img src="https://res.cloudinary.com/dqcsk8rsc/image/upload/q_auto/v1574354900/luck_pjsrvs.svg" alt="" />
    <p style = {{marginLeft: "0.5rem"}}>Katana</p>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
