import React, { useState } from 'react';
import { Blog } from 'contentlayer/generated';
import styles from './SeriesList.module.scss';
import Link from 'next/link';

type Props = {
  slug: string;
  title: string;
  posts: Blog[];
};

const SeriesList = ({ slug, title, posts }: Props) => {
  const [collapse, setCollapse] = useState<boolean>(true);
  return (
    <div className={`${styles.series} ${collapse ? styles.collapse : ''}`}>
      <div className={styles.series_heading}>
        <div className={styles.series_title}>{`${title} 시리즈`}</div>
        <button className={styles.series_toggle} onClick={() => setCollapse(!collapse)}>
          {collapse ? '펼치기' : '간략히'}
        </button>
      </div>
      <div className={styles.series_body}>
        <ul className={styles.series_list}>
          {posts.map((post) => (
            <li
              key={post._id}
              className={`${styles.series_item} ${post.slug === slug && styles.active}`}
            >
              <Link href={post.slug}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SeriesList;
