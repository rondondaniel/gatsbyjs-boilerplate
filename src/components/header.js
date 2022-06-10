import * as React from "react"
import PropTypes from "prop-types"

const header = ({ pageTitle }) => {


  return (
    <header className={siteTitle}>{data.site.siteMetadata.title}  </header>
    <nav>
    <ul className={navLinks}>
      <li className={navLinkItem}>
        <Link to='/' className={navLinkText}>
          Home
        </Link>
      </li>
      <li className={navLinkItem}>
        <Link to='/about' className={navLinkText}>
          About
        </Link>
      </li>
      <li className={navLinkItem}>
        <Link to='/blog' className={navLinkText}>
          Blog
        </Link>
      </li>
    </ul>
   </nav>
  )
}