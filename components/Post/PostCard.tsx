import Link from 'next/link';
import { PostCardProps } from 'lib/types';
import { PostCardContainer } from './PostCard.style';
import convertDateUs from 'lib/convertDateUs';

const PostCard = ({ post, slug }: PostCardProps) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <PostCardContainer>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <span>{convertDateUs(post.date)}</span>
      </PostCardContainer>
    </Link>
  );
};

export default PostCard;
