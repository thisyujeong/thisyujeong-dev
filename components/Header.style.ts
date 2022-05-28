import styled from '@emotion/styled';
import mq from '../styles/utils/mq';
import { css } from '@emotion/react';

export const HeaderContainer = styled.header`
  display: block;
  position: sticky;
  top: 0;
  height: 56px;
  width: 100%;
  backdrop-filter: blur(7px);
  background-color: rgba(255, 255, 255, 0.72);
  border-bottom: 1px solid #00000016;
  z-index: 100;

  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 a {
    color: #2c3e50;
    font-size: 20px;
    font-weight: 600;
    line-height: 56px;
  }
`;
