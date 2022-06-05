import styled from '@emotion/styled';
import mq from 'styles/utils/mq';

export const ThemeToggleContainer = styled.div`
  line-height: 0;
  margin-left: 12px;
  ${mq({
    marginLeft: ['20px', '20px', '12px'],
  })}
`;

export const ToggleButton = styled.button`
  position: relative;
  background: var(--hover-base);
  background: var(--toggle-bg);
  padding: 8px;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: 2px solid transparent;
  transition: all 0.2s ease;
  line-height: 1;

  svg {
    width: 16px;
    height: 16px;
    transition: all 0.2s ease;
    fill: var(--text-base-70);
  }

  &:hover {
    border-color: var(--toggle-border);
    svg {
      fill: #ff9a00;
    }
  }
`;
