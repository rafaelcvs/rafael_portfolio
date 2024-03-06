import React from 'react'
import { getImageUrl } from '../../utils';
import "./About.css"

const About = () => {
  return (
    <div className='aboutContainer'>
        <div className='abContainer'>
            <div className="abcContainer">
                <div className='JPContainer'>
                    <div className='STContainer'> 
                        <h2 className='aboutSubtitle'> My Journey</h2>
                        <p className='aboutText'> My journey as web design and developer began in 2013, where I discovered my love for coding and design. I was fascinated by the endless possibilities of combining code and creativity to build something unique and impactful. </p>    
                    </div>          
                    <div className='STContainer'>
                        <h2 className='aboutSubtitle'> My Philosophy</h2>
                        <p className='aboutText'> I believe in the power of clean, straightforward design and code to create websites that are not only visually appealing but also highly functional and intuitive. For me, the essence of successful web development lies in the ability to translate complex ideas into accessible solutions that speak directly to the user’s needs. </p>
                    </div>        
                </div>
            </div>       
            <div className='whatIDoContainer'>
                <h2 className="whatIDo">What I do?</h2>
                <div className="webContainer">
                    <div className="ddContainer">
                        <h2 className="ddTitle"> As a Designer</h2>
                        <span className="ddBreak"></span>
                        <div className="ddLittleContainer">
                            <img className='ddIcon' src={getImageUrl("design.png")} alt="Image" />
                            <p className='ddText'> <span className='uBold'>UI/UX Design:</span> Creating intuitive and visually appealing interfaces focused on user experience.</p>
                        </div>
                        <div className="ddLittleContainer">
                            <img className='ddIcon' src={getImageUrl("responsive.png")} alt="Image" />
                            <p className='ddText'><span className='uBold'>Responsive Design:</span> Ensuring websites look and function beautifully on any device.</p>
                        </div>
                        <div className="ddLittleContainer">
                            <img className='ddIcon' src={getImageUrl("seo.png")} alt="Image" />
                            <p className='ddText'><span className='uBold'>SEO Best Practices:</span>  Optimizing sites to rank well on search engines and attract more visitors.</p>
                        </div>
                    </div>
                    <div className="ddContainer">
                        <h2 className="ddTitle"> As a Developer</h2>
                        <span className="ddBreak"></span>
                        <div className="ddLittleContainer">
                            <img className='ddIcon' src={getImageUrl("computer.png")} alt="Image" />
                            <p className='ddText'><span className='uBold'>Front-end Development:</span> I use HTML, CSS, JavaScript, and frameworks to build interactive and responsive sites. </p>
                        </div>
                        <div className="ddLittleContainer">
                            <img className='ddIcon' src={getImageUrl("server.png")} alt="Image" />
                            <p className='ddText'><span className='uBold'>Back-end Development:</span> I develop server-side logic and manage databases, ensuring smooth application operations.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About
