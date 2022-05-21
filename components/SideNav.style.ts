import styled from '@emotion/styled';

export const SideNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: lowercase;
  ul {
    position: sticky;
    top: 96px;
    padding-right: 48px;
    margin-left: -12px;
  }

  li {
    margin-bottom: 4px;
  }

  a {
    height: 38px;
    display: block;
    position: relative;
    padding: 4px 12px;
    color: #7a7c85;
    font-size: 18px;
    font-weight: 500;
    border: 1px solid transparent;

    &:after {
      content: '';
      position: absolute;
      right: -21px;
      top: 50%;
      transform: translateY(-50%);
      width: 0px;
      height: 0px;
      border-left: 20px solid #ececf3;
      border-top: 19px solid transparent;
      border-bottom: 19px solid transparent;
      opacity: 0;
    }

    &[data-selected='true'] {
      color: #fb673e;
      background: #fff1f1;
      &:after {
        opacity: 1;
        border-left-color: #fff1f1;
      }
    }

    &:hover:not([data-selected='true']) {
      background: #ececf3;
      &:after {
        opacity: 1;
      }
    }
  }
`;
