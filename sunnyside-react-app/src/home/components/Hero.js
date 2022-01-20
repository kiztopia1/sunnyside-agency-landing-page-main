import React from 'react';
import Nav from './Nav';
import './hero.scss'
function Hero() {
  return <div className='hero' >

      <img className='hero-desktop-img' src="images/desktop/image-header.jpg" alt="" />
        <Nav/>
      <h2 className='header'>We Are Creative </h2>
  </div>;
}

export default Hero;
