import {
  ComputedFields,
  defineDocumentType,
  makeSource,
  LocalDocument,
} from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import highlight from 'rehype-highlight';
import { DocumentGen } from 'contentlayer/core';

export const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
};

export const urlFromFilePath = (doc: DocumentGen): string => {
  return doc._raw.flattenedPath.replace(/pages\/?/, '');
};

export const Note = defineDocumentType(() => ({
  name: 'Note',
  filePathPattern: `note/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
  },
  computedFields: {
    url_path: {
      type: 'string',
      description:
        'The URL path of this page relative to site root. For example, the site root page would be "/", and doc page would be "docs/getting-started/"',
      resolve: urlFromFilePath,
    },
    pathSegments: {
      type: 'json',
      resolve: (doc) =>
        doc._raw.flattenedPath
          .split('/')
          // skip `/docs` prefix
          .slice(1)
          .map((pathName) => {
            return { pathName };
          }),
    },
  },
}));

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blog/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    description: { type: 'string', required: true },
    thumbnailUrl: { type: 'string', required: true },
    tags: {
      type: 'list',
      required: true,
      of: { type: 'string' },
      default: [],
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Blog, Note],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      highlight,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});
