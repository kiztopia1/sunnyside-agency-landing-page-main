import React,{useEffect, useState} from 'react';
import Nav from './Nav';
import './hero.scss'
import getWindowDimensions from '../getWindowDimensions'
function Hero() {
  const {width} = getWindowDimensions();
      const [screen, setScreen] = useState('desktop')

    useEffect(()=> {
      if(width > 375){
        setScreen('desktop')
      }else{
        setScreen('mobile')
      }
      console.log(screen, width)
    },[screen, width])
  return <div className='hero' >
      
      <img className='hero-desktop-img' src={`images/${screen}/image-header.jpg`} alt="" />
        <Nav/>
      <h2 className='header'>We Are Creative </h2>
      <div className="arrow-cont">
      <img src="images/icon-arrow-down.svg" alt="|" className="arrow" />
      </div>
  </div>;
}

export default Hero;
