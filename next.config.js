/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');
const nextConfig = withContentlayer({
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
});

module.exports = nextConfig;
