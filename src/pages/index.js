import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {css} from "@emotion/core";
import styled from "@emotion/styled";
import PostPreview from "../components/PostPreview";
import usePosts from "../hooks/use-posts";

const IconDiv = styled("div")`
  display: flex;
  justify-content: space-around;
  width: 70%;
  margin: 0 auto;
  max-width: 300px;

  img{
    height: 40px;
    width: 40px;
  }
`;

const Posts = styled("div")`
  
  width: 80%;
  max-width: 500px;
  margin: 2rem auto 0 auto;
`;

const IndexPage = () => {
  const posts = usePosts();
  console.log(posts);
  return (
 
  <Layout>
    <SEO title="Home" />
    <div css = {css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-family: "Roboto mono";
      text-align: center;
      max-width: 600px;
      margin: 1.5rem auto;

      > img{
        height: 120px;
        width: 110px;
        margin: 0rem auto 1rem auto;
      }

      > h1{
        font-family: "Roboto mono";
        font-size: 2rem;
      } 
      > p{
        padding: 0 1rem;
        color: #545454;
      }
    `}>
      <img src="https://res.cloudinary.com/dqcsk8rsc/image/upload/q_auto/v1574358048/avatar_gmcueg.svg" alt=""/>
      <h1>KatanaBlog</h1>
      <p>A technical blog for tech stuff by Faruq, a web developer and Anime lover from Nigeria </p>

      <IconDiv>
        <img src="https://res.cloudinary.com/dqcsk8rsc/image/upload/q_auto/v1574354899/Twitter_2_oebglr.svg" alt=""/>
        <img src="https://res.cloudinary.com/dqcsk8rsc/image/upload/q_auto/v1574354901/LinkedIn_cpstve.svg" alt=""/>
        <img src="https://res.cloudinary.com/dqcsk8rsc/image/upload/q_auto/v1574354899/Instagram_1_xipdum.svg" alt=""/>
        <img src="https://res.cloudinary.com/dqcsk8rsc/image/upload/q_auto/v1574354899/Github_s8q0hg.svg" alt=""/>
      </IconDiv>

      <Posts>
        {posts.map(
          post => <PostPreview post = {post}></PostPreview>
        )}
      </Posts>
    </div>
  </Layout>
)}

export default IndexPage