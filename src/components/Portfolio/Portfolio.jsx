import React from 'react'
import "./Portfolio.css"
import { getImageUrl } from '../../utils';

const Portfolio = () => {
  return (
    <div className='portContainer' id='portfolio'>
      <h1 className="portTitle"> VISIT MY PORTFOLIO </h1>
      <h2 className="subTitle"> Where Personalized Solutions That Speak to Your Audience Come to Life</h2>
      <div className="portfolio">

        <div className='projectContainer'>
          <a href="https://crownclothesrv.netlify.app" className="projectLink" target="_blank" rel="noopener noreferrer">
            <img className='projectImg' src={getImageUrl("Project1.png")} alt="Image" />
          </a>
          <section className="projectNameContainer">
            <span className='projectName'>Crown Clothes</span>
            <span className='likesContainer'>
              <img className='projectHeart' src={getImageUrl("heart.png")} alt="heart"></img>
              <span className='projectLikes'> 360</span>
            </span>  
          </section>
          <h2 className="projectDescription"> Online clothing store project designed to redefine the digital shopping experience. </h2>
          <span className="eeBreak"></span>
          <h2 className="projectDescription"> <span className='u-bold'>Skills:</span> HTML · CSS · JavaScript · React.js · Firebase </h2>
        </div>
        <div className='projectContainer'>
          <a href="https://helloberry.netlify.app" className="projectLink" target="_blank" rel="noopener noreferrer">
            <img className='projectImg' src={getImageUrl("Project2.png")} alt="Image"  />  
          </a>
          <section className="projectNameContainer">
            <span className='projectName'>Hello Berry</span>
            <span className='likesContainer'>
              <img className='projectHeart' src={getImageUrl("heart.png")} alt="heart"></img>
              <span className='projectLikes'> 255</span>
            </span>  
          </section>
          <h2 className="projectDescription"> Cartoon-style website for an açaí and juice bar </h2>
          <span className="eeBreak"></span>
          <h2 className="projectDescription"> <span className='u-bold'>Skills:</span> HTML · CSS · JavaScript · React.js </h2>
        </div>
        <div className='projectContainer'>
          <a href="https://carhubrv.netlify.app/" className="projectLink" target="_blank" rel="noopener noreferrer">
            <img className='projectImg' src={getImageUrl("Project3.png")} alt="Image" />    
          </a>
          
          <section className="projectNameContainer">
            <span className='projectName'>CarHub</span>
            <span className='likesContainer'>
              <img className='projectHeart' src={getImageUrl("heart.png")} alt="heart"></img>
              <span className='projectLikes'> 127</span>
            </span>  
          </section>
          <h2 className="projectDescription"> Online rent car store with search/filter bar and car details. </h2>
          <span className="eeBreak"></span>
          <h2 className="projectDescription"> <span className='u-bold'>Skills:</span> Tailwind CSS · Typescript · React.js · Next.js </h2>
        </div>
      </div>

      
    </div>

  )
}

export default Portfolio
