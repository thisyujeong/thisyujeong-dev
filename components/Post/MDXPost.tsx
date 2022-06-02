import {
  MDXPostContainer,
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

const MDXPost = ({ title, date, children, url }: PropsWithChildren<MDXPostProps>) => {
  return (
    <MDXPostContainer>
      <MDXPostSection>
        <Toc />
        <MDXPostTitle>{title}</MDXPostTitle>
        {url && (
          <MDXPostURL>
            <span>문제 바로가기 </span>
            <a href={url} target="_blank" rel="noreferrer">
              {url}
            </a>
          </MDXPostURL>
        )}
        {date && <MDXPostDate>{convertDateUs(date)}</MDXPostDate>}
        <MDXPostContent>{children}</MDXPostContent>
      </MDXPostSection>
    </MDXPostContainer>
  );
};

export default MDXPost;
