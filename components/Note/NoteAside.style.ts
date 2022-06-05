import styled from '@emotion/styled';
import mq from 'styles/utils/mq';
import { css } from '@emotion/react';

const dynamicVisible = ({ visible }: { visible: boolean }) => {
  if (visible) {
    return css`
      display: flex;
      border-left: 5px solid var(--bg-sub);
    `;
  } else {
    return css`
      @media (max-width: 750px) {
        display: none;
        border-left: none;
      }
    `;
  }
};

export const NoteAsideContainer = styled.div`
  height: 100%;
  z-index: 10;
  ${mq({
    display: ['block', 'block', 'fixed'],
    position: ['absolute', 'sticky', 'relative'],
    top: ['unset', '76px', 'unset'],
    right: ['100%', 'unset'],
    left: ['-240px', '0'],
    margin: [0, '0 0 0 -10px', '0 -18px'],
    paddingBottom: [0, 0, 28],
  })}
  ${dynamicVisible}
`;

export const NoteAsideInnerContainer = styled.div`
  overflow-y: auto;

  ${mq({
    position: ['sticky', 'sticky', 'relative'],
    top: ['76px', 'unset'],
    width: [230, 230, '100%'],
    padding: ['8px 14px 8px 0', '8px 14px 8px 0', 0],
    maxHeight: ['calc(100vh - 168px)', 'calc(100vh - 168px)', 'calc(50vh - 56px)'],
  })}
`;

export const NoteAsideAccordion = styled.div`
  text-align: center;
  margin: -20px -22px 12px;
  padding: 6px 0;
  border-bottom: 2px solid var(--text-base-20);
  background: var(--hover-base);
  display: block;
  z-index: 20;
  cursor: pointer;
  span {
    color: var(--text-base-70);
    vertical-align: middle;
  }
  svg {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin-left: 8px;
    path {
      fill: var(--text-base-70);
    }
  }

  ${mq({
    display: ['none', 'none', 'block'],
  })}
`;
