import { getIntersectionObserver } from 'lib/observer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { TocContainer, TocInnerContainer, TocItem } from './Toc.style';

const Toc = () => {
  const router = useRouter();
  const [currentId, setCurrentId] = useState<string>('');
  const [headingEls, setHeadingEls] = useState<Element[]>([]);

  useEffect(() => {
    const observer = getIntersectionObserver(setCurrentId);
    const headingElements = Array.from(document.querySelectorAll('h2, h3'));
    setHeadingEls(headingElements);
    headingElements.map((header) => {
      observer.observe(header);
    });
  }, [router]);

  return (
    <>
      <TocContainer>
        <TocInnerContainer>
          {headingEls.map((h, i) =>
            h.nodeName === 'H2' ? (
              <TocItem
                data-depth="1"
                key={i}
                data-active={currentId === h.id ? true : false}
              >
                <a href={`#${h.id}`}>{h.textContent}</a>
              </TocItem>
            ) : (
              <TocItem
                data-depth="2"
                key={i}
                data-active={currentId === h.id ? true : false}
              >
                <a href={`#${h.id}`}>{h.textContent}</a>
              </TocItem>
            )
          )}
        </TocInnerContainer>
      </TocContainer>
    </>
  );
};

const originPath = (asPath: string) => {
  asPath.split('#');
  return asPath[0];
};

export default Toc;
