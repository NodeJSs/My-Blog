import React from "react";
import PostLayout from "../components/postLayout";
import SEO from "../components/seo"
import { css } from "@emotion/core";
import { graphql } from "gatsby";
import PostPreview from "../components/PostPreview";
import Posts from "../components/Posts";

export const query = graphql`
        query($tagFor: [String]){
            allMdx(filter: {frontmatter: {tags: {in: $tagFor}}}) {
                nodes {
                    frontmatter {
                        excerpt
                        slug
                        title
                        date
                        dateForSorting(formatString: "D-M-Y")
                        image
                        tags
                    }
                }
            }
        }
    `;

const TagPosts = ({ data: {allMdx: {nodes: tagPosts}}, pageContext: {tagFor} }) => {


    return (
        <PostLayout>
            <h1 css = {css`
                text-transform: capitalize;
                text-align: center;
                margin: 1.5rem 0;
                font-family: "Roboto mono";
                font-weight: normal;
                /** */
            `}>
                {tagFor}
            </h1>
            {
                //<code>{JSON.stringify(props, null, 10)}</code>
                console.log(tagPosts)
            }

            <Posts>
                {
                    tagPosts.map(tagPost => <PostPreview post = {tagPost.frontmatter} />)
                }
            </Posts>
    

        </PostLayout>
    );
}

export default TagPosts;