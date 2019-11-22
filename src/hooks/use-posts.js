import { graphql, useStaticQuery } from "gatsby";

const usePosts = () => {
    const data = useStaticQuery(graphql`
    query{
        allMdx{
          nodes{
            frontmatter{
              excerpt
              path
              title
              date
              image
            }
          }
        }
      }
    `);

    return data.allMdx.nodes.map( post => ({
        title: post.frontmatter.title,
        excerpt: post.frontmatter.excerpt,
        path: post.frontmatter.path,
        date: post.frontmatter.date,
        image: post.frontmatter.image
    }));


}

export default usePosts;