import type { Blog } from 'contentlayer/generated';
import type { Note } from 'contentlayer/generated';
import type { CP } from 'contentlayer/generated';

/* Recet Title */
export type RecentTitleProps = {
  title: string;
  engTitle: string;
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
  date?: string;
  url?: string;
  path?: string;
};

/* Project */
export type Project = {
  title: string;
  description: string;
  url: string;
  image: string;
};

/* Note */
export type NoteLayout = {
  note: Note;
  tree: TreeNode[];
};

export type TreeNode = {
  title: string;
  date: string;
  urlPath: string;
  children: TreeNode[];
};

export type TreeRoot = TreeNode[];

export type PathSegment = { pathName: string };

/* ToC */
export type TableOfContent = {
  index: number;
  text: string;
  marginLeft: number;
  offsetTop: number;
};

/* CP */
export type Post = {
  post: CP;
};

export type CPSection = {
  posts: CP[];
  title: string;
};
