import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import TopBar from '../components/Layout/TopBar';
import Layout from '../components/Layout/Layout';
import RecentPost from '../components/RecentPost';

const Home: NextPage = () => {
  return (
    <Layout>
      <RecentPost />
    </Layout>
  );
};

export default Home;
