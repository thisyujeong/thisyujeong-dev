import React from 'react';
import { ContainerContainer, Main } from './Container.style';
import Head from 'next/head';
import Footer from './Footer';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../components/Header'), {
  ssr: false,
});

const Container = ({
  isAside,
  children,
}: {
  isAside?: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <ContainerContainer>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Header />
      <Main>
        <div className={isAside ? 'contents is-aside' : 'contents'}>{children}</div>
      </Main>
      <Footer />
    </ContainerContainer>
  );
};

export default Container;
