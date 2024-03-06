import React from 'react'
import './Footer.css';
import { getImageUrl } from "../../utils";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerTextContainer">
        <h1 className="footerTitle">Rafael Veloso</h1>
        <h2 className="footerSubtitle">Wed Developer and Designer</h2>
        <a className="footerEmailTag" href="mailto:rafaelcvs@gmail.com" target="_blank" rel="noopener noreferrer">rafaelcvs@gmail.com</a>
      </div>        
      <div className="socialContainer">
        <h1 className="ssText">Find me</h1>
        <ul className="ssList">
            <li className="socialItems">
                <a
                    className="socialIcon"
                    href="https://www.linkedin.com/in/rafaelcvs/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                    className="socialImg"
                    src={getImageUrl("l1.png")}
                    alt="LinkedIn icon"
                    />
                </a>
            </li>
            <li className="socialItems">
                <a
                    className="socialIcon"
                    href="https://www.github.com/rafaelcvs"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                    className="socialImg"
                    src={getImageUrl("g1.png")}
                    alt="Github icon"
                    />
                </a>
            </li>
            <li className="socialItems">
                <a
                    className="socialIcon"
                    href="mailto:rafaelcvs@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                    className="socialImg"
                    src={getImageUrl("e1.png")}
                    alt="Email icon"
                    />
                </a>
            </li>
        </ul>
      </div>

    </div>
    )
}

export default Footer
