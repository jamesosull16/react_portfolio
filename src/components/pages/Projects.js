import React, { useState } from "react";
import ProjectCard from "../ProjectCards.js/index";
import projects from "../../projects";
import Wrapper from "../Wrapper/Wrapper";

function Projects ()  {
  
const [stateProjects] = useState(projects)

  
    return (
      
        <Wrapper>
          {stateProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </Wrapper>
      
    );
  
}

export default Projects;
