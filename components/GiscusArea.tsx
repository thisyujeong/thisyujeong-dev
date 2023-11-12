'use client';
import Giscus from '@giscus/react';
import metadata from 'data/metadata';
import styles from './GiscusArea.module.scss';

const GiscusArea = ({ slug }: { slug: string }) => {
  return (
    <div className={styles.giscus_container}>
      <Giscus
        repo={`${metadata.giscus.id}/${metadata.giscus.repo}`}
        repoId={`${process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID}`}
        category={metadata.giscus.category}
        categoryId={`${process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID}`}
        mapping="title"
        term={slug}
        inputPosition="top"
        reactionsEnabled="1"
        emitMetadata="0"
        theme="dark_dimmed"
      />
    </div>
  );
};

export default GiscusArea;
