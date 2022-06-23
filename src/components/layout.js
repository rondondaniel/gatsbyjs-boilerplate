import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby';

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
    <div>
      <header>{data.site.siteMetadata.title}</header>
      <Nav />
      <main>
        <h1>{pageTitle}</h1>
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