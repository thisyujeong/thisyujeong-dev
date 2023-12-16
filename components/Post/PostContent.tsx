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
    <>
      {/* TODO:
        <NextSeo
        title={`${post.title}`}
        description={post.description}
        canonical={`${metadata.meta.url}/blog/${post.slug}`}
        openGraph={{
          type: 'article',
          url: `${metadata.meta.url}/blog/${post.slug}`,
          article: {
            publishedTime: new Date(post.date).toISOString(),
            tags: [...post.tags, 'frontend', 'develop'],
          },
        }}
      /> */}

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
    </>
  );
};

export default PostContent;
