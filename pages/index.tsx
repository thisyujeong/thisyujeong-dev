import Container from '../components/Container';
import RecentPost from '../components/Recent/RecentPosts';
import { allBlogs } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import * as allProjects from 'data/projects';
import RecentProject from 'components/Recent/RecentProject';
import Profile from 'components/Profile';

const Home = ({ posts, projects }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <Profile />
      <RecentPost posts={posts} />
      <RecentProject projects={projects} />
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allBlogs.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  const projects = [...allProjects.default].reverse().splice(0, 2);
  return {
    props: {
      posts,
      projects,
    },
  };
};

export default Home;
