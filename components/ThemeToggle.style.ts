import styled from '@emotion/styled';

export const ThemeToggleContainer = styled.div`
  line-height: 0;
  margin-left: 20px;
`;

export const ToggleButton = styled.button`
  position: relative;
  background: var(--hover-base);
  padding: 8px;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  outline: 2px solid transparent;
  transition: all 0.2s ease;

  svg {
    width: 16px;
    height: 16px;
    transition: all 0.2s ease;
    fill: var(--text-base-70);
  }

  &:hover {
    outline-color: var(--toggle-border);
    svg {
      fill: #ff9a00;
    }
  }
`;
