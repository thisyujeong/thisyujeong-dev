import metadata from './data/metadata';

const SEO = {
  titleTemplate: '%s | thisyujeong.dev',
  defaultTitle: metadata.meta.title,
  description: metadata.meta.description,
  canonical: metadata.meta.url,
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: metadata.meta.url,
    site_name: metadata.meta.title,
    images: [
      {
        url: `${metadata.meta.url}/static/og-graph.png`,
        width: 850,
        height: 650,
        alt: `thisyujeong.dev`,
      },
    ],
  },
};

export default SEO;
