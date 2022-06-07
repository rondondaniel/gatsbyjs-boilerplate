import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Favicon from "/public/favicon-32x32.png"
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, slug, keywords }) => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
 
      }
    `);

    return (
      <Helmet htmlAttributes={{ lang: `en` }}>
        <title>{title} | {data.site.siteMetadata.title}</title>
        <meta 
          name="description"
          content={description || data.site.siteMetadata.description} 
        />
        <meta
          name="keywords"
          content={keywords || data.site.siteMetadata.keywords}
        />
        <link rel="canonical" href={`${data.site.siteMetadata.siteUrl}${slug}`} />
        <link rel="shortcut icon" href={Favicon} />
      </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    slug: PropTypes.string,
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default SEO;