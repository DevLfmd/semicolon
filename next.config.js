/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/semicolon' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/semicolon/' : '',
  trailingSlash: true,
  optimizeCss: false,
  minify: false,
  webpack: (config) => {
    config.optimization.minimize = false;
    return config;
  },
}

module.exports = nextConfig 