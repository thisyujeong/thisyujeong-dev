'use client';
import React, { useEffect, useState } from 'react';
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

  const onClickSeries = (series: string) => {
    if (selectSeries === series) {
      localStorage.removeItem('series');
      setSelectSeries('');
      return;
    }

    setSelectSeries(series);
    localStorage.setItem('series', series);
  };

  useEffect(() => {
    const localSeries = localStorage.getItem('series');
    setSelectSeries(localSeries || '');
  }, []);

  return (
    <>
      {<SeriesTab series={series} selected={selectSeries} onClick={onClickSeries} />}
      {data.map((post, idx) => (
        <PostCard post={post} key={idx} slug={post.slug} />
      ))}
    </>
  );
};

export default PostList;
