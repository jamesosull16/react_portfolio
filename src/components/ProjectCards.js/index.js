import React from "react";
import Button from "react-bootstrap/Button";

import "./style.css";

function ProjectCard({
  title,
  image,
  description,
  id,
  navigateRepo,
  navigateApp,
}) {
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
        href={navigateRepo}
        variant='info'
        onClick={() => navigateRepo(id)}
      >
        <i className='fab fa-github' sz='3x'></i>
      </Button>

      <Button
        className='button'
        href={navigateApp}
        variant='info'
        onClick={() => navigateApp(id)}
      >
        <i class='fas fa-tablet-alt'></i>
      </Button>
    </div>
  );
}

export default ProjectCard;
