import { NextSeo } from 'next-seo';
import { allBlogs } from 'contentlayer/generated';
import Container from '../components/Container';
import metadata from 'data/metadata';
import PostCard from '../components/Post/PostCard';
import Title from 'components/Title';
import { InferGetStaticPropsType } from 'next';
import { useState } from 'react';
import Search from 'components/Post/Search';

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [searchValue, setSearchValue] = useState('');

  const rearchResults = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Container>
      <NextSeo
        title="Blog"
        description="블로그 설명"
        canonical={`${metadata.meta.url}/blog`}
        openGraph={{ url: `${metadata.meta.url}/blog` }}
      />
      <Title title={'blog'} description="지식과 기술들을 공유 및 정리합니다." />
      <Search
        onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
      />
      {rearchResults.map((post, idx) => (
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
