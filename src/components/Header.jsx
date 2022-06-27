import React from "react";

import Nav from './Nav';

const Header = ({ title }) => {
  return (
    <div>
      <header>
        {title}
        <Nav />
      </header>     
    </div>
  )
    
}

export default Header