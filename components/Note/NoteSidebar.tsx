import { TreeNode } from 'lib/types';
import React from 'react';
import NoteSidebarItem from './NoteSidebarItem';
import styles from './NoteSidebar.module.scss';

type Props = {
  tree: TreeNode[];
};

const NoteSidebar = ({ tree }: Props) => {
  return (
    <div className={styles.note_sidebar}>
      {tree.map((t) => (
        <NoteSidebarItem key={t.title} item={t} />
      ))}
    </div>
  );
};

export default NoteSidebar;
