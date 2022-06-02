import styled from '@emotion/styled';
import mq from '../styles/utils/mq';

export const HeaderContainer = styled.header`
  display: block;
  position: sticky;
  top: 0;
  width: 100%;
  backdrop-filter: blur(7px);
  background-color: var(--header-bg);
  border-bottom: 1px solid var(--border-color);
  z-index: 100;

  ${mq({
    height: ['56px', '56px', '50px'],
  })}

  .container {
    max-width: 768px;
    margin: 0 auto;
    padding: 0 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: content-box;
    ${mq({
      padding: ['0 22px', '0 22px', '0 12px'],
    })}
  }

  h1 a {
    color: var(--text-base);
    font-weight: 600;

    ${mq({
      fontSize: ['20px', '20px', '16px'],
      lineHeight: ['56px', '56px', '50px'],
    })}
  }
`;
