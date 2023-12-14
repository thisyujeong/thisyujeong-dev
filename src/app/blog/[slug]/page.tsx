import NextAndPrevPost from 'components/NextAndPrevPost';
import PostContent from 'components/Post/PostContent';
import { getAllPosts, getNextAndPreviousPost, getPostData } from 'src/service/posts';

type Props = {
  params: { slug: string };
};

// TODO:
// export async function generateMetadata({ params: { slug } }: Props) {
//   const { title, description } = await getPostData(slug);
//   return {
//     title,
//     description,
//   };
// }

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { next, prev } = await getNextAndPreviousPost(slug);

  return (
    <>
      <PostContent post={post} />
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
