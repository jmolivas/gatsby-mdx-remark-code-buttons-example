module.exports = {
  siteMetadata: {
    title: `Gatsby MDX with Custom Remark Plugins`
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "liek",
        path: `${__dirname}/src/pages`
      }
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        defaultLayout: require.resolve(
          "./src/components/default-page-layout.js"
        ),
        gatsbyRemarkPlugins: [
          'gatsby-remark-code-buttons'
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/`
      }
    }
  ]
};
