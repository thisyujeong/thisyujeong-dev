import { getIntersectionObserver } from 'lib/observer';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { TocContainer, TocItem } from './Toc.style';

const Toc = () => {
  const router = useRouter();
  const [currentId, setCurrentId] = useState<string>('');
  const [headingEls, setHeadingEls] = useState<Element[]>([]);

  useEffect(() => {
    const observer = getIntersectionObserver(setCurrentId);
    const headingElements = Array.from(document.querySelectorAll('h2, h3, h4, h5, h6'));
    setHeadingEls(headingElements);
    headingElements.map((header) => {
      observer.observe(header);
    });
    console.log(headingElements);
  }, [router]);
  return (
    <>
      <TocContainer>
        {headingEls.map((h, i) =>
          h.nodeName === 'H2' ? (
            <TocItem
              data-depth="1"
              key={i}
              data-active={currentId === h.id ? true : false}
            >
              {h.innerText}
            </TocItem>
          ) : (
            <TocItem
              data-depth="2"
              key={i}
              data-active={currentId === h.id ? true : false}
            >
              {h.id}
            </TocItem>
          )
        )}
      </TocContainer>
    </>
  );
};

const originPath = (asPath: string) => {
  asPath.split('#');
  return asPath[0];
};

export default Toc;
