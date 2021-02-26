import React, { Component } from "react";
import Menu from "../Menu";
import ProjectCard from "../ProjectCards.js/index";
import projects from "../../projects.json";
import Wrapper from "../Wrapper/Wrapper";

class Projects extends Component {
  state = { projects };

//   navigateRepo = (id) => {
//     const repoUrl = this.state.projects.map((project) => project.id);
//   };

  render() {
    return (
      <div>
        <Menu />
        <Wrapper>
          {this.state.projects.map((project) => (
            <ProjectCard
              id={project.id}
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default Projects;
