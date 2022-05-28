import styled from '@emotion/styled';
import mq from 'styles/utils/mq';

export const TocContainer = styled.div`
  position: absolute;
  left: 100%;

  ${mq()({
    display: ['none', 'block'],
  })}
`;

export const TocInnerContainer = styled.div`
  position: fixed;
  width: 210px;
  margin-top: 16px;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #2c3e5040;
`;

export const TocItem = styled.div`
  margin: 6px 0;
  a {
    display: block;
    line-height: 1.5em;
    color: #2c3e50 !important;
    color: #2c3e50 !important;
    font-size: 14px;
    opacity: 0.5;
    transition: all 0.1s ease;
    &:hover {
      opacity: 0.8;
      text-decoration: underline;
    }
  }

  &[data-depth='2'] {
    padding-left: 20px;
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

  &:first-child {
    padding-top: 6px;
  }

  &:last-child {
    padding-bottom: 6px;
  }
`;
