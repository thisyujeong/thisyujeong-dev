import styled from '@emotion/styled';

export const RecentTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 12px;
  margin-top: 32px;
`;

export const RecentTitleText = styled.h2`
  font-size: 28px;
  font-weight: 500;
  text-transform: capitalize;
`;

export const RecentMore = styled.div`
  margin-bottom: 10px;
  a {
    color: #fb673e;
    opacity: 0.7;
    padding: 0 6px;
    transition: opacity 0.2s ease;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      opacity: 1;
      text-decoration: underline;
    }
  }
`;
