module.exports = {
  siteMetadata: {
    title: `永磁直驅大風機方案與應用`,
    description: `高效節能永磁直驅大風機    `,
    author: `greenfast`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-no-sourcemaps",
    },
  ],
  pathPrefix: '/big-fan',
};
