import type { Blog } from 'contentlayer/generated';

/* Recet Title */
export type RecentTitleProps = {
  title: string;
  path: string;
};

/* Blog */
export type Children = {
  children: React.ReactNode;
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

/* Project */
export type Project = {
  title: string;
  description: string;
  url: string;
  image: string;
};
