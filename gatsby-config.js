module.exports = {
  siteMetadata: {
    title: `sage.af`,
    description: ``,
    author: `@katelibby`,
    siteUrl: "http://sage.af",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sage.af`,
        short_name: `sage`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icons/favicon-96x96.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
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
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: [
          'Macondo',
          'UnifrakturCook\:700',
          'Noto Sans Runic',
          'Didact Gothic',
          'Homemade Apple',
					'yeseva one',
					'Amatic SC\:400,400i,700',
					'open sans\:400,400i,700',
				],
				display: 'swap',
			}
		},
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
  ],
}
