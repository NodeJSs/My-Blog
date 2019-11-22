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
                        path
                    }
                }
            }
        }
    `);

    if(result.errors){
        reporter.panic("failed to create posts", results.errors);
    }

    const posts = result.data.allMdx.nodes;
    posts.forEach(post => {
        actions.createPage({
            path: post.frontmatter.path,
            component: require.resolve("./src/templates/post.jsx"),
            context: {
                path: post.frontmatter.path
            }
        })
    })



}