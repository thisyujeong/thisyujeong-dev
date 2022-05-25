import {
  MDXPostContainer,
  MDXPostDate,
  MDXPostTitle,
  MDXPostContent,
} from './MDXPost.style';
import type { PropsWithChildren } from 'react';
import { MDXPostProps } from 'lib/types';
import convertDateUs from 'lib/convertDateUs';
import Toc from 'components/Toc';

const MDXPost = ({ title, date, children }: PropsWithChildren<MDXPostProps>) => {
  return (
    <MDXPostContainer>
      <Toc />
      <MDXPostTitle>{title}</MDXPostTitle>
      <MDXPostDate>{convertDateUs(date)}</MDXPostDate>
      <MDXPostContent>{children}</MDXPostContent>
    </MDXPostContainer>
  );
};

export default MDXPost;
