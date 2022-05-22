import styled from '@emotion/styled';

export const CrumbContainer = styled.div`
  margin: 12px 0;
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
    color: #fb673e;

    &:before {
      content: '>';
      font-size: 15px;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(-50%, -50%);
      color: #2c3e50;
    }
  }
`;
