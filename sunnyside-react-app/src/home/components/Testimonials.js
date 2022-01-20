import React from 'react';
import './testimonials.scss'
function Testimonials() {
  return <div className='testimonials'>
      <h2>CLIENT TESTIMONIALS</h2>
    <div className="row">
    <div className="col-md-4 testimonial">
            <img src="images/image-emily.jpg" alt="emily" />
            <p className='dark'>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
            <h5 className='dark'>Emily R.</h5>
            <span className='dark'>Marketing Director</span>
        </div>
        <div className="col-md-4 testimonial">
            <img src="images/image-thomas.jpg" alt="thomas" />
            <p className='dark'>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
            <h5 className='dark'>Thomas</h5>
            <span className='dark'>Marketing Director</span>
        </div>
        <div className="col-md-4 testimonial">
            <img src="images/image-jennie.jpg" alt="jennie" />
            <p className='dark'>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
            <h5 className='dark'>Jennie</h5>
            <span className='dark'>Marketing Director</span>
        </div>
    </div>
  </div>;
}

export default Testimonials;
