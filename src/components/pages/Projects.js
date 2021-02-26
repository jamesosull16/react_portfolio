import React, { useState } from "react";
import Menu from "../Menu";
import ProjectCard from "../ProjectCards.js/index";
import projects from "../../projects";
import Wrapper from "../Wrapper/Wrapper";

function Projects ()  {
  
const [stateProjects, setStateProjects] = useState(projects)

  
    return (
      <div>
        <Menu />
        <Wrapper>
          {stateProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </Wrapper>
      </div>
    );
  
}

export default Projects;
