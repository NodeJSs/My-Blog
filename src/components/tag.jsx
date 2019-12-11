/**@jsx jsx */
import React from "react";
import { Link } from "gatsby";
import { jsx } from "theme-ui";





const Tag = ({ tagFor }) => {
    return (
        <Link
            sx={{
                backgroundColor: "tagBody",
                borderRadius: "5px",
                marginRight: "0.7rem",
                marginBottom: "0.5rem",
                transition: "background-color 0.4s",
                position: "relative",
                cursor: "pointer",
                zIndex: "2",
                color: "tagTextColor",
                padding: "0.5rem 1rem",
                textAlign: "center",
                fontSize: "80%",
                textDecoration: "none",
                "&:hover, &:focus": {
                    backgroundColor: "tagBackgroundHoverColor",
                    color: "tagTextHoverColor"
                }
            }}

            to={`tag/${tagFor}`}>

            {`#${tagFor}`}

        </Link>
    );
}

export default Tag;

