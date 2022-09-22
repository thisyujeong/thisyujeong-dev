import styled from '@emotion/styled';
import mq from 'styles/utils/mq';

export const CPHeader = styled.div`
  position: relative;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
`;

export const CPTitle = styled.h2`
  font-size: 1.5em;
  line-height: 2;
  text-transform: capitalize;

  sup {
    font-size: 0.6em;
    color: var(--text-base);
    opacity: 0.6;
  }
`;

export const CPFolder = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  width: 36px;
  height: 36px;
  border-radius: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%) rotate(180deg);
  cursor: pointer;

  &:hover {
    background: var(--hover-base);
  }

  svg path {
    fill: var(--text-base);
  }

  &.close {
    transform: translateY(-50%) rotate(0deg);
  }
`;

export const CPList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  &.hide {
    display: none;
  }

  li {
    position: relative;
    width: 50%;
    display: block;

    ${mq({
      width: ['50%', '50%', '100%'],
    })}

    &:hover {
      background: var(--hover-base);
    }

    a {
      display: block;
      padding: 10px 16px;
      color: #f5f5f7;
      font-weight: 500;

      span {
        display: inline-block;
      }

      .number {
        width: 50px;
        margin-right: 20px;
      }
    }

    &:hover {
      a {
        text-decoration: underline;
      }
    }
  }

  &.baekjoon {
    .silver {
      .number {
        color: #365677;
      }
    }
    .bronze {
      .number {
        color: #d57926;
      }
    }
    .gold {
      .number {
        color: #eeb73b;
      }
    }
    .platinum {
      .number {
        color: #4dbb8d;
      }
    }
    .diamond {
      .number {
        color: #5cb1e2;
      }
    }
    .ruby {
      .number {
        color: #ff457c;
      }
    }
  }

  &.programmers {
    .level1 {
      .number {
        color: #66c369;
      }
    }
    .level2 {
      .number {
        color: #ffd044;
      }
    }
    .level3 {
      .number {
        color: #ffa92b;
      }
    }
    .level4 {
      .number {
        color: #ff7145;
      }
    }
    .level5 {
      .number {
        color: #f44336;
      }
    }
  }

  &.leetcode {
    .easy {
      .number {
        color: #00af9b;
      }
    }
    .medium {
      .number {
        color: #ffb800;
      }
    }
    .hard {
      .number {
        color: #ff2d55;
      }
    }
  }
`;
