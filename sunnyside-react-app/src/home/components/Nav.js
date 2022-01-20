import React from 'react';
import './nav.scss'
function Nav() {
  return <div className='nav'>
      <img src="images/logo.svg" alt="sunnyside" />
      <div className="menu">
          <li>About </li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
      </div>
  </div>;
}

export default Nav;
