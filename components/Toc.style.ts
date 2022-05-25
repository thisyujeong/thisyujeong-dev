import styled from '@emotion/styled';

export const TocContainer = styled.div`
  position: absolute;
  left: 100%;
`;

export const TocInnerContainer = styled.div`
  position: fixed;
  width: 180px;
  margin-top: 16px;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #2c3e5040;
`;

export const TocItem = styled.div`
  a {
    display: block;
    line-height: 2;
    color: #2c3e50;
    font-size: 14px;
    opacity: 0.6;
    &:hover {
      opacity: 1;
      color: #2c3e50;
      text-decoration: none;
    }
  }

  &[data-depth='2'] {
    padding-left: 20px;
  }

  &[data-active='true'] {
    a {
      color: #fb673e;
      opacity: 1;
      &:hover {
        opacity: 0.8;
      }
    }
  }

  &:first-child {
    padding-top: 6px;
  }

  &:last-child {
    padding-bottom: 6px;
  }
`;
