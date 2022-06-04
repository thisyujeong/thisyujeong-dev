import styled from '@emotion/styled';
import mq from 'styles/utils/mq';

export const NoteContainer = styled.div`
  position: relative;
  display: flex;

  ${mq({
    flexDirection: ['row', 'row', 'column'],
  })}
`;
