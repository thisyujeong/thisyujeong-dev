import React, { useCallback, useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import { allCPs } from 'contentlayer/generated';
import Container from 'components/Container';
import CPSection from 'components/CP/CPSection';
import fs from 'fs';
import { PostFrom, PostWithBirth } from 'lib/types';

const CP = ({ posts }: { posts: PostWithBirth[] }) => {
  const [baekjoonPosts, setBaekjoonPosts] = useState<PostWithBirth[] | null>(null);
  const [programmersPosts, setProgrammersPosts] = useState<PostWithBirth[] | null>(null);
  const [leetcodePosts, setLeetcodePosts] = useState<PostWithBirth[] | null>(null);

  const sorting = useCallback(
    (from: PostFrom) => {
      const filter = posts.filter((post) => post.from == from);
      const sorted = filter.sort((a, b) => a.birthTime - b.birthTime);
      return sorted;
    },
    [posts]
  );

  useEffect(() => {
    setBaekjoonPosts(sorting('baekjoon'));
    setProgrammersPosts(sorting('programmers'));
    setLeetcodePosts(sorting('leetcode'));
  }, [posts, sorting]);

  return (
    <Container>
      <NextSeo title={`CP`} description={`Competitive Programming Notes`} />
      {baekjoonPosts && <CPSection posts={baekjoonPosts} title="baekjoon" />}
      {programmersPosts && <CPSection posts={programmersPosts} title="baekjoon" />}
      {leetcodePosts && <CPSection posts={leetcodePosts} title="baekjoon" />}
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

export default CP;
