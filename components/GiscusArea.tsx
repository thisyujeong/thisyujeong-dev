'use client';
import Giscus from '@giscus/react';
import metadata from 'data/metadata';
import styles from './GiscusArea.module.scss';

const GiscusArea = ({ slug }: { slug: string }) => {
  return (
    <div className={styles.giscus_container}>
      <Giscus
        id="comments"
        repo={`${metadata.giscus.id}/${metadata.giscus.repo}`}
        repoId={metadata.giscus.repoId}
        category={metadata.giscus.category}
        categoryId={metadata.giscus.categoryId}
        term={slug}
        mapping="specific"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
        loading="lazy"
      />
    </div>
  );
};

export default GiscusArea;
