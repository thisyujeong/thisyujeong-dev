import styled from '@emotion/styled';
import mq from 'styles/utils/mq';

export const NoteAsideContainer = styled.div`
  position: absolute;
  right: 100%;
  left: -240px;

  ${mq()({
    position: ['relative', 'absolute'],
    right: ['unset', '100%'],
    left: ['unset', '-240px'],
  })}
`;

export const NoteAsideInnerContainer = styled.div`
  position: fixed;
  width: 240px;
  padding: 8px 0;
  padding-right: 24px;

  ${mq()({
    position: ['sticky', 'absolute'],
    top: ['96px', 'unset'],
  })}
`;
