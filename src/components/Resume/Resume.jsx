import React from 'react'
import "./Resume.css"
import { getImageUrl } from '../../utils';

const Resume = () => {
  return (
    <div className='resume'>
      <div className='expEduContainer'>
        <div className='expEduContainerChild'>
          <h1 className="expEduTitle"> Job Experience</h1>
          <div className="expContainer">
            <div className='eeContainer'>
              <h1 className="eeTitle">Uber Driver</h1>
              <h3 className="eeCompany">Apr 2022 - Current</h3>
              <span className="eeBreak"></span>
              <h2 className="eeDescription">Maintained a 5-star rating over the last 500 of more than 5,000 trips, demonstrating exceptional attention to detail and customer satisfaction.</h2>
            </div>
            <div className='eeContainer'>
              <h1 className="eeTitle">Restaurant Manager</h1>
              <h3 className="eeCompany">Jul 2016 - Apr 2022 (Full-time) </h3>
              <span className="eeBreak"></span>
              <h2 className="eeDescription">Managed a successful dining establishment, demonstrating strong leadership and the ability to significantly improve operational efficiencies.</h2>
            </div>
            <div className='eeContainer'>
              <h1 className="eeTitle">Finance Manager</h1>
              <h3 className="eeCompany">Nov 2013 - Aug 2015 (Full-time)</h3>
              <span className="eeBreak"></span>
              <h2 className="eeDescription">Oversaw financial operations, focusing on cost reduction and efficient resource allocation. </h2>
            </div>
            <div className='eeContainer'>
              <h1 className="eeTitle">Administrative Lead</h1>
              <h3 className="eeCompany">Feb 2011 - Nov 2013 (Full-time)</h3>
              <span className="eeBreak"></span>
              <h2 className="eeDescription">Drove efficiency and productivity by leading a team to streamline administrative processes.</h2>
            </div>
          </div>
        </div>
        <div className='expEduContainerChild'>
          <h1 className="expEduTitle"> Education Quality</h1>
          <div className="expContainer">
            <div className='eeContainer'>
              <h1 className="eeTitle">Complete React Developer</h1>
              <h3 className="eeCompany">Zero To Mastery Academy <br />Jul 2023 - Dec 2023 </h3>
              <span className="eeBreak"></span>
              <h2 className="eeDescription"> <span className='u-bold'>Skills:</span> Redux · Hooks · GraphQL · Firebase · Typescript </h2>
            </div>

            <div className='eeContainer'>
              <h1 className="eeTitle">Full Stack Web Developer</h1>
              <h3 className="eeCompany">Zero To Mastery Academy <br />Jun 2023 - Dec 2023 </h3>
              <span className="eeBreak"></span>
              <h2 className="eeDescription"> <span className='u-bold'>Skills:</span> HTML · CSS · JavaScript · React.js · Node</h2>
            </div>
            <div className='eeContainer'>
              <h1 className="eeTitle">Master Degree in Business Administration</h1>
              <h3 className="eeCompany">Jan 2011 - Dec 2012 </h3>
              <span className="eeBreak"></span>
              <h2 className="eeDescription"> <span className='u-bold'>Skills:</span> Strategic Planning · Financial Analysis · Marketing Strategy</h2>
            </div>
            <div className='eeContainer'>
              <h1 className="eeTitle">Bachelor's Degree in Business Administration</h1>
              <h3 className="eeCompany">Jan 2006 - Dec 2010</h3>
              <span className="eeBreak"></span>
              <h2 className="eeDescription"> <span className='u-bold'>Skills:</span> Data Analysis · Project Management · Decision Making</h2>
            </div>

          </div>
        </div>  
      </div>
    </div>
  )
}

export default Resume
