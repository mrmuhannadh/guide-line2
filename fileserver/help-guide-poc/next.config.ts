import type { NextConfig } from 'next';
import nextra from 'nextra';
import { version } from './package.json';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // mandatory, otherwise won't export
  },
  env: {
    APP_VERSION: version,
  },
  basePath: '/fileserver/help-guide-poc',
  assetPrefix: '/fileserver/help-guide-poc',
};

const withNextra = nextra({
  // ... Other Nextra config options
});

export default withNextra(nextConfig);
