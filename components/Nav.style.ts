import styled from '@emotion/styled';
import mq from 'styles/utils/mq';
import { css } from '@emotion/react';

export const NavContainer = styled.nav`
  margin-left: 24px;
  line-height: 1;

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
        color: var(--accent);
      }
    }

    ${mq({
      display: ['flxex', 'flex', 'none'],
    })}
  }

  svg {
    opacity: 0.8;
    margin-right: -4px;

    &.active {
      opacity: 1;
    }
    ${mq({
      display: ['none', 'none', 'block'],
    })}
  }
`;

const dynamicVisible = ({ visible }: { visible: boolean }) => {
  if (visible) {
    return css`
      display: flex;
    `;
  } else {
    return css`
      display: none;
    `;
  }
};

export const DropNavContainer = styled.nav`
  position: fixed;
  top: 50px;
  right: 0;
  background: #fff;
  width: 100%;
  height: calc(100vh - 50px);
  text-align: left;

  ul {
    width: 100%;
    display: block;
    padding: 22px;

    li {
      font-size: 24px;
      margin-bottom: 16px;

      a {
        display: block;
      }
    }
  }
  ${dynamicVisible}
`;
