import React from 'react';
import Nav from './Nav';
import './hero.scss'
function Hero() {
  return <div className='hero'>
      <div className="nav-container">
        <Nav/>
      </div>
      <h2>We Are Creative </h2>
  </div>;
}

export default Hero;
