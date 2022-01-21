import React,{useEffect, useState} from 'react';
import Hero from './components/Hero'
import {a} from 'react-router-dom'
import Testimonials from './components/Testimonials';
import './home.scss'
import getWindowDimensions from './getWindowDimensions'
function Home() {
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
  return <div>
    
      <Hero/>
      <div className="row">
      <div className="col-md-6 block down">
          <h2 className='dark'>Transform your brand</h2>
          <p className='dark'>brand We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you. </p>
          <a href='/' className='learnMore hover-yellow'>learn more</a>
        </div>
        <img src={`images/${screen}/image-transform.jpg`} alt="" className="up col-md-6 block-img" />
        <img src={`images/${screen}/image-stand-out.jpg`}  alt="" className="col-md-6 block-img" />
        <div className="col-md-6 block">
          <h2 className='dark'>Stand out to the right audience</h2>
          <p className='dark'> Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
          <a href='/' className='learnMore hover-red'>learn more</a>
        </div>
        <div className="col-md-6 block-img-bg ">
          <img src={`images/${screen}/image-graphic-design.jpg `}alt="" className="block-background" />
          <h2 className='dark'>Graphic design</h2>
          <p className='dark'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        
        </div>
        <div className="col-md-6 block-img-bg">
        <img src={`images/${screen}/image-photography.jpg`} alt="" className="block-background" />
          <h2 className='dark'>Photography </h2>
          <p className='dark'>  Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </div>
      </div>
      <Testimonials/>
      <div className="images">
        <img src="" alt="" />
      </div>
      <footer>
        <img src="images/logo.svg" alt="" />
        <div className="footer-nav">
          <a href={'/about'}>About</a>
          <a href={'/server'}>Services</a>
          <a href={'/projects'}>Projects</a>
        </div>
        <div className='social'>
          <img src="images/icon-facebook.svg" alt="" />
          <img src="images/icon-instagram.svg" alt="" />
          <img src="images/icon-twitter.svg" alt="" />
          <img src="images/icon-pinterest.svg" alt="" />
        </div>
      </footer>
  </div>;
}

export default Home;
