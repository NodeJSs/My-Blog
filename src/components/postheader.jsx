
/** @jsx jsx */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core";

import ThemeToggler from "./ThemeToggler";
import { jsx } from "theme-ui";

const Header = () => (
    <header sx={{
        padding: "1rem 1.5rem 0 1.5rem",
        display: "flex",
        backgroundColor: "body",
        justifyContent: "space-between",
        alignItems: "center",
        img: {
            margin: "0",
        },
        p: {
            margin: "0 0.5rem",
            fontFamily: "Roboto Mono",
        }
    }}>

        <Link sx={{
            textDecoration: "none",
            color: "arrowColor",
            display: "flex",
            alignItems: "center"
        }}
            to="/">
            <img src="https://res.cloudinary.com/dqcsk8rsc/image/upload/q_auto/v1574354900/luck_pjsrvs.svg" alt="" />
            <p sx={{
                color: "arrowColor",
                

            }}>
                Go home
                </p>
        </Link>


        <ThemeToggler />
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
