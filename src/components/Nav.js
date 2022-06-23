import React from 'react'
import { 
    Link, 
    //graphql 
  } from 'gatsby';

const Nav = () => {

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to='/blog'>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav