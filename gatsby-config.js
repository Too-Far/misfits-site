module.exports = {
  siteMetadata: {
    title: `Total Misfits Riding Club`,
    description: `A kick ass no-rules riding club, built by and for bikers that just gotta bike`,
    author: `@Too-Far`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        downloadLocalImages: true,
        buldMarkdownNodes: true,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: '//https:api-eu-central-1.graphcms.com/v2/ckddeejqagy0v01xwefh16nr0/master',
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
