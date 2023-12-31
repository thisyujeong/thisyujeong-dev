'use client';
import React from 'react';
import styles from './NextAndPrevPost.module.scss';
import { PostNextAndPrevious } from 'lib/types';
import { useRouter } from 'next/navigation';

const NextAndPrevPost = ({ next, prev }: PostNextAndPrevious) => {
  const navigate = useRouter();
  const onClick = (path: string) => {
    navigate.push(path);
  };
  return (
    <div className={styles.post_cards}>
      <div
        className={`${styles.post_card} ${styles.prev}`}
        onClick={() => prev && onClick(prev.slug)}
        aria-disabled={!prev}
      >
        <span className={styles.post_label}>이전 포스트</span>
        <div className={styles.post_title}>
          {prev ? prev.title : '이전 포스트가 없습니다.'}
        </div>
      </div>
      <div
        className={`${styles.post_card} ${styles.next}`}
        onClick={() => next && onClick(next.slug)}
        aria-disabled={!next}
      >
        <span className={styles.post_label}>다음 포스트</span>
        <div className={styles.post_title}>
          {next ? next.title : '다음 포스트가 없습니다.'}
        </div>
      </div>
    </div>
  );
};

export default NextAndPrevPost;
