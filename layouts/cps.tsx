import Container from 'components/Container';
import GiscusArea from 'components/GiscusArea';
import MDXPost from 'components/Post/MDXPost';
import metadata from 'data/metadata';
import { Post } from 'lib/types';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { NextSeo } from 'next-seo';

const CPLayout = ({ post }: Post) => {
  const MDXComponent = useMDXComponent(post.body.code);
  console.log('post', post);
  return (
    <Container>
      <NextSeo
        title={`${post.number} ${post.title}`}
        description={`${post.from} ${post.number} ${post.title} | Competitive Programming Notes`}
        canonical={`${metadata.meta.url}/${post.url_path}`}
      />
      <MDXPost title={`${post.number} ${post.title}`} url={post.url}>
        <MDXComponent />
      </MDXPost>
      <GiscusArea slug={post.url_path} />
    </Container>
  );
};

export default CPLayout;
