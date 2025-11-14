import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const useCustomDomain = process.env.USE_CUSTOM_DOMAIN === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd && !useCustomDomain ? '/asl-web' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
