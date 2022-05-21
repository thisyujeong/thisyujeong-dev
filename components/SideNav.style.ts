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
    margin-bottom: 4px;
  }

  a {
    display: block;
    padding: 4px 12px;
    color: #7a7c85;
    font-size: 18px;
    font-weight: 500;
    border: 1px solid transparent;

    &[data-selected='true'] {
      color: #fb673e;
      background: #fff1f1;
    }

    &:hover:not([data-selected='true']) {
      background: #ececf3;
    }
  }
`;
