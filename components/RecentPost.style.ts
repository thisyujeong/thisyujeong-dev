import styled from '@emotion/styled';

export const RecentPostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;
`;

export const RecentPostTitle = styled.h1`
  font-size: 36px;
  font-weight: 500;
`;

export const MoreTitle = styled.div`
  margin-bottom: 10px;
  a {
    color: #fb673e;
    opacity: 0.7;
    transition: opacity 0.2s ease;
    cursor: pointer;

    &:hover {
      opacity: 1;
      text-decoration: underline;
    }
  }
`;

export const PostCard = styled.div`
  margin: 0px -14px;
  padding: 8px 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    background: #f5f5f7;

    h2 {
      color: #fb673e;
      padding-left: 20px;

      &:before {
        opacity: 1;
        color: #fb673e;
      }
    }
  }

  &:active {
    opacity: 1;
  }
`;

export const PostTitle = styled.h2`
  position: relative;
  font-size: 22px;
  line-height: 1.57;
  transition: 0.2s ease;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 6px;
    height: 6px;
    border-right: 2px solid #fb673e;
    border-bottom: 2px solid #fb673e;
    margin-right: 10px;
    transition: 0.2s ease;
    transform: translateY(-50%) rotate(-45deg);
    opacity: 0;
  }
`;
export const PostDesc = styled.div`
  font-size: 14px;
  opacity: 0.8;
`;
