import React from 'react';
import styles from './layout.module.scss';
import Toc from 'components/Toc';

/** TODO: SEO, GiscusArea */

const BlogLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      {/* <NextSeo
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
      /> */}
      <div className={styles.layout}>
        <div className={styles.content}>
          <div className={styles.content_inner}>
            {children}
            {/* <GiscusArea slug={post.slug} /> */}
          </div>
          <div className={styles.toc_layer}>
            <Toc />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogLayout;
