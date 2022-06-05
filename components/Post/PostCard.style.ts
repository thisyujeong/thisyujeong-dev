import styled from '@emotion/styled';

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 14px;
  margin: 12px 0;
  transition: opacity 0.2s ease;
  cursor: pointer;

  h1 {
    position: relative;
    font-size: 24px;
    line-height: 1.57;
    transition: 0.2s ease;
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 8px;
      height: 8px;
      border-right: 2px solid var(--accent);
      border-bottom: 2px solid var(--accent);
      margin-right: 10px;
      transition: 0.2s ease;
      transform: translateY(-50%) rotate(-45deg);
      opacity: 0;
    }
  }

  p {
    font-size: 16px;
    opacity: 0.6;
  }
  span {
    margin-top: 8px;
    font-size: 14px;
    opacity: 0.4;
  }
  @media screen and (min-width: 577px) {
    &:hover {
      opacity: 0.8;
      background: var(--hover-base);
      h1 {
        color: var(--accent);
        padding-left: 28px;
        &:before {
          opacity: 1;
          color: var(--accent);
        }
      }
    }

    &:active {
      opacity: 1;
    }
  }
`;
