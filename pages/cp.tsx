import React from 'react';
import { NextSeo } from 'next-seo';
import { allCPs } from 'contentlayer/generated';
import Container from 'components/Container';
import CPSection from 'components/CP/CPSection';
import fs from 'fs';
import { PostFrom, PostWithBirth } from 'lib/types';

const cp = ({ posts }: { posts: PostWithBirth[] }) => {
  const sorting = (from: PostFrom) => {
    const filter = posts.filter((post) => post.from == from);
    const sorted = filter.sort((a, b) => a.birthTime - b.birthTime);
    return sorted;
  };

  const baekjoonPosts = sorting('baekjoon');
  const programmersPosts = sorting('programmers');
  const leetcodePosts = sorting('leetcode');

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
  const posts = allCPs.map((cp) => {
    return {
      ...cp,
      birthTime: fs.statSync('./posts/' + cp._raw.sourceFilePath).birthtime.getTime(),
    };
  });

  return {
    props: {
      posts: posts,
    },
  };
};

export default cp;
