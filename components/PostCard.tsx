import Link from 'next/link';
import { PostCardContainer } from './PostCard.style';

const PostCard = ({ post, slug }) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <PostCardContainer>
        <h1>{post.title}</h1>
        <div>{post.description}</div>
        <div>{post.date}</div>
      </PostCardContainer>
    </Link>
  );
};

export default PostCard;
