import React from 'react';
import Toc from 'components/Toc';
import GiscusArea from 'components/GiscusArea';
import styles from '../../layout.module.scss';

type Props = {
  params: { slug: string };
};

const BlogLayout = ({ children, params: { slug } }: React.PropsWithChildren<Props>) => {
  return (
    <section className="section">
      <div className={styles.layout}>
        <div className={styles.content}>
          <div className={styles.content_inner}>
            {children}
            <GiscusArea slug={slug} />
          </div>
          <div className={styles.toc_layer}>
            <Toc />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogLayout;
