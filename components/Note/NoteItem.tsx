import React from 'react';
import Link from 'next/link';
import { TreeNode } from 'lib/types';
import convertDateUs from 'lib/convertDateUs';
import styles from './NoteItem.module.scss';

type Props = {
  item: TreeNode;
};

const NoteItem = ({ item }: Props) => {
  return (
    <Link href={item.urlPath} passHref className={styles.note_item}>
      <div className={styles.note_title}>{item.title}</div>
      <div className={styles.note_date}>{convertDateUs(item.date)}</div>
    </Link>
  );
};

export default NoteItem;
