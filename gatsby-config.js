module.exports = {
  siteMetadata: {
    title: 'Spart - Collaboration Platform',
    siteUrl: `https://spart.site/`,
    description: 'A place where artists can collaborate on combinations of visual, audio, and written artwork.',
    keywords: 'artists, spart, visual artist, music maker, writer, voice actor, collaboration, composer, producer, poems',
    author: 'Joe Czepil',
    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://spart.site/',
        sitemap: 'https://spart.site/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
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
        icon: `src/images/Path.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
