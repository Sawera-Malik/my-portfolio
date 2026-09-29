import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';
import projects from './projectData';
import './project-details.css';

function ProjectMedia({ project, className = '' }) {
  if (!project.image) {
    return <div className={`project-media-placeholder ${className}`}>Project preview coming soon</div>;
  }

  if (project.mediaType === 'video') {
    return <video src={project.image} className={className} controls muted playsInline />;
  }

  return <img src={project.image} className={className} alt={`${project.title} preview`} />;
}

function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);
  const [activeImage, setActiveImage] = useState(null);

  if (!project) {
    return (
      <main className="project-not-found">
        <p className="eyebrow">404</p>
        <h1>Project not found</h1>
        <Link to="/" className="text-link">Back to portfolio</Link>
      </main>
    );
  }

  return (
    <main className="project-details">
      <div className="project-detail-shell">
        <Link to="/#project" className="back-link"><FaArrowLeft /> Back to Projects</Link>
        <section className="detail-hero">
          <div className="detail-hero-copy">
            <p className="eyebrow">{project.category}</p>
            <h1>{project.title}</h1>
            <p className="detail-lede">{project.shortDescription}</p>
            <ProjectLinks project={project} />
          </div>
          <ProjectMedia project={project} className="detail-preview" />
        </section>

        <section className="detail-section detail-intro">
          <div><p className="eyebrow">01 / About</p><h2>What this project is about</h2></div>
          <p>{project.description}</p>
        </section>

        <DetailGrid title="Key features" items={project.features} />
        <DetailGrid title="Technologies" items={project.technologies} isTechnology />

        <section className="detail-section two-column-detail">
          <div><p className="eyebrow">02 / Role</p><h2>My role</h2><p>{project.role}</p></div>
          <div><p className="eyebrow">03 / Implementation</p><h2>How it came together</h2><p>{project.implementation}</p></div>
        </section>

        <section className="detail-section challenges-section">
          <div><p className="eyebrow">04 / Process</p><h2>Challenges & solutions</h2></div>
          <div className="challenge-list">
            {project.challenges.map((item, index) => (
              <article className="challenge-item" key={`${item.challenge}-${index}`}>
                <span>0{index + 1}</span>
                <div><h3>Challenge</h3><p>{item.challenge}</p><h3>Solution</h3><p>{item.solution}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="detail-links">
          <p className="eyebrow">Continue exploring</p>
          <ProjectLinks project={project} large />
        </section>
      </div>

      {activeImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Expanded project screenshot">
          <button type="button" className="lightbox-close" onClick={() => setActiveImage(null)} aria-label="Close screenshot"><FaTimes /></button>
          <img src={activeImage.src} alt={activeImage.alt} />
        </div>
      )}
    </main>
  );
}

function ProjectLinks({ project, large = false }) {
  return (
    <div className={`project-links ${large ? 'project-links-large' : ''}`}>
      {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="button button-primary">Live Project <FaExternalLinkAlt /></a> : null}
      {project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="button button-secondary"><FaGithub /> GitHub</a> : null}
      {!project.liveUrl && !project.githubUrl ? <span className="link-placeholder">Project links coming soon</span> : null}
    </div>
  );
}

function DetailGrid({ title, items, isTechnology = false }) {
  return (
    <section className="detail-section">
      <div><p className="eyebrow">{isTechnology ? 'Tools' : 'Highlights'}</p><h2>{title}</h2></div>
      <div className={isTechnology ? 'technology-list' : 'feature-grid'}>
        {items.map((item, index) => isTechnology ? <span className="technology-badge" key={`${item}-${index}`}>{item}</span> : <article className="feature-card" key={`${item}-${index}`}><span>0{index + 1}</span><p>{item}</p></article>)}
      </div>
    </section>
  );
}

export default ProjectDetails;
