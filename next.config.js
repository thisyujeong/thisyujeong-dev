/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');
const nextConfig = withContentlayer({
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
});

module.exports = nextConfig;
