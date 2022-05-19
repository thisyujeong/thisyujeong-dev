import styled from '@emotion/styled';

export const SideNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: lowercase;
  ul {
    position: sticky;
    top: 96px;
    padding-right: 24px;
    margin-left: -12px;
  }

  li {
    margin-bottom: 8px;
  }

  a {
    display: block;
    padding: 6px 12px;
    color: #7a7c85;
    font-size: 18px;
    font-weight: 500;
    border-radius: 8px;
    border: 1px solid transparent;
    transition: all 0.2s ease;

    &.selected {
      color: #fb673e;
      border-color: #ffd6ca;
      background: #fffafa;
    }
    &:hover {
      color: #fb673e;
      background: #fffafa;
    }
  }
`;
