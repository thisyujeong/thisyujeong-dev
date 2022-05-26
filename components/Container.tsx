import React from 'react';
import { ContainerContainer, Main } from './Container.style';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

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
      <Footer />
    </ContainerContainer>
  );
};

export default Container;
