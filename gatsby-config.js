module.exports = {
  siteMetadata: {
    title: "My sandbox Project",
    siteUrl: "https://www.yourdomain.tld",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};
