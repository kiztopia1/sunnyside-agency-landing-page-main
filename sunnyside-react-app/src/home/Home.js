import React from 'react';
import Hero from './components/Hero'
import {Link} from 'react-router-dom'
import Testimonials from './components/Testimonials';
import './home.scss'
function Home() {
  return <div>
      <Hero/>
      <div className="row">
      <div className="col-md-6 block">
          <h2 className='dark'>Transform your brand</h2>
          <p className='dark'>brand We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you. </p>
          <Link to='/'>learn more</Link>
        </div>
        <img src="images/desktop/image-transform.jpg " alt="" className="col-md-6 block-img" />
        <img src="images/desktop/image-stand-out.jpg " alt="" className="col-md-6 block-img" />
        <div className="col-md-6 block">
          <h2 className='dark'>Stand out to the right audience</h2>
          <p className='dark'> Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
          <Link to='/'>learn more</Link>
        </div>
        <div className="col-md-6 block-img-bg ">
          <img src="images/desktop/image-graphic-design.jpg" alt="" className="block-background" />
          <h2 className='dark'>Graphic design</h2>
          <p className='dark'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
          <Link to='/'>learn more</Link>
        </div>
        <div className="col-md-6 block-img-bg">
        <img src="images/desktop/image-photography.jpg" alt="" className="block-background" />
          <h2 className='dark'>Photography </h2>
          <p className='dark'>  Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
          <Link to='/'>learn more</Link>
        </div>
      </div>
      <Testimonials/>
      <div className="images">
        <img src="" alt="" />
      </div>
      <footer>
        <img src="images/logo.svg" alt="" />
        <div className="footer-nav">
          <Link to={'/about'}>About</Link>
          <Link to={'/server'}>Services</Link>
          <Link to={'/projects'}>Projects</Link>
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
