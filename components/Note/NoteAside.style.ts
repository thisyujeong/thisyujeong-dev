import styled from '@emotion/styled';
import mq from 'styles/utils/mq';
import { css } from '@emotion/react';

const dynamicVisible = ({ visible }: { visible: boolean }) => {
  if (visible) {
    return css`
      display: flex;
      border-left: 5px solid var(--bg-sub);
      border-right: none;
      padding-left: 10px;
      padding-right: 5px;
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
    position: ['absolute', 'relative'],
    right: ['100%', 'unset'],
    left: ['-240px', '0'],
    marginLeft: [0, '-10px', 0],
  })}
  ${dynamicVisible}
`;

export const NoteAsideInnerContainer = styled.div`
  overflow-y: auto;
  max-height: calc(100vh - 56px);

  ${mq({
    position: ['sticky', 'sticky', 'relative'],
    top: ['76px', 'unset'],
    width: [230, 230, '100%'],
    padding: ['8px 14px 8px 0', '8px 14px 8px 0', 0],
    maxHeight: ['calc(100vh - 56px)', 'calc(100vh - 56px)', 'calc(50vh - 56px)'],
  })}
`;

export const NoteAsideAccordion = styled.div`
  text-align: center;
  margin-bottom: 8px;
  border-bottom: 1px solid var(--text-base-20);
  padding: 10px 0;
  margin-top: -10px;
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
