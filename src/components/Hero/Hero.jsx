import React from 'react';
import "./Hero.css";
import { getImageUrl } from '../../utils';

const Hero = () => {
  return (
    <main className="hero" id='about'>
        <div className="heroContainer">
            <div className="textContainer">
                <span className="heroSubtitle">Welcome to my world</span>
                <h1 className="heroTitle">
                    Hi, I'm <span className="nameColor">Rafael</span>
                    <span> a Web Developer</span>
                </h1>
                <p className="description">
                    Passionate about crafting
                    <span className="u-bold nameColor"> custom websites 
                    </span> that transform your business vision into reality. I believe in simplicity and effectiveness, creating designs that communicate directly with your audience. Your ideas and our collaborative effort are the keys to developing a website that not only looks stunning but also propels your business forward.  
                    <span className="u-bold nameColor"> Together, let's make your online presence remarkable.</span>
                </p>
                
            </div>
            <div className="ssContainer">
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
                    
                <div className="bestSkillsContainer">
                    <h1 className="ssText">Best skill on</h1>
                    <ul className="ssList">
                        <li className="skillsItems">
                            <img className="skillsImg" src={getImageUrl("css.png")} alt="LinkedIn" />
                        </li>
                        <li className="skillsItems">
                            <img className="skillsImg" src={getImageUrl("react.png")} alt="Github" />
                        </li>
                        <li className="skillsItems">
                            <img className="skillsImg" src={getImageUrl("figma.png")} alt="Email" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <img src={getImageUrl("Logo.png")} alt="logo" className="logoAbout" />    
    </main>
  );
};

export default Hero;

