module.exports = {
  siteMetadata: {
    title: `KatanaBlog | Technical articles about tech`,
    description: `Technical articles about tech`,
    author: `Yusuff Faruq`,
    twitterUsername: "@faruqyusuffG",
    image: "https://res.cloudinary.com/dqcsk8rsc/image/upload/q_auto/v1574354900/luck_pjsrvs.svg",
    url: "https://thekatana.tech"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `KatanaBlog`,
        short_name: `KatanaBlog`,
        start_url: `/`,
        background_color: `#1D282E`,
        theme_color: `#1D282E`,
        display: `minimal-ui`,
        icon: `src/images/luck.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/Blog Posts`,
        name: "Blog Posts",
      },
    },
    
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/postLayout.jsx`),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
        ],
        
      },
    }




  ],
}
 


