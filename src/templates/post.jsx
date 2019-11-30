import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PostLayout from "../components/postLayout";


export const query = graphql`
query($slug: String!){
    mdx(frontmatter:{slug: {eq: $slug}}){
      frontmatter{
        slug
        title
        date
      }
      body
    }
  }
`;
const PostTemplate = ({ data: { mdx: post } }) => {
    

    return (
        <PostLayout>
            <h1 css = {css`
                text-align:center;
                margin: 2rem 1rem 1rem 1rem;
                font-family: "Roboto mono";
                font-weight: normal;
                /** */
            `}>
                {post.frontmatter.title}</h1>
            <p css = {css`
                text-align: center;
                /** */
            `}>
                {post.frontmatter.date}
            </p>
            <div css = {css`
                width: 95%;
                max-width: 800px;
                font-family: "Open sans";
                margin: 0 auto 2rem auto;
                border: 1px solid #AFAFAF;
                border-radius: 6px;
                padding: 1.5rem;
                user-select: none;
                
            `}>
            <MDXRenderer>
                {post.body}
            </MDXRenderer>
            </div>
            
        </PostLayout>
    );
}

export default PostTemplate;