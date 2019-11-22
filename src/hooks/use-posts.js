import { graphql, useStaticQuery } from "gatsby";

const usePosts = () => {
    const data = useStaticQuery(graphql`
    query{
        allMdx{
          nodes{
            frontmatter{
              excerpt
              slug
              title
              date
            }
          }
        }
      }
    `);

    return data.allMdx.nodes.map( post => ({
        title: post.frontmatter.title,
        excerpt: post.frontmatter.excerpt,
        slug: post.frontmatter.slug,
        date: post.frontmatter.date
    }));


}

export default usePosts;