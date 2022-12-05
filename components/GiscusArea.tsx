import Giscus from '@giscus/react';
import metadata from 'data/metadata';
import { GiscusContainer } from './GiscusArea.style';

const GiscusArea = ({ slug }: { slug: string }) => {
  return (
    <GiscusContainer>
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
    </GiscusContainer>
  );
};

export default GiscusArea;
