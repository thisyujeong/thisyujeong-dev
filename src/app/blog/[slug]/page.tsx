import NextAndPrevPost from 'components/NextAndPrevPost';
import PostContent from 'components/Post/PostContent';
import metadata from 'data/metadata';
import {
  getAllPosts,
  getNextAndPreviousPost,
  getPostData,
  getSeriesPosts,
} from 'src/service/posts';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const { title, description, tags } = await getPostData(slug);
  return {
    title,
    description,
    keywords: [...tags, ...metadata.meta.keywords],
    openGraph: {
      ...metadata.meta.openGraph,
      title: title,
      description: description,
      url: `${metadata.meta.url}/blog/${slug}`,
    },
  };
}

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const series = post.series ? await getSeriesPosts(post.series) : undefined;
  const { next, prev } = await getNextAndPreviousPost(slug);

  return (
    <>
      <PostContent post={post} series={series} />
      <NextAndPrevPost next={next} prev={prev} />
    </>
  );
}

// 동적라우트 - 특정 페이지 미리 생성
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
