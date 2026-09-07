import React from 'react';
import './project.css';
import Customer from '../assets/customer-management.webm';
import ecommereceweb from '../assets/E-commerce.webm';
import accountmanagement from '../assets/system-managment.webm';
const projects = [
  {
    id: 1,
    name: 'Customer Management System',
    image: Customer,
    githubLink: "https://github.com/Sawera-Malik/customer-management-dashboard"
  },
  {
    id: 2,
    name: "Ecommerce Website",
    image: ecommereceweb,
    githubLink: "https://github.com/Sawera-Malik/E-commerce.git"
  },
  {
    id: 3,
    name: 'Account Management System',
    image: accountmanagement,
    githubLink: "https://github.com/Sawera-Malik/Account-managment.git"
  },
];

function Projects() {
  return (
    <div className='project' id='project' >
      <div>Projects</div>
      <div className='project-section' >

        <div className='project-div' >
          {
            projects.map((project) => (


              <div key={project.id} className='project-video' >
                <video
                  src={project.image}
                  className="video"
                  controls
                />
                <div className='project-name' >{project.name}</div>
                <button className='pro-btn' >
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className='project-button'>GitHub Link</a>
                </button>
              </div>
            ))
          }
          </div>
      </div>
    </div>
  )
}

export default Projects
