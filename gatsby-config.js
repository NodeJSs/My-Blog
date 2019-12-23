module.exports = {
  siteMetadata: {
    title: `KatanaBlog | Technical articles about tech`,
    description: `Technical articles about tech`,
    author: `Yusuff Faruq`,
    twitterUsername: "@faruqyusuffG",
    image: `/assets/TwitterCoverImage.png`,
    url: "https://thekatana.tech"
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `BlogImages`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/Blog Posts`,
        name: "Blog Posts",
      },
    },
    
    
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    `gatsby-theme-ui-blog`,
    `gatsby-plugin-netlify-cms-paths`,
    
    
    
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
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
            }
          }
        ],
        plugins: ["gatsby-remark-images"]
        
      },
    },
    
    

  ],
}
 


