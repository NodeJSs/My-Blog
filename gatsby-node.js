/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({actions, graphql, reporter}) => {
    const result = await graphql(`
        query{
            allMdx{
                nodes{
                    frontmatter{
                        slug
                        tags
                    }
                }
            }
        }
    `);

    
    if(result.errors){
        reporter.panic("failed to create posts", results.errors);
    }
    const tagsArray = [];
    result.data.allMdx.nodes.forEach(post => tagsArray.push(...post.frontmatter.tags));
     const tags = new Set(tagsArray);
     tags.forEach(tag => {
         actions.createPage({
             path: `tag/${tag}`,
             component: require.resolve("./src/templates/TagPosts.jsx"),
             context: {
                 tagFor: tag
             }
         })
     });
    const posts = result.data.allMdx.nodes;
    posts.forEach(post => {
        actions.createPage({
            path: post.frontmatter.slug,
            component: require.resolve("./src/templates/post.jsx"),
            context: {
                slug: post.frontmatter.slug
            }
        })
    });



}