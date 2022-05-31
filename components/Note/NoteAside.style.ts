import styled from '@emotion/styled';
import mq from 'styles/utils/mq';

export const NoteAsideContainer = styled.div`
  max-height: calc(100vh - 56px);
  height: 100%;
  z-index: 10;
  background: #fff;

  ${mq({
    display: ['block', 'block', 'none'],
    position: ['absolute', 'relative'],
    right: ['100%', 'unset'],
    left: ['-240px', '0'],
  })}
`;

export const NoteAsideInnerContainer = styled.div`
  width: 230px;
  padding: 8px 0;
  padding-right: 14px;
  overflow-y: auto;

  ${mq({
    position: ['sticky', 'sticky'],
    top: ['76px', 'unset'],
  })}
`;
