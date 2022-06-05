import metadata from 'data/metadata';

declare global {
  interface Window {
    gtag: (param1: string, param2: string, param3: object) => void;
  }
}

export const pageview = (url: string) => {
  window.gtag('config', metadata.analytics.google, {
    page_path: url,
  });
};
