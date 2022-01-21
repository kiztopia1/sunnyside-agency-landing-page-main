import React, { useState } from 'react';
import './nav.scss'
function Nav() {
  const [toggle, setToggle] = useState('hide')
  const handleToggle= ()=> {
    if(toggle == 'hide'){
      setToggle('')
    }else{
      setToggle('hide')
    }
  }
  return <div className='nav'>
      <img src="images/logo.svg" alt="sunnyside" />
      <div className={'menu'+ toggle}>
          <li className={toggle}>About </li>
          <li className={toggle}>Services</li>
          <li className={toggle}>Projects</li>
          <li className={toggle}>Contact</li>
      </div>
      <img src="images/icon-hamburger.svg" alt="" className='hamburger' onClick={handleToggle} />
  </div>;
}

export default Nav;
