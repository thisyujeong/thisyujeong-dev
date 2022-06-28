import styled from '@emotion/styled';

export const TitleContainer = styled.div`
  margin-bottom: 32px;
  text-align: center;

  h1 {
    margin-bottom: 4px;
    font-size: 38px;
    text-transform: capitalize;
    &:before,
    &:after {
      content: '"';
      margin: 0 0.2em;
      opacity: 0.2;
    }
  }

  p {
    font-size: 16px;
    opacity: 0.5;
  }
`;
