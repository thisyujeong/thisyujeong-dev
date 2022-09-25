import {
  MDXPostContainer,
  MDXPostHead,
  ClipboardCopyBtn,
  MDXPostSection,
  MDXPostURL,
  MDXPostDate,
  MDXPostTitle,
  MDXPostContent,
} from './MDXPost.style';
import type { PropsWithChildren } from 'react';
import { MDXPostProps } from 'lib/types';
import convertDateUs from 'lib/convertDateUs';
import Toc from 'components/Toc';

const MDXPost = ({
  title,
  date,
  children,
  url,
  path,
}: PropsWithChildren<MDXPostProps>) => {
  return (
    <MDXPostContainer>
      <MDXPostHead>
        <Toc />
        {url && (
          <MDXPostURL>
            <a href={url} target="_blank" rel="noreferrer">
              문제 바로가기
            </a>
          </MDXPostURL>
        )}
        {date && <MDXPostDate>{convertDateUs(date)}</MDXPostDate>}
        <MDXPostTitle>{title}</MDXPostTitle>
        {path && (
          <ClipboardCopyBtn onClick={() => path && navigator.clipboard.writeText(path)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 682.66669 682.66669"
            >
              <path d="m565 640h-340c-41.359375 0-75-33.640625-75-75v-340c0-41.359375 33.640625-75 75-75h340c41.359375 0 75 33.640625 75 75v340c0 41.359375-33.640625 75-75 75zm-340-440c-13.785156 0-25 11.214844-25 25v340c0 13.785156 11.214844 25 25 25h340c13.785156 0 25-11.214844 25-25v-340c0-13.785156-11.214844-25-25-25zm-125 240h-25c-13.785156 0-25-11.214844-25-25v-340c0-13.785156 11.214844-25 25-25h340c13.785156 0 25 11.214844 25 25v23.75h50v-23.75c0-41.359375-33.640625-75-75-75h-340c-41.359375 0-75 33.640625-75 75v340c0 41.359375 33.640625 75 75 75h25zm0 0"></path>
            </svg>
          </ClipboardCopyBtn>
        )}
      </MDXPostHead>
      <MDXPostSection>
        <MDXPostContent>{children}</MDXPostContent>
      </MDXPostSection>
    </MDXPostContainer>
  );
};

export default MDXPost;
