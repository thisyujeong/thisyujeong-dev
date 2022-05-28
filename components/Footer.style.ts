import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  height: 112px;
  padding: 24px 12px;
  width: 100%;
  margin: 0 auto;
  border-top: 1px solid #00000016;
`;

export const FooterInner = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

export const SocialContainer = styled.div`
  a {
    display: inline-block;
    margin: 0 4px;
    opacity: 0.5;
    &:hover {
      opacity: 0.7;
    }
  }
`;
export const Copyright = styled.p`
  font-size: 12px;
  color: #2c3e50;
  opacity: 0.5;
`;

export const BlogInfo = styled.a`
  font-size: 12px;
  color: #2c3e50;
  opacity: 0.5;
  &:hover {
    opacity: 0.7;
    text-decoration: underline;
  }
`;
