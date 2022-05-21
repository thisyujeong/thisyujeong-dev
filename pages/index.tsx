import Image from 'next/image';
import styles from '../styles/Home.module.css';
import TopBar from '../components/TopBar';
import Layout from '../components/Container';
import RecentPost from '../components/RecentPost';
import { allBlogs } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <RecentPost posts={posts} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const posts = allBlogs.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  return {
    props: {
      posts,
    },
  };
};

export default Home;
