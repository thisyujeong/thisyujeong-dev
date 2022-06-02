import styled from '@emotion/styled';
import mq from 'styles/utils/mq';

export const NoteAsideContainer = styled.div`
  height: 100%;
  z-index: 10;
  ${mq({
    display: ['block', 'block', 'none'],
    position: ['absolute', 'relative'],
    right: ['100%', 'unset'],
    left: ['-240px', '0'],
    marginLeft: [0, '-10px', 0],
  })}
`;

export const NoteAsideInnerContainer = styled.div`
  width: 230px;
  padding: 8px 0;
  padding-right: 14px;
  overflow-y: auto;
  max-height: calc(100vh - 56px);

  ${mq({
    position: ['sticky', 'sticky'],
    top: ['76px', 'unset'],
  })}
`;
