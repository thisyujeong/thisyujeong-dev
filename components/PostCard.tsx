import Link from 'next/link';
import { PostCardContainer } from './PostCard.style';

const PostCard = ({ post, slug }) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <PostCardContainer>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <span>{post.date}</span>
      </PostCardContainer>
    </Link>
  );
};

export default PostCard;
