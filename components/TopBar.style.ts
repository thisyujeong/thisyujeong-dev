import styled from '@emotion/styled';
import mq from '../styles/utils/mq';
import { css } from '@emotion/react';

export const TopBarContainer = styled.header`
  position: sticky;
  height: 46px;
  width: 100%;
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255, 255, 255, 0.72);

  .container {
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 22px;
  }

  h1 {
    font-size: 20px;
    font-weight: 600;
    line-height: 46px;
  }
`;
