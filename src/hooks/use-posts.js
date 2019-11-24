import { graphql, useStaticQuery } from "gatsby";

const usePosts = () => {
    const data = useStaticQuery(graphql`
    query{
      allMdx(sort: {fields: [frontmatter___dateForSorting], order: [DESC]}){
        nodes{
          frontmatter{
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
    `);

    return data.allMdx.nodes.map( post => ({
        title: post.frontmatter.title,
        excerpt: post.frontmatter.excerpt,
        slug: post.frontmatter.slug,
        date: post.frontmatter.date,
        tags: post.frontmatter.tags,
        image: (post.frontmatter.image ? post.frontmatter.image: "")
    }));


}

export default usePosts;