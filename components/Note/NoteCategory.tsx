import React from 'react';
import { TreeNode } from 'lib/types';
import styles from './NoteCategory.module.scss';

type Props = {
  tree: TreeNode[];
};

const NoteCategory = ({ tree }: Props) => {
  return (
    <div className={styles.category_container}>
      <h4 className={styles.category_title}>카테고리</h4>
      <div className={styles.category_list}>
        {tree.map((notes) => (
          <a href={`#${notes.title}`} className={styles.category_item} key={notes.title}>
            {notes.title}
            <sup>{`(${notes.children.length})`}</sup>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NoteCategory;
