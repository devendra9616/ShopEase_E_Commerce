import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faOutdent } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';


const Header = () => {

 const navRef = useRef(null);

  const handleOpen = () => {
    navRef.current.classList.add('active');
  };

  const handleClose = () => {
    navRef.current.classList.remove('active');
  };

  return (
    <>
      <section id="header">
        <a href="#"><img src="/img/logo.png" className="logo" alt="" /></a>
        <div>
          <ul id="navbar" ref={navRef}>
            <li><a className="active" href="/">Home</a></li>
            <li><a href="/Shop">Shop</a></li>
            <li><a href="/Blog">Blog</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li id="lg-bag"><a href="/Card"><FontAwesomeIcon icon={faBagShopping} /></a></li>
            <a href="#" id="close" onClick={handleClose}><FontAwesomeIcon icon={faXmark} /></a>
          </ul>
        </div>
        <div id="mobile">
          <a href="/Card"><FontAwesomeIcon className='i' icon={faBagShopping} /></a>
          <FontAwesomeIcon id="bar" onClick={handleOpen} className='i' icon={faOutdent} />
        </div>
      </section>
    </>
  )
}

export default Header
