import React from 'react';
import Giscus from '@giscus/react';
import metadata from 'data/metadata';
import { GiscusContainer } from './GiscusArea.style';

const GiscusArea = ({ slug }: { slug: string }) => {
  return (
    <GiscusContainer>
      <Giscus
        repo={`${metadata.giscus.id}/${metadata.giscus.repo}`}
        repoId={`${process.env.GISCUS_REPOSITORY_ID}`}
        category={metadata.giscus.category}
        categoryId={process.env.GISCUS_CATEGORY_ID}
        mapping="specific"
        term={slug}
        reactionsEnabled="1"
        emitMetadata="0"
        theme="light"
      />
    </GiscusContainer>
  );
};

export default GiscusArea;
