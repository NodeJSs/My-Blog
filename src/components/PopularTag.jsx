/**@jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby";


const PopularTag = ({link, name}) => {
    return(
        <Link 
        sx = {{
            color: "katanaBlogText",
            
        }}
            to = {link}>
            {name}
        </Link>
    );
}

export default PopularTag;