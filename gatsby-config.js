module.exports = {
  siteMetadata: {
    title: `Michelle Scaraglino`,
    description: ``,
    author: `Matt Watson`,
    keywords: ["michelle scaraglino", "hair", "stylist", "raleigh", "local salon", "curelty-free", "vegan", "personal styling"],
    siteUrl: 'https://michellescaraglino.com/',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${ __dirname }/src/fonts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${ __dirname }/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-63536741-2", // The property ID; the tracking code won't be generated without it
        head: false, // Defines where to place the tracking script - `true` in the head and `false` in the body
        anonymize: true, // Setting this parameter is optional
        respectDNT: true, // Setting this parameter is also optional
        exclude: ["/preview/**", "/do-not-track/me/too/"], // Avoids sending pageview hits from custom paths
        pageTransitionDelay: 0, // Delays sending pageview hits on route update (in milliseconds)
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID", // Enables Google Optimize using your container Id
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID", // Enables Google Optimize Experiment ID
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID", // Set Variation ID. 0 for original 1,2,3....
        defer: false, // Defers execution of google analytics script after page load
        sampleRate: 100, // Any additional optional fields
        siteSpeedSampleRate: 10,
        cookieDomain: "michellescaraglino.com",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `michelle-scaraglino`,
        short_name: `michelle-scaraglino`,
        start_url: `/`,
        background_color: `#4d3849`,
        theme_color: `#4d3849`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
