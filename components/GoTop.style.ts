import styled from '@emotion/styled';
import mq from 'styles/utils/mq';
import { css } from '@emotion/react';

const dynamicVisible = ({ visible }: { visible: boolean }) => {
  if (visible) {
    return css`
      opacity: 1;
    `;
  } else {
    return css`
      display: 0;
    `;
  }
};

export const GoTopContainer = styled.div`
  position: relative;
  text-align: center;
  padding: 4px 0;
  margin-top: 10px;
  background: var(--hover-base);
  border-radius: 5px;
  width: 90px;
  margin: 20px auto 0;

  span {
    vertical-align: middle;
    color: var(--text-base-70);
  }

  svg {
    margin-left: 6px;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    path {
      fill: var(--text-base-70);
    }
  }

  ${mq({
    display: ['none', 'none', 'block'],
  })}

  ${dynamicVisible}
`;
