import React from 'react';
import { ContainerContainer, Main } from './Container.style';
import Head from 'next/head';
import SideNav from './SideNav';
import TopBar from './TopBar';

type Props = {
  children: JSX.Element;
};

const Container = ({ children }: Props) => {
  return (
    <ContainerContainer>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <TopBar />
      <div className="contents">
        <SideNav />
        <Main>{children}</Main>
      </div>
    </ContainerContainer>
  );
};

export default Container;
