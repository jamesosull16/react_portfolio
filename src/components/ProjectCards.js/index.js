import React from "react";
import Button from "react-bootstrap/Button";

import "./style.css";

function ProjectCard({ title, image, description, repoUrl, appUrl }) {
  return (
    <div className='card'>
      <div className='img-container'>
        <img alt={title} src={image} />
      </div>
      <div className='content'>
        <ul>
          <li>{title}</li>
          <li>{description}</li>
        </ul>
      </div>

      <Button
        className='button'
        variant='info'
        onClick={() => (window.location = repoUrl)}
      >
        <i className='fab fa-github' sz='3x'></i>
      </Button>

      <Button
        className='button'
        variant='info'
        onClick={() => (window.location = appUrl)}
      >
        <i class='fas fa-tablet-alt'></i>
      </Button>
    </div>
  );
}

export default ProjectCard;
