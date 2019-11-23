import { graphql, useStaticQuery } from "gatsby";

const usePosts = () => {
    const data = useStaticQuery(graphql`
    query{
        allMdx(sort: {fields: [frontmatter___date], order: [DESC]}){
          nodes{
            frontmatter{
              excerpt
              path
              title
              date
              image
              tags
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
        tags: post.frontmatter.tags,
        image: (post.frontmatter.image ? post.frontmatter.image: "")
    }));


}

export default usePosts;