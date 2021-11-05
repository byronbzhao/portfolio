import React from 'react';
import './ProjectItem.css';

const ProjectItem = ({
  img,
  title,
  description,
  code,
  liveServer,
  project,
}) => {
  return (
    <div className='project-item-container'>
      <div className='project-item-img'>
        <img src={img} alt='cannot be loaded' />
        <div className='project-links'>
          <h3 className='project-link-name'>Check out</h3>
          <div className='project-link'>
            <a href={code} target='_blank' rel='noreferrer'>
              Source Code
            </a>
            <a href={liveServer} target='_blank' rel='noreferrer'>
              Live Server
            </a>
          </div>
        </div>
      </div>
      <div className='project-item-info'>
        <h3 className='project-item-title'>{title}</h3>
        <p className='project-item-description'>{description}</p>
        <div className='skills-container'>
          {project.map((skill) => (
            <div className='skills'>{skill}</div>
          ))}
        </div>
        <div className='project-link'>
          <a href={code} target='_blank' rel='noreferrer'>
            Source Code
          </a>
          <a href={liveServer} target='_blank' rel='noreferrer'>
            Live Server
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
