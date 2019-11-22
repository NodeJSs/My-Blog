import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import usePosts from "../hooks/use-posts";
import Tag from "./tag";

const Post = styled("div")`
    border: 1px solid #AFAFAF;
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.19);
    border-radius: 6px;
    text-align: left;
    position: relative;
    transition: transform 0.5s, box-shadow 0.5s;
    margin-bottom:2rem;

    :hover{
        transform: translatey(-10px);
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.19);

    }
    > img{
        margin-bottom: 0;
        border-top-left-radius: 6px;
        border-top-left-radius: 6px;
        width: 100%;
        height: auto;
        display:block;
    }

    

    

`;
const PostBody = styled("div")`
    padding: 0 1rem;
`;

const TagContainer = styled("div")`
    display: flex;
    justify-content: flex-start;
    flex-wrap:wrap;
`;

const PostPreview = ({ post }) => {
    const tags = post.tags.split(",");
    return (
        <Post>
            {post.image ? <img src={post.image} alt={post.title} /> : ""}
            <div css = {css`
                padding: 0.5rem 0;
                /** */
            `}>
                <p css = {css`
                    padding: 0 1rem;
                    color: #000;
                    font-size: 110%;
                    margin-bottom: 0.5rem;
                    /** */
                `}>
                    {post.title}
                </p>

                {post.image ? "" : <hr />}

                <PostBody>

                    <p css={css`
                    font-family: "Open sans";
                    font-size: 93%;
                    /** */
                    `}>
                        {post.excerpt}
                    </p>
                    <p css = {css`
                        font-size: 87%;
                        /** */
                    `}>
                        {`Posted ${post.date}`}
                    </p>
                    <TagContainer>
                        {
                            tags.map(tag => <Tag tagFor = {tag} />)
                        }
                    </TagContainer>
                </PostBody>
            </div>
        <Link to = {`/${post.path}`} css = {css`
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
        `}></Link>

        </Post>);


}

export default PostPreview;