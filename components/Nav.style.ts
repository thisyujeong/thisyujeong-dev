import styled from '@emotion/styled';

export const NavContainer = styled.div`
  margin-left: 24px;

  ul {
    display: flex;
    position: relative;

    li {
      margin-left: 24px;

      a {
        font-size: 16px;
        font-weight: 500;
        color: #2c3e50;
        opacity: 0.5;
        transition: all 0.2s ease;
      }

      &:hover a {
        opacity: 0.8;
        color: #2c3e50;
        text-decoration: underline;
      }

      &:active a {
        opacity: 1;
      }

      &[data-selected='true'] a {
        opacity: 0.8;
        color: #fb673e;
      }
    }
  }
`;
