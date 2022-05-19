import {
  MDXPostContainer,
  MDXPostDate,
  MDXPostTitle,
  MDXPostContent,
} from './MDXPost.style';
import type { PropsWithChildren } from 'react';
import { MDXPostProps } from 'lib/types';

const MDXPost = ({ title, date, children }: PropsWithChildren<MDXPostProps>) => {
  const convertDate = () => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  return (
    <MDXPostContainer>
      <MDXPostTitle>{title}</MDXPostTitle>
      <MDXPostDate>{convertDate()}</MDXPostDate>
      <MDXPostContent>{children}</MDXPostContent>
    </MDXPostContainer>
  );
};

export default MDXPost;
