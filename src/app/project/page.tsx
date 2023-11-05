import React from 'react';
import ProjectCards from 'components/Project/ProjectCards';
import { getAllProjects } from 'src/service/projects';

/* TODO: SEO */
const Project = async () => {
  const projects = await getAllProjects();

  return (
    <section>
      <ProjectCards projects={projects} />
    </section>
  );
};

export default Project;
