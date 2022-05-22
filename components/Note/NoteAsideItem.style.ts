import styled from '@emotion/styled';

export const NoteAsideItemContainer = styled.div`
  padding: 4px 0;
`;
export const AsideItemTitle = styled.span`
  position: relative;
  display: block;
  color: #2c3e50;
  color: #fb673e;
  padding-left: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 2em;
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    background: #f5f5f7;
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    right: 16px;
    width: 6px;
    height: 6px;
    border-right: 2px solid #2c3e50;
    border-bottom: 2px solid #2c3e50;
    transform: translateY(-75%) rotate(45deg);
  }

  &[data-open='true'] {
    &:before {
      display: none;
    }
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      right: 16px;
      width: 8px;
      height: 2px;
      background: #2c3e50;
      transform: translateY(-50%);
    }
  }
`;
export const AsideItemList = styled.div`
  display: block;
`;
export const AsideItemAnchor = styled.a`
  display: block;
  padding-left: 10px;
  opacity: 0.6;
  color: #2c3e50;
  line-height: 2em;
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
    background: #f5f5f7;
  }

  &[data-selected='true'] {
    opacity: 1;
    background: #fff9f7;
    color: #fb673e;

    &:hover {
      opacity: 0.8;
    }
  }
`;
