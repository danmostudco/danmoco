import React from "react";
import styled from "styled-components";

import { heading } from "../../styles/mixins";
import { spacing } from "../../styles/vars";
import projects from "../../data/projects";

import Project from "./project";

const ProjectsTitle = styled.h1`
  ${heading}
  color: #2e2e2e;
  font-size: 2.5em;
  margin-bottom: ${spacing.large};
`;

const StyledProjects = styled.section`
  margin-bottom: ${spacing.normal};
  vertical-align: top;

  @media (min-width: 768px) {
    display: inline-block;
  }
`;

const Projects = () => (
  <StyledProjects>
    <ProjectsTitle>{"Work"}</ProjectsTitle>
    <ul>
      {projects.map(project => (
        <Project key={project.name} project={project} />
      ))}
    </ul>
  </StyledProjects>
);

export default Projects;
