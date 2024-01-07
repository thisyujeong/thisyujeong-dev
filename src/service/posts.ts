import { Blog, allBlogs } from 'contentlayer/generated';
import { PostNextAndPrevious } from 'lib/types';

export async function getAllPosts(): Promise<Blog[]> {
  return allBlogs.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}

/**
 * 시리즈 태그 가져오기
 */
export async function getSeriesTags(): Promise<string[]> {
  const seriesPosts = allBlogs.filter((post) => post.series);

  const series = Array.from(
    new Set(seriesPosts.map((posts) => posts.series))
  ) as string[];

  return series;
}
/**
 * 시리즈 태그의 포스트 가져오기
 * @param series 시리즈 태그
 */
export async function getSeriesPosts(series: string): Promise<Blog[]> {
  return allBlogs
    .sort((a, b) => Number(new Date(a.date)) - Number(new Date(b.date)))
    .filter((post) => post.series === series);
}

/**
 * 특정 포스트 데이터 가져오기
 */
export async function getPostData(fileName: string): Promise<Blog> {
  const post = allBlogs.find((post) => post.slug === fileName);
  if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);
  return post;
}

/**
 * 이전 포스트, 다음 포스트 데이터 가져오기
 */
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
