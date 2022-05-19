import { NextSeo } from 'next-seo';
import { allBlogs } from 'contentlayer/generated';
import Container from '../components/Container';
import metadata from 'data/metadata';
import PostCard from '../components/PostCard';

const Blog = ({ posts }) => {
  return (
    <Container>
      <NextSeo
        title="Blog | thisyujeong"
        description="블로그 설명"
        canonical={`${metadata.meta.url}/blog`}
        openGraph={{ url: `${metadata.meta.url}/blog` }}
      />
      <h1>Blog 입니다.</h1>
      {posts.map((post, idx) => (
        <PostCard post={post} key={idx} slug={post.slug} />
      ))}
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allBlogs.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  return {
    props: {
      posts,
    },
  };
};

export default Blog;
