'use client';
import React, { useState } from 'react';
import { Blog } from 'contentlayer/generated';
import PostCard from './PostCard';
import SeriesTab from './SeriesTab';

type Props = {
  posts: Blog[];
  series: string[];
};

const PostList = ({ posts, series }: Props) => {
  const [selectSeries, setSelectSeries] = useState<string>('');
  const data =
    selectSeries !== '' ? posts.filter((post) => post.series === selectSeries) : posts;

  return (
    <>
      {
        <SeriesTab
          series={series}
          selected={selectSeries}
          onClick={(series) => {
            setSelectSeries(selectSeries === series ? '' : series);
          }}
        />
      }
      {data.map((post, idx) => (
        <PostCard post={post} key={idx} slug={post.slug} />
      ))}
    </>
  );
};

export default PostList;
