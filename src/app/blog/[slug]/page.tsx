import BlogLayout from 'layouts/blog';
import { getPostData, getRecentlyPosts } from 'src/service/posts';

type Props = {
  params: { slug: string };
};

// export async function generateMetadata({ params: { slug } }: Props) {
//   const { title, description } = await getPostData(slug);
//   return {
//     title,
//     description,
//   };
// }

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  return <BlogLayout post={post} />;
}

export async function generateStaticParams() {
  const posts = await getRecentlyPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
