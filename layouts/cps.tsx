import Container from 'components/Container';
import MDXPost from 'components/Post/MDXPost';
import { Post } from 'lib/types';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { NextSeo } from 'next-seo';

const CPLayout = ({ post }: Post) => {
  const MDXComponent = useMDXComponent(post.body.code);
  return (
    <Container>
      <NextSeo />
      <MDXPost title={post.title}>
        <MDXComponent />
      </MDXPost>
    </Container>
  );
};

export default CPLayout;
