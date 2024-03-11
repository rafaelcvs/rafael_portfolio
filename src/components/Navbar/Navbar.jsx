import React, { useRef, useState } from 'react';
import './Navbar.css';
import '../../utils';
import { Link } from 'react-scroll';
import { getImageUrl } from '../../utils';
import { useOnClickOutside } from 'usehooks-ts';

const Navbar = () => {
  const ref = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  useOnClickOutside(ref, () => setMenuOpen(false));

  return (
    <nav className="header">
      <div className="logoHeader">
        <a href="/" className="logoP">
          <img src={getImageUrl('Logo.png')} alt="logo" className="logo" />
        </a>
      </div>

      <div className="navMenu" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={`navMenuSpan ${menuOpen ? 'open' : ''}`}></span>
        <span className={`navMenuSpan ${menuOpen ? 'open' : ''}`}></span>
        <span className={`navMenuSpan ${menuOpen ? 'open' : ''}`}></span>
      </div>

      <ul className={`nav__list ${menuOpen ? 'open' : ''}`} ref={ref}>
        <li>
          <Link
            onClick={() => setMenuOpen(false)}
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            className="nav_link"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setMenuOpen(false)}
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
            className="nav_link"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setMenuOpen(false)}
            to="resume"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="nav_link"
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setMenuOpen(false)}
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="nav_link"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
