import React from 'react';
import { ContainerContainer, Main } from './Container.style';
import Head from 'next/head';
import SideNav from './Nav';
import Header from './Header';
import { Children } from 'lib/types';

const Container = ({ children }: { children?: React.ReactNode }) => {
  return (
    <ContainerContainer>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Header />
      <div className="contents">
        <Main>{children}</Main>
      </div>
    </ContainerContainer>
  );
};

export default Container;
