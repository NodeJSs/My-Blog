import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {css} from "@emotion/core";
import styled from "@emotion/styled";
import PostPreview from "../components/PostPreview";
import usePosts from "../hooks/use-posts";
import Posts from "../components/Posts";

const IconDiv = styled("div")`
  display: flex;
  justify-content: space-around;
  width: 70%;
  margin: 0 auto;
  max-width: 300px;

  img{
    height: 40px;
    width: 40px;
    transition: transform 0.5s;

    :hover{
      transform: scale(1.25);
    }
  }
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
        transition: transform 0.5s;

        :hover{
          transform: rotate(180deg);
        }
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
        <a href="https://twitter.com/faruqyusuffG"><img src="https://res.cloudinary.com/dqcsk8rsc/image/upload/q_auto/v1574354899/Twitter_2_oebglr.svg" alt=""/></a>
        <a href="www.linkedin.com/in/faruq-gbolahan-yusuff-073712190"><img src="https://res.cloudinary.com/dqcsk8rsc/image/upload/q_auto/v1574354901/LinkedIn_cpstve.svg" alt=""/></a>
        <a href="https://www.instagram.com/unreal_photos_/?hl=en"><img src="https://res.cloudinary.com/dqcsk8rsc/image/upload/q_auto/v1574354899/Instagram_1_xipdum.svg" alt=""/></a>
        <a href="https://github.com/NodeJSs"><img src="https://res.cloudinary.com/dqcsk8rsc/image/upload/q_auto/v1574354899/Github_s8q0hg.svg" alt=""/></a>
      </IconDiv>

      <Posts >
        {posts.map(
          post => <PostPreview post = {post}></PostPreview>
        )}
      </Posts>
    </div>
  </Layout>
)}

export default IndexPage