import styled from '@emotion/styled';
import mq from 'styles/utils/mq';
import { css } from '@emotion/react';

export const NavContainer = styled.nav`
  margin-left: auto;
  line-height: 1;

  ul {
    display: flex;
    position: relative;

    li {
      margin-left: 24px;

      a {
        font-size: 16px;
        font-weight: 500;
        color: var(--text-base);
        opacity: 0.5;
        transition: all 0.2s ease;
      }

      &:hover a {
        opacity: 0.8;
        color: var(--text-base);
        text-decoration: underline;
      }

      &:active a {
        opacity: 1;
      }

      &[data-selected='true'] a {
        opacity: 1;
        color: var(--accent);
      }
    }

    ${mq({
      display: ['flxex', 'flex', 'none'],
    })}
  }

  svg {
    opacity: 0.6;
    margin-left: 20px;
    margin-right: -4px;
    fill: var(--text-base);
    cursor: pointer;
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
  position: absolute;
  top: 50px;
  right: 0;
  background: var(--bg);
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
        color: var(--text-base);
      }
    }
  }
  ${dynamicVisible}
`;
