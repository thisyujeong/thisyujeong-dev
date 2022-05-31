import styled from '@emotion/styled';
import mq from 'styles/utils/mq';

export const ContainerContainer = styled.div`
  height: auto;
`;

export const Main = styled.main`
  padding: 20px 22px 50px;
  min-height: calc(100vh - 56px - 112px);

  .contents {
    display: block;
    width: 100%;
    max-width: 768px;
    margin: 0 auto;

    &.is-aside {
      max-width: calc(768px + 240px);
      ${mq({
        maxWidth: ['768px', 'calc(768px + 240px)', '100%'],
      })}
    }
  }
`;
