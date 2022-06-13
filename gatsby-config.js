// const linkResolver = require('./src/linkResolver.js')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "My sandbox Project",
    siteUrl: "https://www.yourdomain.tld",
    description: "This is my sandbox project",
    author: "myself",
    keywords: "key1, key2, key3",
    twitter: "@sandbox"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      // try to delete because using Prismic API
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        ignore: [`**/\.txt`],
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "My sandbox Project",
        short_name: "Sandbox",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/favicon.png", // This path is relative to the root of the site.
        icons: [
          {
            src: `/favicons/favicon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
        ], // Add or remove icon sizes as desired
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.example.com',
        sitemap: 'https://www.example.com/sitemap.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        // linkResolver: (doc) => linkResolver(doc),
        schemas: {
          'grid-page': {}
        }
      },
    },
  ],
};