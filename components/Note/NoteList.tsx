import React from 'react';
import { TreeNode } from 'lib/types';
import styles from './NoteList.module.scss';
import NoteItem from './NoteItem';

type Props = {
  notes: TreeNode;
};

const NoteList = ({ notes }: Props) => {
  return (
    <div className={styles.note_container}>
      <h4 id={notes.title} className={styles.note_head}>
        <span className={styles.title}>{notes.title}</span>
        <span className={styles.badge}>{`(${notes.children.length})`}</span>
        {/* <span className={styles.badge}>{notes.children.length}</span> */}
      </h4>
      <div className={styles.note_list}>
        {notes.children.map((item) => (
          <NoteItem key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
};

export default NoteList;
