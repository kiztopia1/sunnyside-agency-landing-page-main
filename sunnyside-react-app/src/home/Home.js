import React from 'react';
import Hero from './components/Hero'
import {Link} from 'react-router-dom'
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
      </div>
  </div>;
}

export default Home;
