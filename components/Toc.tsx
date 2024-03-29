'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { getIntersectionObserver } from 'lib/observer';
import styles from './Toc.module.scss';

const Toc = () => {
  const pathname = usePathname();
  const [currentId, setCurrentId] = useState<string>('');
  const [headingEls, setHeadingEls] = useState<Element[]>([]);

  useEffect(() => {
    const observer = getIntersectionObserver(setCurrentId);
    const headingElements = Array.from(document.querySelectorAll('h2, h3'));
    setHeadingEls(headingElements);

    headingElements.map((header) => {
      observer.observe(header);
    });
  }, [pathname]);

  return (
    <div className={styles.toc_container}>
      <div className={styles.toc_inner}>
        {headingEls.map((h, i) =>
          h.nodeName === 'H2' ? (
            <div
              key={i}
              data-depth="1"
              data-active={currentId === h.id ? true : false}
              className={`${styles.toc_item} ${currentId === h.id ? styles.active : ''}`}
            >
              <a href={`#${h.id}`}>{h.textContent}</a>
            </div>
          ) : (
            <div
              key={i}
              data-depth="2"
              className={`${styles.toc_item} ${currentId === h.id ? styles.active : ''}`}
            >
              <a href={`#${h.id}`}>{h.textContent}</a>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Toc;
