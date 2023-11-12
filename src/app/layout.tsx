import React from 'react';
import '@/styles/globals.scss';
import { Open_Sans, Roboto_Mono } from 'next/font/google';
import Header from 'components/Header';
import Footer from 'components/Footer';

const sans = Open_Sans({ subsets: ['latin'] });
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

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
    <html lang="ko" className={`${sans.className} ${roboto_mono.variable}`}>
      <head>{/* <script dangerouslySetInnerHTML={{ __html: setThemeMode }} /> */}</head>
      <body>
        <Header />
        <main>{children}</main>
        {/* <script dangerouslySetInnerHTML={{ __html: setThemeMode }} /> */}
        {/* <Footer /> */}
      </body>
    </html>
  );
};

export default RootLayout;
