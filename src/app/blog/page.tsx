import PostCard from 'components/Post/PostCard';
import React from 'react';
import { getAllPosts } from 'src/service/posts';

/* TODO: SEO */

const Blog = async () => {
  const posts = await getAllPosts();

  return (
    <section>
      {/* 
        TODO 검색 개선
        <Search
          onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchValue(e.target.value)
          }
        />
        {rearchResults.map((post, idx) => (
          <PostCard post={post} key={idx} slug={post.slug} />
        ))} 
      */}
      {posts.map((post, idx) => (
        <PostCard post={post} key={idx} slug={post.slug} />
      ))}
    </section>
  );
};

export default Blog;
