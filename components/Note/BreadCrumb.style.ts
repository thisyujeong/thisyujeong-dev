import styled from '@emotion/styled';

export const BreadCrumbContainer = styled.div`
  span {
    display: inline-block;
    &:first-child {
      opacity: 0.8;
    }
    &:last-child {
      opacity: 1;
    }
  }

  span + span {
    position: relative;
    margin-left: 14px;
    padding-left: 14px;
    color: var(--accent);

    &:before {
      content: '>';
      font-size: 15px;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(-50%, -50%);
      color: var(--text-base);
    }
  }
`;
