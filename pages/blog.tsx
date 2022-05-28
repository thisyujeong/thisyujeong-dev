import { NextSeo } from 'next-seo';
import { allBlogs } from 'contentlayer/generated';
import Container from '../components/Container';
import metadata from 'data/metadata';
import PostCard from '../components/Post/PostCard';
import Title from 'components/Title';
import { InferGetStaticPropsType } from 'next';

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <NextSeo
        title="Blog"
        description="블로그 설명"
        canonical={`${metadata.meta.url}/blog`}
        openGraph={{ url: `${metadata.meta.url}/blog` }}
      />

      <Title title={'blog'} description="지식과 기술들을 공유 및 정리합니다." />
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
