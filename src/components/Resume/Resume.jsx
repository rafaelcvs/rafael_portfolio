import React from 'react';
import './Resume.css';
import { getImageUrl } from '../../utils';

const Resume = () => {
  const experiences = [
    {
      title: 'Uber Driver',
      date: 'Apr 2022 - Current',
      description: `Maintained a 5-star rating over the last 500 of more than 5,000 trips, demonstrating exceptional attention to detail and customer satisfaction.`,
    },
    {
      title: 'Restaurant Manager',
      date: 'Jul 2016 - Apr 2022 (Full-time)',
      description: `Managed a successful dining establishment, demonstrating strong leadership and the ability to significantly improve operational efficiencies.`,
    },
    {
      title: 'Finance Manager',
      date: 'Nov 2013 - Aug 2015 (Full-time)',
      description: `Oversaw financial operations, focusing on cost reduction and efficient resource allocation.`,
    },
    {
      title: 'Administrative Lead',
      date: 'Feb 2011 - Nov 2013 (Full-time)',
      description: `Drove efficiency and productivity by leading a team to
      streamline administrative processes.`,
    },
  ];

  const educations = [
    {
      title: 'Complete React Developer',
      date: 'Zero To Mastery Academy Jul 2023 - Dec 2023',
      description: `Redux · Hooks · GraphQL · Firebase · Typescript.`,
    },
    {
      title: 'Full Stack Web Developer',
      date: 'Zero To Mastery Academy Jun 2023 - Dec 2023',
      description: `HTML · CSS · JavaScript · React.js · Node.js`,
    },
    {
      title: 'Master Degree in Business Administration',
      date: 'Jan 2011 - Dec 2012',
      description: `Strategic Planning · Financial Analysis · Marketing Strategy`,
    },
    {
      title: 'Bachelor Degree in Business Administration',
      date: 'Jan 2006 - Dec 2010',
      description: `Data Analysis · Project Management · Decision Making`,
    },
  ];

  return (
    <div className="resume">
      <div className="expEduContainer">
        <div className="expEduContainerChild">
          <h1 className="expEduTitle"> Job Experience</h1>
          <div className="expContainer">
            {experiences.map((experience) => (
              <div
                className="eeContainer"
                key={`experience-${experience.title}`}
              >
                <h1 className="eeTitle">{experience.title}</h1>
                <h3 className="eeCompany">{experience.date}</h3>
                <span className="eeBreak"></span>
                <h2 className="eeDescription">{experience.description}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="expEduContainerChild">
          <h1 className="expEduTitle"> Education Quality</h1>
          <div className="expContainer">
            {educations.map((education) => (
              <div className="eeContainer" key={`education-${education.title}`}>
                <h1 className="eeTitle">{education.title}</h1>
                <h3 className="eeCompany">{education.date}</h3>
                <span className="eeBreak"></span>
                <h2 className="eeDescription">
                  <span className="u-bold">Skills: </span>
                  {education.description}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
