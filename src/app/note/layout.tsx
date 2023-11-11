import React from 'react';
import { genNotesTree } from '@/service/notes';
import NoteSidebar from 'components/Note/NoteSidebar';
import styles from './layout.module.scss';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const tree = await genNotesTree();

  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <NoteSidebar tree={tree} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Layout;
