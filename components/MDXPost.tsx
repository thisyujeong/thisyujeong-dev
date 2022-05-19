import { MDXPostContainer, MDXPostDate, MDXPostTitle } from './MDXPost.style';

const MDXPost = ({ title, date, children }) => {
  return (
    <MDXPostContainer>
      <MDXPostTitle>{title}</MDXPostTitle>
      <MDXPostDate>{date}</MDXPostDate>
      {children}
    </MDXPostContainer>
  );
};

export default MDXPost;
