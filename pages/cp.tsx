import Container from 'components/Container';
import CPSection from 'components/CP/CPSection';
import { allCPs, CP } from 'contentlayer/generated';
import React from 'react';

const cp = ({ posts }: { posts: CP[] }) => {
  const baekjoonPosts = posts.filter((post) => post.from == 'baekjoon');
  const programmersPosts = posts.filter((post) => post.from == 'programmers');

  return (
    <Container>
      <CPSection posts={baekjoonPosts} title="Baekjoon" />
      <CPSection posts={programmersPosts} title="programmers" />
    </Container>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      posts: allCPs,
    },
  };
};

export default cp;
