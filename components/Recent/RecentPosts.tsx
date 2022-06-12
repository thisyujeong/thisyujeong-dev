import { Blog } from 'contentlayer/generated';
import Link from 'next/link';
import React from 'react';
import { PostCard, PostTitle, PostDesc } from './RecentPosts.style';
import RecentTitle from './RecentTitle';

const RecentPost = ({ posts }: { posts: Blog[] }) => {
  return (
    <>
      <RecentTitle title="포스트" engTitle="post" path="/blog" />
      {posts.slice(0, 5).map((post) => (
        <Link href={`/blog/${post.slug}`} passHref key={post.slug}>
          <PostCard>
            <PostTitle>{post.title}</PostTitle>
            <PostDesc>{post.description}</PostDesc>
          </PostCard>
        </Link>
      ))}
    </>
  );
};

export default RecentPost;
