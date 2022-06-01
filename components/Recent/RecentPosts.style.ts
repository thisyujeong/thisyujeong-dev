import styled from '@emotion/styled';
import mq from 'styles/utils/mq';

export const PostCard = styled.div`
  margin: 0px -14px;
  padding: 8px 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    background: var(--hover-base);

    h2 {
      color: var(--accent);
      padding-left: 20px;

      &:before {
        opacity: 1;
        color: var(--accent);
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
    border-right: 2px solid var(--accent);
    border-bottom: 2px solid var(--accent);
    margin-right: 10px;
    transition: 0.2s ease;
    transform: translateY(-50%) rotate(-45deg);
    opacity: 0;
  }

  ${mq({
    fontSize: ['22px', '22px', '20px'],
  })}
`;
export const PostDesc = styled.div`
  font-size: 14px;
  opacity: 0.8;
`;
