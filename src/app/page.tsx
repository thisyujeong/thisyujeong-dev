import React from 'react';
import RecentPost from 'components/Recent/RecentPosts';
import { getRecentlyPosts } from 'src/service/posts';
import { getRecentlyProjects } from 'src/service/projects';
import RecentProject from 'components/Recent/RecentProject';

const Home = async () => {
  const posts = await getRecentlyPosts();
  const projects = await getRecentlyProjects();

  return (
    <section>
      <RecentPost posts={posts} />
      <RecentProject projects={projects} />
    </section>
  );
};

export default Home;
