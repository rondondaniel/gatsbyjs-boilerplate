import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    } 
    `)

    const getCurrentYear = () => {
      return new Date().getUTCFullYear();  };
    const title = data.site.siteMetadata.title;
    const siteUrl = data.site.siteMetadata.siteUrl;
  
    return (
      <footer>
        <p>CopyRight &copy; {getCurrentYear()} {title} - {siteUrl}</p>
      </footer>
    )
}


export default Footer