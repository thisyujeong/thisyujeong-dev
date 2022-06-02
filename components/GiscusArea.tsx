import Giscus from '@giscus/react';
import metadata from 'data/metadata';
import { useEffect, useState } from 'react';
import { GiscusContainer } from './GiscusArea.style';

const GiscusArea = ({ slug }: { slug: string }) => {
  const [themeMode, setThemeMode] = useState();

  useEffect(() => {
    setThemeMode(window.localStorage.theme || document.body.dataset.theme);
  }, [themeMode]);

  return (
    <GiscusContainer>
      <Giscus
        repo={`${metadata.giscus.id}/${metadata.giscus.repo}`}
        repoId={`${process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID}`}
        category={metadata.giscus.category}
        categoryId={`${process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID}`}
        mapping="specific"
        term={slug}
        inputPosition="top"
        reactionsEnabled="1"
        emitMetadata="0"
        theme={themeMode}
      />
    </GiscusContainer>
  );
};

export default GiscusArea;
