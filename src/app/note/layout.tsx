import React from 'react';
import type { Metadata } from 'next';
import _metadata from 'data/metadata';
import styles from './layout.module.scss';
import Toc from 'components/Toc';

export const metadata: Metadata = {
  title: {
    template: `%s | ${_metadata.meta.title}`,
    default: 'Note',
  },
  description: '배움을 기록하는 노트',
  openGraph: {
    ..._metadata.meta.openGraph,
    title: `Note | ${_metadata.meta.title}`,
    description: '배움을 기록하는 노트',
    url: `${_metadata.meta.url}/note`,
  },
};

const NoteLayout = async ({ children }: React.PropsWithChildren) => {
  return (
    <div className="section">
      <div className={styles.layout}>
        <div className={styles.content}>
          <div className={styles.content_inner}>{children}</div>
          <div className={styles.toc_layer}>
            <Toc />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteLayout;
