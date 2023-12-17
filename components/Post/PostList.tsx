'use client';
import React, { useEffect, useState } from 'react';
import { Blog } from 'contentlayer/generated';
import PostCard from './PostCard';
import SeriesTab from './SeriesTab';
import Search from 'components/Post/Search';
import useDebounce from '@/hooks/debounce';
import styles from './PostList.module.scss';

type Props = {
  posts: Blog[];
  series: string[];
};

const PostList = ({ posts, series }: Props) => {
  const [selectSeries, setSelectSeries] = useState<string>('');
  const [keyword, setKeyword] = useState<string>('');
  const debounceKeyword = useDebounce(keyword);

  const data = debounceKeyword
    ? posts.filter((p) => p.title.toLowerCase().includes(debounceKeyword.toLowerCase()))
    : selectSeries
    ? posts.filter((post) => post.series === selectSeries)
    : posts;

  const onClickSeries = (series: string) => {
    /** 이미 선택된 시리즈 탭 선택 시 해제 */
    if (selectSeries !== series) {
      setSelectSeries(series);
      localStorage.setItem('series', series);
    } else {
      setSelectSeries('');
      localStorage.removeItem('series');
    }
  };

  const onChange = (value: string) => {
    setKeyword(value);

    /** 검색어 입력 시 시리즈 탭 선택 해제 */
    if (value !== '') {
      setSelectSeries('');
      localStorage.removeItem('series');
    }
  };

  useEffect(() => {
    setSelectSeries(localStorage.getItem('series') || '');
  }, []);

  return (
    <>
      <Search onChange={onChange} />
      {<SeriesTab series={series} selected={selectSeries} onClick={onClickSeries} />}
      {data.length ? (
        data.map((post, idx) => <PostCard post={post} key={idx} slug={post.slug} />)
      ) : (
        <div className={styles.empty}>
          <p className={styles.empty_sub_text}>No search results found.</p>
          <p className={styles.empty_text}>검색 결과가 없습니다.</p>
        </div>
      )}
    </>
  );
};

export default PostList;
