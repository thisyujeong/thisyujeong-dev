import styled from '@emotion/styled';
import mq from 'styles/utils/mq';

export const NoteAsideItemContainer = styled.div`
  padding: 4px 0;
`;
export const AsideItemTitle = styled.span`
  position: relative;
  display: block;
  color: var(--accent);
  padding-left: 8px;
  font-size: 15px;
  font-weight: 500;
  line-height: 2em;
  padding-left: 8px;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    background: var(--hover-base);
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    right: 16px;
    width: 6px;
    height: 6px;
    border-right: 2px solid var(--text-base);
    border-bottom: 2px solid var(--text-base);
    transform: translateY(-75%) rotate(45deg);
    opacity: 0.3;
  }

  &[data-open='true'] {
    &:before {
      display: none;
    }
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      right: 14px;
      width: 12px;
      height: 2px;
      background: var(--text-base);
      transform: translateY(-50%);
    }
  }

  @media screen and (max-width: 576px) {
    &:hover {
      background: transparent;
    }
  }
`;
export const AsideItemList = styled.div`
  display: block;
`;
export const AsideItemAnchor = styled.a`
  display: block;
  padding: 4px 10px 4px 10px;
  margin: 4px 0 4px 10px;
  color: var(--text-base);
  font-size: 15px;
  line-height: 1.5;
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
    background: var(--hover-base);
  }

  &[data-selected='true'] {
    opacity: 1;
    font-weight: 600;
  }

  @media screen and (max-width: 576px) {
    &:hover {
      background: transparent;
    }
  }
`;
