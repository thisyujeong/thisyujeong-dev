'use client';
import Link from 'next/link';
import { PostCardProps } from 'lib/types';
import convertDateUs from 'lib/convertDateUs';
import styles from './PostCard.module.scss';

const PostCard = ({ post, slug }: PostCardProps) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <div className={styles.card_container}>
        {post.series && <div className={styles.card_series}>{post.series} 시리즈 </div>}
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <span>{convertDateUs(post.date)}</span>
      </div>
    </Link>
  );
};

export default PostCard;
