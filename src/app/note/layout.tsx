import React from 'react';
import styles from './layout.module.scss';
import Toc from 'components/Toc';
import Footer from 'components/Footer';

const NoteLayout = async ({ children }: React.PropsWithChildren) => {
  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <div className={styles.content_inner}>
          {children}
          <div className={styles.content_footer}>
            <Footer />
          </div>
        </div>
        <div className={styles.toc_layer}>
          <Toc />
        </div>
      </div>
    </div>
  );
};

export default NoteLayout;
