import styled from '@emotion/styled';

export const TocContainer = styled.div`
  position: absolute;
  top: 0;
  right: -200px;
  width: 180px;
  padding: 10px 0;
  padding-left: 20px;
  border-left: 1px solid #2c3e5040;
`;

export const TocItem = styled.span`
  display: block;
  line-height: 2;
  color: #2c3e50;
  font-size: 14px;
  opacity: 0.6;

  &[data-depth='2'] {
    padding-left: 20px;
  }

  &[data-active='true'] {
    color: #fb673e;
    opacity: 1;
  }
`;
