import React from 'react';
import type { Metadata } from 'next';
import _metadata from 'data/metadata';
import { Open_Sans, Roboto_Mono } from 'next/font/google';
import Header from 'components/Header';
import Footer from 'components/Footer';
import '@/styles/globals.scss';

const { meta } = _metadata;

export const metadata: Metadata = {
  title: {
    template: `%s | ${meta.author}`,
    default: meta.title,
  },
  description: meta.description,
  authors: [{ name: meta.author, url: meta.url }],
  keywords: meta.keywords,
  robots: meta.url,
  icons: { icon: meta.icon },
  openGraph: {
    ...meta.openGraph,
    siteName: meta.title,
  },
};

const sans = Open_Sans({ subsets: ['latin'] });
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const setThemeMode = `
    function getThemeMode() {
        const theme = window.localStorage.getItem('theme')
        return theme ? theme : 'dark'
    }
    document.body.dataset.theme = getThemeMode()
  `;

  return (
    <html lang="ko" className={`${sans.className} ${roboto_mono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <script dangerouslySetInnerHTML={{ __html: setThemeMode }} />
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
