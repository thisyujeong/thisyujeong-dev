import React from 'react';
import ProjectList from 'components/Project/ProjectList';
import { getAllProjects } from 'src/service/projects';

/* TODO: SEO */
const PlaygroundPage = async () => {
  const projects = await getAllProjects();

  return (
    <section>
      <ProjectList projects={projects} />
    </section>
  );
};

export default PlaygroundPage;
