import React, { useState } from 'react';
import "./Navbar.css"
import "../../utils"
import { Link } from 'react-scroll';
import { getImageUrl } from '../../utils'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="header">
      <div className="logoHeader">
        <a href="/" className="logoP" >
          <img src={getImageUrl("Logo.png")} alt="logo" className="logo" />
        </a>
      </div>

      <div className='navMenu' onClick={() => setMenuOpen(!menuOpen)}>
        <span className='navMenuSpan'></span>
        <span className='navMenuSpan'></span>
        <span className='navMenuSpan'></span>
      </div>

      
      <ul className={`nav__list ${menuOpen ? 'open' : ''}`}>
        <li><Link to="about" spy={true} smooth={true} offset={-50} className="nav_link">About</Link></li>
        <li><Link to="portfolio" spy={true} smooth={true} offset={-80} duration={500} className="nav_link">Portfolio</Link></li>
        <li><Link to="resume" spy={true} smooth={true} offset={-100} duration={500} className="nav_link">Resume</Link></li>
        <li><Link to="contact" spy={true} smooth={true} offset={-50} duration={500} className="nav_link">Contact</Link></li>
      </ul>
      
    </nav>
  )
}

export default Navbar
