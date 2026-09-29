import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
import './project.css';
import projects from './projectData';

function Projects() {
  return (
    <section className='project' id='project'>
      <div className='project-heading'>
        <p className='section-kicker'>Selected work</p>
        <h2>Projects that turn ideas into useful interfaces.</h2>
        <p>Explore the work and open a full case study for the decisions behind each build.</p>
      </div>
      <div className='project-div'>
        {projects.map((project) => (
          <article key={project.id} className='project-card'>
            {project.image ? <img src={project.image} className="video" alt={`${project.title} preview`} /> : <div className='video project-placeholder'>Preview coming soon</div>}
            <div className='project-card-body'>
              <p className='project-category'>{project.category}</p>
              <h3 className='project-name'>{project.title}</h3>
              <p className='project-description'>{project.shortDescription}</p>
              <div className='project-actions'>
                <Link to={`/projects/${project.id}`} className='project-button project-details-button'>View Details <FaArrowRight /></Link>
                {project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className='project-icon-link' aria-label={`Open ${project.title} GitHub repository`}><FaGithub /></a> : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
