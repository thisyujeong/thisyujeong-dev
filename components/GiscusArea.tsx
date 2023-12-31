'use client';
import { useEffect, useRef } from 'react';
import metadata from 'data/metadata';
import styles from './GiscusArea.module.scss';

const GiscusArea = ({ slug }: { slug: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('src', 'https://giscus.app/client.js');
    script.setAttribute('data-repo', `${metadata.giscus.id}/${metadata.giscus.repo}`);
    script.setAttribute('data-repo-id', metadata.giscus.repoId);
    script.setAttribute('data-category', metadata.giscus.category);
    script.setAttribute('data-category-id', metadata.giscus.categoryId);
    script.setAttribute('data-mapping', 'specific');
    script.setAttribute('data-term', slug);
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('data-loading', 'lazy');
    script.setAttribute('crossorigin', 'anonymous');

    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme') || 'light';
      script.setAttribute('data-theme', theme);
    }

    try {
      ref.current?.appendChild(script);
    } catch (error) {
      console.error('Error while rendering giscus widget.', error);
    }
  }, [slug]);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key) changeGiscusTheme(event.key);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const changeGiscusTheme = (theme: string) => {
    const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
    iframe?.contentWindow?.postMessage(
      {
        giscus: {
          setConfig: {
            theme: theme,
          },
        },
      },
      'https://giscus.app'
    );
  };
  return <div ref={ref} className={styles.giscus_container} />;
};

export default GiscusArea;
