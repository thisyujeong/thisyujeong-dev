import styled from '@emotion/styled';
import mq from 'styles/utils/mq';

export const TocContainer = styled.div`
  position: absolute;
  left: 100%;
  ${mq({
    display: ['block', 'none'],
  })}
`;

export const TocInnerContainer = styled.div`
  position: fixed;
  width: 210px;
  margin-top: 16px;
  margin-left: 20px;
  padding-left: 20px;
  /* border-left: 1px solid var(--text-base-40); */
`;

export const TocItem = styled.div`
  padding: 6px 0;
  a {
    display: block;
    line-height: 1.5em;
    color: var(--text-base) !important;
    font-size: 15px;
    opacity: 0.5;
    transition: all 0.1s ease;
    &:hover {
      opacity: 0.8;
      text-decoration: underline;
    }
  }

  &[data-depth='2'] {
    margin-left: 5px;
    padding-left: 10px;
    border-left: 1px solid var(--border-color);
  }

  &[data-active='true'] {
    a {
      color: var(--accent) !important;
      opacity: 1;
      &:hover {
        opacity: 0.8;
      }
    }
  }

  &:first-of-type {
    padding-top: 6px;
  }

  &:last-child {
    padding-bottom: 6px;
  }
`;
