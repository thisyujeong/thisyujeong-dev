import React from 'react';
import type { Metadata } from 'next';
import _metadata from 'data/metadata';
import styles from '../layout.module.scss';
import Toc from 'components/Toc';

export const metadata: Metadata = {
  title: {
    template: `%s | ${_metadata.meta.title}`,
    default: 'Playground',
  },
  description: '이유정의 개인 프로젝트',
  openGraph: {
    ..._metadata.meta.openGraph,
    title: `Playground | ${_metadata.meta.title}`,
    description: '이유정의 개인 프로젝트',
    url: `${_metadata.meta.url}/playground`,
  },
};

const NoteLayout = async ({ children }: React.PropsWithChildren) => {
  return (
    <div className="section">
      <div className={styles.layout}>
        <div className={styles.content}>
          <div className={styles.content_inner}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default NoteLayout;
