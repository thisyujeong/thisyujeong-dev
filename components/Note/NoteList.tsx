import React from 'react';
import styles from './NoteList.module.scss';
import { TreeNode } from 'lib/types';
import NoteItem from './NoteItem';

type Props = {
  notes: TreeNode;
};

const NoteList = ({ notes }: Props) => {
  return (
    <div className={styles.note_list}>
      <h4 id={notes.title} className={styles.note_list_title}>
        <span>{notes.title}</span>
      </h4>
      {notes.children.map((item) => (
        <NoteItem key={item.title} item={item} />
      ))}
    </div>
  );
};

export default NoteList;
