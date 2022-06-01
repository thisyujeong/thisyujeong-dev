import styled from '@emotion/styled';
import mq from '../styles/utils/mq';

export const HeaderContainer = styled.header`
  display: block;
  position: sticky;
  top: 0;
  width: 100%;
  backdrop-filter: blur(7px);
  background-color: rgba(255, 255, 255, 0.72);
  border-bottom: 1px solid #00000016;
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
  }

  h1 a {
    color: #2c3e50;
    font-weight: 600;

    ${mq({
      fontSize: ['20px', '20px', '16px'],
      lineHeight: ['56px', '56px', '50px'],
    })}
  }
`;
