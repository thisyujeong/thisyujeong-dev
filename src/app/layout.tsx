import React from 'react';
import '@/styles/globals.scss';
import Header from 'components/Header';
import Footer from 'components/Footer';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  /* TODO: dark, light theme toggle */
  // const setThemeMode = `
  //   function getThemeMode() {
  //       const theme = window.localStorage.getItem('theme')
  //       return theme ? theme : 'dark'
  //   }
  //   document.body.dataset.theme = getThemeMode()
  // `;
  return (
    <html lang="ko">
      <head>{/* <script dangerouslySetInnerHTML={{ __html: setThemeMode }} /> */}</head>
      <body>
        <Header />
        <main>{children}</main>
        {/* <script dangerouslySetInnerHTML={{ __html: setThemeMode }} /> */}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
