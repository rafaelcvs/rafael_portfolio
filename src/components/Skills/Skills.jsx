import React from 'react'
import "./Skills.css"

const Skills = () => {
  return (
    <div className='skillsContainer' id='resume'>
        <h1 className="resumeTitle"> RESUME</h1>  
        <h1 className="profTitle"> Professional Skills </h1>
        <div className='PPcontainer'>
            <div className="progressBarContainer"> 
                <h2 className="skillTitle">HTML</h2>
                <div className="progressBar">
                    <div className="html"><span>70%</span></div>
                </div>
                <h2 className="skillTitle">CSS</h2>
                <div className="progressBar">
                    <div className="css"><span>85%</span></div>
                </div>
                <h2 className="skillTitle">JAVASCRIPT</h2>
                <div className="progressBar">
                    <div className="javascript"><span>70%</span></div>
                </div>
                <h2 className="skillTitle">REACT.JS</h2>
                <div className="progressBar">
                    <div className="react"><span>75%</span></div>
                </div>
                <h2 className="skillTitle">TYPESCRIPT</h2>
                <div className="progressBar">
                    <div className="typeScript"><span>55%</span></div>
                </div>
            </div>
            <div className="progressBarContainer"> 
                <h2 className="skillTitle">NODE.JS</h2>
                <div className="progressBar">
                    <div className="node"><span>50%</span></div>
                </div>
                <h2 className="skillTitle">GRAPHQL</h2>
                <div className="progressBar">
                    <div className="GraphQL"><span>55%</span></div>
                </div>
                <h2 className="skillTitle">FIREBASE</h2>
                <div className="progressBar">
                    <div className="firebase"><span>65%</span></div>
                </div>
                <h2 className="skillTitle">MONGODB</h2>
                <div className="progressBar">
                    <div className="MongoDB"><span>40%</span></div>
                </div>
                <h2 className="skillTitle">FIGMA</h2>
                <div className="progressBar">
                    <div className="figma"><span>85%</span></div>
                </div>
            </div>  
        </div>              
    </div>
  )
}

export default Skills
