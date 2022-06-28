import GiscusArea from 'components/GiscusArea';
import type { Blog } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { NextSeo } from 'next-seo';
import Container from '../components/Container';
import MDXPost from '../components/Post/MDXPost';
import metadata from '../data/metadata';

const BlogLayout = ({ post }: { post: Blog }) => {
  const MDXComponent = useMDXComponent(post.body.code);
  return (
    <Container>
      <NextSeo
        title={`${post.title}`}
        description={post.description}
        canonical={`${metadata.meta.url}/blog/${post.slug}`}
        openGraph={{
          type: 'article',
          url: `${metadata.meta.url}/blog/${post.slug}`,
          article: {
            publishedTime: new Date(post.date).toISOString(),
            tags: [...post.tags, 'frontend', 'develop'],
          },
        }}
      />
      <MDXPost
        title={post.title}
        date={post.date}
        path={`${metadata.meta.url}/blog/${post.slug}`}
      >
        <MDXComponent />
      </MDXPost>
      <GiscusArea slug={post.slug} />
    </Container>
  );
};

export default BlogLayout;
