import { allCPs } from 'contentlayer/generated';
import CPLayout from 'layouts/cps';
import { PathSegment } from 'lib/types';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

const CPPostPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <CPLayout post={post} />;
};

export const getStaticPaths = async () => {
  const paths = allCPs.map((cp) => ({
    params: {
      slug: cp.pathSegments.map((_: PathSegment) => _.pathName),
    },
  }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const pagePath = params.slug.join('/');
  const post = allCPs.find(
    (_) => _.pathSegments.map((_: PathSegment) => _.pathName).join('/') === pagePath
  )!;
  return {
    props: { post },
  };
};

export default CPPostPage;
