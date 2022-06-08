import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, slug, keywords }) => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
            twitter
          }
        }
        favicon: file(name: { eq: "favicon" }) {
          publicURL
        }
        social: file(name: { eq: "default-social" }) {
          publicURL
        }
      }
    `)
    
    const metaTitle = data.site.siteMetadata.title
    const metaKeywords = data.site.siteMetadata.keywords
    const metaDescription = description || data.site.siteMetadata.description
    const canonical = slug ? `${data.site.siteMetadata.siteUrl}${slug}` : null
    const twitterSite = data.site.siteMetadata.twitter
    const siteAuthor = data.site.siteMetadata.author
    const socialImage = data.social.publicURL
    const favicon = data.favicon.publicURL 

    return (
      <Helmet htmlAttributes={{ lang: `en` }}>
        <title>{title} | {metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords || metaKeywords} />
        <link rel="canonical" href={canonical} />
        <link rel="shortcut icon" href={favicon} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={twitterSite} />
        <meta name="twitter:creator" content={siteAuthor} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:type" content="website" />
        <meta name="og:desription" content={metaDescription} />
        <meta name="og:url" content={canonical} />
        <meta name="og:site_name" content={metaTitle} />
        <meta name="og:image" content={socialImage} />
      </Helmet>
    )
}

SEO.propTypes = {
    title: PropTypes.string.isRequired, // make title required
    description: PropTypes.string,
    image: PropTypes.string,
    slug: PropTypes.string,
    keywords: PropTypes.string,
}

export default SEO