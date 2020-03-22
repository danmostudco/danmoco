import React from 'react';

import projects from '../../data/selectedProjects';

import WorkContainer from './WorkContainer';

const Projects = () => (
    <div className="work-list">
        {projects.map((project) => (
            <WorkContainer key={project.title} project={project} />
        ))}
    </div>
);

export default Projects;
