'use client';
import React from 'react';
import type { Blog } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import MDXPost from './MDXPost';
import metadata from 'data/metadata';
import SeriesList from './SeriesList';

type Props = {
  post: Blog;
  series?: Blog[];
};

const PostContent = ({ post, series }: Props) => {
  const MDXComponent = useMDXComponent(post.body.code);
  return (
    <MDXPost
      title={post.title}
      date={post.date}
      path={`${metadata.meta.url}/blog/${post.slug}`}
      readingTime={post.readingTime.text}
    >
      {post.series && series && (
        <SeriesList title={post.series} posts={series} slug={post.slug} />
      )}
      <MDXComponent />
    </MDXPost>
  );
};

export default PostContent;
