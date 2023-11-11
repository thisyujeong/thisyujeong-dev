/** @type {import('next').NextConfig} */
const path = require('path');
const { withContentlayer } = require('next-contentlayer');

const nextConfig = withContentlayer({
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "@/styles/variables.scss";`,
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
});

module.exports = nextConfig;
