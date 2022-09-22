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
    max-width: 720px;
    margin: 0 auto;

    &.is-aside {
      max-width: calc(720px + 240px);
      ${mq({
        maxWidth: ['720px', '720px', '100%'],
      })}
    }
  }
`;
