import styled from '@emotion/styled';
import mq from 'styles/utils/mq';

export const NoteAsideItemContainer = styled.div`
  padding: 4px 0;
`;
export const AsideItemTitle = styled.span`
  position: relative;
  display: block;
  color: var(--accent);
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5em;
  padding: 4px 0 4px 8px;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    background: var(--hover-base);
  }

  @media screen and (max-width: 576px) {
    &:hover {
      background: transparent;
    }
  }
`;
export const AsideItemList = styled.div`
  display: block;
  margin-left: 10px;
  border-left: 1px solid var(--border-color);
`;
export const AsideItemAnchor = styled.a`
  display: block;
  padding: 4px 0 4px 10px;
  color: var(--text-base);
  font-size: 15px;
  line-height: 1.5;
  transition: all 0.2s ease;
  border-left: 2px solid transparent;

  &:hover {
    opacity: 1;
    background: var(--hover-base);
  }

  &[data-selected='true'] {
    opacity: 1;
    font-weight: 600;
    border-left: 2px solid var(--accent);
  }

  @media screen and (max-width: 576px) {
    &:hover {
      background: transparent;
    }
  }
`;

export const AsideToggleIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 10px;
  width: 16px;
  height: 16px;
  transform: translateY(-50%);
  text-align: center;
  font-size: 0;

  svg path {
    line-height: 1;
    font-size: 0;
    fill: var(--text-base-40);
  }

  &[data-open='true'] {
    transform: translateY(-50%) rotate(180deg);

    svg path {
      fill: var(--text-base-70);
    }
  }
`;
