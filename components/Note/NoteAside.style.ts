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
    top: ['unset', '76px', '-20px'],
    right: ['100%', 'unset'],
    left: ['-260px', '0'],
    margin: [0, '0 0 0 -10px', '0 -22px'],
    borderTop: ['none', 'none', '1px solid #2c3e5020'],
  })}
  ${dynamicVisible}
`;

export const NoteAsideInnerContainer = styled.div`
  overflow-y: auto;

  ${mq({
    position: ['fixed', 'sticky', 'relative'],
    top: ['76px', 'unset'],
    width: [250, 250, '100%'],
    padding: ['8px 14px 8px 0', '8px 14px 8px 0', 0],
    maxHeight: ['calc(100vh - 76px)', 'calc(100vh - 238px)', 'calc(50vh - 56px)'],
  })}

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NoteAsideAccordion = styled.div`
  text-align: center;
  margin: -20px -22px 12px;
  padding: 12px 0;
  border-top: 1px solid var(--text-base-20);
  border-bottom: 1px solid var(--text-base-20);
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
