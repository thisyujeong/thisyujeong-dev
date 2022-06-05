import styled from '@emotion/styled';

export const CPHeader = styled.h2`
  text-align: center;
  font-size: 1.5em;
  line-height: 2;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  text-transform: capitalize;
  sup {
    font-size: 0.6em;
    color: var(--text-base);
    opacity: 0.6;
  }
`;

export const CPList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -6px;

  li {
    background: var(--hover-base);
    text-align: center;
    margin: 0.5px;

    a {
      display: inline-block;
      padding: 6px 16px;
      width: 6rem;
      color: #f5f5f7;
      font-weight: 500;
    }

    &:hover {
      a {
        text-decoration: underline;
      }
    }
  }

  &.baekjoon {
    .silver {
      background: #365677;
      &:hover {
        background: #4a6582;
      }
    }
    .bronze {
      background: #d57926;
      &:hover {
        background: #e48937;
      }
    }
    .gold {
      background: #eeb73b;
      &:hover {
        background: #f3c14f;
      }
    }
    .platinum {
      background: #4dbb8d;
      &:hover {
        background: #5fc49a;
      }
    }
    .diamond {
      background: #5cb1e2;
      &:hover {
        background: #70bdea;
      }
    }
    .ruby {
      background: #ff457c;
      &:hover {
        background: #fd5e8d;
      }
    }
  }

  &.programmers {
    .level1 {
      background: #66c369;
      &:hover {
        background: #7ed181;
      }
    }
    .level2 {
      background: #ffd044;
      &:hover {
        background: #ffda6c;
      }
    }
    .level3 {
      background: #ffa92b;
      &:hover {
        background: #ffba54;
      }
    }
    .level4 {
      background: #ff7145;
      &:hover {
        background: #ff825b;
      }
    }
    .level5 {
      background: #f44336;
      &:hover {
        background: #ff5a4e;
      }
    }
  }
`;
