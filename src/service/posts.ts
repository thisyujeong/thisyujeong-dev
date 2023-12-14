import { Blog, allBlogs } from 'contentlayer/generated';
import { PostNextAndPrevious } from 'lib/types';

export async function getAllPosts(): Promise<Blog[]> {
  return allBlogs.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}

export async function getPostData(fileName: string): Promise<Blog> {
  const post = allBlogs.find((post) => post.slug === fileName);
  if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);
  return post;
}

export async function getNextAndPreviousPost(slug: string): Promise<PostNextAndPrevious> {
  const sortedBlogs = allBlogs.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  const currentIndex = sortedBlogs.findIndex((blog) => blog.slug === slug);

  return {
    next: sortedBlogs[currentIndex - 1],
    prev: sortedBlogs[currentIndex + 1],
  };
}
