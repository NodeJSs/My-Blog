/**@jsx jsx */
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import PostPreview from "../components/PostPreview"
import Posts from "../components/Posts"
import { graphql, Link } from "gatsby"
import { jsx } from "theme-ui"

const presentDate = new Date();
let avatarImageSource = "https://res.cloudinary.com/dqcsk8rsc/image/upload/v1574358048/avatar_gmcueg.svg";


const IconDiv = styled("div")`
  display: flex;
  justify-content: space-around;
  width: 70%;
  margin: 0 auto;
  max-width: 300px;

  img,
  svg {
    height: 40px;
    width: 40px;
    transition: transform 0.5s;

    :hover {
      transform: scale(1.25);
    }
  }
`



if(presentDate.getMonth() === 11 && presentDate.getUTCDate() === 25){
  avatarImageSource = "https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268052/merry-christmas_mfolfq.png";
}
else if(presentDate.getMonth() === 1 && presentDate.getUTCDate() === 1){
  avatarImageSource = "https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577269499/new_year_xogphr.png";
}

const IndexPage = ({
  pageContext: { group, index, first, last, pageCount },
}) => {
  const previousUrl = index - 1 === 1 ? "/" : (index - 1).toString()
  const nextUrl = (index + 1).toString()
  
  return (
    <Layout>
      <SEO image="/assets/TwitterCoverImage.png" />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-family: "Roboto mono";
          text-align: center;

          margin: 1.5rem auto;

          > img {
            height: 120px;
            width: 110px;
            margin: 0rem auto 1rem auto;
            transition: transform 0.5s;

            :hover {
              transform: rotate(180deg);
            }
          }

          > h1 {
            font-family: "Roboto mono";
            font-size: 2rem;
          }
          > p {
            padding: 0 1rem;
            max-width: 600px;
            margin: 0 auto 1rem auto;
          }
        `}
      >
        <img
          src={avatarImageSource}
          alt=""
          style = {{
            height: "150px",
            width: "150px"
          }}
        />
        <h1 sx={{ color: "katanaBlogText" }}>KatanaBlog</h1>
        <p sx={{ color: "bioParagraph" }}>
          A technical blog for tech stuff by Faruq, a web developer and Anime
          lover from Nigeria{" "}
        </p>

        <IconDiv>
          <a href="https://twitter.com/faruqyusuffG">
            <img
              title="My Twitter"
              src="https://res.cloudinary.com/dqcsk8rsc/image/upload/q_auto/v1574354899/Twitter_2_oebglr.svg"
              alt=""
            />
          </a>
          <a href="https://www.linkedin.com/in/faruq-gbolahan-yusuff-073712190">
            <img
              title="My LinkedIn"
              src="https://res.cloudinary.com/dqcsk8rsc/image/upload/q_auto/v1574354901/LinkedIn_cpstve.svg"
              alt=""
            />
          </a>
          <a href="https://www.instagram.com/unreal_photos_/?hl=en">
            <img
              title="My Instagram"
              src="https://res.cloudinary.com/dqcsk8rsc/image/upload/q_auto/v1574354899/Instagram_1_xipdum.svg"
              alt=""
            />
          </a>
          <a href="https://github.com/NodeJSs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 20 20"
              version="1.1"
            >
              <title>My Github</title>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-140.000000, -7559.000000)"
                  fill="#000"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      sx={{ fill: "githubIconFill" }}
                      d="M94 7399c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051a9.396 9.396 0 0 0-2.505-.345 9.375 9.375 0 0 0-2.503.345c-1.911-1.326-2.751-1.051-2.751-1.051-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493-3.974-1.355-6.839-5.199-6.839-9.729 0-5.663 4.478-10.253 10-10.253"
                      id="github-[#142]"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </IconDiv>

        <Posts>
          {group.map(post => (
            <PostPreview post={post.frontmatter}></PostPreview>
          ))}
        </Posts>

        <div
          sx={{
            position: "relative",
            width: "80%",
            margin: "0 auto 1rem auto",
            a: {
              textDecoration: "none",
              color: "katanaBlogText",
            },
          }}
        >
          {!first && (
            <Link
              sx={{
                position: "absolute",
                left: "0",
              }}
              to={previousUrl}
            >
              &larr; Newer Posts
            </Link>
          )}

          {!last && (
            <Link
              sx={{
                position: "absolute",
                right: "0",
              }}
              to={nextUrl}
            >
              &rarr; Older Posts
            </Link>
          )}
        </div>
      </div>

      
    </Layout>
  )
}

export default IndexPage
