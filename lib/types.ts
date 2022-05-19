import type { Blog } from 'contentlayer/generated';

export type Children = {
  children: React.ReactNode;
};

export type PostProps = {
  post: Blog;
};

export type PostTitleProps = {
  title: string;
  description: string;
};

export type PostCardProps = {
  post: Blog;
  slug: string;
};

export type MDXPostProps = {
  title: string;
  date: string;
};
