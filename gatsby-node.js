
const createPaginatedPages = require('gatsby-paginate');
exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
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
    const { createPage } = actions;

    createPaginatedPages({
        edges: result.data.allMdx.nodes,
        createPage: createPage,
        pageTemplate: "src/templates/index.js",
        pageLength: 6,
        pathPrefix: "",
        context: {}
    });

    /*const result = await graphql(`
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
    `);*/

    


    

    if (result.errors) {
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