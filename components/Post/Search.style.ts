import styled from '@emotion/styled';

export const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 24px;
  input {
    width: 100%;
    background-color: var(--hover-base);
    border: 0;
    border-radius: 6px;
    font-size: 16px;
    padding: 10px 16px;
    padding-right: 40px;
    border: 2px solid transparent;
    transition: all 0.5 ease;

    &::placeholder {
      opacity: 0.5;
    }

    &:focus {
      border-color: var(--toggle-border);
    }
  }
  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 16px;
    path {
      fill: var(--text-base);
      opacity: 0.6;
    }
  }
`;
