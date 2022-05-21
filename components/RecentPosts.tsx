import { Blog } from 'contentlayer/generated';
import Link from 'next/link';
import React from 'react';
import {
  RecentPostHeader,
  RecentPostTitle,
  MoreTitle,
  PostCard,
  PostTitle,
  PostDesc,
} from './RecentPosts.style';

const RecentPost = ({ posts }: { posts: Blog[] }) => {
  return (
    <>
      <RecentPostHeader>
        <RecentPostTitle>Recent Post</RecentPostTitle>
        <MoreTitle>
          <Link href="/blog">ALL POSTS</Link>
        </MoreTitle>
      </RecentPostHeader>
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
