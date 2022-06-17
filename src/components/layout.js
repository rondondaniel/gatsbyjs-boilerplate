import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import {
    container,
    heading,
    //navLinks,
    //navLinkItem,
    //navLinkText,
    siteTitle
  } from './layout.module.css'

import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  } 
  `)

  return (
    <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <Nav />
      <main>
        <h1 className={heading}>{pageTitle}</h1>
          {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout