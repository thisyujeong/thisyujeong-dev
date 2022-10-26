import Container from 'components/Container';
import CPSection from 'components/CP/CPSection';
import { allCPs, CP } from 'contentlayer/generated';
import { NextSeo } from 'next-seo';
import React from 'react';

const cp = ({ posts }: { posts: CP[] }) => {
  const baekjoonPosts = posts.filter((post) => post.from == 'baekjoon');
  const programmersPosts = posts.filter((post) => post.from == 'programmers');
  const leetcodePosts = posts.filter((post) => post.from == 'leetcode');

  return (
    <Container>
      <NextSeo title={`CP`} description={`Competitive Programming Notes`} />
      <CPSection posts={baekjoonPosts} title="baekjoon" />
      <CPSection posts={programmersPosts} title="programmers" />
      <CPSection posts={leetcodePosts} title="leetcode" />
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
