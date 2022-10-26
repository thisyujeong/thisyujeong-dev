import React from 'react';
import { NextSeo } from 'next-seo';
import { allCPs, CP } from 'contentlayer/generated';
import Container from 'components/Container';
import CPSection from 'components/CP/CPSection';
import fs from 'fs';

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
  const sortedPost = allCPs.sort((a, b) => {
    const aTime = fs.statSync('./posts/' + a._raw.sourceFilePath).birthtime.getTime();
    const bTime = fs.statSync('./posts/' + b._raw.sourceFilePath).birthtime.getTime();
    return aTime - bTime;
  });
  return {
    props: {
      posts: sortedPost,
    },
  };
};

export default cp;
