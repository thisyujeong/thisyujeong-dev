import styled from '@emotion/styled';

export const SideNavContainer = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  text-transform: lowercase;
  ul {
    padding-right: 16px;
    margin-left: -16px;
  }
  a {
    display: block;
    padding: 7px 16px;
    color: #7a7c85;
    font-size: 18px;
    font-weight: 500;
    border-radius: 8px;

    &:hover {
      color: #fb673e;
      background: #f5f5f7;
    }
  }
`;
