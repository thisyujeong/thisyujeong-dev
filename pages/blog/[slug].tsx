import { allBlogs } from 'contentlayer/generated';
import BlogLayout from '../../layouts/blog';

const PostPage = ({ post }) => {
  return <BlogLayout post={post} />;
};

export const getStaticPaths = async () => {
  return {
    paths: allBlogs.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = allBlogs.find((post) => post.slug === params.slug);
  return {
    props: {
      post,
    },
  };
};

export default PostPage;
