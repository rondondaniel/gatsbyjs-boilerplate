import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header'
import Footer from './Footer'

const Layout = ({ pageTitle, hasHeroSection, children }) => {
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
    <div>
      <Header />
      <main>
        {hasHeroSection ? '' : <h1>{pageTitle}</h1>}
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  pageTitle: PropTypes.string,
  isHomepage: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Layout