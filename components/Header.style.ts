import styled from '@emotion/styled';
import mq from '../styles/utils/mq';

export const HeaderContainer = styled.header`
  display: block;
  position: sticky;
  top: 0;
  width: 100%;
  backdrop-filter: blur(7px);
  background-color: var(--header-bg);
  z-index: 100;

  ${mq({
    height: ['56px', '56px', '50px'],
  })}

  .container {
    max-width: 720px;
    margin: 0 auto;
    padding: 0 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: content-box;

    ${mq({
      padding: ['0 22px', '0 22px', '0 12px'],
      height: ['56px', '56px', '50px'],
    })}
  }

  h1 {
    color: var(--text-base);
    font-weight: 600;

    svg {
      display: block;
      width: 24px;
      height: 24px;
      path {
        fill: var(--text-base-70);
        transition: all 0.2s ease;
      }
    }

    &:hover {
      svg path {
        fill: var(--text-base);
      }
    }
  }
`;
