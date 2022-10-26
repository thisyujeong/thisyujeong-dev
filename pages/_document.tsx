import metadata from 'data/metadata';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    const setThemeMode = `
        function getThemeMode() {
            const theme = window.localStorage.getItem('theme')
            return theme ? theme : 'dark'
        }
        document.body.dataset.theme = getThemeMode()
      `;
    return (
      <Html lang="ko">
        <Head>
          <meta
            name="google-site-verification"
            content="b1al3vr71zGA3Mqvp3i-crTS1tURx2MSXFlvSkvcHUU"
          />
          <meta
            name="naver-site-verification"
            content="bf7fcedc3a4836b65fc4f1a6857e775f70232c4d"
          />
          <link href="/favicon.ico" rel="shortcut icon" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${metadata.analytics.google}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${metadata.analytics.google}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: setThemeMode }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
